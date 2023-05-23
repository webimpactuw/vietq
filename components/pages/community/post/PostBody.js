import Image from "next/image";
import format from "date-fns/format";
import urlFor from "@/sanity/lib/urlFor";

import PortableBody from "@/components/portableText/PortableBody";

export default function PostBody({ data }) {
  return (
    <div className="pt-12 md:pt-12 pb-8 md:pb-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-600 font-medium">
              {format(new Date(data.date), "EEEE, MMMM dd, yyyy")}
            </p>
            <h1 className="font-display font-bold text-4xl tracking-tighter">
              {data.title}
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src={urlFor(data.author.image)
                .auto("format")
                .size(500, 500)
                .url()}
              width={500}
              height={500}
              className="w-10 h-10 rounded-full border border-champagne-700/25 shadow-inner"
              alt={data.author.name}
            />
            <div>
              <h3 className="font-display font-semibold tracking-tight text-lg">
                {data.author.name}
              </h3>
              <p className="text-gray-700 text-sm font-medium">
                {data.author.pronouns}
              </p>
            </div>
          </div>
        </div>
        <Image
          src={urlFor(data.image).size(1920, 1080).auto("format").url()}
          width={1920}
          height={1080}
          className="pointer-events-none rounded-3xl select-none w-full h-full  border border-champagne-700/25"
          alt={data.title}
          placeholder="blur"
          blurDataURL={data.image.lqip}
        />
        <PortableBody content={data.content} />
      </div>
    </div>
  );
}
