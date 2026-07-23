import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/writing", label: t("nav.writing") },
    { to: "/music", label: t("nav.music") },
    { to: "/about", label: t("nav.about") },
    { to: "/resume", label: t("nav.resume") },
    { to: "/cases", label: t("nav.cases") },
    { to: "/timeline", label: t("nav.timeline") },
  ];

  return (
    <header className="bg-bg border-b border-border sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-5 sm:px-8 lg:px-12 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <img
            src="/logo.png"
            alt="周聿川 EDDIE"
            className="w-7 h-7 rounded-md object-contain"
          />
          <span
            className="font-display font-extrabold tracking-tight text-lg hidden sm:block"
            style={{ letterSpacing: "-0.5px" }}
          >
            周聿川 <span className="text-ink-faint font-medium">EDDIE</span>
          </span>
        </Link>

        {/* Nav (desktop) */}
        <nav>
          <ul className="hidden md:flex gap-6 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`text-[13px] font-medium transition-colors hover:text-ink ${
                    location.pathname === item.to ? "text-ink" : "text-ink-muted"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          {/* Hamburger (mobile) */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="菜单"
            className="md:hidden flex flex-col gap-1.5 p-1"
          >
            <span
              className={`block w-5 h-0.5 bg-ink transition-transform ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-ink transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-ink transition-transform ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-border bg-bg">
          <ul className="flex flex-col px-5 py-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-3 text-sm font-medium border-b border-border/60 last:border-0 transition-colors hover:text-ink ${
                    location.pathname === item.to ? "text-ink" : "text-ink-muted"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}