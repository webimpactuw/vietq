export const revalidate = 60

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Header from "./components/Header";
import FromTheBlog from "./components/FromTheBlog";
import AllResources from "./components/AllResources";

export default async function CommunityPage({}) {
  const data = await getCommunityData();

  return (
    <>
      <Header data={data} />
      <FromTheBlog />
      <AllResources />
    </>
  );
}

async function getCommunityData() {
  const query = groq`*[_type == "communityPage"][0] {
    ...,
    heroImage {
      ...,
      "lqip": asset->metadata.lqip,
    }
}`;

  const data = await client.fetch(query);

  return data;
}
