import Container from "@/components/global/Container";
import Image from "next/image";

import dvv from "@/public/media/dvv.png";
import sf from "@/public/media/sf.png";
import sse from "@/public/media/sse.png";

export default function News() {
  return (
    <div className=" bg-gradient-to-t from-blue-900 to-gray-900 text-white">
      <Container>
        <div className="py-8 md:py-16 space-y-8">
          <h1 className="text-5xl font-bold tracking-tighter font-display leading-tight">
            VietQ in the News
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <Quote
              src={dvv}
              title="You Are Loved: Profile of VietQ"
              href="https://dvan.org/2020/12/you-are-loved-vietq/"
              source="Diasporic Vietnamese Artists Network"
              quote="...VietQ has been on a journey grounded in the healing and celebration of our identities..."
            />
            <Quote
              src={sf}
              title="Asian American and Pacific Islander Heritage Month: VietQ, a Neighbor to Neighbor Grantee"
              href="https://www.seattlefoundation.org/asian-american-and-pacific-islander-heritage-month-vietq-a-neighbor-to-neighbor-grantee/"
              source="Seattle Foundation"
              quote="...VietQ seeks to normalize what it means to be a queer and transgender Vietnamese person..."
            />
            <Quote
              src={sse}
              title="VietQ Hosts Seattle’s Largest Ever QTBIPOC Market at Seward Park"
              href="https://southseattleemerald.com/2022/06/02/vietq-hosts-seattles-largest-ever-qtbipoc-market-at-seward-park/"
              source="South Seattle Emerald"
              quote="...the founding mission of VietQ — to make community spaces for queer and trans Vietnamese folks..."
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

function Quote({ src, href, source, quote }) {
  return (
    <a
      href={href}
      className="space-y-4 group cursor-pointer transition-all transform md:hover:shadow-xl md:hover:scale-105"
    >
      <blockquote className="p-6 relative bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
        <div className="relative space-y-4">
          <p className="italic ml-4 font-display font-medium">{quote}</p>
          <hr className="border-white/10" />
          <div className="flex items-center justify-start space-x-4">
            <Image
              src={src}
              className="h-8 w-auto object-contain hover:opacity-75 transition-opacity"
              alt={source}
            />
            <div className="text-xs font-display font-medium tracking-tight">
              {source}
            </div>
          </div>
        </div>
        <div className="text-9xl opacity-10 absolute -top-2 left-6">
          &ldquo;
        </div>
      </blockquote>
    </a>
  );
}
