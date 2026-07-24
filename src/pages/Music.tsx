import { useState } from "react";
import { useTranslation } from "react-i18next";
import { fmSongs } from "@/content/fm";

function SongCard({ song, index }: { song: (typeof fmSongs)[number]; index: number }) {
  const { i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "zh";

  const coverUrl = `/api/cover?type=music&artist=${encodeURIComponent(
    song.artist
  )}&title=${encodeURIComponent(song.title)}`;
  const [src, setSrc] = useState<string | null>(coverUrl);

  return (
    <article className="group relative bg-surface-alt border border-border rounded-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-ink/40 hover:shadow-sm">
      {/* 封面铺满卡顶 + 顶部压暗渐变 + 大号幽灵序号 */}
      <div className="relative w-full h-44 sm:h-52 bg-ink/5 overflow-hidden">
        {src ? (
          <img
            src={src}
            alt={song.title}
            loading="lazy"
            onError={() => setSrc(null)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display text-3xl text-ink-faint">{song.title.charAt(0)}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
        <span className="absolute right-3 top-2 font-display font-black text-bg/70 text-4xl leading-none select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <h2 className="font-display text-xl font-bold text-ink leading-snug break-words">
          {song.title}
        </h2>
        <div className="text-xs text-ink-faint mt-1.5 uppercase tracking-wide">
          {song.artist}
          {song.album && <span className="text-ink-faint/70"> · {song.album}</span>}
        </div>
        <p className="text-[15px] text-ink-muted leading-relaxed border-t border-border pt-4 mt-4">
          {song.review[lang]}
        </p>
      </div>
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