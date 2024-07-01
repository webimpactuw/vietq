import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export async function GET(request, { params }) {
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

  return Response.json(data);
}
