import Link from "next/link";
import Container from "@/components/global/Container";
import urlFor from "@/sanity/lib/urlFor";
import Image from "next/image";
import { FilledButton } from "@/components/global/Button";

export default function AboutSection({ data }) {
  return (
    <Container>
      <div className="pt-24 md:pt-32 pb-4 md:pb-16 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16">
        <div className="space-y-4 col-span-2 flex items-start justify-center flex-col">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tighter font-display">
              About VietQ
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display leading-tight">
              {data.title}
            </h2>
          </div>
          <p className="text-base md:text-lg font-medium text-gray-700">
            {data.description}
          </p>
          <Link href="/about">
            <FilledButton>Learn more about VietQ</FilledButton>
          </Link>
        </div>
        <div className="col-span-3 flex flex-col items-start justify-end">
          <Image
            src={urlFor(data.image).auto("format").size(1920, 1080).url()}
            width={1920}
            height={1080}
            alt="About VietQ"
            className="w-full rounded-3xl border-2 border-gray-900"
            loading="lazy"
            placeholder="blur"
            blurDataURL={data.image.lqip}
          />
        </div>
      </div>
    </Container>
  );
}
