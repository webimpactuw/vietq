import Container from "@/components/global/Container";

export default function Header() {
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
              <button className="hover:opacity-75 transition-opacity cursor-pointer border border-blue-100 bg-blue-50 text-blue-800 text-sm rounded-full px-4 pt-2.5 pb-3 tracking-tight font-medium">
                Upcoming events
              </button>
              <button className="hover:opacity-75 transition-opacity cursor-pointer text-blue-50 text-sm rounded-full px-4 pt-2.5 pb-3 tracking-tight font-medium">
                Past events
              </button>
            </div>
          </div>
          <div className="col-span-3 relative"></div>
        </div>
      </Container>
    </div>
  );
}
