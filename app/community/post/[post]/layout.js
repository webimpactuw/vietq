import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default function Layout({ children }) {
  return children;
}

export async function generateMetadata({ params }) {
  const metadata = await getPostData(params.post);

  if (!metadata) notFound();

  return {
    title: `${metadata.title} | VietQ`,
    description: "A post from VietQ",
    openGraph: {
      title: `${metadata.title} | VietQ`,
      description: "A post from VietQ",
      url: `https://vietq.org/community/posts/${params.post}`,
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
      description: "A post from VietQ",
      image: [metadata.image],
    },
  };
}

async function getPostData(slug) {
  const query = groq`*[_type == "blogPost" && slug.current==$slug][0] {
  title,
  "slug": slug.current,
  "image": image.asset->url,
}`;

  const data = await client.fetch(query, {
    slug: slug,
  });

  return data;
}
