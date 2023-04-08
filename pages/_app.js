import "@/styles/globals.css";
import localFont from "next/font/local";

const beVietnamDisplay = localFont({
  variable: "--font-be-vietnam-display",
  src: [
    {
      path: "../fonts/BeVietnam-Display/BeVietnam-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/BeVietnam-Display/BeVietnam-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/BeVietnam-Display/BeVietnam-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/BeVietnam-Display/BeVietnam-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/BeVietnam-Display/BeVietnam-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/BeVietnam-Display/BeVietnam-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/BeVietnam-Display/BeVietnam-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/BeVietnam-Display/BeVietnam-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/BeVietnam-Display/BeVietnam-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/BeVietnam-Display/BeVietnam-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});

const beVietnamText = localFont({
  variable: "--font-be-vietnam-text",
  src: [
    {
      path: "../fonts/BeVietnam-Text/BeVietnam-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/BeVietnam-Text/BeVietnam-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/BeVietnam-Text/BeVietnam-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/BeVietnam-Text/BeVietnam-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/BeVietnam-Text/BeVietnam-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/BeVietnam-Text/BeVietnam-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/BeVietnam-Text/BeVietnam-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/BeVietnam-Text/BeVietnam-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/BeVietnam-Text/BeVietnam-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/BeVietnam-Text/BeVietnam-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <div
      className={`${beVietnamDisplay.variable} ${beVietnamText.variable} font-sans`}
    >
      <Component {...pageProps} />
    </div>
  );
}
