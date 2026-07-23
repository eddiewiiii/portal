import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/writing", label: t("nav.writing") },
    { to: "/about", label: t("nav.about") },
  ];

  return (
    <footer className="border-t border-border px-5 sm:px-8 lg:px-12 py-8 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-7 h-7 bg-ink rounded-md flex items-center justify-center text-bg text-[10px] font-black">
          ZY
        </div>
      </Link>

      <nav>
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="text-xs text-ink-faint font-medium hover:text-ink transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
