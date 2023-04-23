import BlogPostCard from "@/components/cards/BlogPostCard";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function RecentPosts({ ignore = [] }) {
  const { data, error, isLoading } = useSWR(
    "/api/community/recentPosts",
    fetcher
  );

  const filtered =
    data && !error ? data.filter((p) => !ignore.includes(p.slug)) : [];

  return filtered.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {filtered.map((post) => (
        <BlogPostCard key={post.slug} data={post} />
      ))}
    </div>
  ) : (
    <div className="text-center">
      <p>No posts found. Check back later!</p>
    </div>
  );
}
