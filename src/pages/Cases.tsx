import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Download, Copy, Check, ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";

const CASES = [
  { cat: "品牌手册", catKey: "cases.tag1", brand: "cases.brand1", title: "cases.title1", desc: "cases.desc1", type: "cases.type1" },
  { cat: "品牌手册", catKey: "cases.tag1", brand: "cases.brand2", title: "cases.title2", desc: "cases.desc2", type: "cases.type2" },
  { cat: "品牌手册", catKey: "cases.tag1", brand: "cases.brand3", title: "cases.title3", desc: "cases.desc3", type: "cases.type3" },
  { cat: "品牌手册", catKey: "cases.tag1", brand: "cases.brand3", title: "cases.title4", desc: "cases.desc4", type: "cases.type3" },
  { cat: "营销提案", catKey: "cases.tag2", brand: "cases.brand4", title: "cases.title5", desc: "cases.desc5", type: "cases.type4" },
  { cat: "营销提案", catKey: "cases.tag2", brand: "cases.brand5", title: "cases.title6", desc: "cases.desc6", type: "cases.type5" },
  { cat: "营销提案", catKey: "cases.tag2", brand: "cases.brand2", title: "cases.title7", desc: "cases.desc7", type: "cases.type6" },
  { cat: "合作提案", catKey: "cases.tag3", brand: "cases.brand4", title: "cases.title8", desc: "cases.desc8", type: "cases.type7" },
  { cat: "合作提案", catKey: "cases.tag3", brand: "cases.brand1", title: "cases.title9", desc: "cases.desc9", type: "cases.type1" },
  { cat: "合作提案", catKey: "cases.tag3", brand: "cases.brand5", title: "cases.title10", desc: "cases.desc10", type: "cases.type4" },
  { cat: "增长策略", catKey: "cases.tag4", brand: "cases.brand6", title: "cases.title11", desc: "cases.desc11", type: "cases.type8" },
  { cat: "增长策略", catKey: "cases.tag4", brand: "cases.brand6", title: "cases.title12", desc: "cases.desc12", type: "cases.type8" },
  { cat: "增长策略", catKey: "cases.tag4", brand: "cases.brand7", title: "cases.title13", desc: "cases.desc13", type: "cases.type7" },
  { cat: "集团战略", catKey: "cases.tag5", brand: "cases.brand2", title: "cases.title14", desc: "cases.desc14", type: "cases.type5" },
  { cat: "集团战略", catKey: "cases.tag5", brand: "cases.brand2", title: "cases.title15", desc: "cases.desc15", type: "cases.type9" },
  { cat: "集团战略", catKey: "cases.tag5", brand: "cases.brand8", title: "cases.title16", desc: "cases.desc16", type: "cases.type10" },
  { cat: "营销提案", catKey: "cases.tag2", brand: "cases.brand9", title: "cases.title17", desc: "cases.desc17", type: "cases.type5" },
  { cat: "营销提案", catKey: "cases.tag2", brand: "cases.brand4", title: "cases.title18", desc: "cases.desc18", type: "cases.type11" },
  { cat: "营销提案", catKey: "cases.tag2", brand: "cases.brand4", title: "cases.title19", desc: "cases.desc19", type: "cases.type12" },
  { cat: "营销提案", catKey: "cases.tag2", brand: "cases.brand4", title: "cases.title20", desc: "cases.desc20", type: "cases.type13" },
];

const FILTERS = [
  { value: "all", key: "cases.filter_all" },
  { value: "品牌手册", key: "cases.filter_brand" },
  { value: "营销提案", key: "cases.filter_marketing" },
  { value: "增长策略", key: "cases.filter_growth" },
  { value: "合作提案", key: "cases.filter_partner" },
  { value: "集团战略", key: "cases.filter_strategy" },
];

const CLOUD_LINK = "https://yun.139.com/shareweb/#/w/i/2v3En9idzzu9l";
const EXTRACT_CODE = "6hvp";

export default function Cases() {
  const { t } = useTranslation();
  const [active, setActive] = useState("all");
  const [modal, setModal] = useState<{ open: boolean; title: string }>({ open: false, title: "" });
  const [copied, setCopied] = useState(false);

  const visible = CASES.filter((c) => active === "all" || c.cat === active);

  const openModal = (title: string) => {
    setModal({ open: true, title });
    setCopied(false);
  };
  const closeModal = () => setModal({ open: false, title: "" });
  const copyCode = () => {
    navigator.clipboard?.writeText(EXTRACT_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Hero —— 与首页 Hero 保持一致：浅色 / 左对齐 / text-hero-title */}
      <PageHero title={t("cases.hero_title")}>
        <p className="text-base leading-[1.8] text-ink-muted max-w-[520px] mb-12">
          {t("cases.hero_desc_line1")}
          <br />
          {t("cases.hero_desc_line2")}
        </p>
        <div className="flex gap-8 sm:gap-12 text-sm text-ink-muted">
          <div>
            <div className="font-display text-3xl font-black text-ink">20+</div>
            <div>{t("cases.stat_docs")}</div>
          </div>
          <div>
            <div className="font-display text-3xl font-black text-ink">5+</div>
            <div>{t("cases.stat_fields")}</div>
          </div>
          <div>
            <div className="font-display text-3xl font-black text-ink">10+</div>
            <div>{t("cases.stat_brands")}</div>
          </div>
        </div>
      </PageHero>

      {/* Cases */}
      <section className="px-5 sm:px-8 lg:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-ink tracking-tight">
                {t("cases.section_title")}
              </h2>
              <p className="text-ink-faint text-sm mt-1">{t("cases.section_desc")}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  active === f.value
                    ? "bg-ink text-bg"
                    : "bg-surface text-ink-muted hover:bg-border"
                }`}
              >
                {t(f.key)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {visible.map((c, i) => (
              <article
                key={i}
                className="group relative bg-surface-alt border border-border rounded-card p-6 flex flex-col overflow-hidden hover:border-ink/40 hover:shadow-sm transition-all"
              >
                {/* 大号幽灵序号 —— 呼应 now/watching 的序号角标 */}
                <span className="absolute -top-1 right-3 font-display font-black text-ink/10 text-5xl leading-none select-none group-hover:text-ink/15 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-start justify-between mb-3 relative">
                  <span className="text-xs font-semibold bg-ink text-bg px-2.5 py-1 rounded-full">
                    {t(c.catKey)}
                  </span>
                  <span className="text-xs text-ink-faint">{t(c.brand)}</span>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-2 relative">{t(c.title)}</h3>
                <p className="text-sm text-ink-muted leading-relaxed mb-5 flex-1 relative">{t(c.desc)}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border relative">
                  <span className="text-xs text-ink-faint">{t(c.type)}</span>
                  <button
                    onClick={() => openModal(t(c.title))}
                    className="text-sm font-medium text-ink-muted hover:text-ink flex items-center gap-1 transition-colors"
                  >
                    <span>{t("cases.btn_get")}</span>
                    <Download size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {visible.length === 0 && (
            <div className="text-center py-20 text-ink-faint">
              <p className="text-lg">{t("cases.empty_msg")}</p>
            </div>
          )}
        </div>
      </section>

      {/* Download modal */}
      {modal.open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-5"
          onClick={closeModal}
        >
          <div
            className="bg-surface rounded-card-lg p-8 max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-bg flex items-center justify-center text-ink-muted">
              <Download size={28} />
            </div>
            <h3 className="font-display text-lg font-bold text-ink mb-1">{modal.title}</h3>
            <p className="text-sm text-ink-muted mb-6">{t("cases.modal_desc")}</p>
            <div className="bg-bg rounded-xl p-4 mb-5">
              <p className="text-xs text-ink-faint mb-1.5">{t("cases.modal_code_label")}</p>
              <div className="flex items-center justify-center gap-2">
                <code className="text-lg font-bold text-ink tracking-wider bg-surface px-4 py-2 rounded-lg border border-border select-all">
                  {EXTRACT_CODE}
                </code>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1 text-xs font-medium text-ink-muted bg-bg hover:bg-border px-3 py-2 rounded-lg transition-colors"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{t("cases.btn_copy")}</span>
                </button>
              </div>
            </div>
            <a
              href={CLOUD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-ink text-bg px-5 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              <span>{t("cases.modal_link")}</span>
              <ExternalLink size={14} />
            </a>
            <button
              onClick={closeModal}
              className="mt-4 text-xs text-ink-faint hover:text-ink transition-colors"
            >
              {t("cases.btn_close")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}