import Link from "next/link";
import React from "react";

export default function Navbar({}) {
  return (
    <>
      <div className="flex justify-between space-x-16 items-center h-16 mx-6">
        <Link href="" className="">VietQ</Link>
        <div className="space-x-8 tracking-widest flex items-center justify-end">
          <NavLink href="">Home</NavLink>
          <NavLink href="">About</NavLink>
          <NavLink href="">Contact</NavLink>
          <NavLink href="">Community</NavLink>
          <NavLink href="">Contact</NavLink>
          <Link href="" className="bg-black text-white font-extrabold rounded-full font-sans py-2 px-4 uppercase">Donate</Link>
        </div>
      </div>
    </>
  );
  }

  function NavLink({children, href}) {
    return  <Link href={href} className="hover:text-slate-400 text-black font-bold font-sans uppercase">{children}</Link>
  }