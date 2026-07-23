import { useTranslation } from "react-i18next";
import NowBento from "@/components/NowBento";
import { nowListening, nowReading, nowWatching } from "@/content/collections";

export default function Lists() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="px-5 sm:px-8 lg:px-12 pt-12 pb-8">
        <h1 className="text-section-title font-display text-ink mb-3 lowercase">
          {t("lists.page_title")}
        </h1>
        <p className="text-sm text-ink-muted">{t("lists.page_desc")}</p>
      </section>

      {/* 此刻三墙 - 在听 / 在读 / 在看，全白底 */}
      <NowBento
        titleKey="now.listening_title"
        subtitleKey="now.listening_sub"
        items={nowListening}
        variant="light"
      />
      <NowBento
        titleKey="now.reading_title"
        subtitleKey="now.reading_sub"
        items={nowReading}
        variant="light"
      />
      <NowBento
        titleKey="now.watching_title"
        subtitleKey="now.watching_sub"
        items={nowWatching}
        variant="light"
      />
    </>
  );
}
