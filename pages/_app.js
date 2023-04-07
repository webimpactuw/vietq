import "@/styles/globals.css";
import localFont from "next/font/local";

const beVietnam = localFont({
  variable: "--font-be-vietnam",
  src: [
    {
      path: "../fonts/BeVietnam/BeVietnam-Black.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/BeVietnam/BeVietnam-BlackItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/BeVietnam/BeVietnam-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/BeVietnam/BeVietnam-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/BeVietnam/BeVietnam-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/BeVietnam/BeVietnam-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/BeVietnam/BeVietnam-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/BeVietnam/BeVietnam-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/BeVietnam/BeVietnam-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/BeVietnam/BeVietnam-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});

const cabinetGrotesk = localFont({
  src: [
    {
      path: "../fonts/CabinetGrotesk/CabinetGrotesk-Variable.ttf",
      weight: "variable",
    },
  ],
  variable: "--font-cabinet-grotesk",
});

export default function App({ Component, pageProps }) {
  return (
    <div
      className={`${beVietnam.variable} ${cabinetGrotesk.variable} font-sans`}
    >
      <Component {...pageProps} />
    </div>
  );
}
