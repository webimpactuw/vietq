import Container from "@/components/global/Container";
import Image from "next/image";

export default function Header() {
  return (
    <div className="border-b border-blue-900  text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/sample/landscape.png"
          width={1920}
          height={1080}
          className="w-full h-full object-cover pointer-events-none select-none"
          alt="Community"
        />
      </div>
      <div className="relative bg-gradient-to-b from-blue-900 to-blue-900/25">
        <Container>
          <div className="pt-24 md:pt-32 pb-4 md:pb-8">
            <div className="space-y-8 mx-auto max-w-3xl text-center">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter font-display">
                  Community
                </h3>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter font-display leading-tight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </h1>
              </div>
              <p className="text-lg md:text-xl font-medium text-white/75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua sed
                do eiusmod tempor.
              </p>
              {/* <div className="flex items-center justify-center space-x-2">
                <button className="hover:opacity-75 transition-opacity cursor-pointer border border-blue-100 bg-blue-50 text-blue-800 text-sm rounded-full px-4 pt-2.5 pb-3 tracking-tight font-medium">
                  Upcoming events
                </button>
                <button className="hover:opacity-75 transition-opacity cursor-pointer text-blue-50 text-sm rounded-full px-4 pt-2.5 pb-3 tracking-tight font-medium">
                  Past events
                </button>
              </div> */}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}