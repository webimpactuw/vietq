import Container from "@/components/global/Container";
import urlFor from "@/sanity/lib/urlFor";
import Image from "next/image";

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
          <div className="space-y-4 md:space-y-8 col-span-2">
            <div className="space-y-2 col-span-2">
              <h3 className="text-lg font-bold tracking-tighter font-display">
                {date.long}
                {data?.location?.name ? ` • ${data.location.name}` : ""}
              </h3>
              <h1 className="text-5xl md:text-5xl font-bold tracking-tighter font-display leading-tight">
                {data.title}
              </h1>
            </div>
            <p
              className="md:text-lg font-medium"
              style={{
                color: colors["300"].color || "black",
              }}
            >
              {data.description ||
                "There is no available description for this event."}
            </p>
            <div className="flex items-center justify-start space-x-2">
              <button
                style={{
                  borderColor: colors["400"].color || "black",
                  color: colors["800"].color || "black",
                  backgroundColor: colors["100"].color || "white",
                }}
                className="hover:opacity-75 transition-opacity cursor-pointer border text-sm rounded-full px-4 pt-2.5 pb-3 tracking-tight font-medium"
              >
                {date.daysLeft > 0
                  ? `Learn more about this event`
                  : `This event has passed.`}
              </button>
            </div>
          </div>
          <div className="col-span-3 relative">
            {data?.image && (
              <Image
                src={urlFor(data.image).auto("format").size(1920, 1080).url()}
                alt={data?.title}
                width={1920}
                height={1080}
                className="w-full h-full object-cover aspect-video rounded-2xl border"
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
