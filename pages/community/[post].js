import Container from "@/components/global/Container";
import RootLayout from "@/components/global/RootLayout";
import BlogPostCard from "@/components/cards/BlogPostCard";

export default function Post() {
  return (
    <RootLayout title="Post">
      <Container>
        <div className="pt-24 pb-2 px-32">
          <div>
            <p className="text-gray-400 tracking-tight">Date: 00/00/0000</p>
            <h1 className="text-4xl font-semibold tracking-tighter py-2 pb-6">Lorem ipsum dolor sit amet</h1>
            <div className="flex items-center gap-2">
              <img src="/profile.png" alt="profile pic" className="w-10 h-10"/>
              <div className="flex flex-col items-start">
                <p className="font-thin tracking-tight">Author name</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <img src="/media/team.jpg" alt="cover pic" className="w-full h-96 object-cover" />
      <Container>
        <div className="px-32">
          <p className="py-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum arcu quis ipsum gravida, sed dignissim 
            odio pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            Nulla ipsum ligula, dignissim non massa a, convallis tristique nulla. Donec vitae tempor nulla, ac tempor nibh. 
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla quis vulputate 
            dolor, sed euismod sapien.
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">Lorem ipsum dolor sit amet</h1>
          <p className="pt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum arcu quis ipsum gravida, sed dignissim 
            odio pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            Nulla ipsum ligula, dignissim non massa a, convallis tristique nulla. Donec vitae tempor nulla, ac tempor nibh. 
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla quis vulputate 
            dolor, sed euismod sapien.
          </p>
          <p className="pt-10 pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum arcu quis ipsum gravida, sed dignissim 
            odio pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            Nulla ipsum ligula, dignissim non massa a, convallis tristique nulla. Donec vitae tempor nulla, ac tempor nibh. 
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla quis vulputate 
            dolor, sed euismod sapien.
          </p>
        </div>
      </Container>
      <Container>
        <div className="px-32 pb-24">
          <h1 className="text-4xl font-semibold tracking-tight pb-4">Check these out:</h1>
          <div className="flex flex-nowrap overflow-scroll gap-6">
            <BlogPostCard />
            <BlogPostCard />
            <BlogPostCard />
            <BlogPostCard />
            <BlogPostCard />
          </div>
        </div>
      </Container>
  </RootLayout>);
}
