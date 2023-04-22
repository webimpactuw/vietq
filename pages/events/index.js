import client from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
import { usePreview } from "@/sanity/lib/preview";

import EventCard from "@/components/cards/EventCard";
import Container from "@/components/global/Container";
import RootLayout from "@/components/global/RootLayout";
import { useEffect, useState } from "react";

import { generateDate } from "@/utils/dates";

import TextTransition, { presets } from "react-text-transition";

import { generateColors } from "@/utils/colors";

const query = groq`*[_type == "event" ] | order(dateRange.start asc) {
  title,
  image {
   ...,
  "lqip": asset->metadata.lqip,
  "colors": asset->metadata.palette,
  },
  date,
  dateRange,
  "slug": slug.current,
}`;

export async function getStaticProps() {
  const data = await client.fetch(query);

  return {
    props: { data },
    revalidate: parseInt(process.env.NEXT_PUBLIC_REVALIDATE),
  };
}

export default function Events({ data }) {
  const [selected, setSelected] = useState({});
  const [size, setSize] = useState([0, 0]);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);

    const eventHeader = document.getElementById("event-header");
    setDistance(window.innerWidth - eventHeader.getBoundingClientRect().right);

    return () => window.removeEventListener("resize", updateSize);
  }, [size]);

  return (
    <RootLayout title="Events" navTransparent={true}>
      <Header />
      <div
        className={`bg-blue-900 space-y-8 pt-24 text-champagne overflow-hidden transition-colors`}
        style={{
          backgroundColor: selected.bg,
        }}
      >
        <div
          className="px-4 max-w-6xl mx-auto space-y-8 h-28 md:h-32"
          id="event-header"
        >
          {selected.content ? (
            <div className="space-y-4">
              <div className="flex items-center justify-start space-x-2">
                <Pill>Workshop</Pill>
                <Pill>Virtual</Pill>
                <Pill>Free</Pill>
              </div>
              <TextTransition springConfig={presets.slow}>
                <div className="space-y-1">
                  <h2 className="text-lg md:text-xl font-bold tracking-tight font-display leading-tight">
                    {/* INSERT DATE{" "}
                    {format(new Date(selected.date), "EEEE, MMMM do, yyyy")} */}
                    {selected.date}
                  </h2>

                  <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display leading-tight">
                    {selected.content}
                  </h2>
                </div>
              </TextTransition>
            </div>
          ) : (
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter font-display leading-tight">
              Upcoming Events
            </h2>
          )}
        </div>
        <div
          className={`flex items-center justify-start overflow-x-scroll p-8 no-scrollbar md:pl-0 pb-16`}
          style={{
            paddingLeft: distance,
          }}
        >
          {data.map((event, i) => (
            <CustomEventCard
              key={i}
              setSelected={setSelected}
              i={i}
              distance={distance}
              data={event}
            />
          ))}
        </div>
      </div>
    </RootLayout>
  );
}

function CustomEventCard({ data, i, setSelected }) {
  let colors = generateColors(
    data?.image?.colors.dominant.background || "#007aff",
    data?.image?.colors.darkVibrant.background || "#007aff"
  );

  let date = generateDate(data?.dateRange, data?.date);

  return (
    <div
      onMouseEnter={() =>
        setSelected({
          bg: colors["900"].color,
          content: data.title,
          date: date.longest,
        })
      }
      id={`event-card-${i}`}
      onMouseLeave={() => setSelected({})}
      className="pr-4 md:pr-8 last:pr-0 first:pl-4 md:first:pl-0"
    >
      <EventCard data={data} colors={colors} date={date} />
    </div>
  );
}

function Pill({ children }) {
  return (
    <div className="text-xxs md:text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest border border-champagne-200 bg-champagne text-champagne-900">
      {children}
    </div>
  );
}

function Header() {
  return (
    <div className="border-b border-blue-900 bg-gradient-to-b from-blue-900 to-blue-800 text-white pb-4 md:pb-16 overflow-hidden ">
      <Container>
        <div className="pt-24 md:pt-32 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16">
          <div className="space-y-8 col-span-2">
            <div className="space-y-2 col-span-2">
              <h3 className="text-2xl font-bold tracking-tighter font-display">
                Events
              </h3>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter font-display leading-tight">
                Here's what's coming up
              </h1>
            </div>
            <p className="text-lg md:text-xl font-medium text-white/75">
              At VietQ, we host a variety of events throughout the year. From
              networking events to workshops, we have something for everyone.
            </p>
            <div className="flex items-center justify-start space-x-2">
              <button className="inline-flex uppercase tracking-widest items-center px-3.5 py-2 border rounded-full bg-blue-50 hover:bg-blue-100 hover:border-blue-100 transition-colors font-semibold text-blue-800 border-blue-50 text-xs">
                Upcoming events
              </button>
              <button className="inline-flex uppercase tracking-widest items-center px-3.5 py-2 text-blue-50 font-semibold text-xs hover:text-blue-100 transition-colors">
                Past events
              </button>
            </div>
          </div>
          <div className="col-span-3 relative"></div>
        </div>
      </Container>
    </div>
  );
}
