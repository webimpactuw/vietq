import Container from "@/components/global/Container";
import RootLayout from "@/components/global/RootLayout";

import Hero from "@/components/pages/home/Hero";

import client from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
import { usePreview } from "@/sanity/lib/preview";

import EventCard from "@/components/cards/EventCard";
import { useState } from "react";

import ExitPreview from "@/components/sanity/ExitPreview";

import Link from "next/link";
import PreviewLoading from "@/components/sanity/PreviewLoading";

const query = groq`*[_type == "homePage"][0]{
  title,
  description
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

export default function Home({ preview, data }) {
  return (
    <RootLayout navTransparent={true} preview={preview}>
      {preview ? (
        <PreviewSuspense fallback={<PreviewLoading />}>
          <PreviewHomePage query={query} />
        </PreviewSuspense>
      ) : (
        <HomePage data={data} />
      )}
    </RootLayout>
  );
}
function HomePage({ data }) {
  return (
    <>
      <Hero data={data} />
      <Container>{/* <Featured /> */}</Container>
    </>
  );
}

function PreviewHomePage({ query }) {
  const data = usePreview(null, query);

  return (
    <>
      <HomePage data={data} />
      <ExitPreview />
    </>
  );
}

// function Featured() {
//   const [selected, setSelected] = useState(1);

//   return (
//     <div className="flex items-end justify-center -space-x-8 py-32">
//       {Array(3)
//         .fill()
//         .map((_, i) => (
//           <div
//             key={i}
//             onClick={() => setSelected(i)}
//             className={`${
//               selected === i
//                 ? "z-10 scale-125"
//                 : `z-0 scale-95 hover:scale-100 ${
//                     selected > i ? "-rotate-6" : "rotate-6"
//                   }`
//             } cursor-pointer transition-all transform`}
//           >
//             <EventCard />
//           </div>
//         ))}
//     </div>
//   );
// }
