import EventCard from "@/components/cards/EventCard";
import Container from "@/components/global/Container";
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

// const fetcher = async (url) => {
//   try {
//     const response = await fetch(url, {
//       headers: {
//         Authorization: `Bearer ${process.env.SERVER_API_KEY}`,
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error("Failed to fetch data");
//   }
// };

export default function PastEvents() {
  const [pageIndex, setPageIndex] = useState(0);

  const { data, isLoading, error } = useSWR(
    `/api/events?page=${pageIndex}`,
    fetcher
  );

  return (
    <Container>
      <div className="grid grid-cols-3 gap-4">
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
      <button
        onClick={() => setPageIndex(pageIndex - 1)}
        disabled={pageIndex === 0}
        className={`${pageIndex === 0 ? "bg-red-500" : ""}`}
      >
        Previous
      </button>
      <button
        onClick={() => setPageIndex(pageIndex + 1)}
        disabled={data?.page + 1 === data?.totalPages}
        className={`${data?.page + 1 === data?.totalPages ? "bg-red-500" : ""}`}
      >
        Next
      </button>
    </Container>
  );
}
