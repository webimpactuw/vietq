import Container from "@/components/global/Container";
import Image from "next/image";

import urlFor from "@/sanity/lib/urlFor";

import dvv from "@/public/media/dvv.png";
import sf from "@/public/media/sf.png";
import sse from "@/public/media/sse.png";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function Section({ data }) {
  return (
    <Container>
      <div className="py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 border-b border-gray-500">
        <div className="flex flex-col items-start justify-center">
          <p className="text-lg font-medium text-gray-600">
            {data.aboutSection.description}
          </p>
        </div>
        <h1 className="text-5xl font-bold tracking-tighter font-display leading-tight md:text-right order-first md:order-last">
          {data.aboutSection.title}
        </h1>
      </div>
      <div className="py-8 md:py-16 border-b border-gray-500 space-y-8">
        <h1 className="text-5xl font-bold tracking-tighter font-display leading-tight">
          VietQ in the News
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          <PartnerCard
            src={dvv}
            title="You Are Loved: Profile of VietQ"
            href="https://dvan.org/2020/12/you-are-loved-vietq/"
            source="Diasporic Vietnamese Artists Network"
          />
          <PartnerCard
            src={sf}
            title="Asian American and Pacific Islander Heritage Month: VietQ, a Neighbor to Neighbor Grantee"
            href="https://www.seattlefoundation.org/asian-american-and-pacific-islander-heritage-month-vietq-a-neighbor-to-neighbor-grantee/"
            source="Seattle Foundation"
          />
          <PartnerCard
            src={sse}
            title="VietQ Hosts Seattle’s Largest Ever QTBIPOC Market at Seward Park"
            href="https://southseattleemerald.com/2022/06/02/vietq-hosts-seattles-largest-ever-qtbipoc-market-at-seward-park/"
            source="South Seattle Emerald"
          />
        </div>
      </div>
    </Container>
  );
}

function PartnerCard({ src, href, title, source }) {
  return (
    <a href={href} className="space-y-4 group">
      <div className="border-gray-200 bg-champagne-100 border rounded-2xl overflow-hidden">
        <div className="bg-white h-full w-full px-16 py-12">
          <Image
            src={src}
            className="w-48 mx-auto h-20 object-contain group-hover:scale-105 transition-transform transform"
            alt={source}
          />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold tracking-tighter font-display text-lg line-clamp-2 h-16">
          {title}
        </h3>
        <p className="text-xs text-gray-600 font-semibold tracking-widest uppercase inline-flex items-center">
          {source}
          <ArrowRightIcon className="inline-block w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform transform" />
        </p>
      </div>
    </a>
  );
}
