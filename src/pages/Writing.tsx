import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useArticles } from "@/hooks/useArticles";
import type { Article } from "@/types";

type Category = "all" | "brand" | "insight" | "ai";

export default function Writing() {
  const { t } = useTranslation();
  const articles = useArticles();
  const [category, setCategory] = useState<Category>("all");

  const categories: { key: Category; label: string }[] = [
    { key: "all", label: t("writing.category_all") },
    { key: "brand", label: t("writing.category_brand") },
    { key: "insight", label: t("writing.category_insight") },
    { key: "ai", label: t("writing.category_ai") },
  ];

  const filtered: Article[] =
    category === "all" ? articles : articles.filter((a) => a.category === category);

  return (
    <>
      {/* Hero */}
      <section className="px-5 sm:px-8 lg:px-12 pt-12 pb-8">
        <h1 className="text-section-title font-display text-ink mb-3 lowercase">
          {t("writing.page_title")}
        </h1>
        <p className="text-sm text-ink-muted">{t("writing.page_desc")}</p>
      </section>

      {/* Category filter */}
      <section className="px-5 sm:px-8 lg:px-12 py-6">
        <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-6">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setCategory(cat.key)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-colors ${
                category === cat.key ? "bg-ink text-bg" : "bg-bg text-ink-muted"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Article list (exhibition style) */}
        <div className="flex flex-col">
          {filtered.map((article, idx) => (
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
      </section>
    </>
  );
}
