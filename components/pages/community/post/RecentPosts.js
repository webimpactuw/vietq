import BlogPostCard from "@/components/cards/BlogPostCard";

export default function RecentPosts() {
  return (
    <div className="border-t border-gray-500 pt-16">
      <div className="space-y-8">
        <h2 className="font-display font-bold text-5xl tracking-tighter">
          Recent blog posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
        </div>
      </div>
    </div>
  );
}
