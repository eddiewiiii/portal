```tsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/writing", label: t("nav.writing") },
    { to: "/music", label: t("nav.music") },
    { to: "/about", label: t("nav.about") },
  ];

  return (
    <footer className="border-t border-border px-5 sm:px-8 lg:px-12 py-8 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="周聿川 EDDIE"
          className="w-7 h-7 rounded-md object-contain"
        />
      </Link>

      <nav>
        <ul className="flex gap-4 sm:gap-8">
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
```
