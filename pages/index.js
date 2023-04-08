import Container from "@/components/global/Container";
import JoinOurCommunity from "@/components/global/JoinOurCommunity";
import RootLayout from "@/components/global/RootLayout";

import EventCard from "@/components/cards/EventCard";
import { useState } from "react";

export default function Home() {
  return (
    <RootLayout navTransparent={true}>
      <Hero />
      <Container>
        <Featured />
      </Container>
    </RootLayout>
  );
}

function Hero() {
  return (
    <div className="bg-red-300">
      <div className="bg-gradient-to-b from-blue-900/75 to-blue-900/0">
        <Container>
          <div className="py-32 text-center space-y-8 max-w-2xl mx-auto relative z-10">
            <h1 className="text-7xl font-bold tracking-tighter leading-tight text-white">
              Celebrating culture, empowering love
            </h1>
            <div className="space-y-6 flex flex-col items-center justify-start">
              <p className="text-xl text-white/50 font-medium font-display">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <JoinOurCommunity />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

function Featured() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="flex items-end justify-center -space-x-8 py-32">
      {Array(3)
        .fill()
        .map((_, i) => (
          <div
            key={i}
            onClick={() => setSelected(i)}
            className={`${
              selected === i
                ? "z-10 scale-125"
                : `z-0 scale-95 hover:scale-100 ${
                    selected > i ? "-rotate-6" : "rotate-6"
                  }`
            } cursor-pointer transition-all transform`}
          >
            <EventCard />
          </div>
        ))}
    </div>
  );
}
