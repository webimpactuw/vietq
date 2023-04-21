import Container from "@/components/global/Container";
import Image from "next/image";

export default function Section({ data }) {
  return (
    <Container>
      <div className="py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pb-16">
          <div className="flex flex-col items-start justify-center">
            <p className="text-lg font-medium text-gray-600">
              {data.aboutSection.description}
            </p>
          </div>
          <h1 className="text-5xl font-bold tracking-tighter font-display leading-tight md:text-right order-first md:order-last">
            {data.aboutSection.title}
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {Array(3)
            .fill()
            .map((_, i) => (
              <div className="space-y-4" key={i}>
                <Image
                  src="/sample/landscape.png"
                  width={1920}
                  height={1280}
                  alt="Landscape"
                  className="rounded-2xl shadow-inner border border-champagne-900/10"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-display tracking-tighter font-semibold">
                    Title
                  </h3>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
}
