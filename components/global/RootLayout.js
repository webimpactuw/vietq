import Head from "next/head";

import dynamic from "next/dynamic";
const Footer = dynamic(() => import("./navigation/Footer"));
const Navbar = dynamic(() => import("./navigation/Navbar"));
const CallToAction = dynamic(() => import("./CallToAction"));

const defaultTitle = "VietQ";
const defaultDesc = "This is VietQ's website";

export default function RootLayout({
  title = defaultTitle,
  desc = defaultDesc,
  children,
  navTransparent = false,
  preview = false,
}) {
  return (
    <>
      <Head>
        <title>
          {title != defaultTitle ? title + ` | ${defaultTitle}` : title}
        </title>
        <meta
          name="title"
          content={title != defaultTitle ? title + ` | ${defaultTitle}` : title}
        />
        <meta name="description" content="{desc}" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://team2714.com/" />
        <meta
          property="og:title"
          content={title != defaultTitle ? title + ` | ${defaultTitle}` : title}
        />
        <meta property="og:description" content={desc} />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta
          name="apple-mobile-web-app-title"
          content={title != defaultTitle ? title + ` | ${defaultTitle}` : title}
        />
        <link rel="icon" href="favicon.png" />
        <link rel="apple-touch-icon" href="app-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="app-icon.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="app-icon.png" />
      </Head>
      <Navbar transparent={navTransparent} preview={preview} />
      <div
        className={
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }
      >
        {children}
      </div>
      <CallToAction preview={preview} />
      <Footer preview={preview} />
    </>
  );
}
