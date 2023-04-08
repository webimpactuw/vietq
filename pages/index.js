import ContactForm from "@/components/global/ContactForm";

export default function Home() {
  return (
    <>
      <ContactForm/>
      <div className="mx-auto max-w-3xl py-16 px-4 space-y-4">
        <div className="space-y-2 font-display">
          <h1 className="text-3xl font-bold tracking-tight">This is BeVietnam</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed euismod, nisl vel tincidunt aliquam, nunc nisl
            condimentum nunc, nec ultrices nunc ante nec nisl. Nulla facilisi. Sed
            euismod, nisl vel tincidunt aliquam, nunc nisl condimentum nunc, nec
            ultrices nunc ante nec nisl. Nulla facilisi.
          </p>
        </div>
        <hr />
        <div className="space-y-2 font-sans">
          <h1 className="text-3xl font-bold tracking-tight">
            This is Cabinet Grotesk
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed euismod, nisl vel tincidunt aliquam, nunc nisl
            condimentum nunc, nec ultrices nunc ante nec nisl. Nulla facilisi. Sed
            euismod, nisl vel tincidunt aliquam, nunc nisl condimentum nunc, nec
            ultrices nunc ante nec nisl. Nulla facilisi.
          </p>
        </div>
      </div>
      </>
  );
}
