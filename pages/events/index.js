import EventCard from "@/components/cards/EventCard";
import Container from "@/components/global/Container";
import RootLayout from "@/components/global/RootLayout";
import { useState } from "react";

import TextTransition, { presets } from "react-text-transition";

export default function Events() {
  const [selected, setSelected] = useState({});

  return (
    <RootLayout title="Events" navTransparent={true}>
      <Header />
      <div
        className={`bg-blue-900 space-y-8 pt-24 pb-8 text-champagne overflow-hidden transition-colors`}
        style={{
          backgroundColor: selected.bg,
        }}
      >
        <div className="px-4 max-w-6xl mx-auto space-y-8 h-32">
          {selected.content ? (
            <div className="space-y-4">
              <div className="flex items-center justify-start space-x-2">
                <Pill>Workshop</Pill>
                <Pill>Virtual</Pill>
                <Pill>Free</Pill>
              </div>
              <TextTransition springConfig={presets.slow}>
                <div className="space-y-1">
                  <h2 className="text-xl font-bold tracking-tight font-display leading-tight">
                    Feb {Math.floor(Math.random() * 30) + 1}, 2021
                  </h2>

                  <h2 className="text-5xl font-bold tracking-tighter font-display leading-tight">
                    {selected.content}
                  </h2>
                </div>
              </TextTransition>
            </div>
          ) : (
            <h2 className="text-8xl font-bold tracking-tighter font-display leading-tight">
              Upcoming Events
            </h2>
          )}
        </div>
        <div className="flex items-center justify-start overflow-x-scroll p-8 no-scrollbar pl-[23em]">
          <div
            onMouseEnter={() =>
              setSelected({ bg: "#613800", content: "Spring Forward Workshop" })
            }
            onMouseLeave={() => setSelected({})}
            className="pr-8 last:pr-0"
          >
            <EventCard />
          </div>
          <div
            onMouseEnter={() =>
              setSelected({ bg: "#3F010B", content: "Open Dance Classes" })
            }
            onMouseLeave={() => setSelected({})}
            className="pr-8 last:pr-0"
          >
            <RedEventCard />
          </div>
          <div
            onMouseEnter={() =>
              setSelected({ bg: "#0A264C", content: "QT-Viet Winter Social" })
            }
            onMouseLeave={() => setSelected({})}
            className="pr-8 last:pr-0"
          >
            <BlueEventCard />
          </div>
          <div
            onMouseEnter={() =>
              setSelected({ bg: "#613800", content: "Spring Forward Workshop" })
            }
            onMouseLeave={() => setSelected({})}
            className="pr-8 last:pr-0"
          >
            <EventCard />
          </div>
          <div
            onMouseEnter={() =>
              setSelected({ bg: "#3F010B", content: "Open Dance Classes" })
            }
            onMouseLeave={() => setSelected({})}
            className="pr-8 last:pr-0"
          >
            <RedEventCard />
          </div>
          <div
            onMouseEnter={() =>
              setSelected({ bg: "#0A264C", content: "QT-Viet Winter Social" })
            }
            onMouseLeave={() => setSelected({})}
            className="pr-8 last:pr-0"
          >
            <BlueEventCard />
          </div>
          <div
            onMouseEnter={() =>
              setSelected({ bg: "#0A264C", content: "QT-Viet Winter Social" })
            }
            onMouseLeave={() => setSelected({})}
            className="pr-8 last:pr-0"
          >
            <BlueEventCard />
          </div>
          <div
            onMouseEnter={() =>
              setSelected({ bg: "#0A264C", content: "QT-Viet Winter Social" })
            }
            onMouseLeave={() => setSelected({})}
            className="pr-8 last:pr-0"
          >
            <BlueEventCard />
          </div>
        </div>
      </div>
    </RootLayout>
  );
}

function Pill({ children }) {
  return (
    <div className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest border border-champagne-200 bg-champagne text-champagne-900">
      {children}
    </div>
  );
}

function Header() {
  return (
    <div className="border-b border-blue-900 bg-gradient-to-b from-blue-900 to-blue-800 text-white pb-4 md:pb-16 overflow-hidden ">
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
            <p className="text-lg md:text-xl font-medium text-white/75">
              At VietQ, we host a variety of events throughout the year. From
              networking events to workshops, we have something for everyone.
            </p>
            <div className="flex items-center justify-start space-x-2">
              <button className="inline-flex uppercase tracking-widest items-center px-3.5 py-2 border rounded-full bg-blue-50 hover:bg-blue-100 hover:border-blue-100 transition-colors font-semibold text-blue-800 border-blue-50 text-xs">
                Upcoming events
              </button>
              <button className="inline-flex uppercase tracking-widest items-center px-3.5 py-2 text-blue-50 font-semibold text-xs hover:text-blue-100 transition-colors">
                Past events
              </button>
            </div>
          </div>
          <div className="col-span-3 relative">
            <div className="left-24 relative">
              <div className="w-80 h-80 bg-blue-200/50 rounded-full shrink-0 top-12 absolute left-32 blur-3xl" />
              <img
                src="/media/team.jpg"
                alt="Events"
                className="shrink-0 aspect-square object-cover w-72 absolute -rotate-12 top-0 left-10 rounded-2xl border-2 shadow-xl border-white/10  backdrop-blur-xl"
              />
              <img
                src="/media/team.jpg"
                alt="Events"
                className="shrink-0 aspect-square object-cover w-36 absolute top-36 rotate-6 left-0 rounded-2xl border-2 shadow-xl border-white/10  backdrop-blur-xl"
              />
              <img
                src="/media/team.jpg"
                alt="Events"
                className="shrink-0 aspect-square object-cover w-64 absolute top-40 left-72 rotate-12 rounded-2xl border-2 shadow-xl border-white/10 backdrop-blur-xl"
              />
              <img
                src="/media/team.jpg"
                alt="Events"
                className="shrink-0 aspect-square object-cover w-24 absolute top-60 left-56 -rotate-12 rounded-2xl border-2 shadow-xl border-white/10  backdrop-blur-xl"
              />
              <img
                src="/media/team.jpg"
                alt="Events"
                className="shrink-0 aspect-square object-cover w-32 absolute top-20 left-96 rotate-30 rounded-2xl border-2 shadow-xl border-white/10  backdrop-blur-xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

function RedEventCard() {
  return (
    <div className="shrink-0 md:hover:scale-110 transition-transform transform box-border border-2 border-red-600 shadow-2xl rounded-4xl w-64 overflow-hidden font-display">
      <div
        className="px-4 pb-4 pt-8 bg-red-100 text-red-800 w-full flex flex-col items-start justify-between space-y-6"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="space-y-2">
          <h2 className="font-bold text-9/2xl tracking-tightest">Feb 07</h2>
          <div className="space-y-1">
            <h3 className="font-semibold">This is the event name...</h3>
            <p className="text-sm text-red-600 line-clamp-2">
              And this is the text that accompanies it.
            </p>
          </div>
        </div>
        <p className="text-xs font-medium uppercase">2/7/2023 • Seattle, WA</p>
      </div>
      <div className="bg-red-400 relative h-56 border-t-2 border-red-600 border-dashed">
        {/* <img
          src="https://picsum.photos/seed/picsum/900/900"
          className="w-full h-full object-cover"
        /> */}
        <div className="hover:bg-gray-200 cursor-pointer transition-colors absolute bottom-2 right-2 border-2 border-red-600 bg-white text-gray-500 text-xs rounded-full px-4 pt-2.5 pb-3 tracking-tight">
          Learn more
        </div>
      </div>
    </div>
  );
}

function BlueEventCard() {
  return (
    <div className="shrink-0 md:hover:scale-110 transition-transform transform box-border border-2 border-blue-600 shadow-2xl rounded-4xl w-64 overflow-hidden font-display">
      <div
        className="px-4 pb-4 pt-8 bg-blue-100 text-blue-800 w-full flex flex-col items-start justify-between space-y-6"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="space-y-2">
          <h2 className="font-bold text-9/2xl tracking-tightest">Feb 07</h2>
          <div className="space-y-1">
            <h3 className="font-semibold">This is the event name...</h3>
            <p className="text-sm text-blue-600 line-clamp-2">
              And this is the text that accompanies it.
            </p>
          </div>
        </div>
        <p className="text-xs font-medium uppercase">2/7/2023 • Seattle, WA</p>
      </div>
      <div className="bg-blue-400 relative h-56 border-t-2 border-blue-600 border-dashed">
        {/* <img
          src="https://picsum.photos/seed/picsum/900/900"
          className="w-full h-full object-cover"
        /> */}
        <div className="hover:bg-gray-200 cursor-pointer transition-colors absolute bottom-2 right-2 border-2 border-blue-600 bg-white text-gray-500 text-xs rounded-full px-4 pt-2.5 pb-3 tracking-tight">
          Learn more
        </div>
      </div>
    </div>
  );
}
