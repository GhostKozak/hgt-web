"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileNavToggle, setMobileNavToggle] = useState(false);

  const navItems = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Service", link: "#service" },
    { id: 4, name: "Pricing", link: "#pricing" },
    { id: 5, name: "Team", link: "#team" },
  ];

  return (
    <header className="fixed z-10 w-full p-5">
      <div className="content container mx-auto flex justify-between rounded-b-md bg-white p-5">
        {/* Logo */}
        <div className="logo brand flex content-center justify-center">
          <h1 className="flex content-center justify-center align-middle text-black">
            <Image
              src={
                "https://framerusercontent.com/images/HXA1ecuB66Rl3hz4pQ0mjjLfNVo.svg"
              }
              alt=""
              width={98}
              height={28}
            />
          </h1>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          type="button"
          className="mobile-nav-toggle cursor-pointer lg:hidden"
          onClick={() => setMobileNavToggle(!mobileNavToggle)}
        >
          {/* Hamburger Icon */}
          {!mobileNavToggle ? (
            <div className="flex h-7 w-10 flex-col content-end items-end justify-between py-1">
              <span className="inline-block h-0.5 w-6 bg-black"></span>
              <span className="inline-block h-0.5 w-7 bg-black"></span>
              <span className="inline-block h-0.5 w-6 bg-black"></span>
            </div>
          ) : (
            // Close Icon
            <div className="relative h-7 w-10 py-1">
              <span className="absolute top-1/2 right-0 h-0.5 w-6 -translate-y-1/2 rotate-45 bg-black"></span>
              <span className="absolute top-1/2 right-0 h-0.5 w-6 -translate-y-1/2 -rotate-45 bg-black"></span>
            </div>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden h-min lg:block">
          <ul className="flex gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="text-base font-semibold text-black transition-all ease-linear hover:text-gray-700"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileNavToggle && (
        <div className="relative -top-1 container mx-auto">
          <nav className="absolute w-full border-t border-gray-200 bg-white shadow-md lg:hidden">
            <ul className="flex flex-col p-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="block p-2 text-lg text-black transition-all hover:pl-4 hover:text-gray-700"
                    onClick={() => setMobileNavToggle(false)} // Menüden seçince otomatik kapanması için
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
