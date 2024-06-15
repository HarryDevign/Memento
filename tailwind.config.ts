import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: "#2C1C5F",
          900: "#42307D",
          800: "#53389E",
          700: "#6941C6",
          600: "#7F56D9",
          500: "#9E77ED",
          400: "#B692F6",
          300: "#D6BBFB",
          200: "#E9D7FE",
          100: "#F4EBFF",
          50: "#F9F5FF",
          25: "#FCFAFF",
        },
        grayLight: {
          950: "#0C111D",
          900: "#101828",
          800: "#182230",
          700: "#344054",
          600: "#475467",
          500: "#667085",
          400: "#98A2B3",
          300: "#D0D5DD",
          200: "#EAECF0",
          100: "#F2F4F7",
          50: "#F9FAFB",
          25: "#FCFCFD",
        },
        grayDark: {
          950: "#0C111D",
          900: "#161B26",
          800: "#1F242F",
          700: "#333741",
          600: "#61646C",
          500: "#85888E",
          400: "#94969C",
          300: "#CECFD2",
          200: "#ECECED",
          100: "#F0F1F1",
          50: "#F5F5F6",
          25: "#FAFAFA",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;