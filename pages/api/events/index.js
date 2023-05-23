import client from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default async function handler(req, res) {
  // const query = groq`*[_type == "event" && dateTime(dateRange.start + 'T00:00:00Z') > dateTime(now())] | order(dateRange.start asc) {
  //   title,
  //   image {
  //   ...,
  //   "lqip": asset->metadata.lqip,
  //   "colors": asset->metadata.palette,
  //   },
  //   description,
  //   location,
  //   dateRange,
  //   "slug": slug.current,
  //   tags
  // }`;

  // const data = await client.fetch(query);

  const { page } = req.query;

  if (page === undefined) {
    res.status(400).end("Missing one or more parameters");
  } else {
    const query = groq`{
    "total": count(*[_type == "event"]),
    "page": $page,
    "events": *[_type == "event"] | order(dateRange.start asc)[($page * $limit)...($limit + ($page * $limit))] {
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

    if (data.page > data.totalPages) {
      res.status(404).end("Page not found");
    } else {
      res.status(200).json({
        totalPages: Math.ceil(data.total / limit),
        ...data,
      });
    }
  }
}
