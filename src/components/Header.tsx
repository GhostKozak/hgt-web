"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileNavToggle, setMobileNavToggle] = useState(false);

  const navItems = [
    { id: 1, name: "Ana Sayfa", link: "#home" },
    { id: 2, name: "Hakkımızda", link: "#about" },
    { id: 3, name: "Hizmetler", link: "#service" },
    { id: 4, name: "Başarılarımız", link: "#studies" },
    { id: 5, name: "Değerlerimiz", link: "#ourvalues" },
  ];

  return (
    <header className="fixed z-10 w-full p-2.5">
      <div className="lg:px-10">
        <div className="relative container mx-auto flex items-center justify-between rounded-b-md bg-white p-5 text-stone-900 shadow-md">
          {/* Logo */}
          <Link
            href={"#home"}
            className="logo brand flex content-center justify-center"
          >
            <div className="relative flex h-16 w-18 content-center justify-center overflow-hidden align-middle text-black">
              <div className="absolute top-0 right-0 bottom-0 left-0">
                <Image
                  src={"./logo.svg"}
                  alt=""
                  width={98}
                  height={28}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </Link>
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
            <div className="flex gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className="font-semibold transition-all ease-linear hover:text-gray-700"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
          {/* <div className="hidden items-center gap-5 lg:flex">
            <p className="font-semibold">İlgileniyor musunuz?</p>
            <a
              href="#"
              className="inline-flex rounded-full bg-yellow-200 px-7 py-4 font-semibold transition-all ease-linear hover:bg-yellow-300"
            >
              Birlikte çalışalım
            </a>
          </div> */}

          <div className="absolute -bottom-1 left-0 container mx-auto">
            <div
              className={`absolute w-full overflow-hidden transition-all duration-300 lg:hidden ${mobileNavToggle ? "max-h-96" : "max-h-0"}`}
            >
              <nav className="w-full rounded-lg border-t border-gray-200 bg-white shadow-md lg:hidden">
                <ul className="flex flex-col p-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.link}
                      className="block p-2 text-lg font-semibold transition-all hover:pl-4 hover:text-gray-700"
                      onClick={() => setMobileNavToggle(false)} // Menüden seçince otomatik kapanması için
                    >
                      {item.name}
                    </Link>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
