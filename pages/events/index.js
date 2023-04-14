import client from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
import { usePreview } from "@/sanity/lib/preview";

import EventCard from "@/components/cards/EventCard";
import Container from "@/components/global/Container";
import RootLayout from "@/components/global/RootLayout";
import { useEffect, useState } from "react";

import TextTransition, { presets } from "react-text-transition";
import ColorScheme from "color-scheme";
import { format } from "date-fns";

const query = groq`*[_type == "event"] | order(date asc) {
  title,
  image {
   ...,
  "lqip": asset->metadata.lqip,
  "color": asset->metadata.palette.dominant.background,
  },
  date,
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
        className={`bg-blue-900 space-y-8 pt-24 pb-8 text-champagne overflow-hidden transition-colors`}
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
                    {format(new Date(selected.date), "EEEE, MMMM do, yyyy")}
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
          className={`flex items-center justify-start overflow-x-scroll p-8 no-scrollbar md:pl-0`}
          style={{
            paddingLeft: distance,
          }}
        >
          {data.map((event, i) => (
            <>
              <CustomEventCard
                key={i}
                setSelected={setSelected}
                i={i}
                distance={distance}
                data={event}
              />
            </>
          ))}
        </div>
      </div>
    </RootLayout>
  );
}

function generateColorScheme(base) {
  let colors = new ColorScheme()
    .from_hex(base.replace("#", ""))
    .scheme("mono")
    // .variation("hard")
    .colors();

  return colors.map((color) => {
    return "#" + color;
  });
}

function CustomEventCard({ data, i, setSelected }) {
  let colors = generateColorScheme(data?.image?.color || "#007aff");

  return (
    <div
      onMouseEnter={() =>
        setSelected({
          bg: data.image.color,
          content: data.title,
          date: data.date,
        })
      }
      id={`event-card-${i}`}
      onMouseLeave={() => setSelected({})}
      className="pr-4 md:pr-8 last:pr-0 first:pl-4 md:first:pl-0"
    >
      <div className="inline-flex space-x-2 pb-4">
        {colors.map((color, i) => (
          <div
            key={i}
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      <EventCard data={data} colors={colors} />
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
          <div className="col-span-3 relative">
            <div className="left-24 relative">
              <div className="w-80 h-80 bg-blue-200/50 rounded-full shrink-0 top-12 absolute left-32 blur-3xl" />
              <img
                src="/media/team.jpg"
                alt="Events"
                className="shrink-0 aspect-square object-cover w-72 absolute -rotate-12 top-0 left-10 rounded-2xl border-2 shadow-xl border-white/10  backdrop-blur-xl"
              />
              <img
                src="/media/team.jpg"
                alt="Events"
                className="shrink-0 aspect-square object-cover w-36 absolute top-36 rotate-6 left-0 rounded-2xl border-2 shadow-xl border-white/10  backdrop-blur-xl"
              />
              <img
                src="/media/team.jpg"
                alt="Events"
                className="shrink-0 aspect-square object-cover w-64 absolute top-40 left-72 rotate-12 rounded-2xl border-2 shadow-xl border-white/10 backdrop-blur-xl"
              />
              <img
                src="/media/team.jpg"
                alt="Events"
                className="shrink-0 aspect-square object-cover w-24 absolute top-60 left-56 -rotate-12 rounded-2xl border-2 shadow-xl border-white/10  backdrop-blur-xl"
              />
              <img
                src="/media/team.jpg"
                alt="Events"
                className="shrink-0 aspect-square object-cover w-32 absolute top-20 left-96 rotate-30 rounded-2xl border-2 shadow-xl border-white/10  backdrop-blur-xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

const data = {
  _type: "sanity.imagePalette",
  darkMuted: {
    _type: "sanity.imagePaletteSwatch",
    background: "#4d434c",
    foreground: "#fff",
    population: 6.28,
    title: "#fff",
  },
  darkVibrant: {
    _type: "sanity.imagePaletteSwatch",
    background: "#084b8e",
    foreground: "#fff",
    population: 1.79,
    title: "#fff",
  },
  dominant: {
    _type: "sanity.imagePaletteSwatch",
    background: "#405475",
    foreground: "#fff",
    population: 6.4,
    title: "#fff",
  },
  lightMuted: {
    _type: "sanity.imagePaletteSwatch",
    background: "#c9b4b4",
    foreground: "#000",
    population: 0.52,
    title: "#fff",
  },
  lightVibrant: {
    _type: "sanity.imagePaletteSwatch",
    background: "#74bcfc",
    foreground: "#000",
    population: 0.01,
    title: "#fff",
  },
  muted: {
    _type: "sanity.imagePaletteSwatch",
    background: "#405475",
    foreground: "#fff",
    population: 6.4,
    title: "#fff",
  },
  vibrant: {
    _type: "sanity.imagePaletteSwatch",
    background: "#337ccd",
    foreground: "#fff",
    population: 1.94,
    title: "#fff",
  },
};
