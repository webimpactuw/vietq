import client from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
import { usePreview } from "@/sanity/lib/preview";

import RootLayout from "@/components/global/RootLayout";
// import Header from "@/components/pages/about/Header";
// import Summary from "@/components/pages/about/Summary";
// import Team from "@/components/pages/about/Team";
import PreviewLoading from "@/components/sanity/PreviewLoading";
import ExitPreview from "@/components/sanity/ExitPreview";
import Mission from "@/components/pages/about/Mission";
import News from "@/components/pages/about/News";

import dynamic from "next/dynamic";
const Team = dynamic(() => import("@/components/pages/about/Team"));
const Summary = dynamic(() => import("@/components/pages/about/Summary"));
const Header = dynamic(() => import("@/components/pages/about/Header"));

const query = groq`*[_type == "aboutPage"][0] {
  title,
  teamPicture {
   ...,
  "lqip": asset->metadata.lqip,
  },
  aboutSection,
  "members": *[_type == "teamMember"] | order(orderRank) {
    name,
    role,
    bio,
    pronouns,
    image {
      ...,
      "lqip": asset->metadata.lqip,
    },
  },
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

export default function About({ preview, data }) {
  return (
    <RootLayout title="About" preview={preview}>
      {preview ? (
        <PreviewSuspense fallback={<PreviewLoading />}>
          <PreviewAboutPage query={query} />
        </PreviewSuspense>
      ) : (
        <AboutPage data={data} />
      )}
    </RootLayout>
  );
}

function AboutPage({ data }) {
  return (
    <>
      <Header data={data} />
      <Mission data={data} />
      <Summary data={data} />
      <News />
      <Team data={data.members} />
    </>
  );
}

function PreviewAboutPage({ query }) {
  const data = usePreview(null, query);

  return (
    <>
      <AboutPage data={data} />
      <ExitPreview />
    </>
  );
}
