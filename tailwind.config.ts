import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080B12",
        navy: "#0B1C2C",
        graphite: "#172033",
        gold: "#C8A96A",
        mist: "#EEF2F6"
      },
      boxShadow: {
        premium: "0 24px 70px rgba(8, 11, 18, 0.18)",
        glow: "0 0 34px rgba(200, 169, 106, 0.34)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
