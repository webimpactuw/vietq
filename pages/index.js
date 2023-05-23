import client from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
import { usePreview } from "@/sanity/lib/preview";
import ExitPreview from "@/components/sanity/ExitPreview";
import PreviewLoading from "@/components/sanity/PreviewLoading";
import RootLayout from "@/components/global/RootLayout";

import Hero from "@/components/pages/home/Hero";
import AboutSection from "@/components/pages/home/AboutSection";
import PhotoWall from "@/components/pages/home/PhotoWall";
import BigQuote from "@/components/pages/home/BigQuote";
import EventsSection from "@/components/pages/home/EventsSection";
import CommunitySection from "@/components/pages/home/CommunitySection";
import LandAcknowledgement from "@/components/pages/home/LandAcknowledgement";

const query = groq`*[_type == "homePage"][0]{
  hero {
    ...,
    heroImage {
      ...,
      "lqip": asset->metadata.lqip,
    }
  },
  about {
    ...,
    image {
      ...,
      "lqip": asset->metadata.lqip,
    }
  },
  photoWall {
    images [] {
      ...,
      "lqip": asset->metadata.lqip,
    }
  },
  events {
    ...,
    pictures [] {
      ...,
      image {
        ...,
        "lqip": asset->metadata.lqip,
      }
    }
  },
  community,
  bigQuote
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
      <Hero data={data.hero} />
      <AboutSection data={data.about} />
      <PhotoWall data={data.photoWall} />
      <BigQuote data={data.bigQuote} />
      <EventsSection data={data.events} />
      <CommunitySection data={data.community} />
      <LandAcknowledgement />
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
