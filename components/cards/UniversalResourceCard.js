import urlFor from "@/sanity/lib/urlFor";
import Image from "next/image";
import Link from "next/link";
import format from "date-fns/format";
import { LinkIcon } from "@sanity/icons";

import { generateShades } from "coloring-palette";

export default function UniversalResourceCard({
  resource,
  tags = true,
  light = false,
}) {
  if (resource._type == "blogPost") {
    return (
      <Link href={`/community/post/${resource.slug}`}>
        <UniversalResourceCardBody data={resource} tags={tags} light={light} />
      </Link>
    );
  } else {
    return (
      <a href={resource.link}>
        <UniversalResourceCardBody data={resource} tags={tags} light={light} />
      </a>
    );
  }
}

function UniversalResourceCardBody({ data, tags = true, light = false }) {
  return (
    <div className="space-y-4 hover:opacity-75 transition-opacity">
      <Image
        src={
          data.image
            ? urlFor(data.image).width(1920).height(1280).url()
            : "/full-2.png"
        }
        width={1920}
        height={1080}
        className={`w-full h-full object-cover rounded-2xl border ${
          light ? "border-gray-700" : "border-champagne-700/25"
        }`}
        alt={data.title}
        placeholder={data.image ? "blur" : "empty"}
        blurDataURL={data.image?.lqip}
      />
      <div className="space-y-4">
        <div className="space-y-2">
          {tags ? (
            <div className="flex flex-wrap gap-2">
              {data._type == "blogPost" ? (
                <ResourcePill color="#007aff">Blog Post</ResourcePill>
              ) : null}
              {data.tags?.map((tag) => (
                <Tag key={tag.slug} tag={tag} />
              ))}
            </div>
          ) : null}
          <h3
            className={`text-lg h-14 font-semibold font-display tracking-tight line-clamp-2 ${
              light ? "text-white" : ""
            }`}
          >
            {data.title}
          </h3>
          <p
            className={`text-sm h-10 ${
              light ? "text-gray-400" : "text-gray-700"
            } line-clamp-2`}
          >
            {data._type == "blogPost"
              ? toPlainText(data.content)
              : data.description}
          </p>
        </div>
        <div
          className={`flex items-center justify-between w-full border-t ${
            light ? "border-gray-700" : "border-champagne-700/25"
          } pt-4`}
        >
          {data._type == "blogPost" ? (
            <div className="flex items-center space-x-2">
              <Image
                src={urlFor(data.author.image)
                  .auto("format")
                  .size(500, 500)
                  .url()}
                width={500}
                height={500}
                className={`w-8 h-8 rounded-full border ${
                  light ? "border-gray-700" : "border-champagne-700/25"
                }`}
                alt={data.author.name}
              />
              <h3
                className={`font-display text-sm font-semibold tracking-tight ${
                  light ? "text-white" : ""
                }`}
              >
                {data.author.name}
              </h3>
            </div>
          ) : (
            <div
              className={`h-8 flex items-center justify-start ${
                light ? "text-gray-400" : "text-gray-700"
              }`}
            >
              <LinkIcon className="w-6 h-6 shrink-0" />
              <p className="text-xs font-medium">example.com</p>
            </div>
          )}
          <p
            className={`${
              light ? "text-gray-400" : "text-gray-700"
            } text-xs font-medium tracking-tight`}
          >
            {format(
              new Date(data._type == "blogPost" ? data.date : data._updatedAt),
              "EEEE, MMMM dd, yyyy"
            )}
          </p>
        </div>
      </div>
    </div>
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

function ResourcePill({ children, color }) {
  return (
    <div
      className="text-xs font-medium tracking-tight px-2.5 pt-1 pb-1.5 rounded-full"
      style={{
        backgroundColor: color + "25",
        color: color,
      }}
    >
      {children}
    </div>
  );
}

function Tag({ tag }) {
  return (
    <div
      className="text-xs font-medium tracking-tight px-2.5 pt-1 pb-1.5 rounded-full"
      style={tagColors(tag.color)}
    >
      {JSON.stringify(tag.color)}
    </div>
  );

  function tagColors(color) {
    return {
      color: `hsl(${Math.round(color.h)}, ${color.s * 100}%, ${
        color.l * 100
      }%)`,
      backgroundColor: `hsl(${Math.round(color.h)}, ${color.s * 100}%, ${
        color.l * 100 * 1.8
      }%)`,
    };
  }
}
