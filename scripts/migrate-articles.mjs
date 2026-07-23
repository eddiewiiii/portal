// 文章迁移脚本：从 /workspace/posts/*.md (含 <!-- zh --> / <!-- en --> 标记)
// 转换为 src/content/articles/{zh,en}/{id}.md (带 frontmatter)
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SRC = resolve(__dirname, "..", "..", "posts");
const DEST_ZH = resolve(ROOT, "src", "content", "articles", "zh");
const DEST_EN = resolve(ROOT, "src", "content", "articles", "en");

// 选定迁移的 7 篇文章（用户已批准 PRD 范围）
const SELECTED = [
  { id: "brand0-1", category: "brand" },
  { id: "brand-zero-to-one", category: "brand" },
  { id: "cross-industry-brand", category: "brand" },
  { id: "visual-upgrade", category: "brand" },
  { id: "validate-brand", category: "insight" },
  { id: "ai-content-creation", category: "ai" },
  { id: "bar-experiment", category: "brand" },
];

function loadMeta() {
  const json = JSON.parse(readFileSync(resolve(SRC, "posts.json"), "utf8"));
  const map = {};
  for (const item of json) map[item.id] = item;
  return map;
}

function splitLangs(raw) {
  // 文件格式: <!-- zh -->\n中文内容\n\n<!-- en -->\nEnglish content
  const zhMatch = raw.match(/<!--\s*zh\s*-->([\s\S]*?)(?=<!--\s*en\s*-->|$)/);
  const enMatch = raw.match(/<!--\s*en\s*-->([\s\S]*?)$/);
  return {
    zh: (zhMatch ? zhMatch[1] : raw).trim(),
    en: (enMatch ? enMatch[1] : "").trim(),
  };
}

function buildFrontmatter(meta, lang, category) {
  const title = lang === "zh" ? meta.title_zh : meta.title_en;
  const summary = lang === "zh" ? meta.summary_zh : meta.summary_en;
  const tags = lang === "zh" ? meta.tags_zh : meta.tags_en;
  return [
    "---",
    `id: "${meta.id}"`,
    `title: ${JSON.stringify(title)}`,
    `date: "${meta.date}"`,
    `summary: ${JSON.stringify(summary)}`,
    `tags: ${JSON.stringify(tags)}`,
    `category: "${category}"`,
    `lang: "${lang}"`,
    "---",
    "",
  ].join("\n");
}

function main() {
  if (!existsSync(SRC)) {
    console.error(`Source directory not found: ${SRC}`);
    process.exit(1);
  }
  mkdirSync(DEST_ZH, { recursive: true });
  mkdirSync(DEST_EN, { recursive: true });

  const metaMap = loadMeta();
  let count = 0;

  for (const { id, category } of SELECTED) {
    const meta = metaMap[id];
    if (!meta) {
      console.warn(`  ! meta not found for ${id}, skip`);
      continue;
    }
    const srcFile = resolve(SRC, `${id}.md`);
    if (!existsSync(srcFile)) {
      console.warn(`  ! source file not found: ${srcFile}, skip`);
      continue;
    }
    const raw = readFileSync(srcFile, "utf8");
    const { zh, en } = splitLangs(raw);

    if (zh) {
      writeFileSync(resolve(DEST_ZH, `${id}.md`), buildFrontmatter(meta, "zh", category) + zh + "\n");
      count++;
    }
    if (en) {
      writeFileSync(resolve(DEST_EN, `${id}.md`), buildFrontmatter(meta, "en", category) + en + "\n");
      count++;
    }
    console.log(`  ✓ ${id} → zh/en`);
  }

  console.log(`\nDone. ${count} files written.`);
}

main();
