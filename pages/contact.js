import client from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
import { usePreview } from "@/sanity/lib/preview";
import ExitPreview from "@/components/sanity/ExitPreview";
import PreviewLoading from "@/components/sanity/PreviewLoading";
import RootLayout from "@/components/global/RootLayout";

import Container from "@/components/global/Container";
import Socials from "@/components/pages/contact/Socials";

import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/pages/contact/Header"));
const ContactForm = dynamic(() =>
  import("@/components/pages/contact/ContactForm")
);

const query = groq`*[_type == "contactPage"][0] {
 heroImage {
    ...,
    "lqip": asset->metadata.lqip,
 }
}`;

export async function getStaticProps({ preview = false }) {
  if (preview) {
    return { props: { preview } };
  }

  const data = await client.fetch(query);

  return {
    props: { preview, data },
    revalidate: parseInt(process.env.NEXT_PUBLIC_REVALIDATE),
  };
}

export default function About({ preview, data }) {
  return (
    <RootLayout title="Contact" preview={preview} navTransparent={true}>
      {preview ? (
        <PreviewSuspense fallback={<PreviewLoading />}>
          <PreviewContactPage query={query} />
        </PreviewSuspense>
      ) : (
        <ContactPage data={data} />
      )}
    </RootLayout>
  );
}

function ContactPage({ data }) {
  return (
    <>
      <Header data={data} />
      <Container>
        <div className="grid md:grid-cols-5 gap-32 pt-12">
          <div className="col-span-3">
            <ContactForm />
          </div>
          <div className="col-span-2">
            <Socials />
          </div>
        </div>
      </Container>
    </>
  );
}

function PreviewContactPage({ query }) {
  const data = usePreview(null, query);

  return (
    <>
      <ContactPage data={data} />
      <ExitPreview />
    </>
  );
}
