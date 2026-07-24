import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";

const TIMELINE = [
  { year: "2025", titleKey: "timeline.t1_title", subKey: "timeline.t1_sub", tagKey: "timeline.t1_tag" },
  { year: "2022", titleKey: "timeline.t2_title", subKey: "timeline.t2_sub", tagKey: "timeline.t2_tag" },
  { year: "2022", titleKey: "timeline.t3_title", subKey: "timeline.t3_sub", tagKey: "timeline.t3_tag" },
  { year: "2019", titleKey: "timeline.t4_title", subKey: "timeline.t4_sub", tagKey: "timeline.t4_tag" },
  { year: "2016", titleKey: "timeline.t5_title", subKey: "timeline.t5_sub", tagKey: "timeline.t5_tag" },
];

export default function Timeline() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero —— 与首页 Hero 保持一致：浅色 / 左对齐 / text-hero-title */}
      <PageHero
        title={
          <>
            {t("resume.hero_name")}{" "}
            <span className="text-ink-faint font-normal">{t("resume.hero_en")}</span>
          </>
        }
      >
        <p className="text-base leading-[1.8] text-ink-muted max-w-[520px] mb-8">
          {t("timeline.hero_sub1")}
          <br />
          {t("timeline.hero_sub2")}
        </p>
        <Link
          to="/resume"
          className="inline-flex items-center gap-2 bg-ink text-bg font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
        >
          {t("timeline.btn_resume")}
          <ArrowRight size={16} />
        </Link>
      </PageHero>

      {/* Timeline */}
      <section className="px-5 sm:px-8 lg:px-12 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <div key={i} className="relative pl-8">
                  <span className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-ink ring-4 ring-bg" />
                  <div className="font-display text-2xl font-black text-ink mb-1">{item.year}</div>
                  <h3 className="text-lg font-semibold text-ink">{t(item.titleKey)}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed mt-1">{t(item.subKey)}</p>
                  <span className="inline-block mt-3 text-xs font-medium bg-bg text-ink-muted px-3 py-1 rounded-full">
                    {t(item.tagKey)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}