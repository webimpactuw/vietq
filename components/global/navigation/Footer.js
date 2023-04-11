import Container from "../Container";
import JoinOurCommunity from "../JoinOurCommunity";

import Image from "next/image";
import { HorizontalNavigation, VerticalNavigation } from "./Navigation";

import Link from "next/link";
import vietQWhite from "../../../public/logos/vietq_logo_white.png";

export default function Footer({ preview = false }) {
  return (
    <footer
      className={`bg-blue-900 text-white border-t border-blue-800 ${
        preview ? "pointer-events-none" : ""
      }`}
    >
      <Container>
        <div className="divide-y divide-champagne">
          <div className="space-y-8 pb-8 divide-y md:divide-y-0 divide-champagne ">
            <div className="flex md:flex-row flex-col md:items-center md:justify-between md:space-x-32 space-y-8 md:space-y-0">
              <Link href="/">
                <Image
                  src={vietQWhite}
                  alt="VietQ Logo"
                  className="w-20 hover:opacity-75 transition-opacity"
                  priority={true}
                />
              </Link>
              <HorizontalNavigation />
              <VerticalNavigation />
            </div>
            <div className="space-y-4 md:pt-0 pt-4">
              <h3 className="tracking-tighter text-2xl font-semibold font-display">
                Subscribe to our newsletter
              </h3>
              <JoinOurCommunity footer={true} />
            </div>
          </div>
          <div className="pt-8 flex md:flex-row md:items-center md:justify-between md:space-x-16 flex-col-reverse">
            <small className="text-xs uppercase tracking-widest">
              Copyright @ {new Date().getFullYear()} VietQ <br /> Made by
              Dubvelopers with{" "}
              <span className="hover:text-red-200 transition-colors">love</span>{" "}
              and support
            </small>
            <div className="flex items-center md:justify-end space-x-6 pb-8 md:pb-0">
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
              {/* <SocialIcon
                href="https://www.twitter.com/vietq.community"
                src="/socials/twitter.svg"
                alt="Twitter"
              /> */}
            </div>
          </div>
        </div>
      </Container>
      <div className="gradient w-full h-2 -scale-x-100" />
    </footer>
  );
}

function SocialIcon({ href, src, alt }) {
  return (
    <div className="hover:opacity-75 transition-opacity">
      <a href={href}>
        <Image src={src} alt={alt} className="w-6 h-6" width={24} height={24} />
      </a>
    </div>
  );
}
