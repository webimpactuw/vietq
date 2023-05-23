import Container from "@/components/global/Container";
import Image from "next/image";
import CommunityCard from "../../cards/CommunityCard";

export default function Section({ data }) {
  return (
    <Container>
      <div className="py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pb-16">
          <div className="flex flex-col items-start justify-center">
            <p className="text-lg font-medium text-gray-600">
              {data.description}
            </p>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter font-display leading-tight md:text-right order-first md:order-last">
            {data.title}
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <CommunityCard section={0} scale={false} data={data.cards[0]}>
            {null}
          </CommunityCard>
          <CommunityCard section={1} scale={false} data={data.cards[1]}>
            {null}
          </CommunityCard>
          <CommunityCard section={2} scale={false} data={data.cards[2]}>
            {null}
          </CommunityCard>
        </div>
      </div>
    </Container>
  );
}
