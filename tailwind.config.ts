import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-primary": "#1D3531",
        "green-active": "#5D8A83",
        "green-border": "#2A4B47",
        "green-btn": "#CCEC60",
        "green-title-cards": "#719D96",
      },
      maxWidth: {
        grid: "77.5rem",
        "text-hero": "66rem",
        "area-icon": "53.4375rem",
        "area-mockups": "59.8125rem",
        "area-cards": "82.5rem",
      },
      height: {
        "section-hero": "54.6rem",
        "area-cards": "35.1rem",
      },
      backgroundImage: {
        hero: "url('/bg-hero.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
