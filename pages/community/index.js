import RootLayout from "@/components/global/RootLayout";

import client from "@/sanity/lib/client";
import { groq } from "next-sanity";
import PreviewLoading from "@/components/sanity/PreviewLoading";
import { PreviewSuspense } from "next-sanity/preview";
import ExitPreview from "@/components/sanity/ExitPreview";
import { usePreview } from "@/sanity/lib/preview";

import dynamic from "next/dynamic";
const AllResources = dynamic(() =>
  import("@/components/pages/community/AllResources")
);
const FromTheBlog = dynamic(() =>
  import("@/components/pages/community/FromTheBlog")
);
const Header = dynamic(() => import("@/components/pages/community/Header"));

const query = groq`*[_type == "communityPage"][0] {
    ...,
    heroImage {
      ...,
      "lqip": asset->metadata.lqip,
    }
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

export default function Community({ preview, data }) {
  return (
    <RootLayout title="Community" navTransparent={true} preview={preview}>
      {preview ? (
        <PreviewSuspense fallback={<PreviewLoading />}>
          <PreviewCommunityPage query={query} />
        </PreviewSuspense>
      ) : (
        <CommunityPage data={data} />
      )}
    </RootLayout>
  );
}

function CommunityPage({ data }) {
  return (
    <>
      <Header data={data} />
      <FromTheBlog />
      <AllResources />
    </>
  );
}

function PreviewCommunityPage({ query }) {
  const data = usePreview(null, query);

  return (
    <>
      <CommunityPage data={data} />
      <ExitPreview />
    </>
  );
}
