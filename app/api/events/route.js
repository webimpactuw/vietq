import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export async function GET(request, { params }) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") - 1;

  if (page === undefined || page < 0) {
    return new Response("Missing one or more parameters", { status: 400 });
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

    return Response.json({
      totalPages: Math.ceil(data.totalEvents / limit),
      ...data,
    });
  }
}
