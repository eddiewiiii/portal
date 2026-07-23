import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { fmSongs } from "@/content/fm";

const ITUNES_COUNTRIES = ["US", "CN", "HK", "TW", "JP"];

function fetchItunes(term: string, entity: "song", country: string): Promise<string | null> {
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&limit=1&entity=${entity}&country=${country}`;
  return fetch(url)
    .then((r) => r.json())
    .then((d) => {
      const artwork = d?.results?.[0]?.artworkUrl100 as string | undefined;
      return artwork ? artwork.replace("100x100", "300x300") : null;
    });
}

/** 运行时拉 iTunes 封面，多地区回退覆盖华语/日韩 */
function useCover(artist: string, title: string): string | null {
  const [cover, setCover] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const term = `${artist} ${title}`;
    (async () => {
      for (const country of ITUNES_COUNTRIES) {
        const url = await fetchItunes(term, "song", country);
        if (url) {
          if (!cancelled) setCover(url);
          return;
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [artist, title]);

  return cover;
}

function SongCard({ song }: { song: (typeof fmSongs)[number] }) {
  const cover = useCover(song.artist, song.title);

  return (
    <article className="relative bg-surface rounded-card border border-border p-6 sm:p-7 transition-colors hover:border-ink/40">
      <div className="flex gap-5">
        <div className="w-20 h-20 rounded-card overflow-hidden bg-ink/5 flex-shrink-0 flex items-center justify-center">
          {cover ? (
            <img
              src={cover}
              alt={song.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="font-display text-xl text-ink-faint">
              {song.title.charAt(0)}
            </span>
          )}
        </div>
        <div className="min-w-0">
          <h2 className="font-display text-xl font-bold text-ink leading-snug break-words">
            {song.title}
          </h2>
          <div className="text-sm text-ink-faint mt-1">
            {song.artist}
            {song.album && <span className="text-ink-faint/70"> · {song.album}</span>}
          </div>
        </div>
      </div>
      <p className="text-[15px] text-ink-muted leading-relaxed border-t border-border pt-4 mt-4">
        {song.review}
      </p>
    </article>
  );
}

export default function Music() {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-ink text-bg py-16 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="text-section-title font-display text-bg mb-4 lowercase">
            {t("music.page_title")}
          </h1>
          <p className="font-display text-2xl sm:text-4xl text-bg/60 italic">
            {t("music.page_sub")}
          </p>
          <p className="mt-4 text-bg/50 text-sm">
            {t("music.page_desc", { count: fmSongs.length })}
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {fmSongs.map((song, i) => (
            <SongCard key={i} song={song} />
          ))}
        </div>
      </section>
    </>
  );
}
