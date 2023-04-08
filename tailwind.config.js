const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        tightest: "-.075em",
        widest: ".15em",
      },
      fontSize: {
        xxs: ".625rem",
        "9/2xl": "2.75rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      rotate: {
        15: "15deg",
        30: "30deg",
      },
      colors: {
        blue: {
          DEFAULT: "#1857AF",
          50: "#B3CEF5",
          100: "#A1C3F2",
          200: "#7DACED",
          300: "#5995E8",
          400: "#357EE3",
          500: "#1D69D3",
          600: "#1857AF",
          700: "#113E7E",
          800: "#0A264C",
          900: "#040D1B",
        },
        red: {
          DEFAULT: "#FB2647",
          50: "#FEDFE4",
          100: "#FECBD3",
          200: "#FD94A4",
          300: "#FC5D76",
          400: "#FB2647",
          500: "#E40427",
          600: "#AD031E",
          700: "#760214",
          800: "#3F010B",
          900: "#080001",
        },
        champagne: {
          DEFAULT: "#FBE9D5",
          50: "#FDF3E8",
          100: "#FBE9D5",
          200: "#F6CEA2",
          300: "#F1B36F",
          400: "#EC993B",
          500: "#DB7D15",
          600: "#A86010",
          700: "#74420B",
          800: "#412506",
          900: "#0E0801",
        },
        purple: {
          DEFAULT: "#543694",
          50: "#CEC2E9",
          100: "#C2B3E3",
          200: "#AA95D8",
          300: "#9377CD",
          400: "#7B59C2",
          500: "#6541B2",
          600: "#543694",
          700: "#3D276B",
          800: "#251842",
          900: "#0E0919",
        },
        yellow: {
          DEFAULT: "#FFB042",
          50: "#FFECD1",
          100: "#FFE3BC",
          200: "#FFD294",
          300: "#FFC16B",
          400: "#FFB042",
          500: "#FF990A",
          600: "#D17A00",
          700: "#995900",
          800: "#613800",
          900: "#281800",
        },
      },
      fontFamily: {
        sans: ["var(--font-be-vietnam-text)", ...defaultTheme.fontFamily.sans],
        display: [
          "var(--font-be-vietnam-display)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
