import Container from "@/components/global/Container";
import urlFor from "@/sanity/lib/urlFor";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useState } from "react";

export default function Team({ data }) {
  return (
    <Container>
      <div className="py-8 md:py-16 space-y-8">
        <div className="space-y-4 text-center mx-auto max-w-xl">
          <h1 className="text-5xl font-bold tracking-tighter font-display leading-tight">
            Meet the team
          </h1>
          <p className="text-lg font-medium text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quod, voluptate, quia, voluptates quas voluptatibus quibusdam quae
            quidem quos quas voluptatibus quibusdam quae.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.map((member, i) => (
            <TeamMemberCard key={i} member={member} />
          ))}
          {/* {data.map((member, i) => (
            <TeamMemberCard key={i} member={member} />
          ))} */}
        </div>
      </div>
    </Container>
  );
}

function TeamMemberCard({ member: { name, bio, image, pronouns } }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-4">
      <Image
        src={urlFor(image).auto("format").width(1080).height(1080).url()}
        // src="/sample/square.png"
        className="rounded-2xl shadow-inner border border-champagne-700/25"
        width={1080}
        height={1080}
        alt={name}
        loading="lazy"
        placeholder="blur"
        blurDataURL={image.lqip}
      />
      <div>
        <h3 className="text-lg font-display tracking-tighter font-semibold">
          {name}
        </h3>
        <p className="text-sm tracking-tighter font-medium">{pronouns}</p>
      </div>
      <p className={`text-sm text-gray-600 ${showModal ? "line-clamp-6" : ""}`}>
        {bio}
      </p>
      <button
        className="text-xs font-medium hover:opacity-75 transition-opacity"
        onClick={() => setShowModal(!showModal)}
      >
        Show {showModal < 100 ? "more" : "less"}
        <ChevronDownIcon
          className={`w-6 h-6 mx-auto text-gray-600 inline-block -mt-0.5 ${
            !showModal ? "transform rotate-180" : ""
          }`}
        />
      </button>
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
