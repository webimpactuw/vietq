import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function Bar({ data, url, text, back }) {
  return (
    <div className="z-10 bg-blue-900 text-white transition-colors border-b pt-24 pb-3 top-0 sticky border-blue-900">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between space-x-24">
        <Link href={back.href}>
          <div className="inline-flex items-center text-sm font-medium hover:text-white/75">
            <ChevronLeftIcon className="inline-block w-5 h-5 mr-1 shrink-0 mt-0.5" />
            {back.text}
          </div>
        </Link>
        <div className="space-x-6 flex items-center justify-end">
          <div className="hover:opacity-75 transition-opacity">
            <a
              href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`}
              className="hover:text-white/75"
            >
              <Image
                src="/socials/twitter.svg"
                width={24}
                height={24}
                className="w-5 h-5"
                alt="Twitter"
              />
            </a>
          </div>
          <div className="hover:opacity-75 transition-opacity">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
              className="hover:text-white/75"
            >
              <Image
                src="/socials/facebook.svg"
                width={24}
                height={24}
                className="w-5 h-5"
                alt="Facebook"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
