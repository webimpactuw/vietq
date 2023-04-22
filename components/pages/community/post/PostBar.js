import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

export default function PostBar({ data }) {
  const url = `${process.env.NEXT_PUBLIC_HOST}/community/post/${data.slug}`;
  const text = `Check out this blog post from VietQ: ${data.title}`;

  return (
    <div className="bg-gray-800 text-white hover:text-white/75 transition-colors border-b pt-24 pb-3 top-0 sticky border-blue-900">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between space-x-24">
        <Link href="/community">
          <div className="inline-flex items-center text-xs font-semibold uppercase tracking-widest">
            <ChevronLeftIcon className="inline-block w-5 h-t mr-2 shrink-0" />
            Back to community
          </div>
        </Link>
        <div className="space-x-4 flex items-center justify-end">
          <a href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`}>
            Twitter
          </a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
            facebook
          </a>
        </div>
      </div>
    </div>
  );
}
