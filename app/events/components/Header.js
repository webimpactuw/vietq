import { FilledButton, OutlinedButton } from "@/components/global/Button";
import Container from "@/components/global/Container";
import { urlFor } from "@/sanity/lib/urlFor";

import Image from "next/image";

export default function Header({ data }) {
  return (
    <div
      className={`border-b events-blue bg-gradient-to-b text-white pb-4 md:pb-16 overflow-hidden`}
    >
      <Container>
        <div className="pt-24 md:pt-32 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16">
          <div className="space-y-8 col-span-2">
            <div className="space-y-2 col-span-2">
              <h3 className="text-2xl font-bold tracking-tighter font-display">
                Events
              </h3>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter font-display leading-tight">
                {data.title}
              </h1>
            </div>
            <p className="text-lg font-medium text-white/75">
              {data.description}
            </p>
            <div className="flex items-center justify-start space-x-2">
              <a href="#upcoming-events">
                <FilledButton dark={false}>Upcoming events</FilledButton>
              </a>
              <a href="#past-events">
                <OutlinedButton dark={false}>Past events</OutlinedButton>
              </a>
            </div>
          </div>
          <div className="col-span-3 relative text-center space-y-4">
            <Image
              src={urlFor(data.featuredPicture)
                .auto("format")
                .width(1920)
                .height(1080)
                .url()}
              width={1920}
              height={1080}
              className="rounded-xl border border-white/25"
              alt={data.featuredPicture.title}
              blurDataURL={data.featuredPicture.lqip}
              placeholder="blur"
            />
            <p className="text-sm">{data.featuredPicture.title}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
