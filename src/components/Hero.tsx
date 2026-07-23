import { useTranslation } from "react-i18next";
import { Mail, Phone, FileText } from "lucide-react";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="px-5 sm:px-8 lg:px-12 pt-20 pb-24 min-h-[620px] flex flex-col justify-center">
      {/* 大标题 - 全宽左对齐 */}
      <h1 className="text-hero-title font-display text-ink mb-8 max-w-4xl lowercase">
        {t("hero.title_line1")}
        <br />
        {t("hero.title_line2")}
      </h1>

      {/* 描述 */}
      <p className="text-base leading-[1.8] text-ink-muted max-w-[520px] mb-12">
        {t("hero.desc")}
      </p>

      {/* Social icons */}
      <div className="flex items-center gap-2.5 mb-14">
        <a
          href="mailto:eddiew@stu.jnu.edu.cn"
          className="w-[34px] h-[34px] rounded-full border-[1.5px] border-border flex items-center justify-center text-ink-muted hover:border-ink hover:text-ink transition-colors"
          aria-label="Email"
        >
          <Mail size={13} />
        </a>
        <a
          href="tel:+8618054294274"
          className="w-[34px] h-[34px] rounded-full border-[1.5px] border-border flex items-center justify-center text-ink-muted hover:border-ink hover:text-ink transition-colors"
          aria-label="Phone"
        >
          <Phone size={13} />
        </a>
        <a
          href="/resume.html"
          className="w-[34px] h-[34px] rounded-full border-[1.5px] border-border flex items-center justify-center text-ink-muted hover:border-ink hover:text-ink transition-colors"
          aria-label="Resume"
        >
          <FileText size={13} />
        </a>
      </div>

      {/* Stats - 加大间距 */}
      <div className="flex gap-16">
        <div>
          <div
            className="text-5xl font-extrabold tracking-tight text-ink"
            style={{ letterSpacing: "-1.5px" }}
          >
            {t("hero.stat1_num")}
          </div>
          <div className="text-xs text-ink-faint max-w-[140px] leading-tight mt-2">
            {t("hero.stat1_label")}
          </div>
        </div>
        <div>
          <div
            className="text-5xl font-extrabold tracking-tight text-ink"
            style={{ letterSpacing: "-1.5px" }}
          >
            {t("hero.stat2_num")}
          </div>
          <div className="text-xs text-ink-faint max-w-[140px] leading-tight mt-2">
            {t("hero.stat2_label")}
          </div>
        </div>
      </div>
    </section>
  );
}
