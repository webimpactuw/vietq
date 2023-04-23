import RecentPosts from "./post/RecentPosts";

export default function FromTheBlog() {
  return (
    <div className="py-8 md:py-16 space-y-8">
      <div className="space-y-4 text-center mx-auto max-w-xl">
        <h1 className="text-5xl font-bold tracking-tighter font-display leading-tight">
          From the blog
        </h1>
        <p className="text-lg font-medium text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          quod, voluptate, quia.
        </p>
      </div>
      <RecentPosts />
    </div>
  );
}
