import Image from "next/image";
import urlFor from "@/sanity/lib/urlFor";

import { useState, useEffect } from "react";

export default function PhotoWall({ data }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const divisionFactor = 8;

  return (
    <div className="overflow-hidden">
      <Row
        left={scrollPosition / divisionFactor}
        data={data.images.slice(0, 6)}
      />
      <Row
        right={scrollPosition / divisionFactor}
        data={data.images.slice(6, 12)}
      />
      <Row
        left={scrollPosition / divisionFactor}
        data={data.images.slice(12, 18)}
      />
    </div>
  );
}

function Row({ left = null, right = null, data }) {
  return (
    <div
      className="flex justify-center  relative"
      style={{
        left: left ? left : null,
        right: right ? right : null,
      }}
    >
      {data.map((img, index) => (
        <Picture data={img} key={index} />
      ))}
    </div>
  );
}

function Picture({ data }) {
  return (
    <Image
      src={urlFor(data).auto("format").size(1920, 1080).fit("clip").url()}
      width={1920}
      height={1080}
      alt=""
      className="xl:w-128 lg:w-96 md:w-80 w-72 object-fit flex-shrink-0 cursor-pointer pointer-events-none"
      loading="lazy"
      placeholder="blur"
      blurDataURL={data.lqip}
    />
  );
}
