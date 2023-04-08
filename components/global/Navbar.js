import Link from "next/link";
import { HorizontalNavigation } from "./Navigation";
import { useScrollData } from "scroll-data-hook";

import vietQWhite from "../../public/logos/vietq_logo_white.png";
import vietQBlack from "../../public/logos/vietq_logo_black.png";

import Image from "next/image";

export default function Navbar({ transparent = false }) {
  const {
    scrolling,
    time,
    speed,
    direction,
    position,
    relativeDistance,
    totalDistance,
  } = useScrollData({
    onScrollStart: () => {
      console.log("Started scrolling");
    },
    onScrollEnd: () => {
      console.log("Finished scrolling");
    },
  });

  const past = position.y > 200;

  return (
    <nav
      className={`fixed top-0 w-full transition-colors border-b ${
        transparent
          ? past
            ? "text-blue-800 bg-champagne border-blue-900"
            : "text-white bg-champagne/0 border-transparent"
          : "text-blue-800 bg-champagne border-blue-900"
      } z-40 `}
    >
      <div className="gradient h-2" />
      <div className="mx-auto max-w-6xl py-4 px-4 space-y-4">
        <div className="flex items-center justify-between space-x-16">
          <Link href="/">
            <Image
              src={transparent ? (past ? vietQBlack : vietQWhite) : vietQBlack}
              alt="VietQ Logo"
              className="w-16 hover:opacity-75 transition-opacity"
              priority={true}
            />
          </Link>
          <HorizontalNavigation noHome={true}>
            <Link
              href="/donate"
              className={`${
                transparent
                  ? past
                    ? "text-white bg-blue-800"
                    : "text-blue-800  bg-white"
                  : "text-white bg-blue-800"
              } uppercase tracking-widest text-xs hover:bg-gray-300 rounded-full px-3 py-1.5 transition-colors font-semibold`}
            >
              Donate
            </Link>
          </HorizontalNavigation>
        </div>
      </div>
    </nav>
  );
}
