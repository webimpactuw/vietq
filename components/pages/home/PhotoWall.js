import Image from "next/image";
import urlFor from "@/sanity/lib/urlFor";

import { useState, useEffect } from "react";

export default function PhotoWall() {
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
      <Row left={scrollPosition / divisionFactor} />
      <Row right={scrollPosition / divisionFactor} />
      <Row left={scrollPosition / divisionFactor} />
    </div>
  );
}

function Row({ left = null, right = null }) {
  return (
    <div
      className="flex justify-center  relative"
      style={{
        left: left ? left : null,
        right: right ? right : null,
      }}
    >
      {Array(10)
        .fill()
        .map((course, index) => (
          <Picture data={course} key={index} />
        ))}
    </div>
  );
}

function Picture({ data }) {
  return (
    <Image
      src="/sample/landscape.png"
      width={1920}
      height={1080}
      alt=""
      className="lg:w-96 md:w-80 w-72 object-fit flex-shrink-0 cursor-pointer pointer-events-none"
    />
  );
}
