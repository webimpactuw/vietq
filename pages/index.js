import client from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
import { usePreview } from "@/sanity/lib/preview";
import ExitPreview from "@/components/sanity/ExitPreview";
import PreviewLoading from "@/components/sanity/PreviewLoading";
import RootLayout from "@/components/global/RootLayout";

import dynamic from "next/dynamic";
const PhotoWall = dynamic(() => import("@/components/pages/home/PhotoWall"));
const EventsSection = dynamic(() =>
  import("@/components/pages/home/EventsSection")
);
const Hero = dynamic(() => import("@/components/pages/home/Hero"));
const LandAcknowledgement = dynamic(() =>
  import("@/components/pages/home/LandAcknowledgement")
);
const BigQuote = dynamic(() => import("@/components/pages/home/BigQuote"));
const CommunitySection = dynamic(() =>
  import("@/components/pages/home/CommunitySection")
);

const AboutSection = dynamic(() =>
  import("@/components/pages/home/AboutSection")
);

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
