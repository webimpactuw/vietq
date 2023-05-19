import Image from "next/image";
import Link from "next/link";
import urlFor from "@/sanity/lib/urlFor";
import Container from "@/components/global/Container";
import { FilledButton } from "@/components/global/Button";
import { useState } from "react";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function EventsSection() {
  return (
    <div className="bg-gray-900 text-white">
      <Container>
        <div className="py-8 md:py-32 md:grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-32">
          <div className="col-span-2 h-full w-full">
            <CardTrick />
            <div className="flex items-center justify-center space-x-2 mt-32 text-gray-400">
              <CursorArrowRaysIcon className="w-5 h-5 text-purple-400" />
              <p className="text-sm">
                Click above to see photos from our past events!
              </p>
            </div>
          </div>
          <div className="space-y-4 col-span-3 flex items-start justify-center flex-col">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter font-display">
                Events
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display leading-tight">
                Bond, enjoy, and learn
              </h2>
            </div>
            <p className="text-base md:text-lg font-medium text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam quae
              quidem quos quas voluptatibus quibusdam quae.
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

function CardTrick() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="relative h-80 md:h-96">
      <CardElement
        current={current}
        setCurrent={setCurrent}
        index={2}
        nextIndex={0}
        image={"/sample/photo.png"}
      ></CardElement>
      <CardElement
        current={current}
        setCurrent={setCurrent}
        index={1}
        nextIndex={2}
        image={"/sample/photo.png"}
      ></CardElement>
      <CardElement
        current={current}
        setCurrent={setCurrent}
        index={0}
        nextIndex={1}
        image={"/sample/photo.png"}
      ></CardElement>
    </div>
  );
}

function CardElement({
  current,
  setCurrent,
  index,
  nextIndex,
  image,
  children,
}) {
  return (
    <div
      className={`transform transition-all space-y-8 cursor-pointer mx-auto ${
        current === index
          ? "absolute top-0 left-0 rotate-0 z-30 hover:scale-105"
          : current === nextIndex
          ? "absolute top-0 left-4 rotate-[30deg] z-10 hover:rotate-[35deg]"
          : "absolute top-0 left-8 rotate-[15deg] z-20 hover:rotate-[20deg]"
      }`}
      onClick={() => setCurrent(index)}
    >
      <Image
        src={image}
        width={1920}
        height={1440}
        alt=""
        className={`w-full rounded-xl md:rounded-3xl border-2 border-gray-900 w-60 md:w-76`}
      />
      <div
        className={`${
          current === index ? "opacity-100" : "opacity-0"
        } transition-opacity`}
      >
        <p>Image {index}</p>
      </div>
    </div>
  );
}
