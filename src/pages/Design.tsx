import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowUpRight,
  ExternalLink,
  Scissors,
  BarChart3,
  Mail,
  RotateCw,
  Wand2,
  Users,
  ScanLine,
  Film,
} from "lucide-react";
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
      desc: "把日常练习做成轻量、可坚持的产品体验，专注沉浸式的输入与反馈。",
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
      tagline: "Trip Planning",
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
      tagline: "Travel Experience",
      desc: "Travel experience,lighter logging and smoother sharing, probing a different information structure.",
      role: "Concept design · UI exploration · Front-end",
    },
    stack: { zh: ["APP", "实验性", "轻量", "迭代中"], en: ["APP", "Experimental", "Lightweight", "WIP"] },
  },
];

type WbIcon = "cut" | "bench" | "data" | "analysis" | "intake" | "mail";

type Workbench = {
  zh: { steps: { title: string; desc: string }[]; modules: { title: string; desc: string }[] };
  en: { steps: { title: string; desc: string }[]; modules: { title: string; desc: string }[] };
};

const WB_ICONS: Record<WbIcon, React.ReactNode> = {
  cut: <Scissors size={16} />,
  bench: <Users size={16} />,
  data: <BarChart3 size={16} />,
  analysis: <ScanLine size={16} />,
  intake: <Film size={16} />,
  mail: <Mail size={16} />,
};

const WORKBENCH: Workbench = {
  zh: {
    steps: [
      {
        title: "吃透业务",
        desc: "花一个月把海外 AI 工具推广的整条链路摸清：内容怎么来、流量怎么走、用户在哪转化、佣金怎么结算。不是从猜开始，是从真实数据开始。",
      },
      {
        title: "跑通闭环",
        desc: "把业务抽象成一套可复制的推广模型：选题、内容、排期、分发、数据回流、复盘迭代串成一条能自己转的链路，而不是靠人手提醒。",
      },
      {
        title: "工具自动化",
        desc: "把链路里重复、费力、易错的部分交给自研工具去兜底：素材入库、批量剪辑、账号排期、数据抓取、邮件归档，一个人能扛起一整条业务线。",
      },
    ],
    modules: [
      { title: "批量化自动剪", desc: "选择模型、丢素材、自动分段，一次产出一批可发布的成片。" },
      { title: "对标账号获取", desc: "输入账号即可拉取对标内容，持续收录爆款。" },
      { title: "账号数据获取", desc: "自动拉取各端数据，沉淀成统一口径的报表。" },
      { title: "视频维度分析", desc: "逐条拆解视频结构，找出可复制的打法。" },
      { title: "对标素材入库", desc: "对标内容统一入库、打标、去重，剪辑时随手可取。" },
      { title: "部门邮件中心", desc: "往来邮件统一归档、检索，重要信息不再散落。" },
    ],
  },
  en: {
    steps: [
      {
        title: "Learn the business",
        desc: "A month mapping an overseas AI-tool promo funnel end to end: where content comes from, how traffic flows, where users convert, how payouts settle. Built on real data, not guesses.",
      },
      {
        title: "Close the loop",
        desc: "Abstract the business into a replicable promo model: ideation, content, scheduling, distribution, data feedback and iteration chained into a self-running loop, no manual reminding.",
      },
      {
        title: "Automate with tools",
        desc: "Hand the repetitive, error-prone parts to self-built tools: asset intake, batch editing, scheduling, scraping, mail archiving. One person can carry an entire line of business.",
      },
    ],
    modules: [
      { title: "Batch auto-editing", desc: "Pick a model, drop materials, auto-segment — produce a batch of publishable clips." },
      { title: "Benchmark account fetch", desc: "Pull benchmark content from any account, keep collecting hits." },
      { title: "Account data fetch", desc: "Auto-pull data across endpoints into one consistent report." },
      { title: "Video dimension analysis", desc: "Break down each video's structure to find replicable plays." },
      { title: "Benchmark material intake", desc: "Unified intake, tagging and dedupe so editing never starts from zero." },
      { title: "Department mail center", desc: "Business mail unified, archived and searchable, nothing important lost." },
    ],
  },
};

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
                    <div className="relative mx-auto w-full max-w-[260px] aspect-[780/1387] rounded-[2rem] overflow-hidden bg-gradient-to-br">
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
                  <div className="relative w-full aspect-[16/10] rounded-[1.5rem] overflow-hidden bg-gradient-to-br">
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

          {/* CapCut 工作台：全宽案例行 */}
          <section className="mt-14 border-t border-border pt-10">
            <div className="flex items-end justify-between mb-6">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-black text-ink tracking-tight">
                  {lang === "zh" ? "CapCut 海外推广工作台" : "CapCut Promo Workbench"}
                </h2>
                <p className="text-ink-faint text-sm mt-1">
                  {lang === "zh" ? "从业务里长出来的系统 · 全栈自研" : "Grown out of the business · Self-built full stack"}
                </p>
              </div>
              <a
                href="https://panel.mcnteam.cc.cd"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:gap-2 transition-all"
              >
                <span>{lang === "zh" ? "访问工作台" : "Visit workbench"}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* 一次做成：三步走的闭环叙事 */}
            <div className="bg-surface border border-border rounded-card-lg p-6 sm:p-8">
              <div className="grid gap-4 md:grid-cols-3">
                {WORKBENCH[lang].steps.map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center pt-0.5">
                      <span className="font-display font-black text-ink/20 text-sm leading-none">0{i + 1}</span>
                      {i < WORKBENCH[lang].steps.length - 1 && (
                        <span className="mt-2 w-px flex-1 bg-border" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-ink flex items-center gap-2">
                        {s.title}
                        {i === 1 && <RotateCw size={14} className="text-ink-faint" />}
                        {i === 2 && <Wand2 size={14} className="text-ink-faint" />}
                      </h3>
                      <p className="text-sm text-ink-muted leading-relaxed mt-1.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 功能拆解 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-5">
              {WORKBENCH[lang].modules.map((m, i) => (
                <div
                  key={i}
                  className="bg-surface border border-border rounded-card-lg p-5 hover:border-ink/40 transition-colors"
                >
                  <div className="inline-flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-surface-alt border border-border text-ink-muted">
                      {WB_ICONS[Object.keys(WB_ICONS)[i] as WbIcon]}
                    </span>
                    <span className="font-semibold text-ink text-sm">{m.title}</span>
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>

            {/* 工作台界面预览 */}
            <div className="mt-5 bg-surface border border-border rounded-card-lg overflow-hidden">
              <div className="max-w-3xl mx-auto p-4">
                <a href="/design/capcut.webp" target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src="/design/capcut.webp"
                    alt="CapCut 工作台"
                    loading="lazy"
                    className="w-full h-auto rounded-lg"
                  />
                </a>
                <p className="text-center text-xs text-ink-faint mt-3">
                  {lang === "zh" ? "点击图片查看高清原图" : "Click to view the full-resolution screenshot"}
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs text-ink-faint">
                {lang === "zh"
                  ? "业务研究 · 产品 / 交互 · 全栈实现"
                  : "Business research · Product / UX · Full-stack"}
              </span>
              <a
                href="https://panel.mcnteam.cc.cd"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:gap-2 transition-all"
              >
                <span>{lang === "zh" ? "访问工作台" : "Visit workbench"}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </section>

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