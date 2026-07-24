import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { skillGroups, influenceItems } from "@/content/collections";
import PageHero from "@/components/PageHero";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero title={t("about.page_title")} subtitle="EDDIE" />

      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-24">
        <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-ink mb-12">
          {t("about.story_title")}
        </h2>

        <div className="space-y-8">
          {[t("about.story_p1"), t("about.story_p2"), t("about.story_p3")].map((p, i) => (
            <p key={i} className="text-lg sm:text-xl text-ink-muted leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-24 bg-surface-alt">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-ink mb-12">
            {t("about.skills_title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillGroups.map((group) => (
              <div
                key={group.id}
                className="p-6 bg-surface rounded-card border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{group.emoji}</span>
                  <h3 className="font-display text-xl font-bold text-ink">
                    {t(group.titleKey)}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {(t(group.itemsKey, { returnObjects: true }) as string[]).map((item, i) => (
                    <li
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-bg text-ink-muted rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-24">
        <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-ink mb-12">
          {t("about.influence_title")}
        </h2>

        <div className="flex flex-col">
          {influenceItems.map((item, idx) => (
            <div
              key={item.id}
              className="flex items-start gap-5 py-7 border-b border-border"
            >
              <span className="text-sm font-bold text-ink-faint/60 min-w-[24px] mt-1">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl font-extrabold leading-tight mb-1">
                  {t(item.titleKey)}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">{t(item.noteKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-24 bg-surface-alt">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-ink mb-12">
            {t("about.contact_title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="mailto:eddiew@stu.jnu.edu.cn"
              className="flex items-center gap-4 p-6 bg-surface rounded-card border border-border hover:border-ink transition-colors"
            >
              <div className="w-11 h-11 rounded-full bg-bg flex items-center justify-center">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-xs text-ink-faint mb-1">{t("about.email_label")}</div>
                <div className="text-sm font-bold text-ink">eddiew@stu.jnu.edu.cn</div>
              </div>
            </a>

            <a
              href="tel:+8618054294274"
              className="flex items-center gap-4 p-6 bg-surface rounded-card border border-border hover:border-ink transition-colors"
            >
              <div className="w-11 h-11 rounded-full bg-bg flex items-center justify-center">
                <Phone size={18} />
              </div>
              <div>
                <div className="text-xs text-ink-faint mb-1">{t("about.phone_label")}</div>
                <div className="text-sm font-bold text-ink">+86 180 5429 4274</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
