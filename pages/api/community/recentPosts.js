import client from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default async function handler(req, res) {
  const { headers } = req;

  if (headers.authorization !== `Bearer ${process.env.SERVER_API_KEY}`) {
    res.status(401).end("Unauthorized");
  } else {
    const query = groq` *[_type == "blogPost"][0...3] {
     ...,
      title,
      "slug": slug.current,
      "author": author->{
        name,
        image,
        role
      },
      date,
      image {
        ...,
        "lqip": asset->metadata.lqip
      },
      content[_type=="block" && style=="normal"]
    }`;

    const data = await client.fetch(query);

    res.status(200).json(data);
  }
}
