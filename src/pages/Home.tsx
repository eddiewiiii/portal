import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import NowBento from "@/components/NowBento";
import Marquee from "@/components/Marquee";
import { useArticles } from "@/hooks/useArticles";
import { nowListening, nowReading, nowWatching } from "@/content/collections";

export default function Home() {
  const { t } = useTranslation();
  const articles = useArticles();

  // 首页只展示最近 5 篇，其余在 /writing 页查看
  const displayedArticles = articles.slice(0, 5);

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* About section (dark, marquee) - 定位语 + 简介 + 跳转 */}
      <section className="bg-ink text-bg py-16 px-5 sm:px-8 lg:px-12 relative overflow-hidden">
        <Marquee
          text={t("sections.about_marquee")}
          className="text-marquee font-display whitespace-nowrap mb-12 opacity-90"
        />

        <div className="relative flex items-center justify-center min-h-[400px]">
          {/* 细微径向高光，增加层次但不喧宾夺主 */}
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.07) 0%, transparent 60%)",
            }}
          />

          {/* 中心内容 - 定位语 + 简介 + 跳转 */}
          <div className="relative z-[3] max-w-2xl text-center px-4">
            <p className="font-display text-3xl sm:text-5xl font-black text-bg leading-tight mb-6 tracking-tight">
              {t("about_home.tagline")}
            </p>
            <p className="text-sm sm:text-base text-bg/70 leading-relaxed mb-8 max-w-md mx-auto">
              {t("about_home.desc")}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1 text-sm font-bold text-bg underline underline-offset-4 decoration-1 hover:decoration-bg"
            >
              {t("about_home.cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* 此刻三墙 - 在听 / 在读 / 在看，全白底统一风格 */}
      <NowBento
        titleKey="now.listening_title"
        subtitleKey="now.listening_sub"
        items={nowListening}
        variant="light"
        linkTo="/lists"
      />
      <NowBento
        titleKey="now.reading_title"
        subtitleKey="now.reading_sub"
        items={nowReading}
        variant="light"
        linkTo="/lists"
      />
      <NowBento
        titleKey="now.watching_title"
        subtitleKey="now.watching_sub"
        items={nowWatching}
        variant="light"
        linkTo="/lists"
      />

      {/* Writing list - 默认 5 篇 + 加载更多 */}
      <section className="px-5 sm:px-8 lg:px-12 py-24">
        <div className="flex items-baseline gap-4 mb-12">
          <h2 className="text-section-h2 font-display text-ink lowercase">
            {t("sections.writing_title")}
          </h2>
          <span className="text-section-h2 text-ink/15 font-display font-black lowercase">
            {t("sections.writing_subtitle")}
          </span>
        </div>

        <div className="flex flex-col">
          {displayedArticles.map((article, idx) => (
            <Link
              key={article.id}
              to={`/writing/${article.id}`}
              className="group flex items-center justify-between py-7 border-b border-border"
            >
              <div className="flex items-start gap-6">
                <span className="text-sm font-bold text-ink-faint/40 min-w-[24px] mt-1 transition-colors group-hover:text-ink">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[22px] font-extrabold leading-tight transition-colors group-hover:text-ink-muted">
                    {article.title}
                  </h3>
                </div>
              </div>
              <span className="text-sm text-ink-faint opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </Link>
          ))}
        </div>

        {/* 跳转到 /writing - 下划线文字链接 */}
        <div className="mt-12">
          <Link
            to="/writing"
            className="text-sm font-bold text-ink underline underline-offset-4 decoration-1"
          >
            {t("sections.writing_all")}
          </Link>
        </div>
      </section>
    </>
  );
}
