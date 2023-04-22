import Image from "next/image";
import { PortableText } from "@portabletext/react";
import format from "date-fns/format";
import urlFor from "@/sanity/lib/urlFor";

import { getImageDimensions } from "@sanity/asset-utils";

const portableTextComponents = {
  types: {
    image: ({ value }) => <GeneratedImage value={value} />,
  },
};

function GeneratedImage({ value }) {
  const { width, height } = getImageDimensions(value);

  return (
    <Image
      src={urlFor(value).fit("max").auto("format").url()}
      width={width}
      height={height}
      placeholder="blur"
      loading="lazy"
      blurDataURL={value.lqip}
      style={{
        aspectRatio: width / height,
      }}
      alt={value.alt || ""}
    />
  );
}

export default function PostBody({ data }) {
  return (
    <div className="pt-12 md:pt-12 pb-8 md:pb-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="uppercase tracking-widest text-gray-600 text-sm font-semibold">
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
              className="w-10 h-10 rounded-full border border-champagne-900/10 shadow-inner"
              alt={data.author.name}
            />
            <div>
              <h3 className="font-display font-semibold tracking-tight text-lg">
                {data.author.name}
              </h3>
              <p className="text-gray-700 text-sm">{data.author.role}</p>
            </div>
          </div>
        </div>
        <Image
          src={urlFor(data.image).size(1920, 1080).auto("format").url()}
          width={1920}
          height={1080}
          className="pointer-events-none rounded-3xl select-none w-full h-full  border border-champagne-900/10"
          alt={data.title}
          placeholder="blur"
          blurDataURL={data.image.lqip}
        />
        <article className="prose prose-blockquote:border-champagne-500 max-w-none prose-headings:font-display prose-headings:tracking-tighter prose-headings:font-semibold">
          <PortableText
            value={data.content}
            components={portableTextComponents}
          />
        </article>
      </div>
    </div>
  );
}
