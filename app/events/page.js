export const revalidate = 60

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

import EventTypes from "./components/EventTypes";

import UpcomingEvents from "./components/UpcomingEvents";
import Header from "./components/Header";

import PastEvents from "./components/PastEvents";
export default async function EventsPage({}) {
  const data = await getEventsData();

  return (
    <>
      <Header data={data.headerSection} />
      <EventTypes data={data.eventTypes} />
      <UpcomingEvents />
      <PastEvents />
    </>
  );
}

async function getEventsData() {
  const query = groq`*[_type == "eventsPage"][0] {
  headerSection {
    ...,
    featuredPicture {
      ...,
      "lqip": asset->metadata.lqip,
    },
  },
  eventTypes
}`;

  const data = await client.fetch(query);

  return data;
}
