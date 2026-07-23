import { useMemo } from "react";
import { useLanguageStore } from "@/store/useLanguageStore";
import type { Article, ArticleMeta } from "@/types";

// Custom frontmatter parser (gray-matter 在浏览器里跑不起来)
interface RawFrontmatter {
  id?: string;
  title?: string;
  date?: string;
  summary?: string;
  tags?: string[];
  category?: "brand" | "insight" | "ai";
}

function parseFrontmatter(raw: string): { data: RawFrontmatter; content: string } {
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!fmMatch) return { data: {}, content: raw };

  const fmText = fmMatch[1];
  const content = fmMatch[2];
  const data: RawFrontmatter = {};

  for (const line of fmText.split("\n")) {
    const m = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    let val = m[2].trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (key === "tags") {
      try {
        data.tags = JSON.parse(val);
      } catch {
        data.tags = [];
      }
    } else if (key === "id" || key === "title" || key === "date" || key === "summary" || key === "category") {
      (data as any)[key] = val;
    }
  }
  return { data, content };
}

// 静态字面量 glob（vite:dep-scan 只支持字面量）
const ZH_MODULES = import.meta.glob("../content/articles/zh/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const EN_MODULES = import.meta.glob("../content/articles/en/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function loadArticles(lang: "zh" | "en"): Article[] {
  const modules = lang === "zh" ? ZH_MODULES : EN_MODULES;
  const articles: Article[] = [];
  for (const [path, raw] of Object.entries(modules)) {
    const { data, content } = parseFrontmatter(raw);
    const id = path.split("/").pop()!.replace(/\.md$/, "");
    const meta: ArticleMeta = {
      id: data.id || id,
      title: data.title || id,
      date: data.date || "",
      summary: data.summary || "",
      tags: data.tags || [],
      category: (data.category as ArticleMeta["category"]) || "insight",
    };
    articles.push({ ...meta, content: content.trim() });
  }
  articles.sort((a, b) => (a.date < b.date ? 1 : -1));
  return articles;
}

export function useArticles() {
  const lang = useLanguageStore((s) => s.lang);
  return useMemo(() => loadArticles(lang), [lang]);
}

export function useArticle(id?: string) {
  const articles = useArticles();
  return articles.find((a) => a.id === id);
}
