import Link from "next/link";

export default function Navigation({ children, noHome = false }) {
  return (
    <div className="flex items-center justify-end space-x-8">
      {navigation
        .slice(noHome ? 1 : 0, navigation.length)
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

const navigation = [
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
