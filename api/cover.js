// 服务端内存缓存：同一 serverless 实例内复用结果，避免重复请求 iTunes / 外链
// key -> { buf, contentType }
const cache = new Map();
const CACHE_TTL = 1000 * 60 * 60 * 24; // 24h

export default async function handler(req, res) {
  const url = Array.isArray(req.query.url) ? req.query.url[0] : req.query.url;
  const { type, artist, title, album } = req.query;

  // 缓存 key：外链用 url；iTunes 搜索用 type+artist+album+title
  const cacheKey = url
    ? `url:${url}`
    : `music:${artist}|${album}|${title}`;

  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.ts < CACHE_TTL) {
    res.setHeader("Content-Type", cached.contentType);
    res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=604800");
    res.end(cached.buf);
    return;
  }

  const sendImage = async (target) => {
    const upstream = await fetch(target);
    if (!upstream.ok) {
      res.statusCode = upstream.status || 502;
      res.end();
      return;
    }
    const buf = Buffer.from(await upstream.arrayBuffer());
    const contentType = upstream.headers.get("content-type") || "image/jpeg";
    // 写入缓存
    cache.set(cacheKey, { buf, contentType, ts: Date.now() });
    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=604800");
    res.end(buf);
  };

  try {
    // 模式 1：代理外部封面（now 板块用）
    if (url) {
      if (!/^https?:\/\//i.test(url)) {
        res.statusCode = 400;
        res.end();
        return;
      }
      await sendImage(url);
      return;
    }

    // 模式 2：按 artist + album + title 搜 iTunes 拿封面（歌单页用）
    if (type === "music") {
      const q = `${artist || ""} ${album || ""} ${title || ""}`.trim();
      if (!q) {
        res.statusCode = 400;
        res.end();
        return;
      }
      const r = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(q)}&entity=song&limit=1`
      );
      const d = await r.json();
      const artUrl = d.results?.[0]?.artworkUrl100?.replace("100x100", "600x600");
      if (!artUrl) {
        res.statusCode = 404;
        res.end();
        return;
      }
      await sendImage(artUrl);
      return;
    }

    res.statusCode = 404;
    res.end();
  } catch (e) {
    res.statusCode = 500;
    res.end();
  }
}