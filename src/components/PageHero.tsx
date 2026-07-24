import type { ReactNode } from "react";

/**
 * 统一的子页面顶部 Hero —— 与首页 Hero.tsx 保持一致：
 * 浅色背景、左对齐、整宽、text-hero-title(80px)、pt-20 pb-24。
 * 用于 About / Cases / Timeline / Writing 等子页面，消除首页与各页顶部风格不一致的问题。
 */
export default function PageHero({
  title,
  subtitle,
  children,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="px-5 sm:px-8 lg:px-12 pt-20 pb-24">
      <h1 className="text-hero-title font-display text-ink mb-6 lowercase">
        {title}
      </h1>
      {subtitle ? (
        <p className="font-display text-2xl sm:text-4xl text-ink/60 italic mb-2">
          {subtitle}
        </p>
      ) : null}
      {children}
    </section>
  );
}