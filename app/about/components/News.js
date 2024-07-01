import Container from "@/components/global/Container";
import Image from "next/image";

import dvv from "@/public/media/dvv.png";
import sf from "@/public/media/sf.png";
import sse from "@/public/media/sse.png";
import { urlFor } from "@/sanity/lib/urlFor";

export default function News({ data }) {
  return (
    <div className=" bg-gradient-to-t from-blue-900 to-gray-900 text-white">
      <Container>
        <div className="py-8 md:py-16 space-y-8">
          <h1 className="text-5xl font-bold tracking-tighter font-display leading-tight">
            VietQ in the News
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {data.map((item, i) => (
              <Quote key={i} data={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

function Quote({ data }) {
  return (
    <a
      href={data.link}
      className="space-y-4 group cursor-pointer transition-all transform md:hover:shadow-xl md:hover:scale-105"
    >
      <blockquote className="p-6 relative bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
        <div className="relative space-y-4">
          <p className="italic ml-4 font-display font-medium">{data.quote}</p>
          <hr className="border-white/10" />
          <div className="flex items-center justify-start space-x-4">
            <Image
              src={urlFor(data.image).auto("format").url()}
              className="h-8 w-auto object-contain hover:opacity-75 transition-opacity"
              width={500}
              height={500}
              alt={data.source}
            />
            <div className="text-sm font-display font-medium tracking-tight">
              {data.source}
            </div>
          </div>
        </div>
        <div className="text-9xl opacity-10 absolute -top-2 left-6 select-none pointer-events-none">
          &ldquo;
        </div>
      </blockquote>
    </a>
  );
}
