import RootLayout from "@/components/global/RootLayout";
import Container from "@/components/global/Container";

import BlogPostCard from "@/components/cards/BlogPostCard";

import client from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Header from "@/components/pages/community/Header";
import FromTheBlog from "@/components/pages/community/FromTheBlog";

export default function Community({ data }) {
  return (
    <RootLayout title="Community" navTransparent={true}>
      <Header />
      <Container>
        <FromTheBlog />
      </Container>
      <div className="bg-green-900 p-8">
        <Container></Container>
      </div>
      <Container>
        <RecentResources />
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

function RecentResources() {
  return <div></div>;
}
