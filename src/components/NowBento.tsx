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
  /** 封面长宽比：square=正方形（音乐），portrait=竖版 2:3（电影/书） */
  aspect?: "square" | "portrait";
}

/**
 * 此刻 Bento 墙 - 5 格，4 列 2 行，第 1 格占 2×2 大格
 * 小格按封面比例定高（正方形 / 竖版 2:3），首格 span 2×2 自动继承同比例 → 封面完整不裁切
 * 默认只显示封面，hover 时叠加暗色蒙版并浮出文字
 */
export default function NowBento({
  titleKey,
  subtitleKey,
  items,
  variant = "light",
  linkTo,
  aspect = "square",
}: NowBentoProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "zh";

  const isDark = variant === "dark";
  const titleColor = isDark ? "text-bg" : "text-ink";
  const subColor = isDark ? "text-bg/20" : "text-ink/15";
  const sectionBg = isDark ? "bg-ink text-bg" : "";
  const cellAspect = aspect === "square" ? "aspect-square" : "aspect-[2/3]";

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

      {/* Bento 墙 - 4 列 2 行，第 1 格占 2×2；小格 aspect-ratio 驱动行高，首格自动填满 2×2 同比例 */}
      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {items.map((item, idx) => {
          const isFirst = idx === 0;
          const colSpan = isFirst ? "span 2" : "span 1";
          const rowSpan = isFirst ? "span 2" : "span 1";
          const hasCover = !!item.cover;

          return (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-card cursor-pointer group ${
                isFirst ? "bg-ink" : `bg-surface-alt border border-border ${cellAspect}`
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

              {/* 默认轻微渐变 - hover 时淡出 */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 60%, transparent 100%)",
                }}
              />
              {/* hover 时加深渐变 - 保证文字可读 */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
                }}
              />

              {/* 序号角标 - hover 时显示 */}
              <div className="absolute top-3 left-3 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span
                  className={`font-display font-black text-bg/90 drop-shadow ${
                    isFirst ? "text-2xl" : "text-xs"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              {/* 文字信息 - hover 时显示 */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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