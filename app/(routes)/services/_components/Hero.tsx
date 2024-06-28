import React from "react";
import PageHeaderTitle from "../../_components/Title/PageHeaderTitle";
import { Prata } from "next/font/google";
import Image from "next/image";

const prata = Prata({ subsets: ["cyrillic"], weight: ["400"] });

export default function Hero() {
  return (
    <section className="bg-black ">
      <div className="relative items-center w-full  mx-auto overflow-hidden max-w-[99rem]">
        <div className="grid items-start grid-cols-1 gap-12 md:grid-cols-2 ">
          <div className="py-20 max-w-xl mx-auto lg:mx-0 px-4 lg:pl-24">
            <h1
              className={`text-3xl font-light text-white relative leading-[50px] tracking-tighter  ${prata.className}`}
            >
              {`Empowering you to elevate your online presence with captivating content, committed to assisting industry leaders in dominating the digital landscape.`}
            </h1>
          </div>
          <div className=" h-full">
            <div className="flex items-center justify-center w-full h-full">
              <img
                alt="#_"
                className="w-full h-full object-cover"
                src="/assets/images/about.png"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
