import React from "react";
import Hero from "./_components/Hero";
import Form from "./_components/Form";
import Link from "next/link";
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoTwitter,
} from "react-icons/bi";

export default function page() {
  return (
    <div className="max-w-7xl mx-auto mb-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-0">
        <Hero />
        <div className="p-4 md:px-8 grid gap-5">
          <Form />
          <div className="relative py-3">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 text-sm text-black bg-white">Or</span>
            </div>
          </div>

          <div className="grid gap-10">
            <div className="grid grid-cols-1 gap-5">
              <div>
                <p className="font-medium text-gray-500">email us </p>
                <p className="text-2xl md:text-3xl">admin@akiramediamarketing.com</p>
              </div>
              <div>
                <p className="font-medium text-gray-500">Based in</p>
                <p className="text-xl md:text-2xl text-gray-600">
                  Vancouver, British Columbia Canada
                </p>
              </div>
            </div>
            <div className="grid gap-3">
              <p className="font-medium text-gray-500">follow us on</p>
              <ul className="flex gap-4">
                <li>
                  <Link href="#" target="_blank">
                    <BiLogoFacebookCircle size={55} />
                  </Link>
                </li>
                <li>
                  <Link href="#" target="_blank">
                    <BiLogoInstagramAlt size={55} />
                  </Link>
                </li>
                <li>
                  <Link href="#" target="_blank">
                    <BiLogoTwitter size={55} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div>b</div> */}
      </div>
    </div>
  );
}
