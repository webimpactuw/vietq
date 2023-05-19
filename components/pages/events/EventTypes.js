import Container from "@/components/global/Container";
import CommunityCard from "../../cards/CommunityCard";

export default function EventTypes() {
  return (
    <Container>
      <div className="py-8 md:py-16 space-y-8 md:space-y-16 relative">
        <div className="space-y-2 text-center mx-auto max-w-3xl">
          <h3 className="text-2xl font-bold tracking-tighter font-display">
            Types of Events
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display leading-tight">
            Get involved with our community
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-8 relative">
          <CommunityCard section={0} color="text-red-500" scale={false} />
          <CommunityCard section={1} color="text-blue-500" scale={false} />
          <CommunityCard section={2} color="text-purple-500" scale={false} />
        </div>
      </div>
    </Container>
  );
}
