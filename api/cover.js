```js
export default async function handler(req, res) {
  const url = Array.isArray(req.query.url) ? req.query.url[0] : req.query.url;
  const { type, artist, title } = req.query;

  const sendImage = async (target) => {
    const upstream = await fetch(target);
    if (!upstream.ok) {
      res.statusCode = upstream.status || 502;
      res.end();
      return;
    }
    const buf = Buffer.from(await upstream.arrayBuffer());
    res.setHeader("Content-Type", upstream.headers.get("content-type") || "image/jpeg");
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.end(buf);
  };

  try {
    // 模式 1：代理外部封面（now 板块用，绕开大陆对 mzstatic/amazon/impawards 的墙）
    if (url) {
      if (!/^https?:\/\//i.test(url)) {
        res.statusCode = 400;
        res.end();
        return;
      }
      await sendImage(url);
      return;
    }

    // 模式 2：按 artist + title 搜 iTunes 拿封面（歌单页用）
    if (type === "music") {
      const q = `${artist || ""} ${title || ""}`.trim();
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
```
