import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Mail, Phone, FileText } from "lucide-react";
import { skillGroups, influenceItems } from "@/content/collections";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-bg py-16 px-5 sm:px-8 lg:px-12">
        <h1 className="text-section-title font-display text-bg mb-4 lowercase">
          {t("about.page_title")}
        </h1>
        <p className="font-display text-2xl sm:text-4xl text-bg/60 italic">EDDIE</p>
      </section>

      {/* Story */}
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

      {/* Skills */}
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

      {/* Influence */}
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

      {/* Contact */}
      <section className="px-5 sm:px-8 lg:px-12 py-24 bg-surface-alt">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-ink mb-12">
            {t("about.contact_title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
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

          {/* Resume link */}
          <Link to="/resume" className="block p-8 bg-ink rounded-card-lg text-bg hover:opacity-90 transition-opacity">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-bg/15 flex items-center justify-center flex-shrink-0">
                <FileText size={20} />
              </div>
              <div className="flex-1">
                <div className="font-display text-xl sm:text-2xl font-bold mb-2">
                  {t("about.resume_link")}
                </div>
                <p className="text-sm text-bg/60 leading-relaxed">{t("about.resume_note")}</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
