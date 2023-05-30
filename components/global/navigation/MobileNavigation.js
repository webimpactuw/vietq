import Link from "next/link";
import { navigationData } from "./Navigation";

export default function MobileNavigation({ open, setShowDonate }) {
  if (open) {
    return (
      <div className="md:hidden px-4 pb-6 space-y-8 flex flex-col items-center justify-start">
        {navigationData.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="uppercase tracking-widest text-sm hover:opacity-75 transition-opacity font-semibold block"
          >
            {item.name}
          </Link>
        ))}
        <button
          onClick={() => setShowDonate(true)}
          className={`text-white bg-gray-900 uppercase tracking-widest text-sm hover:bg-blue-800 rounded-full px-3.5 py-2 transition-colors font-semibold`}
        >
          Donate
        </button>
      </div>
    );
  }
}
