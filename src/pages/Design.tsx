import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";

type Lang = "zh" | "en";

type Project = {
  slug: string;
  name: string;
  url: string;
  status: "live" | "wip";
  accent: string; // tailwind gradient classes for fallback cover
  zh: { tagline: string; desc: string; role: string };
  en: { tagline: string; desc: string; role: string };
  stack: { zh: string[]; en: string[] };
};

const PROJECTS: Project[] = [
  {
    slug: "mymoney",
    name: "MyMoney",
    url: "https://mymoney.teameddie.top/",
    status: "live",
    accent: "from-emerald-400 via-teal-500 to-cyan-600",
    zh: {
      tagline: "个人财务看板",
      desc: "把收支、预算与资产放进一个清爽的移动端界面，一眼看清钱去哪了。",
      role: "产品设计 · 前端实现 · 视觉规范",
    },
    en: {
      tagline: "Finance Dashboard",
      desc: "Income, budget and assets in one calm mobile interface — see where the money goes at a glance.",
      role: "Product design · Front-end · Visual system",
    },
    stack: { zh: ["APP", "移动端", "数据可视化", "响应式"], en: ["APP", "Mobile", "Data viz", "Responsive"] },
  },
  {
    slug: "ieng",
    name: "iEng",
    url: "https://ieng.teameddie.top/",
    status: "live",
    accent: "from-indigo-400 via-violet-500 to-purple-600",
    zh: {
      tagline: "英语学习",
      desc: "把 daily 练习做成轻量、可坚持的产品体验，专注沉浸式的输入与反馈。",
      role: "产品设计 · 交互设计 · 前端实现",
    },
    en: {
      tagline: "English Learning",
      desc: "Daily practice turned into a lightweight, stickable product — focused, immersive input and feedback.",
      role: "Product design · Interaction · Front-end",
    },
    stack: { zh: ["APP", "微交互", "沉浸式", "跨端"], en: ["APP", "Micro-interactions", "Immersive", "Cross-platform"] },
  },
  {
    slug: "team",
    name: "Team",
    url: "https://team.teameddie.top/",
    status: "live",
    accent: "from-amber-300 via-orange-400 to-rose-500",
    zh: {
      tagline: "团队协作工作台",
      desc: "面向小团队的任务与协作中枢，把信息流、进度和分工收拢到一个面板。",
      role: "信息架构 · 界面设计 · 前端实现",
    },
    en: {
      tagline: "Team Collaboration Workspace",
      desc: "A task and collaboration hub for small teams — funneling feeds, progress and ownership into one panel.",
      role: "Information architecture · UI · Front-end",
    },
    stack: { zh: ["Web App", "看板", "协作", "组件化"], en: ["Web App", "Kanban", "Collaboration", "Component-based"] },
  },
  {
    slug: "trip-manager",
    name: "Trip Manager",
    url: "https://trip.teameddie.top/",
    status: "wip",
    accent: "from-sky-400 via-blue-500 to-indigo-600",
    zh: {
      tagline: "行程管理工具",
      desc: "把一段旅行拆成可排期的日程、地点与预算，规划阶段就看得见全貌。",
      role: "原型设计 · 体验设计 · 前端实现",
    },
    en: {
      tagline: "Trip Planning Tool",
      desc: "Break a trip into schedulable days, places and budget — see the whole picture while planning.",
      role: "Prototyping · UX · Front-end",
    },
    stack: { zh: ["APP", "时间线", "地图", "迭代中"], en: ["APP", "Timeline", "Map", "WIP"] },
  },
  {
    slug: "trip2bki",
    name: "Trip2BKI",
    url: "https://trip2bki.teameddie.top/",
    status: "wip",
    accent: "from-rose-300 via-pink-500 to-fuchsia-600",
    zh: {
      tagline: "亚庇旅行规划实验",
      desc: "旅行实际探索，更轻的记录和更顺手的分享，验证不同的信息结构。",
      role: "概念设计 · 界面探索 · 前端实现",
    },
    en: {
      tagline: "Travel planning experiment",
      desc: "Travel experience,lighter logging and smoother sharing, probing a different information structure.",
      role: "Concept design · UI exploration · Front-end",
    },
    stack: { zh: ["APP", "实验性", "轻量", "迭代中"], en: ["APP", "Experimental", "Lightweight", "WIP"] },
  },
];

export default function Design() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language as Lang) ?? "zh";
  const [broken, setBroken] = useState<Record<string, boolean>>({});

  return (
    <>
      <PageHero title={t("design.hero_title")}>
        <p className="text-base leading-[1.8] text-ink-muted max-w-[560px] mb-10">
          {t("design.hero_desc")}
        </p>
        <div className="flex gap-8 sm:gap-12 text-sm text-ink-muted">
          <div>
            <div className="font-display text-3xl font-black text-ink">5</div>
            <div>{t("design.stat_projects")}</div>
          </div>
          <div>
            <div className="font-display text-3xl font-black text-ink">3</div>
            <div>{t("design.stat_live")}</div>
          </div>
          <div>
            <div className="font-display text-3xl font-black text-ink">2</div>
            <div>{t("design.stat_wip")}</div>
          </div>
        </div>
      </PageHero>

      <section className="px-5 sm:px-8 lg:px-12 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-ink tracking-tight">
                {t("design.section_title")}
              </h2>
              <p className="text-ink-faint text-sm mt-1">{t("design.section_desc")}</p>
            </div>
          </div>

          {/* 竖图作品：第一行四个 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {PROJECTS.filter((p) => p.slug !== "team").map((p, i) => {
              const copy = p[lang];
              const cover = `/design/${p.slug}.webp`;
              const showImg = !broken[p.slug];
              return (
                <article
                  key={p.slug}
                  className="group relative bg-surface border border-border rounded-card-lg overflow-hidden hover:border-ink/40 hover:shadow-lg transition-all flex flex-col"
                >
                  {/* 设备预览（竖图） */}
                  <div className="p-5 pb-0">
                    <div className="relative mx-auto w-full max-w-[260px] aspect-[390/844] rounded-[2rem] overflow-hidden bg-gradient-to-br shadow-sm group-hover:shadow-md transition-shadow">
                      {/* 渐变兜底封面 */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} ${showImg ? "opacity-0" : "opacity-100"} transition-opacity`} />
                      {/* 实拍截图 */}
                      {showImg && (
                        <img
                          src={cover}
                          alt={p.name}
                          loading="lazy"
                          onError={() => setBroken((b) => ({ ...b, [p.slug]: true }))}
                          className="absolute inset-0 w-full h-full object-cover object-top"
                        />
                      )}
                      {/* 幽灵序号 */}
                      <span className="absolute -bottom-2 right-2 font-display font-black text-white/25 text-6xl leading-none select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* 文案 */}
                  <div className="p-6 pt-5 flex flex-col flex-1">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h3 className="text-xl font-bold text-ink">{p.name}</h3>
                      <span className="text-xs text-ink-faint whitespace-nowrap">{copy.tagline}</span>
                    </div>
                    <p className="text-sm text-ink-muted leading-relaxed mb-4">{copy.desc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.stack[lang].map((s) => (
                        <span
                          key={s}
                          className="text-[11px] font-medium text-ink-muted bg-surface-alt border border-border px-2.5 py-1 rounded-full"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-xs text-ink-faint">{copy.role}</span>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-ink hover:gap-2 flex items-center gap-1.5 transition-all"
                      >
                        <span>{t("design.visit")}</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* 横图作品：Team 单独一行 */}
          {(() => {
            const p = PROJECTS.find((x) => x.slug === "team")!;
            const copy = p[lang];
            const cover = `/design/${p.slug}.webp`;
            const showImg = !broken[p.slug];
            return (
              <article className="group relative mt-6 bg-surface border border-border rounded-card-lg overflow-hidden hover:border-ink/40 hover:shadow-lg transition-all flex flex-col lg:flex-row">
                {/* 设备预览（横图） */}
                <div className="p-5 lg:p-6 lg:w-[58%]">
                  <div className="relative w-full aspect-[16/10] rounded-[1.5rem] overflow-hidden bg-gradient-to-br shadow-sm group-hover:shadow-md transition-shadow">
                    <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} ${showImg ? "opacity-0" : "opacity-100"} transition-opacity`} />
                    {showImg && (
                      <img
                        src={cover}
                        alt={p.name}
                        loading="lazy"
                        onError={() => setBroken((b) => ({ ...b, [p.slug]: true }))}
                        className="absolute inset-0 w-full h-full object-cover object-top"
                      />
                    )}
                    <span className="absolute -bottom-2 right-3 font-display font-black text-white/25 text-6xl leading-none select-none">05</span>
                  </div>
                </div>

                {/* 文案 */}
                <div className="p-6 lg:p-8 lg:w-[42%] flex flex-col flex-1 justify-center">
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-2xl font-bold text-ink">{p.name}</h3>
                    <span className="text-xs text-ink-faint whitespace-nowrap">{copy.tagline}</span>
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed mb-4">{copy.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.stack[lang].map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-medium text-ink-muted bg-surface-alt border border-border px-2.5 py-1 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-ink-faint">{copy.role}</span>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-ink hover:gap-2 flex items-center gap-1.5 transition-all"
                    >
                      <span>{t("design.visit")}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })()}

          {/* 设计观 / 收尾 */}
          <div className="mt-16 border-t border-border pt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="font-display text-xl sm:text-2xl font-bold text-ink leading-snug">
                {t("design.closing_title")}
              </p>
              <p className="text-sm text-ink-muted leading-relaxed mt-3">
                {t("design.closing_desc")}
              </p>
            </div>
            <a
              href="https://github.com/eddiewiiii"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-ink text-bg px-5 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              <span>{t("design.closing_cta")}</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}