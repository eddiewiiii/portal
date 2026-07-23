// api/cover.js — Vercel 无服务器函数
// GET /api/cover?type=music|movie|book&artist=...&title=...&isbn=...
// 返回 JSON: { url: string|null }
const ITUNES_COUNTRIES = ["US", "CN", "HK", "TW", "JP"];

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
        if (artwork) return artwork.replace("100x100", "300x300");
      } catch (_) {}
    }
  }
  return null;
}

async function openLibrary({ isbn, title, artist }) {
  if (isbn) return `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
  try {
    const url =
      `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}` +
      `&author=${encodeURIComponent(artist)}&limit=1`;
    const r = await fetch(url);
    const d = await r.json();
    const id = d?.docs?.[0]?.cover_i;
    if (id) return `https://covers.openlibrary.org/b/id/${id}-L.jpg`;
  } catch (_) {}
  return null;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { type, artist = "", title = "", isbn = "" } = req.query;
  let url = null;
  try {
    if (type === "book") {
      url = await openLibrary({ isbn, title, artist });
    } else if (type === "movie") {
      // 先试剧集(tvSeason),再试电影(movie)
      url = await itunes(`${artist} ${title}`, ["tvSeason", "movie"], {
        tvSeason: "tvShow",
        movie: "movie",
      });
    } else {
      // 音乐:先 song 再 album
      url = await itunes(`${artist} ${title}`, ["song", "album"], {
        song: "music",
        album: "music",
      });
    }
  } catch (_) {}
  res.status(200).json({ url });
}
