import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Language } from "@/types";

interface LanguageState {
  lang: Language;
  setLang: (lang: Language) => void;
  toggle: () => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      lang: "zh",
      setLang: (lang) => set({ lang }),
      toggle: () => set((s) => ({ lang: s.lang === "zh" ? "en" : "zh" })),
    }),
    { name: "pp-lang" }
  )
);
