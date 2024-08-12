import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        c_black: "#010715",
        c_yellow: "#FFE81A",
        c_purple: "#4C29FF",
        c_white: "#F5F6FF",
      },
      fontFamily: {
        yipes: ["var(--font-yipes)"],
        luxury: ["var(--font-luxury)"],
        luxuryScript: ["var(--font-luxuryScript)"],
        maxima: ["var(--font-maxima)"],
      },
    },
  },
  plugins: [require("@pyncz/tailwind-mask-image"),],
};
export default config;
