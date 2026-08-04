import { useState } from "react";
import { useTranslation } from "react-i18next";
import { fmSongs } from "@/content/fm";
import PageHero from "@/components/PageHero";

type Plan = "A" | "B" | "C";

export default function MusicPreview() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "zh";
  const [plan, setPlan] = useState<Plan>("A");
  const songs = fmSongs.slice(0, 6); // 预览前 6 首够看效果

  return (
    <>
      <PageHero title="歌单样式预览">
        <p className="text-base leading-[1.8] text-ink-muted max-w-[520px]">
          三个方案并排可切换，用真实歌曲数据展示。选定后告诉我 A / B / C，我落地到 Music 页。
        </p>
      </PageHero>

      {/* 切换 tab */}
      <section className="px-5 sm:px-8 lg:px-12 py-6 sticky top-0 bg-bg/95 backdrop-blur z-20 border-b border-border">
        <div className="max-w-[1200px] mx-auto flex flex-wrap gap-2">
          {([
            { k: "A", label: "A · Bento 封面墙" },
            { k: "B", label: "B · 杂志列表式" },
            { k: "C", label: "C · 黑胶店式" },
          ] as { k: Plan; label: string }[]).map((p) => (
            <button
              key={p.k}
              onClick={() => setPlan(p.k)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-colors ${
                plan === p.k ? "bg-ink text-bg" : "bg-bg text-ink-muted border border-border"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-12">
        <div className="max-w-[1200px] mx-auto">
          {plan === "A" && <PlanA songs={songs} lang={lang} />}
          {plan === "B" && <PlanB songs={songs} lang={lang} />}
          {plan === "C" && <PlanC songs={songs} lang={lang} />}
        </div>
      </section>
    </>
  );
}

/* ============ 方案 A：Bento 封面墙 ============ */
function PlanA({
  songs,
  lang,
}: {
  songs: typeof fmSongs;
  lang: "en" | "zh";
}) {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {songs.map((song, i) => {
          const coverUrl = song.cover
            ? `/api/cover?url=${encodeURIComponent(song.cover)}`
            : `/api/cover?type=music&artist=${encodeURIComponent(song.artist)}&title=${encodeURIComponent(song.title)}&album=${encodeURIComponent(song.album)}`;
          return (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-card group cursor-pointer bg-ink/5"
            >
              <img
                src={coverUrl}
                alt={song.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* hover 蒙版 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* 序号 */}
              <div className="absolute top-3 left-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-display font-black text-bg/90 text-xs drop-shadow">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              {/* 文字 */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-display font-bold text-bg leading-tight line-clamp-1">
                  {song.title}
                </h3>
                <p className="text-[11px] text-bg/70 mt-0.5">{song.artist}</p>
                <p className="text-[11px] text-bg/60 mt-2 line-clamp-3 leading-relaxed">
                  {song.review[lang]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-6 text-xs text-ink-faint">
        说明：封面主导，hover 浮出歌名/歌手/故事节选。与首页"此刻"墙同语言。
      </p>
    </div>
  );
}

/* ============ 方案 B：杂志列表式 ============ */
function PlanB({
  songs,
  lang,
}: {
  songs: typeof fmSongs;
  lang: "en" | "zh";
}) {
  return (
    <div>
      <div className="flex flex-col">
        {songs.map((song, i) => {
          const coverUrl = song.cover
            ? `/api/cover?url=${encodeURIComponent(song.cover)}`
            : `/api/cover?type=music&artist=${encodeURIComponent(song.artist)}&title=${encodeURIComponent(song.title)}&album=${encodeURIComponent(song.album)}`;
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
                  <h3 className="font-display text-xl font-extrabold leading-tight">
                    {song.title}
                  </h3>
                  <p className="text-sm text-ink-faint mt-0.5">
                    {song.artist}
                    {song.album && <span className="text-ink-faint/70"> · {song.album}</span>}
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
      <p className="mt-6 text-xs text-ink-faint">
        说明：单列横排，点击 + 展开故事。与 Writing 页列表式同语言。
      </p>
    </div>
  );
}

/* ============ 方案 C：黑胶店式 ============ */
function PlanC({
  songs,
  lang,
}: {
  songs: typeof fmSongs;
  lang: "en" | "zh";
}) {
  return (
    <div>
      <div className="max-w-3xl mx-auto">
        {songs.map((song, i) => (
          <article
            key={i}
            className="grid grid-cols-[60px_1fr] gap-6 py-10 border-b border-border"
          >
            <span className="font-display text-4xl font-black text-ink-faint/30">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-2xl font-extrabold leading-tight">
                {song.title}
              </h3>
              <p className="text-sm text-ink-faint mt-1 mb-4">
                {song.artist}
                {song.album && <span className="text-ink-faint/70"> · {song.album}</span>}
              </p>
              <p className="text-[15px] text-ink-muted leading-[1.8]">
                {song.review[lang]}
              </p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 text-xs text-ink-faint">
        说明：无封面、无卡片，纯排版+大序号+分隔线。最克制、最杂志感。
      </p>
    </div>
  );
}
