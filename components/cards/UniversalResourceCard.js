import urlFor from "@/sanity/lib/urlFor";
import Image from "next/image";
import Link from "next/link";
import format from "date-fns/format";
import { LinkIcon } from "@sanity/icons";

import { generateShades } from "coloring-palette";
import { rgbToHex } from "@/utils/colors";

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

function Tag({ tag }) {
  return (
    <div
      className="text-xs font-medium tracking-tight px-2.5 pt-1 pb-1.5 rounded-full"
      style={tagColors(tag.color)}
    >
      {tag.title}
    </div>
  );

  function tagColors(color) {
    let darkText = isDark(color);
    return {
      color: !darkText
        ? newShade(rgbToHex(color.r, color.g, color.b), -100)
        : newShade(rgbToHex(color.r, color.g, color.b), 100),
      backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
    };
  }
}

function isDark(rgb) {
  return !(rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114 > 186);
}

const newShade = (hexColor, magnitude) => {
  hexColor = hexColor.replace(`#`, ``);
  if (hexColor.length === 6) {
    const decimalColor = parseInt(hexColor, 16);
    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  } else {
    return hexColor;
  }
};
