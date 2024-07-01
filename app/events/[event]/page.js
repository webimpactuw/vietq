import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

import Container from "@/components/global/Container";

import { generateColors } from "@/utils/colors";
import { generateDates } from "@/utils/dates";

import EventBar from "./components/EventBar";

import Header from "./components/Header";
import UpcomingEvents from "../components/UpcomingEvents";

import Virtual from "./components/Virtual";
import EventBody from "./components/EventBody";

import Map from "./components/Map";

export default async function EventPage({ params }) {
  const data = await getEventData(params.event);

  return <EventPageMain data={data} />;
}

function EventPageMain({ data }) {
  let colors = generateColors(
    data?.image?.colors.dominant.background || "#007aff",
    data?.image?.colors.darkVibrant.background || "#007aff"
  );

  let date = generateDates(data?.dateRange, data?.date);

  return (
    <>
      <EventBar data={data} />
      <Header data={data} colors={colors} date={date} />
      <Container>
        <div className="md:grid md:grid-cols-5 gap-4 md:gap-8 pt-4 md:py-8">
          <EventBody data={data} />
          <div className="col-span-2 pt-8">
            {data.location?.virtual ? (
              <Virtual location={data.location} />
            ) : data.location ? (
              <Map location={data.location} />
            ) : null}
          </div>
        </div>
      </Container>
      <UpcomingEvents ignore={[data.slug]} />
    </>
  );
}

async function getEventData(slug) {
  const query = groq`*[_type == "event" && slug.current==$slug][0] {
  title,
  "slug": slug.current,
  image {
    ...,
    "lqip": asset->metadata.lqip,
    "colors": asset->metadata.palette,
  },
  description,
  location,
  dateRange,
  content,
  tags,
  relatedLinks
}`;

  const data = await client.fetch(query, {
    slug: slug,
  });

  return data;
}
