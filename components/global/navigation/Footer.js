"use client";

import Container from "../Container";

import CallToAction from "@/components/global/CallToAction";

import Image from "next/image";
import { HorizontalNavigation, VerticalNavigation } from "./Navigation";

import Link from "next/link";
import vietQWhite from "@/public/logos/vietq_logo_white.png";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname.includes("/admin")) {
    return null;
  }

  return (
    <>
      <CallToAction />
      <footer className="bg-blue-900 text-white border-t border-gray-900">
        <Container>
          <div className="divide-y divide-gray-800">
            <div className="space-y-8 pb-8 divide-y md:divide-y-0 divide-gray-800 ">
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
            </div>
            <div className="pt-8 flex md:flex-row md:items-center md:justify-between md:space-x-16 flex-col-reverse">
              <small className="text-xs uppercase tracking-widest">
                Copyright @ {new Date().getFullYear()} VietQ <br /> Made by Web
                Impact UW with{" "}
                <span className="hover:text-red-200 transition-colors">
                  love
                </span>{" "}
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
              </div>
            </div>
          </div>
        </Container>
        <div className="gradient w-full h-2 -scale-x-100" />
      </footer>
    </>
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
