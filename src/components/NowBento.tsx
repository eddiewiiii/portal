import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import type { NowItem } from "@/content/collections";

/** 外链封面（mzstatic / amazon / impawards 等）统一走 /api/cover 代理，
 *  由边缘服务器抓取后经本站域名返回，绕开大陆对这些 CDN 的墙。 */
function coverUrlFor(item: NowItem): string {
  const c = item.cover;
  if (!c) return "";
  if (/^https?:\/\//i.test(c)) {
    return `/api/cover?url=${encodeURIComponent(c)}`;
  }
  return c; // 本地路径如 /now/x.jpg 原样返回
}

interface NowBentoProps {
  titleKey: string;
  subtitleKey: string;
  items: NowItem[];
  variant?: "dark" | "light";
  linkTo?: string;
    coverSource?: string; // 兼容 Home.tsx 传入；当前未消费，仅为通过类型检查  
}

/**
 * 此刻 Bento 墙 - 5 格，4 列 2 行，第 1 格占 2×2 大格
 * 封面做背景，常驻渐变蒙版提升质感 + 保证文字可读；hover / 首格时叠加暗色遮罩并显示文字
 */
export default function NowBento({
  titleKey,
  subtitleKey,
  items,
  variant = "light",
  linkTo,
}: NowBentoProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "zh";
  const [active, setActive] = useState<string | null>(null);

  const isDark = variant === "dark";
  const titleColor = isDark ? "text-bg" : "text-ink";
  const subColor = isDark ? "text-bg/20" : "text-ink/15";
  const sectionBg = isDark ? "bg-ink text-bg" : "";

  return (
    <section className={`px-5 sm:px-8 lg:px-12 py-20 ${sectionBg}`}>
      {/* 标题 */}
      <div className="flex items-baseline gap-4 mb-12">
        <h2 className={`text-section-h2 font-display ${titleColor} lowercase`}>
          {t(titleKey)}
        </h2>
        <span className={`text-section-h2 font-display font-black lowercase ${subColor}`}>
          {t(subtitleKey)}
        </span>
      </div>

      {/* Bento 墙 - 4 列 2 行，第 1 格占 2×2 */}
      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "200px 200px",
        }}
      >
        {items.map((item, idx) => {
          const isFirst = idx === 0;
          const colSpan = isFirst ? "span 2" : "span 1";
          const rowSpan = isFirst ? "span 2" : "span 1";
          const isActive = active === item.id;
          const hasCover = !!item.cover;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setActive(item.id)}
              onMouseLeave={() => setActive(null)}
              className={`relative overflow-hidden rounded-card cursor-pointer group ${
                isFirst ? "bg-ink" : "bg-surface-alt border border-border"
              }`}
              style={{ gridColumn: colSpan, gridRow: rowSpan }}
            >
              {/* 封面图 - object-cover 填满格子（外链走 /api/cover 代理） */}
              {hasCover && (
                <img
                  src={coverUrlFor(item)}
                  alt={item.title[lang]}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}

              {/* 常驻渐变蒙版：统一风格 + 提升质感 + 保证文字可读 */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    isFirst || isActive
                      ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.12) 55%, transparent 100%)",
                }}
              />

              {/* 序号角标 */}
              <div className="absolute top-3 left-3 z-10">
                <span
                  className={`font-display font-black text-bg/90 drop-shadow ${
                    isFirst ? "text-2xl" : "text-xs"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              {/* 大格：常驻底部文字；小格：hover 时文字 */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-300 ${
                  isFirst || isActive ? "opacity-100" : "opacity-0"
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
        })}
      </div>

      {/* 查看全部 - 下划线文字链接 */}
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
