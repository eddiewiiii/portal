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
  const { type, artist = "", title = "", isbn = "" } = req.query;
  let upstream = null;
  try {
    if (type === "book") {
      upstream = await openLibrary({ isbn, title, artist });
    } else if (type === "movie") {
      upstream = await itunes(`${artist} ${title}`, ["tvSeason", "movie"], {
        tvSeason: "tvShow",
        movie: "movie",
      });
    } else {
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
