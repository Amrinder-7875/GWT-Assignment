"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuitems = [
    { name: "Blog", link: "/Blog" },
    { name: "Contact", link: "/Contact" },
    { name: "Our Office", link: "/#OurOffice" },
  ];

  return (
    <header
      id="navbar"
      className="bg-[var(--background)] backdrop-blur-sm  fixed w-full top-0 z-50"
    >
      {/* NAV BAR */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-4 sm:py-6 flex items-center justify-between">
        {/* MOBILE: MENU ICON (LEFT) + LOGO (RIGHT) */}
        {/* DESKTOP: LOGO (LEFT) + MENU (RIGHT) */}

        {/* MOBILE MENU ICON - Shows on mobile, hidden on desktop */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1 z-50 relative w-8 h-6"
          aria-label="Toggle menu"
        >
          <span
            className={`h-[2px] w-8 bg-[var(--text-color)] transition-all duration-300 absolute ${
              open ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"
            }`}
          />
          <span
            className={`h-[2px] w-8 bg-[var(--text-color)] transition-all duration-300 absolute top-1/2 -translate-y-1/2 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[2px] w-8 bg-[var(--text-color)] transition-all duration-300 absolute ${
              open ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-0"
            }`}
          />
        </button>

        {/* LOGO - Right on mobile, Left on desktop */}
        <div className="md:flex-none">
          <a href="/" className="block">
            <span className="text-lg sm:text-xl md:text-2xl font-[var(--font-accent)] font-normal text-[var(--text-color)] tracking-tight">
              Dr.Maya Reynolds
            </span>
          </a>
        </div>

        {/* DESKTOP MENU - Hidden on mobile */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 lg:gap-10 items-center text-[var(--text-color)]">
            {menuitems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="text-base lg:text-lg hover:opacity-60 transition-opacity duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 bg-[var(--background)] backdrop-blur-md flex flex-col items-center justify-center gap-8 sm:gap-10 text-[var(--text-color)] transition-all duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ top: 0 }}
      >
        {menuitems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            onClick={() => setOpen(false)}
            className="text-2xl sm:text-3xl font-normal hover:opacity-60 transition-opacity duration-200"
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
}