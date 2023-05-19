import urlFor from "@/sanity/lib/urlFor";
import Image from "next/image";
import Link from "next/link";
import format from "date-fns/format";

export default function BlogPostCard({ data }) {
  return (
    <Link href={`/community/post/${data.slug}`}>
      <div className="rounded-xl border overflow-hidden bg-champagne-50 border-champagne-700/25 hover:opacity-75 transition-opacity">
        <Image
          src={urlFor(data.image).width(1920).height(1280).url()}
          width={1920}
          height={1280}
          className="w-full border-b border-champagne-700/25"
          alt={data.title}
          placeholder="blur"
          blurDataURL={data.image.lqip}
        />
        <div className="p-4 space-y-2">
          <p className="text-gray-600 text-xs font-medium tracking-tight">
            {format(new Date(data.date), "EEEE, MMMM dd, yyyy")}
          </p>
          <h3 className="text-lg font-semibold font-display tracking-tight line-clamp-2">
            {data.title}
          </h3>
          <p className="h-12 text-sm text-gray-700 line-clamp-2">
            {toPlainText(data.content)}
          </p>
          <div className="flex items-center space-x-2 border-t border-champagne-700/25 pt-4">
            <Image
              src={urlFor(data.author.image)
                .auto("format")
                .size(500, 500)
                .url()}
              width={500}
              height={500}
              className="w-8 h-8 rounded-full border border-champagne-700/25 shadow-inner"
              alt={data.author.name}
            />
            <div>
              <h3 className="font-display text-sm font-semibold tracking-tight">
                {data.author.name}
              </h3>
              <p className="text-gray-700 text-xs font-medium">
                {data.author.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
  return (
    <Link href={`/community/post/${data.slug}`}>
      <div className="space-y-4 hover:opacity-75 transition-opacity">
        <Image
          src={urlFor(data.image).width(1920).height(1280).url()}
          width={1920}
          height={1280}
          className="w-full h-full object-cover rounded-2xl border border-champagne-700/25"
          alt={data.title}
          placeholder="blur"
          blurDataURL={data.image.lqip}
        />
        <div className="space-y-2">
          <p className="text-gray-600 text-xs font-medium tracking-tight">
            {format(new Date(data.date), "EEEE, MMMM dd, yyyy")}
          </p>
          <h3 className="font-display font-semibold tracking-tight text-lg line-clamp-2">
            {data.title}
          </h3>
          <p className="h-12 text-sm text-gray-700 line-clamp-2 white">
            {toPlainText(data.content)}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Image
            src={urlFor(data.author.image).auto("format").size(500, 500).url()}
            width={500}
            height={500}
            className="w-8 h-8 rounded-full border border-champagne-700/25 shadow-inner"
            alt={data.author.name}
          />
          <div>
            <h3 className="font-display text-sm font-semibold tracking-tight">
              {data.author.name}
            </h3>
            <p className="text-gray-700 text-xs font-medium">
              {data.author.role}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function toPlainText(blocks = []) {
  return (
    blocks
      // loop through each block
      .map((block) => {
        // if it's not a text block with children,
        // return nothing
        if (block._type !== "block" || !block.children) {
          return "";
        }
        // loop through the children spans, and join the
        // text strings
        return block.children.map((child) => child.text).join("");
      })
      // join the paragraphs leaving split by two linebreaks
      .join("\n\n")
  );
}
