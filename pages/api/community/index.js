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
      "totalEvents": count(*[_type == "resource" || _type == "blogPost"]),
      "page": $page,
      "resources": *[_type == "resource" || _type == "blogPost"] | order(_updatedAt desc) {
    _type,
    _updatedAt,
    _createdAt,
    title,
    description,
    "slug": slug.current,
    "author": author->{
      name,
      image,
    },
    link,
    date,
    image {
      ...,
      "lqip": asset->metadata.lqip,
    },
    "tags": coalesce(tags[]->{
      title,
      slug,
      "color": color.rgb
    },[]),
    content[_type=="block" && style=="normal"]
  }
    }`;

      const limit = 5;

      const data = await client.fetch(query, {
        page: Number(page),
        limit,
      });

      res.status(200).json({
        totalPages: Math.ceil(data.totalEvents / limit),
        ...data,
      });
    }
  }
}
