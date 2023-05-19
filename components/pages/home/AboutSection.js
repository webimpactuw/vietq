import Link from "next/link";
import Container from "@/components/global/Container";
import urlFor from "@/sanity/lib/urlFor";
import Image from "next/image";

export default function AboutSection() {
  return (
    <Container>
      <div className="pt-24 md:pt-32 pb-4 md:pb-16 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16">
        <div className="space-y-4 col-span-2 flex items-start justify-center flex-col">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tighter font-display">
              About VietQ
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display leading-tight">
              Who Are We?
            </h2>
          </div>
          <p className="text-base md:text-lg font-medium text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quod, voluptate, quia, voluptates quas voluptatibus quibusdam quae
            quidem quos quas voluptatibus quibusdam quae.
          </p>
          <Link
            href="/about"
            as="button"
            className={`hover:bg-gray-700 hover:border-gray-600 transition-colors cursor-pointer border text-sm rounded-full px-4 pt-1.5 pb-2.5 tracking-tight font-medium bg-gray-900 border-gray-800 text-white`}
          >
            Learn more
          </Link>
        </div>
        <div className="col-span-3 flex flex-col items-start justify-end">
          <Image
            src="/sample/landscape.png"
            width={1920}
            height={1080}
            alt=""
            className="w-full rounded-3xl border-2 border-gray-900"
          />
        </div>
      </div>
    </Container>
  );
}
