import JoinOurCommunity from "@/components/global/JoinOurCommunity";
import Container from "@/components/global/Container";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/urlFor";

export default function Hero({ data }) {
  return (
    <div className="border-b border-gray-900  text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={urlFor(data.heroImage).auto("format").size(1920, 1080).url()}
          width={1920}
          height={1080}
          className="w-full h-full object-cover pointer-events-none select-none"
          alt="Home Page Hero Background"
          placeholder="blur"
          blurDataURL={data.heroImage.lqip}
          priority={true}
        />
      </div>
      <div className="relative bg-gradient-to-b from-blue-900 to-blue-900/25">
        <Container>
          <div className="pt-24 md:pt-48 pb-4 md:pb-24">
            <div className="space-y-6 md:space-y-8 mx-auto max-w-3xl text-center">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tightest md:leading-tight text-white">
                  {data.title}
                </h1>
              </div>
              <p className="text-base md:text-xl font-medium text-white/75">
                {data.description}
              </p>
              <JoinOurCommunity />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
