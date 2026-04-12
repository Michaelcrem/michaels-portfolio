import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "theme-curtain": {
          "0%": { transform: "translateY(-100%)" },
          "40%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "theme-curtain": "theme-curtain 350ms cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
