import Image from "next/image";
import Link from "next/link";
import urlFor from "@/sanity/lib/urlFor";
import Container from "@/components/global/Container";
import { FilledButton } from "@/components/global/Button";
import { useState } from "react";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function EventsSection({ data }) {
  return (
    <div className="bg-gray-900 text-white">
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

function CardElement({
  current,
  setCurrent,
  index,
  nextIndex,
  data,
  // children,
}) {
  return (
    <div
      className={`absolute top-0 left-0 transform transition-all space-y-2 cursor-pointer mx-auto w-60 md:w-76 bg-gray-100 border-gray-500 border shadow-xl hover:shadow-2xl p-3 rounded ${
        current === index
          ? "rotate-0 z-30 hover:scale-105"
          : current === nextIndex
          ? "rotate-[30deg] z-10 md:hover:rotate-[35deg]"
          : "rotate-[15deg] z-20 md:hover:rotate-[20deg]"
      }`}
      onClick={() => setCurrent(index)}
    >
      <Image
        src={urlFor(data.image).auto("format").height(1080).width(1080).url()}
        width={1080}
        height={1080}
        alt={data.description}
        className="w-full rounded-sm border border-gray-900"
        loading="lazy"
        placeholder="blur"
        blurDataURL={data.image.lqip}
      />
      <p
        className={`${
          current === index ? "opacity-100" : "opacity-0"
        } transition-opacity text-center p-4 text-gray-900 font-display text-base rounded-xl font-medium h-20 flex items-center justify-center`}
      >
        {data.description}
      </p>
    </div>
  );
}
