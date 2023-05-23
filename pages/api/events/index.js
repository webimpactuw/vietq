import client from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default async function handler(req, res) {
  const { headers } = req;

  if (headers.authorization !== `Bearer ${process.env.SERVER_API_KEY}`) {
    res.status(401).end("Unauthorized");
  } else {
    const page = req.query.page;

    if (page === undefined) {
      res.status(400).end("Missing one or more parameters");
    } else {
      const query = groq`{
      "totalEvents": count(*[_type == "event" && dateTime(dateRange.start + 'T00:00:00Z') < dateTime(now())]),
      "page": $page,
      "events": *[_type == "event" && dateTime(dateRange.start + 'T00:00:00Z') < dateTime(now())] | order(dateRange.start desc)[($page * $limit)...($limit + ($page * $limit))] {
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
      }
    }`;

      const limit = 5;

      const data = await client.fetch(query, {
        page: Number(page),
        limit,
      });

      res.status(200).json({
        totalPages: Math.ceil(data.totalEvents / limit) * 8,
        ...data,
      });
    }
  }
}
