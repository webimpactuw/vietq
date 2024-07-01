import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export async function GET(request, { params }) {
  const query = groq`*[_type == "event" && dateTime(dateRange.start + 'T00:00:00Z') > dateTime(now())] | order(dateRange.start asc) {
    title,
    image {
    ...,
    "lqip": asset->metadata.lqip,
    "colors": asset->metadata.palette,
    },
    description,
    location,
    dateRange,
    "slug": slug.current,
    tags
  }`;

  const data = await client.fetch(query);

  return Response.json(data);
}
