import React from "react";
import PageHeaderTitle from "../../_components/Title/PageHeaderTitle";
import { Prata } from "next/font/google";
import Image from "next/image";


const prata = Prata({ subsets: ["cyrillic"], weight: ["400"] });

export default function Hero() {
  return (
    <section className="bg-black pt-40 lg:pt-20">
      <div className="relative items-center w-full px-4 pb-6 sm:pb-24 py-24 mx-auto overflow-hidden md:px-8 lg:px-8 max-w-7xl">
        <div className="grid items-start grid-cols-1 gap-12 md:grid-cols-2">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h1
              className={`text-3xl sm:text-4xl font-light text-white relative leading-[50px] md:leading-[60px] tracking-tighter lg:leading-[60px] ${prata.className}`}
            >
              {`Welcome to Akira Studios, where creativity meets excellence.
              Inspired by the meaning of our name, "light," we strive to
              illuminate your brand with unparalleled brilliance and artistry.`}
            </h1>
          </div>
          <div className="">
            <div className="flex items-center w-full bg-red-50">
              <Image
                alt="#_"
                className="object-cover"
                src="/assets/images/about.png"
                height={100}
                loading="lazy"
                width={628}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
