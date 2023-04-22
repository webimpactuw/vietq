import Container from "@/components/global/Container";
import urlFor from "@/sanity/lib/urlFor";
import Image from "next/image";
import Pills from "../Pills";

export default function Header({ data, colors, date }) {
  return (
    <div
      className={`border-b overflow-hidden`}
      style={{
        background: colors["900"].color,
        borderColor: colors["800"].color,
        color: colors["100"].color || "black",
      }}
    >
      <Container>
        <div className="pt-8 md:py-8 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16">
          <div className="space-y-4 md:space-y-8 col-span-3 flex flex-col w-full items-start justify-center">
            <Pills
              tags={data.tags}
              virtual={data.location?.virtual}
              bg={colors["100"].color || "white"}
              text={colors["900"].color || "black"}
            />
            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-tighter font-display">
                {date.long}
                {data?.location?.name ? ` • ${data.location.name}` : ""}
              </h3>
              <h1 className="text-5xl md:text-5xl font-bold tracking-tighter font-display leading-tight">
                {data.title}
              </h1>
            </div>
            <p
              className="md:text-base font-medium"
              style={{
                color: colors["200"].color || "black",
              }}
            >
              {data.description ||
                "There is no available description for this event."}
            </p>
            <div className="flex items-center justify-start space-x-2">
              {data.primaryLink ? (
                <PrimaryButton
                  href={data.primaryLink.url}
                  colors={colors}
                  title={data.primaryLink.title}
                  daysLeft={date.daysLeft}
                />
              ) : data.location?.virtual ? (
                <PrimaryButton
                  href={data.location.link.url}
                  colors={colors}
                  title={data.location.link.title}
                  daysLeft={date.daysLeft}
                />
              ) : (
                <div
                  style={{
                    borderColor: colors["400"].color || "black",
                    color: colors["800"].color || "black",
                    backgroundColor: colors["100"].color || "white",
                  }}
                  className={` transition-opacity cursor-pointer border text-sm rounded-full px-4 pt-2.5 pb-3 tracking-tight font-medium`}
                >
                  This event is over
                </div>
              )}
            </div>
          </div>
          <div className="col-span-2 relative">
            {data?.image && (
              <Image
                src={urlFor(data.image).auto("format").size(1080, 1080).url()}
                alt={data?.title}
                width={1080}
                height={1080}
                className="w-full h-full object-cover aspect-square rounded-3xl border"
                style={{
                  borderColor: colors["700"].color || "black",
                }}
                blurDataURL={data.image.lqip}
                placeholder="blur"
              />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

function PrimaryButton({ href, colors, title, daysLeft }) {
  return (
    <a
      href={href}
      style={{
        borderColor: colors["400"].color || "black",
        color: colors["800"].color || "black",
        backgroundColor: colors["100"].color || "white",
      }}
      className={`${
        daysLeft < 0 ? "hover:opacity-75" : ""
      } transition-opacity cursor-pointer border text-sm rounded-full px-4 pt-2.5 pb-3 tracking-tight font-medium`}
    >
      {daysLeft > 0 ? title : `This event is over`}
    </a>
  );
}
