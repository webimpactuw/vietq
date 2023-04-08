import Link from "next/link";
import Navigation from "./Navigation";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full text-white z-40 ">
      <div className="gradient h-2" />
      <div className="mx-auto max-w-6xl py-4 px-4 space-y-4">
        <div className="flex items-center justify-between space-x-16">
          <Link href="/">
            <h1 className="text-2xl font-bold tracking-tight">VietQ</h1>
          </Link>
          <Navigation noHome={true}>
            <Link
              href="/donate"
              className="text-blue-800 bg-white uppercase tracking-widest text-xs hover:bg-gray-300 rounded-full px-3 py-1.5 transition-colors font-semibold"
            >
              Donate
            </Link>
          </Navigation>
        </div>
      </div>
    </nav>
  );
}
