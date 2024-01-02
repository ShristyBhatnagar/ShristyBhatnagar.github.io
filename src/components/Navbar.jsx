"use client";
import Link from "next/link";
import React, { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
// ... (previous code remains the same)

const Navbar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto p-8 py-2">
        <Link href={"/"}>
          <p className="text-2xl md:text-5xl text-white font-semibold">LOGO</p>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navBarOpen ? (
            <button
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavBarOpen(true)}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavBarOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-[#ADB7BE] ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path}>
                  <p className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                    {link.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        { navBarOpen ? <MenuOverlay links={navLinks}/> : null}
        
      </div>
    </nav>
  );
};

export default Navbar;
