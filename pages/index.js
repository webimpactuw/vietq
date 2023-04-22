import client from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
import { usePreview } from "@/sanity/lib/preview";
import ExitPreview from "@/components/sanity/ExitPreview";
import PreviewLoading from "@/components/sanity/PreviewLoading";

import Container from "@/components/global/Container";
import RootLayout from "@/components/global/RootLayout";
import Hero from "@/components/pages/home/Hero";

const query = groq`*[_type == "homePage"][0]{
  title,
  description
}`;

export async function getStaticProps({ preview = false }) {
  if (preview) {
    return { props: { preview } };
  }

  const data = await client.fetch(query);

  return {
    props: { preview, data },
    revalidate: parseInt(process.env.NEXT_PUBLIC_REVALIDATE),
  };
}

export default function Home({ preview, data }) {
  return (
    <RootLayout navTransparent={true} preview={preview}>
      {preview ? (
        <PreviewSuspense fallback={<PreviewLoading />}>
          <PreviewHomePage query={query} />
        </PreviewSuspense>
      ) : (
        <HomePage data={data} />
      )}
    </RootLayout>
  );
}

function HomePage({ data }) {
  return (
    <>
      <Hero data={data} />
      <Container></Container>
    </>
  );
}

function PreviewHomePage({ query }) {
  const data = usePreview(null, query);

  return (
    <>
      <HomePage data={data} />
      <ExitPreview />
    </>
  );
}
