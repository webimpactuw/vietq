import Container from "@/components/global/Container";
import Image from "next/image";

import urlFor from "@/sanity/lib/urlFor";

export default function Header({ data }) {
  return (
    <>
      <Container>
        <div className="pt-24 md:pt-32 pb-4 md:pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tighter font-display">
              About VietQ
            </h3>
            <h1 className="text-5xl font-bold tracking-tighter font-display leading-tight">
              {data.title}
            </h1>
          </div>
          <div className="flex flex-col items-start justify-end">
            <p className="text-lg md:text-xl font-medium text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam quae
              quidem quos quas voluptatibus quibusdam quae.
            </p>
          </div>
        </div>
      </Container>

      <div className="gradient w-full h-4" />
      <div className="relative h-128">
        <Image
          src={urlFor(data.teamPicture).auto("format").url()}
          fill="true"
          className="pointer-events-none select-none w-full h-full object-cover"
          blurDataURL={data.teamPicture.lqip}
          loading="lazy"
          alt={data.teamPicture.altText}
        />
      </div>
      <Container>
        <div className="py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 border-b border-gray-500">
          <div className="flex flex-col items-start justify-center">
            <p className="text-lg font-medium text-gray-600">
              {data.aboutSection.description}
            </p>
          </div>
          <h1 className="text-9/2xl font-bold tracking-tighter font-display leading-tight md:text-right order-first md:order-last">
            {data.aboutSection.title}
          </h1>
        </div>
      </Container>
    </>
  );
}
