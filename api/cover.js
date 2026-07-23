// api/cover.js — Vercel 无服务器函数（图片代理）
// 浏览器只连本域名，由函数在服务端抓取 iTunes / Open Library 封面再转发，
// 彻底绕开中国大陆对 mzstatic.com / openlibrary.org 的屏蔽。
// GET /api/cover?type=music|movie|book&artist=...&title=...&isbn=...
const ITUNES_COUNTRIES = ["US", "CN", "HK", "TW", "JP"];
const COVER_SIZE = "600x600"; // iTunes 高清尺寸（原 100x100 放大到首页会糊）

async function itunes(term, entities, mediaMap) {
  for (const entity of entities) {
    for (const country of ITUNES_COUNTRIES) {
      const media = mediaMap[entity] || entity;
      const url =
        `https://itunes.apple.com/search?term=${encodeURIComponent(term)}` +
        `&limit=1&entity=${entity}&media=${media}&country=${country}`;
      try {
        const r = await fetch(url);
        const d = await r.json();
        const artwork = d?.results?.[0]?.artworkUrl100;
        if (artwork) return artwork.replace("100x100", COVER_SIZE);
      } catch (_) {}
    }
  }
  return null;
}

async function openLibrary({ isbn, title, artist }) {
  if (isbn) return `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
  try {
    // 去标点、合并空格，提高 Open Library 命中率
    const cleanTitle = title.replace(/[?.,!:'"()]/g, " ").replace(/\s+/g, " ").trim();
    const url =
      `https://openlibrary.org/search.json?title=${encodeURIComponent(cleanTitle)}` +
      `&author=${encodeURIComponent(artist)}&limit=1`;
    const r = await fetch(url);
    const d = await r.json();
    const id = d?.docs?.[0]?.cover_i;
    if (id) return `https://covers.openlibrary.org/b/id/${id}-L.jpg`;
  } catch (_) {}
  return null;
}

export default async function handler(req, res) {
  const { type, artist = "", title = "", isbn = "" } = req.query;
  let upstream = null;
  try {
    if (type === "book") {
      upstream = await openLibrary({ isbn, title, artist });
    } else if (type === "movie") {
      // 影视只用片名搜，不要拼导演名（导演名会严重干扰 iTunes 匹配 → 404）
      upstream = await itunes(title, ["tvSeason", "movie"], {
        tvSeason: "tvShow",
        movie: "movie",
      });
    } else {
      // 音乐用 歌手+歌名（标准搜法）
      upstream = await itunes(`${artist} ${title}`, ["song", "album"], {
        song: "music",
        album: "music",
      });
    }
  } catch (_) {}

  if (!upstream) return res.status(404).end();

  try {
    const r = await fetch(upstream);
    if (!r.ok) return res.status(502).end();
    const buf = await r.arrayBuffer();
    res.setHeader("Content-Type", r.headers.get("content-type") || "image/jpeg");
    res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=86400, stale-while-revalidate");
    return res.status(200).send(Buffer.from(buf));
  } catch (_) {
    return res.status(502).end();
  }
}
