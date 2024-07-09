import React from "react";
import Link from "next/link";
import { navItems } from "@/app/actions";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";


export default function Footer1() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-black">
      <div className="container p-4 py-12 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <Link href="#">
                {/* <img
                  className="w-auto h-7"
                  src="https://merakiui.com/images/full-logo.svg"
                  alt=""
                /> */}
                <p className="text-white">Akira Studios</p>
              </Link>
              <p className="max-w-sm mt-2 text-gray-200 dak:text-gray-400">
                At Akira Studios, we are passionate about elevating your digital
                marketing strategy.
              </p>
              <div className="flex mt-6 -mx-2">
                <Link
                  href="https://www.instagram.com/akiramediamarketing/"
                  target="_blank"
                  className="mx-2 text-gray-400 transition-colors duration-300 dak:text-gray-300 hover:text-blue-500 dak:hover:text-blue-400"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://x.com/media_akira"
                  rel="noreferrer"
                  target="_blank"
                  className="mx-2 text-gray-400 transition-colors duration-300 dak:text-gray-300 hover:text-blue-500 dak:hover:text-blue-400"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/akira-media-marketing/"
                  rel="noreferrer"
                  target="_blank"
                  className="mx-2 text-gray-400 transition-colors duration-300 dak:text-gray-300 hover:text-blue-500 dak:hover:text-blue-400"
                  aria-label="Linkedin"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              <div>
                <h3 className="text-gray-300 uppercase dak:text-white">
                  Quick links
                </h3>
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block mt-2 text-sm text-gray-300 dak:text-gray-400 hover:underline"
                  >
                    {item.title}
                  </Link>
                ))}
                <Link
                  href="#"
                  className="block mt-2 text-sm text-gray-300 dak:text-gray-400 hover:underline"
                >
                  Contact us
                </Link>
              </div>
              <div>
                <h3 className="text-gray-300 uppercase dak:text-white">
                  Our services
                </h3>
                <Link
                  href="#"
                  className="block mt-2 text-sm text-gray-300 dak:text-gray-400 hover:underline"
                >
                  Photography
                </Link>
                <Link
                  href="#"
                  className="block mt-2 text-sm text-gray-300 dak:text-gray-400 hover:underline"
                >
                  Videography
                </Link>
                <Link
                  href="#"
                  className="block mt-2 text-sm text-gray-300 dak:text-gray-400 hover:underline"
                >
                  Social media
                </Link>
                <Link
                  href="#"
                  className="block mt-2 text-sm text-gray-300 dak:text-gray-400 hover:underline"
                >
                  Branding
                </Link>
              </div>
              <div>
                <h3 className="text-gray-300 uppercase dak:text-white">
                  Connect with us
                </h3>
                <Link
                  href="https://www.instagram.com/akiramediamarketing/"
                  target="_blank"
                  className="block mt-2 text-sm text-gray-300 dak:text-gray-400 hover:underline"
                >
                  Instagram
                </Link>
                <Link
                  href="https://x.com/media_akira"
                  rel="noreferrer"
                  target="_blank"
                  className="block mt-2 text-sm text-gray-300 dak:text-gray-400 hover:underline"
                >
                  Twitter
                </Link>
                <Link
                  href="https://www.linkedin.com/company/akira-media-marketing/"
                  target="_blank"
                  className="block mt-2 text-sm text-gray-300 dak:text-gray-400 hover:underline"
                >
                  Linkedln
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-5 bg-gray-700 border-none dak:bg-gray-700" />
        <div>
          <p className="text-center text-gray-500 dak:text-gray-400">
            © Akira Studios {currentYear} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
