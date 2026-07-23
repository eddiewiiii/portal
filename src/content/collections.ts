import l1Cover from "@/assets/now/l1.jpg";
import l2Cover from "@/assets/now/l2.jpg";
import l3Cover from "@/assets/now/l3.jpg";
import l4Cover from "@/assets/now/l4.jpg";
import l5Cover from "@/assets/now/l5.jpg";
import r1Cover from "@/assets/now/r1.jpg";
import r2Cover from "@/assets/now/r2.jpg";
import r3Cover from "@/assets/now/r3.jpg";
import r4Cover from "@/assets/now/r4.jpg";
import r5Cover from "@/assets/now/r5.jpg";
import w1Cover from "@/assets/now/w1.jpg";
import w2Cover from "@/assets/now/w2.jpg";
import w3Cover from "@/assets/now/w3.jpg";
import w4Cover from "@/assets/now/w4.jpg";
import w5Cover from "@/assets/now/w5.jpg";

export interface NowItem {
  id: string;
  titleKey: string;
  creatorKey: string;
  noteKey: string;
  /** 短标签（流派 · 年代），中英文通用，直接字符串 */
  tag: string;
  emoji: string;
  /** 封面图（import 进来的资源，构建时会被内联为 base64） */
  cover?: string;
}

// 「此刻」三组时令性内容 - 每组 5 条
// 顺序：在听 / 在读 / 在看
export const nowListening: NowItem[] = [
  { id: "l1", titleKey: "now.l1_title", creatorKey: "now.l1_creator", noteKey: "now.l1_note", tag: "Pop · 2024", emoji: "🎵", cover: l1Cover },
  { id: "l2", titleKey: "now.l2_title", creatorKey: "now.l2_creator", noteKey: "now.l2_note", tag: "Mandopop · 2007", emoji: "🎧", cover: l2Cover },
  { id: "l3", titleKey: "now.l3_title", creatorKey: "now.l3_creator", noteKey: "now.l3_note", tag: "Folk · 2008", emoji: "🎶", cover: l3Cover },
  { id: "l4", titleKey: "now.l4_title", creatorKey: "now.l4_creator", noteKey: "now.l4_note", tag: "Mandopop · 2002", emoji: "🎷", cover: l4Cover },
  { id: "l5", titleKey: "now.l5_title", creatorKey: "now.l5_creator", noteKey: "now.l5_note", tag: "Synthpop · 2022", emoji: "🎸", cover: l5Cover },
];

export const nowReading: NowItem[] = [
  { id: "r1", titleKey: "now.r1_title", creatorKey: "now.r1_creator", noteKey: "now.r1_note", tag: "Philosophy · 2004", emoji: "📖", cover: r1Cover },
  { id: "r2", titleKey: "now.r2_title", creatorKey: "now.r2_creator", noteKey: "now.r2_note", tag: "Psychology · 2024", emoji: "📚", cover: r2Cover },
  { id: "r3", titleKey: "now.r3_title", creatorKey: "now.r3_creator", noteKey: "now.r3_note", tag: "Philosophy · 2008", emoji: "📰", cover: r3Cover },
  { id: "r4", titleKey: "now.r4_title", creatorKey: "now.r4_creator", noteKey: "now.r4_note", tag: "Memoir · 2019", emoji: "📔", cover: r4Cover },
  { id: "r5", titleKey: "now.r5_title", creatorKey: "now.r5_creator", noteKey: "now.r5_note", tag: "Philosophy · 2016", emoji: "📒", cover: r5Cover },
];

export const nowWatching: NowItem[] = [
  { id: "w1", titleKey: "now.w1_title", creatorKey: "now.w1_creator", noteKey: "now.w1_note", tag: "Drama · 2023", emoji: "🎬", cover: w1Cover },
  { id: "w2", titleKey: "now.w2_title", creatorKey: "now.w2_creator", noteKey: "now.w2_note", tag: "Drama · 2023", emoji: "🎞️", cover: w2Cover },
  { id: "w3", titleKey: "now.w3_title", creatorKey: "now.w3_creator", noteKey: "now.w3_note", tag: "Drama · 2022", emoji: "🎥", cover: w3Cover },
  { id: "w4", titleKey: "now.w4_title", creatorKey: "now.w4_creator", noteKey: "now.w4_note", tag: "Drama · 2018", emoji: "🍿", cover: w4Cover },
  { id: "w5", titleKey: "now.w5_title", creatorKey: "now.w5_creator", noteKey: "now.w5_note", tag: "Drama · 2021", emoji: "🎭", cover: w5Cover },
];

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
