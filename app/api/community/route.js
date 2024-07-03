import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export async function GET(request, { params }) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") - 1;

  if (page === undefined || page < 0) {
    return new Response("Missing one or more parameters", { status: 400 });
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

    return Response.json({
      totalPages: Math.ceil(data.totalEvents / limit),
      ...data,
    });
  }
}
