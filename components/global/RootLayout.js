import Head from "next/head";

import dynamic from "next/dynamic";
const Footer = dynamic(() => import("./navigation/Footer"));
const Navbar = dynamic(() => import("./navigation/Navbar"));
const CallToAction = dynamic(() => import("./CallToAction"));

const defaultTitle = "VietQ";
const defaultDesc =
  "A LGBTQ Vietnamese led community organization based in Seattle, WA";

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
        <meta property="og:url" content="https://vietq.org/" />
        <meta
          property="og:title"
          content={title != defaultTitle ? title + ` | ${defaultTitle}` : title}
        />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content="/full.png" />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta
          name="apple-mobile-web-app-title"
          content={title != defaultTitle ? title + ` | ${defaultTitle}` : title}
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/app-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/app-icon.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/app-icon.png" />
      </Head>
      <Navbar transparent={navTransparent} preview={preview} />
      {children}
      <CallToAction />
      <Footer preview={preview} />
    </>
  );
}
