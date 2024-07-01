"use client";

import EventCard from "@/components/cards/EventCard";
import Container from "@/components/global/Container";
import Pagination from "@/components/global/Pagination";
import { generateColors } from "@/utils/colors";
import { generateDates } from "@/utils/dates";

import { useState } from "react";

import useSWR from "swr";

const fetcher = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_SERVER_API_KEY}`,
    },
  }).then((res) => res.json());

export default function PastEvents() {
  const [pageIndex, setPageIndex] = useState(1);

  const { data, isLoading, error } = useSWR(
    `/api/events?page=${pageIndex}`,
    fetcher
  );

  return (
    <Container id="past-events">
      <div className="pt-16 pb-0 relative space-y-16">
        <h2 className="font-display text-6xl tracking-tighter font-semibold ">
          Past Events
        </h2>
        <div className="space-y-16">
          <div className="grid grid-cols-4 gap-4">
            {data && !error
              ? data.events.map((event) => (
                  <EventCard
                    key={event.slug}
                    data={event}
                    colors={generateColors(
                      event?.image?.colors.dominant.background || "#007aff",
                      event?.image?.colors.darkVibrant.background || "#007aff"
                    )}
                    date={generateDates(event?.dateRange, event?.date)}
                  />
                ))
              : null}
          </div>
          <Pagination
            pageCount={data?.totalPages}
            setPageIndex={setPageIndex}
          />
        </div>
      </div>
    </Container>
  );
}
