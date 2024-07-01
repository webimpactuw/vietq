"use client";

import { useEffect, useState, useRef } from "react";

import TextTransition, { presets } from "react-text-transition";

import { generateDates } from "@/utils/dates";
import { generateColors } from "@/utils/colors";

import { useBreakpoint } from "@/utils/responsive";

import dynamic from "next/dynamic";
const EventCard = dynamic(() => import("@/components/cards/EventCard"));

import useSWR from "swr";

const fetcher = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_SERVER_API_KEY}`,
    },
  }).then((res) => res.json());

import Pills from "./Pills";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

export default function UpcomingEvents({ ignore = [] }) {
  const { data, error, isLoading } = useSWR("/api/events/upcoming", fetcher);

  const [selected, setSelected] = useState({});
  const [size, setSize] = useState([0, 0]);
  const [distance, setDistance] = useState(0);

  const scrollView = useRef(null);

  const scroll = (scrollOffset) => {
    scrollView.current.scrollLeft += scrollOffset;
  };

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
      id="upcoming-events"
      className={`space-y-0 pt-24  overflow-hidden transition-background bg-blue-900`}
      style={{
        background: selected.colors ? selected.colors.dark : "#040D1B",
      }}
    >
      <div className="px-4 max-w-6xl mx-auto" id="event-header">
        <div className="flex items-end justify-between pb-8">
          <div className="space-y-8 h-28 md:h-32">
            {selected.content ? (
              <div className="space-y-4">
                <Pills
                  tags={selected.content.tags}
                  virtual={selected.content.location?.virtual}
                  bg={selected.colors.light}
                  text={selected.colors.dark}
                />
                <TextTransition springConfig={presets.slow}>
                  <div
                    className="space-y-1"
                    style={{
                      color: selected.colors
                        ? selected.colors.light
                        : "rgba(255, 255, 255, 1)",
                    }}
                  >
                    <h2 className="text-lg md:text-xl font-bold tracking-tight font-display leading-tight">
                      {selected.date}
                    </h2>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display leading-tight">
                      {selected.content.title}
                    </h2>
                  </div>
                </TextTransition>
              </div>
            ) : (
              <h2 className="text-6xl md:text-8xl font-bold tracking-tightest font-display leading-tight text-white">
                Upcoming Events
              </h2>
            )}
          </div>
          <div className="flex items-center justify-end space-x-2">
            <button
              onClick={() => scroll(-350)}
              className="p-2 rounded-full hover:opacity-75 transition-all"
              style={{
                backgroundColor: selected.colors
                  ? selected.colors.light
                  : "rgba(255, 255, 255, 0.1)",
                color: selected.colors
                  ? selected.colors.dark
                  : "rgba(255, 255, 255,1)",
              }}
            >
              <ArrowLeftIcon className="h-6 w-6" />
            </button>
            <button
              onClick={() => scroll(350)}
              className="p-2 rounded-full hover:opacity-75 transition-all"
              style={{
                backgroundColor: selected.colors
                  ? selected.colors.light
                  : "rgba(255, 255, 255, 0.1)",
                color: selected.colors
                  ? selected.colors.dark
                  : "rgba(255, 255, 255,1)",
              }}
            >
              <ArrowRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <div
        className="scroll snap-x flex items-center justify-start overflow-x-scroll p-8 no-scrollbar md:pl-0 pb-16 scroll-smooth"
        ref={scrollView}
        style={{
          paddingLeft: distance,
        }}
      >
        {data && !error ? (
          data.filter((e) => !ignore.includes(e.slug)).length > 0 ? (
            data
              .filter((e) => !ignore.includes(e.slug))
              .map((event, i) => (
                <InteractiveEventCard
                  key={i}
                  setSelected={setSelected}
                  i={i}
                  distance={distance}
                  data={event}
                />
              ))
          ) : (
            <p className="text-white pb-32">
              There are no upcoming events. Check back later!
            </p>
          )
        ) : (
          Array(8)
            .fill()
            .map((_, i) => <SkeletonEventCard key={i} />)
        )}
      </div>
    </div>
  );
}

function SkeletonEventCard() {
  return (
    <div className="pr-4 md:pr-8 last:pr-0 first:pl-4 md:first:pl-0 pointer-events-none">
      <div className="w-64 h-112 bg-white/5 shrink-0 shadow-2xl rounded-4xl border-2 border-white/5 animate-pulse"></div>
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
                light: colors["100"].color,
              },
              content: {
                title: data.title,
                tags: data.tags,
                location: data.location,
              },
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
