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
  description,
  heroImage
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
      <div
      className="bg-green-900 text-white py-2">
      <Container>
        <div className="text-center mx-auto space-y-4">
          <h3 className="tracking-widest uppercase md:text-xl font-semibold text-white/50">
          LAND ACKNOWLEDGMENT
          </h3>
          <h2 className="font-semibold text-medium md:text-large leading-tight tracking-tighter font-display">
          We would like to acknowledge that we are on the traditional land of the first people of Seattle, the Duwamish People. Many of us are spread across different areas of Washington with that said so we would also acknowledge the Coast Salish people and the tribes, bands, and nations that exist past, present, and future, and in honor with gratitude the land itself and the Duwamish Tribe and Coast Salish people.
          </h2>
        </div>
      </Container>
    </div>
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
