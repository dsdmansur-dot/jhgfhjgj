import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f3f0e9",
        ink: "#142027",
        navy: "#10252d",
        accent: "#dc603c",
        muted: "#7a7b74",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-instrument)", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
