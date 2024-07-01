"use client";

import Link from "next/link";
import Container from "@/components/global/Container";
import { FilledButton } from "@/components/global/Button";
import { useState } from "react";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import CardElement from "./CardElement";

export default function EventsSection({ data }) {
  return (
    <div className="bg-blue-900 text-white bg-wheat-graphic bg-center bg-no-repeat">
      <Container>
        <div className="py-8 md:py-32 md:grid grid-cols-1 md:grid-cols-5 space-y-16 md:space-y-0 md:gap-32">
          <div className="col-span-2 flex items-center justify-center">
            <div className="mx-auto">
              <CardTrick data={data.pictures} />
              <div className="flex items-center justify-center space-x-2 mt-32 text-gray-400">
                <CursorArrowRaysIcon className="w-5 h-5 text-white" />
                <p className="text-sm">
                  Click above to see photos from our past events!
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4 col-span-3 flex items-start justify-center flex-col">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter font-display">
                Events
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display leading-tight">
                {data.title}
              </h2>
            </div>
            <p className="text-base md:text-lg font-medium text-gray-300">
              {data.description}
            </p>
            <Link href="/about">
              <FilledButton dark={false}>Check out our events</FilledButton>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

function CardTrick({ data }) {
  const [current, setCurrent] = useState(0);
  return (
    <div className="relative h-64 w-[15rem] mx-auto md:w-auto md:h-96">
      <CardElement
        current={current}
        setCurrent={setCurrent}
        index={2}
        nextIndex={0}
        data={data[0]}
      />
      <CardElement
        current={current}
        setCurrent={setCurrent}
        index={1}
        nextIndex={2}
        data={data[1]}
      />
      <CardElement
        current={current}
        setCurrent={setCurrent}
        index={0}
        nextIndex={1}
        data={data[2]}
      />
    </div>
  );
}
