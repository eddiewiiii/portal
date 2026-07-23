import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import type { NowItem } from "@/content/collections";

export type CoverSource = "itunes-music" | "itunes-movie" | "openlibrary";

interface NowBentoProps {
  titleKey: string;
  subtitleKey: string;
  items: NowItem[];
  variant?: "dark" | "light";
  linkTo?: string;
  coverSource: CoverSource;
}

/** 运行时经 /api/cover 拉封面（服务端代理，规避 CORS 与 iTunes 实体/分区问题） */
function useCover(item: NowItem, source: CoverSource): string | null {
  const [cover, setCover] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const params = new URLSearchParams();
    if (source === "openlibrary") {
      params.set("type", "book");
      if (item.isbn) params.set("isbn", item.isbn);
    } else if (source === "itunes-movie") {
      params.set("type", "movie");
    } else {
      params.set("type", "music");
    }
    params.set("artist", item.creator.en);
    params.set("title", item.title.en);

    fetch(`/api/cover?${params.toString()}`)
      .then((r) => r.json())
      .then((d) => {
        if (!cancelled && d?.url) setCover(d.url);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [item.title.en, item.creator.en, item.isbn, source]);

  return cover;
}

function BentoCell({
  item,
  index,
  isFirst,
  coverSource,
  variant,
}: {
  item: NowItem;
  index: number;
  isFirst: boolean;
  coverSource: CoverSource;
  variant: "dark" | "light";
}) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "zh";
  const [active, setActive] = useState(false);
  const cover = useCover(item, coverSource) || item.cover || null;
  const hasCover = !!cover;

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`relative overflow-hidden rounded-card cursor-pointer group ${
        !hasCover ? (isFirst ? "bg-ink" : "bg-surface-alt border border-border") : ""
      }`}
      style={{
        gridColumn: isFirst ? "span 2" : "span 1",
        gridRow: isFirst ? "span 2" : "span 1",
      }}
    >
      {hasCover && (
        <img
          src={cover}
          alt={item.title[lang]}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            isFirst || active
              ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)"
              : "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.12) 55%, transparent 100%)",
        }}
      />

      <div className="absolute top-3 left-3 z-10">
        <span
          className={`font-display font-black text-bg/90 drop-shadow ${
            isFirst ? "text-2xl" : "text-xs"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div
        className={`absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-300 ${
          isFirst || active ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className={`font-display font-bold leading-tight mb-1 line-clamp-2 text-bg ${isFirst ? "text-lg" : "text-sm"}`}>
          {item.title[lang]}
        </div>
        <div className="text-[10px] mb-1 text-bg/70">
          {item.creator[lang]}
        </div>
        <div className="text-[10px] font-semibold tracking-wide text-bg/60">
          {item.tag}
        </div>
      </div>
    </div>
  );
}

export default function NowBento({
  titleKey,
  subtitleKey,
  items,
  variant = "light",
  linkTo,
  coverSource,
}: NowBentoProps) {
  const { t } = useTranslation();
  const isDark = variant === "dark";
  const titleColor = isDark ? "text-bg" : "text-ink";
  const subColor = isDark ? "text-bg/20" : "text-ink/15";
  const sectionBg = isDark ? "bg-ink text-bg" : "";

  return (
    <section className={`px-5 sm:px-8 lg:px-12 py-20 ${sectionBg}`}>
      <div className="flex items-baseline gap-4 mb-12">
        <h2 className={`text-section-h2 font-display ${titleColor} lowercase`}>
          {t(titleKey)}
        </h2>
        <span className={`text-section-h2 font-display font-black lowercase ${subColor}`}>
          {t(subtitleKey)}
        </span>
      </div>

      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "200px 200px",
        }}
      >
        {items.map((item, idx) => (
          <BentoCell
            key={item.id}
            item={item}
            index={idx}
            isFirst={idx === 0}
            coverSource={coverSource}
            variant={variant}
          />
        ))}
      </div>

      {linkTo && (
        <div className="mt-8">
          <Link
            to={linkTo}
            className={`text-xs font-bold ${isDark ? "text-bg" : "text-ink"} underline underline-offset-4 decoration-1`}
          >
            {t("sections.now_see_all")}
          </Link>
        </div>
      )}
    </section>
  );
}
