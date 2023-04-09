import Container from "@/components/global/Container";
import urlFor from "@/sanity/lib/urlFor";
import Image from "next/image";

export default function Team({ data }) {
  return (
    <Container>
      <div className="pb-16 space-y-8">
        <div className="space-y-2">
          <h1 className="text-9/2xl font-bold tracking-tighter font-display leading-tight">
            Meet the team
          </h1>
          <p className="text-base font-medium text-gray-600 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quod, voluptate, quia, voluptates quas voluptatibus quibusdam quae
            quidem quos quas voluptatibus quibusdam quae.
          </p>
        </div>
        <div className="h-full"></div>
        <div className="grid md:grid-cols-4 col-span-2 gap-4">
          {data.map((member, i) => (
            <TeamMemberCard key={i} member={member} />
          ))}
        </div>
      </div>
    </Container>
  );
}

function TeamMemberCard({ member: { name, role, bio, image } }) {
  return (
    <div className="space-y-4">
      <div className="w-full rounded-2xl overflow-hidden relative border">
        <Image
          src={urlFor(image).auto("format").width(1920).height(1280).url()}
          className="w-full h-full object-cover"
          width={1920}
          height={1280}
          alt={name}
          loading="lazy"
          blurDataURL={image.lqip}
        />
        <div className="p-4 absolute bottom-0 left-0 bg-gradient-to-b to-gray-900 from-transparent w-full h-full">
          <div className="flex flex-col space-y-1 items-start justify-end w-full h-full text-white font-semibold">
            <h3 className="text-xl font-display tracking-tighter font-semibold">
              {name}
            </h3>
            <p className="tracking-widest text-white/75 text-xxs uppercase font-medium">
              {role}
            </p>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600">{bio}</p>
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
