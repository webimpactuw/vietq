export const revalidate = 60

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

import Mission from "./components/Mission";
import Team from "./components/Team";
import Summary from "./components/Summary";
import Header from "./components/Header";
import News from "./components/News";

export default async function AboutPage({}) {
  const data = await getAboutData();

  return (
    <>
      <Header data={data.headerSection} />
      <Mission data={data} />
      <Summary data={data.aboutSection} />
      <News data={data.news} />
      <Team data={data.members} />
    </>
  );
}

export async function getAboutData() {
  const query = groq`*[_type == "aboutPage"][0] {
  ...,
  headerSection {
    ...,
    teamPicture {
      ...,
    "lqip": asset->metadata.lqip,
    },
  },
  "members": *[_type == "teamMember"] | order(orderRank) {
    name,
    bio,
    "previous": coalesce(previous, false),
    pronouns,
    image {
      ...,
      "lqip": asset->metadata.lqip,
    },
  },
}`;

  const data = await client.fetch(query);

  return data;
}
