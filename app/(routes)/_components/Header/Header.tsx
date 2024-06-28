"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import HeaderLink from "./HeaderLink";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <nav className={`start-0 fixed w-full z-10 dak:border-gray-600 transition ${ open ? 'bg-white md:bg-inherit' : ''} ${scrollY > 100 ? 'bg-white border-b border-gray-200' : 'bg-transparent'}`}>
      <div className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ${scrollY > 100 ? 'p-4' : 'p-8'}`}>
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {scrollY > 100 ? 
            <img
              src={`/assets/images/logo.png`}
              alt="Akira Studios"
              className="w-20 transition"
            /> : 
            <img
              src={`/assets/images/logo_dark.png`}
              alt="Akira Studios"
              className="w-10 transition"
            /> 
          }
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href='/contact' className="hidden md:block w-full px-4 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-none hover:bg-black/70 focus:outline-none focus:bg-black focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Contact us
        </Link>
          <button
            className={`text-black md:hidden  ${
              open ? "bg-black text-white" : "bg-faded-white"
            }  w-14 h-14 flex items-center justify-center bg-black text-white rounded-full`}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${ open ? 'block ' : 'hidden'}`}
        >
          <HeaderLink onClick={handleLinkClick} />
        </div>
      </div>
    </nav>
  );
}
