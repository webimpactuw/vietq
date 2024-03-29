const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "wheat-graphic": "url('/bgs/wheat-background-rgb.svg')",
      },
      transitionProperty: {
        background: "background",
        zIndex: "z-index",
      },
      spacing: {
        76: "19rem",
        112: "30rem",
        128: "32rem",
      },
      aspectRatio: {
        "3/2": "3 / 2",
      },
      letterSpacing: {
        tightest: "-.075em",
        widest: ".15em",
      },
      fontSize: {
        "9/2xl": "2.75rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
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
        orange: {
          DEFAULT: "#FF7842",
          50: "#FFDED1",
          100: "#FFCFBC",
          200: "#FFB294",
          300: "#FF956B",
          400: "#FF7842",
          500: "#FF500A",
          600: "#D13C00",
          700: "#992C00",
          800: "#611C00",
          900: "#280C00",
          950: "#0C0400",
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
        green: {
          DEFAULT: "#35E37C",
          50: "#D6F9E5",
          100: "#C4F7D9",
          200: "#A0F2C2",
          300: "#7DEDAA",
          400: "#59E893",
          500: "#35E37C",
          600: "#1BC560",
          700: "#149348",
          800: "#0E6230",
          900: "#03180C",
        },
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
        purple: {
          DEFAULT: "#543694",
          50: "#CEC2E9",
          100: "#C2B3E3",
          200: "#AA95D8",
          300: "#9377CD",
          400: "#7859C2",
          500: "#6541B2",
          600: "#543694",
          700: "#3D276B",
          800: "#251842",
          900: "#0E0919",
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
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwindcss-debug-screens"),
  ],
};
