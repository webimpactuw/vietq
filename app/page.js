export const revalidate = 60

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

import PhotoWall from "./components/PhotoWall";
import EventsSection from "./components/EventsSection";
import Hero from "./components/Hero";
import LandAcknowledgement from "./components/LandAcknowledgement";
import BigQuote from "./components/BigQuote";
import CommunitySection from "./components/CommunitySection";
import AboutSection from "./components/AboutSection";

export default async function HomePage() {
  const data = await getHomeData();

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

export async function getHomeData() {
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

  const data = await client.fetch(query);

  return data;
}
