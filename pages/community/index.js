import RootLayout from "@/components/global/RootLayout";
import Container from "@/components/global/Container";

import BlogPostCard from "@/components/cards/BlogPostCard";

import client from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default function Community({ data }) {
  return (
    <RootLayout title="Community">
      <Container>
        <div className="py-24 text-center tracking-tight">
          <h1 className="text-3xl font-bold">From the blog</h1>
          <p className="text-gray-500">
            Learn how to grow your business with expert advice
          </p>
        </div>
        <div className="grid grid-cols-3 gap-12">
          {Array(3)
            .fill()
            .map((_, i) =>
              data.map((post) => <BlogPostCard key={post.slug} data={post} />)
            )}
        </div>
      </Container>
    </RootLayout>
  );
}

export async function getStaticProps() {
  const data = await client.fetch(groq`
    *[_type == "blogPost"] {
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
      content[_type=="block" && style=="normal"]
    }`);

  return {
    props: {
      data,
    },
  };
}
