import Container from "@/components/global/Container";
import { StarIcon } from "@heroicons/react/24/solid";
import CommunityCard from "../../cards/CommunityCard";

export default function CommunitySection({ data }) {
  return (
    <div className="relative overflow-hidden">
      <div className="gradient w-full h-full md:h-128 absolute top-1/2 md:top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 overflow-hidden blur-3xl select-none pointer-events-none" />
      <Container>
        <div className="py-8 md:py-16 space-y-8 md:space-y-16 relative">
          <div className="space-y-4 text-center mx-auto max-w-3xl">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter font-display">
                Community
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display leading-tight">
                {data.title}
              </h2>
            </div>
            <p className="text-base md:text-lg font-medium text-gray-700">
              {data.description}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-8 relative">
            <CommunityCard
              section={0}
              color="text-red-500"
              data={data.cards[0]}
            />
            <CommunityCard
              section={1}
              color="text-blue-500"
              data={data.cards[1]}
            />
            <CommunityCard
              section={2}
              color="text-purple-500"
              data={data.cards[2]}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
