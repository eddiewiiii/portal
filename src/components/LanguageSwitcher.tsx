import { useLanguageStore } from "@/store/useLanguageStore";

export default function LanguageSwitcher() {
  const { lang, toggle } = useLanguageStore();
  return (
    <button
      onClick={toggle}
      className="px-3 py-1.5 text-xs font-bold rounded-full border border-border bg-bg text-ink hover:border-ink transition-colors"
      aria-label="Switch language"
    >
      {lang === "zh" ? "EN" : "中"}
    </button>
  );
}
