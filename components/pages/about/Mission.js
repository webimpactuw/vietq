import Container from "@/components/global/Container";

export default function Mission() {
  return (
    <div
      className="bg-gray-300 text-gray-700 py-8 md:py-16 "
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='37' height='36.5' viewBox='0 0 148 146' opacity='0.025' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.8438 129.285L5.34378 140.285C-15.7637 76.2849 41.7316 -19.2152 141.344 4.78465L129.844 15.7847C79.7363 -3.71509 -1.26373 51.7849 15.8438 129.285Z' fill='%23000000'/%3E%3Cpath d='M130.737 16.2847L142.237 5.28474C163.344 69.2845 105.349 165.285 5.73693 141.285L16.2366 129.785C66.3441 149.285 147.844 93.7845 130.737 16.2847Z' fill='%23000000'/%3E%3Cpath d='M15.8438 129.285L5.34378 140.285C-15.7637 76.2849 41.7316 -19.2152 141.344 4.78465L129.844 15.7847C79.7363 -3.71509 -1.26373 51.7849 15.8438 129.285Z' stroke='%23000000'/%3E%3Cpath d='M130.737 16.2847L142.237 5.28474C163.344 69.2845 105.349 165.285 5.73693 141.285L16.2366 129.785C66.3441 149.285 147.844 93.7845 130.737 16.2847Z' stroke='%23000000'/%3E%3C/svg%3E")`,
      }}
    >
      <Container>
        <div className="text-center mx-auto space-y-4">
          <h3 className="tracking-widest uppercase text-lg font-display font-semibold">
            Our Mission Statement
          </h3>
          <h2 className="font-semibold text-5xl leading-tight tracking-tighter italic font-display">
            "We are a group of folks devoted to celebrating and empowering LGBTQ
            Vietnamese folks in the Pacific Northwest. We do this by raising
            visibility via awareness campaigns, events, and mentorship."
          </h2>
        </div>
      </Container>
    </div>
  );
}
