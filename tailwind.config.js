/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        bg: "#f5f5f0",
        surface: "#ffffff",
        "surface-alt": "#fafafa",
        ink: {
          DEFAULT: "#111111",
          muted: "#555555",
          faint: "#888888",
        },
        border: "#e0e0e0",
      },
      fontFamily: {
        display: ['"Fraunces"', '"Noto Serif SC"', "serif"],
        body: ['"Manrope"', '"Noto Sans SC"', "sans-serif"],
      },
      fontSize: {
        "hero-title": ["80px", { lineHeight: "0.92", letterSpacing: "-3px", fontWeight: "900" }],
        "section-title": ["68px", { lineHeight: "1", letterSpacing: "-2px", fontWeight: "900" }],
        "section-h2": ["52px", { lineHeight: "1.05", letterSpacing: "-1.5px", fontWeight: "900" }],
        "marquee": ["72px", { lineHeight: "1", letterSpacing: "-2px", fontWeight: "900" }],
      },
      borderRadius: {
        card: "20px",
        "card-lg": "28px",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
