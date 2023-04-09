import Container from "@/components/global/Container";
import RootLayout from "@/components/global/RootLayout";

export default function Events() {
  return (
    <RootLayout title="Events" navTransparent={true}>
      <div className="bg-blue-800 py-32">
        <Container>
          <h1 className="text-8xl font-bold text-white font-display tracking-tighter">
            Events
          </h1>
        </Container>
      </div>
    </RootLayout>
  );
}
