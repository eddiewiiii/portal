import { useTranslation } from "react-i18next";
import { fmSongs } from "@/content/fm";
import PageHero from "@/components/PageHero";

export default function Music() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "zh";

  return (
    <>
      <PageHero title={t("music.page_title")}>
        <p className="font-display text-2xl sm:text-4xl text-ink/40 italic mb-4">
          {t("music.page_sub")}
        </p>
        <p className="text-base leading-[1.8] text-ink-muted max-w-[520px]">
          {t("music.page_desc", { count: fmSongs.length })}
        </p>
      </PageHero>

      <section className="px-5 sm:px-8 lg:px-12 py-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col">
            {fmSongs.map((song, i) => {
              // 本地封面用缩略图（200x200，列表小格够用），外链走代理，无 cover 走 iTunes 搜索
              const coverUrl = song.cover
                ? song.cover.startsWith("/music/")
                  ? song.cover.replace("/music/", "/music/thumb/")
                  : `/api/cover?url=${encodeURIComponent(song.cover)}`
                : `/api/cover?type=music&artist=${encodeURIComponent(
                    song.artist
                  )}&title=${encodeURIComponent(song.title)}&album=${encodeURIComponent(song.album)}`;
              return (
                <details key={i} className="group border-b border-border">
                  <summary className="flex items-center gap-6 py-6 cursor-pointer list-none hover:translate-x-2 transition-transform">
                    <span className="font-display text-sm text-ink-faint/40 min-w-[24px] mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-14 h-14 rounded overflow-hidden flex-shrink-0 bg-ink/5">
                      <img
                        src={coverUrl}
                        alt={song.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="font-display text-xl font-extrabold leading-tight">
                        {song.title}
                      </h2>
                      <p className="text-sm text-ink-faint mt-0.5">
                        {song.artist}
                        {song.album && (
                          <span className="text-ink-faint/70"> · {song.album}</span>
                        )}
                      </p>
                    </div>
                    <span className="text-ink-faint text-xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="text-[15px] text-ink-muted leading-[1.8] pb-8 pl-[88px] max-w-2xl">
                    {song.review[lang]}
                  </p>
                </details>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
