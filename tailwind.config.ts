import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fdf9e9",
          100: "#faf0c5",
          200: "#f6e08d",
          300: "#f1c94c",
          400: "#ecb320",
          500: "#dc9a13",
          600: "#be760d",
          700: "#98550e",
          800: "#7e4413",
          900: "#6b3816",
        },
        emerald2: {
          50: "#effaf3",
          100: "#d8f3e0",
          500: "#0e9f4f",
          600: "#078043",
          700: "#066637",
          800: "#07512e",
          900: "#064227",
        },
        terra: {
          50: "#fef4ee",
          100: "#fde5d7",
          400: "#f77b3d",
          500: "#f45d18",
          600: "#e5440e",
          700: "#be320e",
          800: "#972a13",
        },
        ink: "#151310",
        cream: "#fffbf2",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin 14s linear infinite",
        float: "float 5s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
