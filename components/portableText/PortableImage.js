import { getImageDimensions } from "@sanity/asset-utils";
import urlFor from "@/sanity/lib/urlFor";
import Image from "next/image";

export default function PortableImage({ value }) {
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
