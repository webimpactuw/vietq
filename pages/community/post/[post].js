import client from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
import { usePreview } from "@/sanity/lib/preview";
import ExitPreview from "@/components/sanity/ExitPreview";
import PreviewLoading from "@/components/sanity/PreviewLoading";

import Container from "@/components/global/Container";
import RootLayout from "@/components/global/RootLayout";

import PostBar from "@/components/pages/community/post/PostBar";
import PostBody from "@/components/pages/community/post/PostBody";
import RecentPosts from "@/components/pages/community/post/RecentPosts";

const query = groq`*[_type == "blogPost" && slug.current==$slug][0]{
  title,
  "slug": slug.current,
  "author": author->{
    name,
    image,
    role
  },
  date,
  image {
    ...,
    "lqip": asset->metadata.lqip
  },
  content[] {
    ...,
    _type == "image" => {
      ...,
      "lqip": asset->metadata.lqip
    }
  }
}`;

export async function getStaticProps({ preview = false, params }) {
  const { post } = params;

  if (preview) {
    return { props: { preview } };
  }

  const data = await client.fetch(query, {
    slug: post,
  });

  return data
    ? {
        props: { preview, data },
        revalidate: parseInt(process.env.NEXT_PUBLIC_REVALIDATE),
      }
    : {
        notFound: true,
      };
}

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export default function Post({ preview, data }) {
  return (
    <RootLayout
      title={data.title + " | Community"}
      navTransparent={false}
      preview={preview}
    >
      {preview ? (
        <PreviewSuspense fallback={<PreviewLoading />}>
          <PreviewPostPage query={query} />
        </PreviewSuspense>
      ) : (
        <PostPage data={data} />
      )}
    </RootLayout>
  );
}

function PostPage({ data }) {
  return (
    <>
      <PostBar data={data} />
      <Container>
        <PostBody data={data} />
        <RecentPosts />
      </Container>
    </>
  );
}

function PreviewPostPage({ query }) {
  const data = usePreview(null, query);

  return (
    <>
      <PostPage data={data} />
      <ExitPreview />
    </>
  );
}
