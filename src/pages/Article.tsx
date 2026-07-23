import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useArticle } from "@/hooks/useArticles";

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const article = useArticle(id);

  if (!article) {
    return (
      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-20 text-center">
        <p className="text-ink-muted mb-6">{t("writing.not_found")}</p>
        <Link to="/writing" className="text-sm font-bold text-ink hover:underline">
          {t("writing.back_to_list")}
        </Link>
      </section>
    );
  }

  return (
    <>
      {/* Article header */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-12 pb-8">
        <Link
          to="/writing"
          className="inline-flex items-center gap-1 text-xs font-medium text-ink-faint hover:text-ink transition-colors mb-8"
        >
          ← {t("writing.back_to_list")}
        </Link>

        <div className="flex items-center gap-3 text-xs text-ink-faint mb-4">
          <span>{article.date}</span>
          <span>·</span>
          {article.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-bg rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-ink tracking-tight leading-[1.05] mb-4">
          {article.title}
        </h1>
        <p className="text-base text-ink-muted">{article.summary}</p>
      </section>

      {/* Article content */}
      <article className="max-w-3xl mx-auto px-5 sm:px-8 pb-16">
        <div className="markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <Link
            to="/writing"
            className="inline-flex items-center gap-1 text-sm font-bold text-ink hover:underline"
          >
            ← {t("writing.back_to_list")}
          </Link>
        </div>
      </article>
    </>
  );
}
