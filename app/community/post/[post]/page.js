export const revalidate = 60
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

import Container from "@/components/global/Container";

import PostBar from "./components/PostBar";

import RecentPosts from "./components/RecentPosts";
import PostBody from "./components/PostBody";

export default async function PostPage({ params }) {
  const data = await getPostData(params.post);

  return (
    <>
      <PostBar data={data} />
      <Container>
        <PostBody data={data} />
        <div className="border-t border-gray-500 pt-16">
          <div className="space-y-8">
            <h2 className="font-display font-bold text-5xl tracking-tighter">
              Recent blog posts
            </h2>
            <RecentPosts ignore={[data.slug]} />
          </div>
        </div>
      </Container>
    </>
  );
}

async function getPostData(slug) {
  const query = groq`*[_type == "blogPost" && slug.current==$slug][0] {
  title,
  "slug": slug.current,
  "author": author->{
    name,
    image,
    pronouns
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

  const data = await client.fetch(query, {
    slug: slug,
  });

  return data;
}
