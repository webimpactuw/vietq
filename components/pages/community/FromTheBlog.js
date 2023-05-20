import Container from "@/components/global/Container";
import RecentPosts from "./post/RecentPosts";

export default function FromTheBlog() {
  return (
    <div className="bg-gray-900 pt-12 pb-8">
      <Container>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-white text-5xl font-bold tracking-tighter font-display leading-tight">
              From the blog
            </h2>
            <p className="text-xl font-medium text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia.
            </p>
          </div>
          <RecentPosts light={true} />
        </div>
      </Container>
    </div>
  );
}
