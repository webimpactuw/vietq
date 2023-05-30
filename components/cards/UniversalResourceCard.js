import urlFor from "@/sanity/lib/urlFor";
import Image from "next/image";
import Link from "next/link";
import format from "date-fns/format";

import { rgbToHex } from "@/utils/colors";
import { LinkIcon } from "@heroicons/react/24/solid";
import { LinkIcon as LinkIconSmall } from "@heroicons/react/20/solid";

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
      <a href={resource.link} target="_blank" rel="noopener noreferrer">
        <UniversalResourceCardBody data={resource} tags={tags} light={light} />
      </a>
    );
  }
}

function UniversalResourceCardBody({ data, tags = true, light = false }) {
  const color = tagColors(
    data?.tags && data?.tags.length > 0
      ? data.tags[0]?.color
      : { r: 0, g: 0, b: 0 }
  );

  return (
    <div className="space-y-4 hover:opacity-75 transition-opacity">
      {data._type == "blogPost" ? (
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
      ) : (
        <div
          className={`w-full h-full aspect-3/2 rounded-2xl border flex items-center justify-center ${
            light ? "border-gray-700" : "border-champagne-700/25"
          }`}
          style={{
            backgroundColor: color.backgroundColor,
          }}
        >
          <LinkIcon
            className="mx-auto w-24 h-24 text-current"
            style={{
              color: color.color,
            }}
          />
        </div>
      )}
      <div className="space-y-4">
        <div className="space-y-2">
          {tags ? (
            <div className="flex flex-wrap gap-2">
              {data._type == "blogPost" ? (
                <Tag
                  tag={{
                    title: "Blog Post",
                    slug: "blog-post",
                    color: {
                      r: 53,
                      g: 126,
                      b: 227,
                    },
                  }}
                />
              ) : null}
              {data.tags?.map((tag) => (
                <Tag key={tag.slug} tag={tag} />
              ))}
            </div>
          ) : null}
          <h3
            className={`text-lg h-full font-semibold font-display tracking-tight line-clamp-1 ${
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
              <LinkIconSmall className="w-5 h-5 mr-1 shrink-0" />
              <p className="text-xs font-medium">
                {new URL(data.link).hostname}
              </p>
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

function invertColor(rgb) {
  let hex = rgbToHex(rgb.r, rgb.g, rgb.b);

  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.");
  }
  // invert color components
  var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
    g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
    b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
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

function Tag({ tag }) {
  return (
    <div
      className="text-xs font-medium tracking-tight px-2.5 pt-1 pb-1.5 rounded-full"
      style={tagColors(tag.color)}
    >
      {tag.title}
    </div>
  );
}

function tagColors(color) {
  let darkText = isDark(color);
  return {
    color: darkText ? "rgba(255, 255, 255, 0.87)" : "rgba(0, 0, 0, 0.87)",
    backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
  };
}

function isDark(rgb) {
  return !(rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114 > 186);
}
