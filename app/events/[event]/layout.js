import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default function Layout({ children }) {
  return children;
}

export async function generateMetadata({ params }) {
  const metadata = await getEventData(params.event);

  if (!metadata) notFound();

  return {
    title: `${metadata.title} | VietQ`,
    description: metadata.description,
    openGraph: {
      title: `${metadata.title} | VietQ`,
      description: metadata.description,
      url: `https://vietq.org/events/${params.event}`,
      siteName: "VietQ",
      images: [
        {
          url: metadata.image,
          width: 1920,
          height: 1080,
          alt: metadata.title,
        },
      ],
    },
    twitter: {
      cardType: "summary_large_image",
      title: `${metadata.title} | VietQ`,
      description: metadata.description,
      image: [metadata.image],
    },
  };
}

async function getEventData(slug) {
  const query = groq`*[_type == "event" && slug.current==$slug][0] {
  title,
  "slug": slug.current,
  "image": image.asset->url,
  description,
}`;

  const data = await client.fetch(query, {
    slug: slug,
  });

  return data;
}
