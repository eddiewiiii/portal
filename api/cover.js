```js
export default async function handler(req, res) {
  const { type, artist, title } = req.query;

  try {
    let url = null;

    if (type === "music") {
      const q = `${artist || ""} ${title || ""}`.trim();
      const r = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(q)}&entity=song&limit=1`
      );
      const d = await r.json();
      url = d.results?.[0]?.artworkUrl100?.replace("100x100", "600x600");
    }

    if (!url) {
      res.statusCode = 404;
      res.end();
      return;
    }

    res.setHeader("Cache-Control", "public, max-age=86400");
    res.statusCode = 302;
    res.setHeader("Location", url);
    res.end();
  } catch (e) {
    res.statusCode = 500;
    res.end();
  }
}
```
