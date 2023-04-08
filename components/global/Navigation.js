import Link from "next/link";

const navigationData = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Community",
    href: "/community",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export function HorizontalNavigation({ children, noHome = false }) {
  return (
    <div className="hidden md:flex items-center justify-end space-x-8">
      {navigationData
        .slice(noHome ? 1 : 0, navigationData.length)
        .map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="uppercase tracking-widest text-xs hover:opacity-75 transition-opacity font-semibold"
          >
            {item.name}
          </Link>
        ))}
      {children}
    </div>
  );
}

export function VerticalNavigation({ children, noHome = false }) {
  return (
    <div className="md:hidden space-y-8">
      {navigationData
        .slice(noHome ? 1 : 0, navigationData.length)
        .map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="uppercase tracking-widest text-xs hover:opacity-75 transition-opacity font-semibold block"
          >
            {item.name}
          </Link>
        ))}
      {children}
    </div>
  );
}
