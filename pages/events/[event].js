import client from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
import { usePreview } from "@/sanity/lib/preview";
import ExitPreview from "@/components/sanity/ExitPreview";
import PreviewLoading from "@/components/sanity/PreviewLoading";

import Container from "@/components/global/Container";
import RootLayout from "@/components/global/RootLayout";

import Header from "@/components/pages/events/event/Header";
import EventBar from "@/components/pages/events/event/EventBar";

import { generateColors } from "@/utils/colors";
import { generateDates } from "@/utils/dates";
import UpcomingEvents from "@/components/pages/events/UpcomingEvents";

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
}`;

export async function getStaticProps({ preview = false, params }) {
  const { event } = params;

  if (preview) {
    return { props: { preview } };
  }

  const data = await client.fetch(query, {
    slug: event,
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

export default function Event({ preview, data }) {
  return (
    <RootLayout title={data.title + " | Events"}>
      {preview ? (
        <PreviewSuspense fallback={<PreviewLoading />}>
          <PreviewEventPage query={query} />
        </PreviewSuspense>
      ) : (
        <EventPage data={data} />
      )}
    </RootLayout>
  );
}

function EventPage({ data }) {
  let colors = generateColors(
    data?.image?.colors.dominant.background || "#007aff",
    data?.image?.colors.darkVibrant.background || "#007aff"
  );

  let date = generateDates(data?.dateRange, data?.date);

  return (
    <>
      <EventBar data={data} />
      <Header data={data} colors={colors} date={date} />
      <Container></Container>
      <UpcomingEvents />
    </>
  );
}

function PreviewEventPage({ query }) {
  const data = usePreview(null, query);

  return (
    <>
      <EventPage data={data} />
      <ExitPreview />
    </>
  );
}
