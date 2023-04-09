import RootLayout from "@/components/global/RootLayout";
import Container from "@/components/global/Container";

import BlogPostCard from "@/components/cards/BlogPostCard";

export default function Community() {
  return (
    <RootLayout title="Community">
      <Container>
        <div className="py-24 text-center tracking-tight">
          <h1 className="text-3xl font-bold">From the blog</h1>
          <p className="text-gray-500">
            Learn how to grow your business with expert advice
          </p>
        </div>
        <div className="py-2 grid grid-cols-3 gap-y-12">
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
        </div>
      </Container>
    </RootLayout>
  );
}
