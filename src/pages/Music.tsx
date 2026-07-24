import { useState } from "react";
import { useTranslation } from "react-i18next";
import { fmSongs } from "@/content/fm";

function SongCard({ song, index }: { song: (typeof fmSongs)[number]; index: number }) {
  const coverUrl = `/api/cover?type=music&artist=${encodeURIComponent(
    song.artist
  )}&title=${encodeURIComponent(song.title)}`;
  const [src, setSrc] = useState<string | null>(coverUrl);

  return (
    <article className="group relative bg-surface-alt border border-border rounded-card p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/40 hover:shadow-sm">
      {/* 大号幽灵序号 —— 呼应首页 now/watching */}
      <span className="absolute right-4 top-3 font-display font-black text-ink/10 text-4xl leading-none select-none group-hover:text-ink/15 transition-colors">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex gap-4 sm:gap-5">
        {/* 封面 */}
        <div className="w-24 h-24 rounded-card overflow-hidden bg-ink/5 flex-shrink-0 flex items-center justify-center">
          {src ? (
            <img
              src={src}
              alt={song.title}
              loading="lazy"
              onError={() => setSrc(null)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <span className="font-display text-xl text-ink-faint">
              {song.title.charAt(0)}
            </span>
          )}
        </div>

        <div className="min-w-0 pr-8">
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
            <SongCard key={i} song={song} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}