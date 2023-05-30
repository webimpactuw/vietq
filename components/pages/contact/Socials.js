import Image from "next/image";

import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Socials() {
  return (
    <div className="flex flex-col items-start md:items-start justify-start space-y-4 md:order-last order-first">
      <h1 className="text-xl font-semibold tracking-tightest">Email Us</h1>
      <IconLink
        text="vietqorganization@gmail.com"
        href="@mailto:vietqorganization@gmail.com"
      >
        <EnvelopeIcon className="w-5 h-5" />
      </IconLink>
      <IconLink text="Seattle, WA">
        <MapPinIcon className="w-5 h-5" />
      </IconLink>
      <h1 className="text-xl font-semibold tracking-tightest">Follow Us</h1>
      <div className="flex flex-row items-start gap-x-2">
        <IconLink
          text="@vietqseattle"
          href="https://www.instagram.com/vietqseattle/?hl=en"
        >
          <Image
            src="/socials/facebook-dark.svg"
            alt="Facebook"
            width={24}
            height={24}
            className="w-5 h-5"
          />
          <Image
            src="/socials/instagram-dark.svg"
            alt="Instagram"
            width={24}
            height={24}
            className="w-5 h-5"
          />
        </IconLink>
      </div>
    </div>
  );
}

function IconLink({ children, text, href = "" }) {
  return (
    <div
      className={`${
        href.length > 0
          ? " hover:opacity-75 transition-opacity cursor-pointer"
          : ""
      } flex space-x-2 items-center md:justify-end md:text-right uppercase tracking-widest font-semibold`}
    >
      {children}
      {href.length > 0 ? (
        <a href={href} className="text-sm -mt-0.5">
          {text}
        </a>
      ) : (
        <p className="text-sm -mt-0.5">{text}</p>
      )}
    </div>
  );
}
