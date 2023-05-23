import UniversalResourceCard from "@/components/cards/UniversalResourceCard";
import useSWR from "swr";

const fetcher = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_SERVER_API_KEY}`,
    },
  }).then((res) => res.json());

export default function RecentPosts({ ignore = [], light = false }) {
  const { data, error, isLoading } = useSWR(
    "/api/community/recentPosts",
    fetcher
  );

  const filtered =
    data && !error ? data.filter((p) => !ignore.includes(p.slug)) : [];

  return filtered.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {filtered.map((post) => (
        <UniversalResourceCard
          key={post.slug}
          resource={post}
          tags={false}
          forceBlog={true}
          light={light}
        />
      ))}
    </div>
  ) : (
    <div className="text-center">
      <p>No posts found. Check back later!</p>
    </div>
  );
}
