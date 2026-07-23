import { useTranslation } from "react-i18next";
import { fmSongs } from "@/content/fm";

export default function Music() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
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

      {/* Song grid */}
      <section className="px-5 sm:px-8 lg:px-12 py-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {fmSongs.map((song, i) => (
            <article
              key={i}
              className="relative bg-surface rounded-card border border-border p-6 sm:p-7 transition-colors hover:border-ink/40"
            >
              <div className="absolute -top-3 left-6 w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center text-xl shadow-sm">
                {song.emoji}
              </div>
              <h2 className="font-display text-xl font-bold text-ink mt-3 mb-1 leading-snug">
                {song.title}
              </h2>
              <div className="text-sm text-ink-faint mb-4">
                {song.artist}
                {song.album && <span className="text-ink-faint/70"> · {song.album}</span>}
              </div>
              <p className="text-[15px] text-ink-muted leading-relaxed border-t border-border pt-4">
                {song.review}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
