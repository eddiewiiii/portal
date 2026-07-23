export interface ArticleMeta {
  id: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  category: "brand" | "insight" | "ai";
}

export interface Article extends ArticleMeta {
  content: string;
}

export interface Project {
  id: string;
  titleKey: string;
  descKey: string;
  emoji: string;
  accent?: boolean;
}

export type Language = "zh" | "en";
