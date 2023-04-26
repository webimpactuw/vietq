import client from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default async function handler(req, res) {
  const query = groq`*[_type == "event" && dateTime(dateRange) > dateTime(now())] | order(dateRange.start asc) {
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

  res.status(200).json(data);
}
