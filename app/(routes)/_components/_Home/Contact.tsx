import React from "react";
import { Prata } from "next/font/google";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


const prata = Prata({ subsets: ["cyrillic"], weight: ["400"] });

export default function Contact() {
  return (
    <section className="">
      <div className="relative items-center w-full px-4 py-24 mx-auto overflow-hidden md:px-8 lg:px-12 max-w-7xl">
        <div>
          <h1 className={`text-3xl sm:text-4xl font-light text-black lg:text-4xl relative leading-[50px] md:leading-[60px] tracking-tighter lg:leading-[70px] ${prata.className}`}>
            At Akira Studios, we strive to help businesses like yours harness 
            the power of visual storytelling to elevate your digital presence. 
            We offer a comprehensive suite of services, which includes photography, videography 
            and strategic market consultations. 
          </h1>
        </div>
        <div className="flex flex-col gap-3 mt-10 lg:flex-row lg:gap-6">
          <Link
            className="inline-flex gap-2 bg-black items-center justify-center w-full px-4 py-2 text-base font-semibold text-white rounded-none active:bg-tangaroa-800 active:text-tangaroa-300 bg-tangaroa-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tangaroa-900 focus:outline-none group hover:bg-tangaroa-700 hover:text-tangaroa-100 lg:w-auto"
            href='/contact'
          >
            Contact us
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
