import nowData from "./now.json";

export interface NowItem {
  id: string;
  emoji: string;
  tag: string;
  /** 封面改为运行时拉取（iTunes / Open Library）；此字段可留空，留着则作为拉取失败时的兜底 */
  cover?: string;
  title: { zh: string; en: string };
  creator: { zh: string; en: string };
  note: { zh: string; en: string };
  /** 书（reading）可选填 ISBN，提高 Open Library 封面命中率；不填则按书名+作者搜 */
  isbn?: string;
}

// 「此刻」三组时令性内容 - 每组 5 条
// 数据来源：src/content/now.json（中英双语，改这里即可更新，无需动组件）
export const nowListening = nowData.listening as NowItem[];
export const nowReading = nowData.reading as NowItem[];
export const nowWatching = nowData.watching as NowItem[];

export interface SkillGroup {
  id: string;
  titleKey: string;
  emoji: string;
  itemsKey: string;
}

export const skillGroups: SkillGroup[] = [
  { id: "brand", titleKey: "skills.brand_title", emoji: "🎯", itemsKey: "skills.brand_items" },
  { id: "growth", titleKey: "skills.growth_title", emoji: "📈", itemsKey: "skills.growth_items" },
  { id: "ops", titleKey: "skills.ops_title", emoji: "⚙️", itemsKey: "skills.ops_items" },
  { id: "tools", titleKey: "skills.tools_title", emoji: "🛠️", itemsKey: "skills.tools_items" },
];

export interface InfluenceItem {
  id: string;
  type: "book" | "movie" | "person";
  titleKey: string;
  noteKey: string;
}

export const influenceItems: InfluenceItem[] = [
  { id: "i1", type: "book", titleKey: "influence.i1_title", noteKey: "influence.i1_note" },
  { id: "i2", type: "book", titleKey: "influence.i2_title", noteKey: "influence.i2_note" },
  { id: "i3", type: "movie", titleKey: "influence.i3_title", noteKey: "influence.i3_note" },
  { id: "i4", type: "person", titleKey: "influence.i4_title", noteKey: "influence.i4_note" },
];
