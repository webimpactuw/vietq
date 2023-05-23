import Container from "@/components/global/Container";
import UniversalResourceCard from "@/components/cards/UniversalResourceCard";

import useSWR from "swr";
import { useState } from "react";
import Pagination from "@/components/global/Pagination";

const fetcher = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_SERVER_API_KEY}`,
    },
  }).then((res) => res.json());

export default function AllResources() {
  const [pageIndex, setPageIndex] = useState(0);

  const { data, isLoading, error } = useSWR(
    `/api/community?page=${pageIndex}`,
    fetcher
  );

  return (
    <Container>
      <div className="pt-24 pb-32 relative z-10 space-y-4">
        <h2 className="font-display text-6xl tracking-tighter font-semibold ">
          All Resources
        </h2>
        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data && !error
              ? data.resources.map((resource) => (
                  <UniversalResourceCard
                    resource={resource}
                    key={resource.slug}
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
