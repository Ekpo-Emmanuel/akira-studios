import React from "react";
import Link from "next/link";
import HeaderLink from "./HeaderLink";
import Image from "next/image";

export default function Header2() {
  return (
    <nav className="bg-transparent fixed top-0 w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/assets/images/logo.png"
            alt="Akira Studios"
            height={30}
            width={50}
          />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href='/contact' className="w-full px-4 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-none hover:bg-black/70 focus:outline-none focus:bg-black focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Contact us
        </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dak:text-gray-400 dak:hover:bg-gray-700 dak:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <HeaderLink />
        </div>
      </div>
    </nav>
  );
}