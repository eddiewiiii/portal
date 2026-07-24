import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight } from "lucide-react";

// 拆分 bullet：以第一个「：」或 ":" 为界，前置部分加粗，还原原简历的标签强调
// dark=true 时用于深色卡片，前置加粗改为浅色
function Bullet({ text, dark = false }: { text: string; dark?: boolean }) {
  const idxZh = text.indexOf("：");
  const idxEn = text.indexOf(":");
  let cut = -1;
  if (idxZh > -1 && (idxEn === -1 || idxZh < idxEn)) cut = idxZh;
  else if (idxEn > -1) cut = idxEn;

  if (cut === -1) return <>{text}</>;
  return (
    <>
      <span className={`font-semibold ${dark ? "text-bg" : "text-ink"}`}>
        {text.slice(0, cut + 1)}
      </span>
      {text.slice(cut + 1)}
    </>
  );
}

const jobs = [
  {
    company: "resume.job1_company",
    role: "resume.job1_role",
    date: "resume.job1_date",
    tag: "resume.job1_tag",
    bullets: ["resume.job1_p1", "resume.job1_p2", "resume.job1_p3", "resume.job1_p4"],
  },
  {
    company: "resume.job2_company",
    role: "resume.job2_role",
    date: "resume.job2_date",
    tag: "resume.job2_tag",
    bullets: [
      "resume.job2_p1",
      "resume.job2_p2",
      "resume.job2_p3",
      "resume.job2_p4",
      "resume.job2_p5",
      "resume.job2_p6",
    ],
  },
  {
    company: "resume.job3_company",
    role: "resume.job3_role",
    date: "resume.job3_date",
    tag: "resume.job3_tag",
    bullets: ["resume.job3_p1", "resume.job3_p2", "resume.job3_p3", "resume.job3_p4", "resume.job3_p5"],
  },
  {
    company: "resume.job4_company",
    role: "resume.job4_role",
    date: "resume.job4_date",
    tag: "resume.job4_tag",
    bullets: ["resume.job4_p1", "resume.job4_p2", "resume.job4_p3", "resume.job4_p4"],
  },
  {
    company: "resume.job5_company",
    role: "resume.job5_role",
    date: "resume.job5_date",
    tag: "resume.job5_tag",
    bullets: ["resume.job5_p1", "resume.job5_p2", "resume.job5_p3", "resume.job5_p4"],
  },
];

const projects = [
  {
    title: "resume.proj1_title",
    name: "resume.proj1_name",
    sub: "resume.proj1_sub",
    date: "resume.proj1_date",
    desc: "resume.proj1_desc",
    bullets: ["resume.proj1_p1", "resume.proj1_p2", "resume.proj1_p3"],
  },
  {
    title: "resume.proj2_title",
    name: "resume.proj2_name",
    sub: "resume.proj2_sub",
    date: "resume.proj2_date",
    desc: "resume.proj2_desc",
    bullets: ["resume.proj2_p1", "resume.proj2_p2", "resume.proj2_p3", "resume.proj2_p4"],
  },
];

const skills = [
  { t: "resume.skill1_t", c: "resume.skill1_c" },
  { t: "resume.skill2_t", c: "resume.skill2_c" },
  { t: "resume.skill3_t", c: "resume.skill3_c" },
  { t: "resume.skill4_t", c: "resume.skill4_c" },
  { t: "resume.skill5_t", c: "resume.skill5_c" },
  { t: "resume.skill6_t", c: "resume.skill6_c" },
];

const hashes = ["resume.hash1", "resume.hash2", "resume.hash3", "resume.hash4", "resume.hash5"];

export default function Resume() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero —— 与首页 Hero 保持一致：浅色 / 左对齐 / text-hero-title */}
      <section className="bg-bg text-ink pt-20 pb-24 px-5 sm:px-8 lg:px-12">
        <div className="relative z-[3] max-w-4xl">
          <h1 className="font-display text-hero-title font-black tracking-tight mb-4 lowercase">
            {t("resume.hero_name")}{" "}
            <span className="text-ink-faint font-normal">{t("resume.hero_en")}</span>
          </h1>
          <p className="text-lg sm:text-xl text-ink-muted max-w-2xl mb-6 leading-relaxed">
            {t("resume.hero_sub1")}
            <br />
            {t("resume.hero_sub2")}
          </p>

          <div className="flex flex-wrap justify-start gap-2 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="px-3 py-1 bg-surface text-ink-muted text-sm rounded-full border border-border"
              >
                {t(`resume.tag${i}`)}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-sm text-ink-muted">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-ink-faint" />
              <span>{t("resume.contact_phone")}</span>
            </div>
            <span className="hidden sm:inline text-ink-faint">|</span>
            <a href={`mailto:${t("resume.contact_email")}`} className="hover:text-ink transition-colors">
              {t("resume.contact_email")}
            </a>
            <span className="hidden sm:inline text-ink-faint">|</span>
            <Link
              to="/cases"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-ink text-bg rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              {t("resume.cta_case")}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 个人简介 */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-16">
        <h2 className="text-sm font-semibold text-ink-faint uppercase tracking-wide mb-3">
          {t("resume.about_title")}
        </h2>
        <p className="text-ink-muted text-lg leading-relaxed font-light">
          {t("resume.about_content")}
        </p>
      </section>

      {/* 工作经历 —— 去掉整块白底 slab，改为 now/watching 浅色卡片 + 序号角标 + hover */}
      <section className="px-5 sm:px-8 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-baseline justify-between border-b border-border pb-3 mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-ink">
              {t("resume.work_title")}
            </h2>
            <span className="text-xs text-ink-faint bg-surface-alt px-2 py-1 rounded-full">
              {t("resume.work_badge")}
            </span>
          </div>

          <div className="space-y-5">
            {jobs.map((job, i) => (
              <div
                key={i}
                className="group relative bg-surface-alt border border-border rounded-card p-6 sm:p-7 transition-all hover:border-ink/40 hover:shadow-sm"
              >
                {/* 序号角标 —— 呼应 now/watching */}
                <span className="absolute right-5 top-4 font-display font-black text-ink/10 text-4xl leading-none select-none group-hover:text-ink/20 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h3 className="text-xl font-semibold text-ink pr-10">
                    {t(job.company)}
                    <span className="text-ink-muted text-base font-normal"> · {t(job.role)}</span>
                  </h3>
                  <div className="bg-ink text-bg text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                    {t(job.tag)}
                  </div>
                </div>
                <p className="text-ink-faint text-sm mb-3 mt-1">{t(job.date)}</p>
                <ul className="space-y-2 text-ink-muted leading-relaxed list-disc pl-5 mt-2">
                  {job.bullets.map((b, bi) => (
                    <li key={bi}>
                      <Bullet text={t(b)} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 项目经历 —— 深色卡片，作为 now/watching 的「深色特色格」那一下 */}
      <section className="px-5 sm:px-8 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {projects.map((proj, i) => (
              <div
                key={i}
                className="group relative bg-ink text-bg rounded-card p-6 sm:p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                {/* 序号角标 */}
                <span className="absolute right-5 top-4 font-display font-black text-bg/10 text-4xl leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-lg font-semibold flex items-center gap-2 border-b border-bg/15 pb-3 mb-4">
                  {t(proj.title)}
                </h2>
                <div className="flex flex-wrap justify-between items-baseline mb-1">
                  <h3 className="text-xl font-medium">
                    {t(proj.name)}
                    <span className="text-sm text-bg/60 font-normal"> · {t(proj.sub)}</span>
                  </h3>
                  <span className="text-xs bg-bg/10 px-2 py-1 rounded-full text-bg/70 whitespace-nowrap">
                    {t(proj.date)}
                  </span>
                </div>
                <p className="text-bg/60 text-sm mb-3 italic">{t(proj.desc)}</p>
                <ul className="space-y-1.5 text-bg/80 text-sm list-disc pl-5">
                  {proj.bullets.map((b, bi) => (
                    <li key={bi}>
                      <Bullet text={t(b)} dark />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 教育背景 —— 同工作经历，浅色卡片去掉 slab */}
      <section className="px-5 sm:px-8 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface-alt border border-border rounded-card p-6 sm:p-7">
            <h2 className="text-lg font-semibold text-ink flex items-center gap-2 border-b border-border pb-3 mb-4">
              {t("resume.edu_title")}
            </h2>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <span className="font-medium text-ink">{t("resume.edu_school")}</span>
                <p className="text-ink-muted text-sm">{t("resume.edu_major")}</p>
              </div>
              <span className="text-sm text-ink-faint">{t("resume.edu_date")}</span>
            </div>
            <div className="mt-5 pt-4 border-t border-border/60">
              <p className="text-sm text-ink-muted flex items-center gap-2">
                <span className="font-medium text-ink">{t("resume.edu_lang")}</span>
                <span>{t("resume.edu_lang_content")}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 专业能力 · 技术栈 */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-ink mb-8">
          {t("resume.skills_title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
          {skills.map((s, i) => (
            <div key={i}>
              <div className="font-semibold text-ink mb-2">{t(s.t)}</div>
              <p className="text-ink-muted text-sm">{t(s.c)}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2 pt-2 border-t border-border">
          {hashes.map((h, i) => (
            <span
              key={i}
              className="bg-surface text-ink-muted px-3 py-1 rounded-full text-sm border border-border"
            >
              {t(h)}
            </span>
          ))}
        </div>
      </section>

      {/* 案例库 CTA */}
      <section className="px-5 sm:px-8 lg:px-12 py-16">
        <div className="max-w-3xl mx-auto p-8 sm:p-12 relative rounded-card-lg bg-gradient-to-br from-ink/90 to-ink text-bg">
          <div className="relative z-10 text-center">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
              {t("resume.case_title")}
            </h3>
            <p className="text-bg/60 mb-5 max-w-xl mx-auto">{t("resume.case_desc")}</p>
            <Link
              to="/cases"
              className="inline-flex items-center gap-2 bg-bg text-ink px-5 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              {t("resume.case_cta")}
            </Link>
            <p className="text-xs text-bg/40 mt-4">{t("resume.case_sub")}</p>
          </div>
        </div>
      </section>
    </>
  );
}