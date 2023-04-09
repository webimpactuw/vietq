import Container from "@/components/global/Container";
import RootLayout from "@/components/global/RootLayout";
import Image from "next/image";

export default function About() {
  return (
    <RootLayout title="About">
      <Container>
        <div className="pt-32 pb-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tighter font-display">
              About VietQ
            </h3>
            <h1 className="text-5xl font-bold tracking-tighter font-display leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
          </div>
          <div className="flex flex-col items-start justify-end">
            <p className="text-xl font-medium text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam quae
              quidem quos quas voluptatibus quibusdam quae.
            </p>
          </div>
        </div>
      </Container>
      <div className="gradient w-full h-4" />
      <div className="relative h-96">
        <Image
          src="/media/team.jpg"
          alt="Cover Image"
          fill="true"
          className="pointer-events-none select-none w-full h-full object-cover"
        />
      </div>
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-16 border-b border-gray-500">
          <div className="flex flex-col items-start justify-center">
            <p className="text-lg font-medium text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam quae
              quidem quos quas voluptatibus quibusdam quae.
            </p>
          </div>
          <h1 className="text-9/2xl font-bold tracking-tighter font-display leading-tight text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </div>
      </Container>
      <OurTeam />
    </RootLayout>
  );
}

function OurTeam() {
  return (
    <Container>
      <div className="pb-16 grid grid-cols-3 gap-4 relative">
        <div className="h-full">
          <div className="space-y-4 sticky top-32">
            <h1 className="text-9/2xl font-bold tracking-tighter font-display leading-tight">
              Our team
            </h1>
            <p className="text-base font-medium text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam quae
              quidem quos quas voluptatibus quibusdam quae.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 col-span-2 gap-8">
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
        </div>
      </div>
    </Container>
  );
}

function TeamMemberCard() {
  return (
    <div className="space-y-4">
      <div className="w-full rounded-2xl h-64 overflow-hidden relative border border-gray-900">
        <img
          src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
          className="w-full h-full object-cover"
        />
        <div className="p-6 absolute bottom-0 left-0 bg-gradient-to-b to-gray-900 from-transparent w-full h-full">
          <div className="flex flex-col items-start justify-end w-full h-full text-white font-semibold">
            <h3 className="text-xl font-display tracking-tighter font-bold">
              John Doe
            </h3>
            <div className="flex items-center justify-between space-x-4 w-full">
              <p className="font-display tracking-tighter text-white/75 text-base font-medium">
                Founder & CEO
              </p>
              <div className="flex items-center justify-end space-x-4">
                <SocialIcon
                  href="https://www.facebook.com/vietq.community"
                  src="/socials/facebook.svg"
                  alt="Facebook"
                />
                <SocialIcon
                  href="https://www.instagram.com/vietqseattle"
                  src="/socials/instagram.svg"
                  alt="Instagram"
                />
                <SocialIcon
                  href="https://www.twitter.com/vietq.community"
                  src="/socials/twitter.svg"
                  alt="Twitter"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod,
        voluptate, quia, voluptates quas voluptatibus quibusdam quae quidem quos
        quas voluptatibus quibusdam quae.
      </p>
    </div>
  );
}

function SocialIcon({ href, src, alt }) {
  return (
    <div className="hover:opacity-75 transition-opacity">
      <a href={href}>
        <Image src={src} alt={alt} className="w-4 h-4" width={24} height={24} />
      </a>
    </div>
  );
}
