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
        void: "#000000",
        abyss: "#030308",
        depth: "#07060F",
        surface: "#0D0B1A",
        "surface-raised": "#141228",
        "surface-glass": "rgba(13, 11, 26, 0.65)",
        pulse: {
          cyan: "#00C8FF",
          blue: "#3B6EFF",
          violet: "#7B2FE8",
          purple: "#A020C8",
          orange: "#FF6B35",
          coral: "#FF8C6B",
        },
        text: {
          primary: "#F0EEFF",
          secondary: "#8B88A8",
          tertiary: "#4A4868",
        },
      },
      backgroundImage: {
        "axo-gradient": "linear-gradient(135deg, #00C8FF 0%, #3B6EFF 25%, #7B2FE8 55%, #FF6B35 100%)",
        "axo-gradient-text": "linear-gradient(90deg, #00C8FF, #7B2FE8, #FF6B35)",
        "axo-gradient-glow": "linear-gradient(135deg, rgba(0,200,255,0.3) 0%, rgba(123,47,232,0.3) 55%, rgba(255,107,53,0.15) 100%)",
      },
      fontFamily: {
        syne: ["var(--font-syne)"],
        sans: ["var(--font-dm-sans)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
