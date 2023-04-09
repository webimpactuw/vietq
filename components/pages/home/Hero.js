import JoinOurCommunity from "@/components/global/JoinOurCommunity";
import Container from "@/components/global/Container";

export default function Hero({ data }) {
  return (
    <div className="bg-red-300">
      <div className="bg-gradient-to-b from-blue-900/75 to-blue-900/0">
        <Container>
          <div className="py-32 text-center space-y-8 max-w-2xl mx-auto relative z-10">
            <h1 className="text-7xl font-bold tracking-tight italic font-display leading-tight text-white">
              {data.title}
            </h1>
            <div className="space-y-6 flex flex-col items-center justify-start">
              <p className="text-xl text-white/75 font-medium font-display">
                {data.description}
              </p>
              <JoinOurCommunity />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
