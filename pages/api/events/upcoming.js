import client from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default async function handler(req, res) {
  const { headers } = req;

  if (headers.authorization !== `Bearer ${process.env.SERVER_API_KEY}`) {
    res.status(401).end("Unauthorized");
  } else {
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

    res.status(200).json(data);
  }
}
