import { FilledButton, OutlinedButton } from "@/components/global/Button";
import Container from "@/components/global/Container";

import Image from "next/image";

export default function Header() {
  const color = randomColorSpec();

  return (
    <div
      className={`border-b ${color} bg-gradient-to-b text-white pb-4 md:pb-16 overflow-hidden`}
    >
      <Container>
        <div className="pt-24 md:pt-32 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16">
          <div className="space-y-8 col-span-2">
            <div className="space-y-2 col-span-2">
              <h3 className="text-2xl font-bold tracking-tighter font-display">
                Events
              </h3>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter font-display leading-tight">
                Here's what's coming up
              </h1>
            </div>
            <p className="text-lg font-medium text-white/75">
              At VietQ, we host a variety of events throughout the year. From
              networking events to workshops, we have something for everyone.
            </p>
            <div className="flex items-center justify-start space-x-2">
              <FilledButton dark={false}>Upcoming events</FilledButton>
              <OutlinedButton dark={false}>Past events</OutlinedButton>
            </div>
          </div>
          <div className="col-span-3 relative">
            <Image
              src="/sample/photo.png"
              width={1440}
              height={1920}
              className="absolute h-80 w-auto rounded-lg z-30"
            />
            <Image
              src="/sample/square.png"
              width={1000}
              height={1000}
              className="absolute w-48 -bottom-8 -left-8 rounded-lg z-20"
            />
            <Image
              src="/sample/landscape.png"
              width={1920}
              height={1080}
              className="absolute h-64 w-auto bottom-4 left-48 rounded-lg z-0"
            />
            <Image
              src="/sample/square.png"
              width={1000}
              height={1000}
              className="absolute w-64 -top-8 right-8 rounded-lg z-10"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

function randomColorSpec() {
  const colors = [
    "events-blue",
    "events-red",
    "events-purple",
    "events-green",
    "events-yellow",
    "events-orange",
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return color;
}
