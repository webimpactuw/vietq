import { useEffect, useState } from "react";

import TextTransition, { presets } from "react-text-transition";

import { generateDates } from "@/utils/dates";
import { generateColors } from "@/utils/colors";

import { useBreakpoint } from "@/utils/responsive";

import dynamic from "next/dynamic";
const EventCard = dynamic(() => import("@/components/cards/EventCard"));

export default function UpcomingEvents({ data }) {
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
    <div
      className={`space-y-8 pt-24 text-champagne overflow-hidden transition-background bg-blue-900`}
      style={{
        background: selected.colors ? selected.colors.dark : "#040D1B",
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
          <InteractiveEventCard
            key={i}
            setSelected={setSelected}
            i={i}
            distance={distance}
            data={event}
          />
        ))}
      </div>
    </div>
  );
}

function InteractiveEventCard({ data, i, setSelected }) {
  let colors = generateColors(
    data?.image?.colors.dominant.background || "#007aff",
    data?.image?.colors.darkVibrant.background || "#007aff"
  );

  let date = generateDates(data?.dateRange, data?.date);

  const breakpoint = useBreakpoint("md");

  return (
    <div
      onMouseEnter={() =>
        !breakpoint
          ? setSelected({
              colors: {
                dark: colors["900"].color,
                light: colors["500"].color,
              },
              content: data.title,
              date: date.longest,
            })
          : null
      }
      id={`event-card-${i}`}
      onMouseLeave={() => (!breakpoint ? setSelected({}) : null)}
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
