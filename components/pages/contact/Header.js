import Container from "@/components/global/Container";
import urlFor from "@/sanity/lib/urlFor";
import Image from "next/image";

export default function Header({ data }) {
  return (
    <>
      <div className=" text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={urlFor(data.heroImage)
              .auto("format")
              .width(1920)
              .height(1080)
              .url()}
            width={1920}
            height={1080}
            className="w-full h-full object-cover pointer-events-none select-none"
            alt="Community"
            placeholder="blur"
            blurDataURL={data.heroImage.lqip}
            priority={true}
          />
        </div>
        <div className="relative bg-gradient-to-b from-blue-900 to-blue-900/50">
          <Container>
            <div className="pt-24 md:pt-32 pb-4 md:pb-8">
              <div className="space-y-8 max-w-xl text-left">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter font-display">
                    Contact VietQ
                  </h3>
                  <h1 className="text-5xl md:text-6xl font-bold tracking-tighter font-display leading-tight">
                    Have a question? Let's get in touch!
                  </h1>
                </div>
                <p className="text-lg md:text-xl font-medium text-white/75">
                  If you have inquries about our events or organization, please
                  fill out this form and we'll get back to you soon!
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="gradient w-full h-4" />
    </>
  );
}
