import React from "react";
import { Inter, Prata, Lato } from "next/font/google";
import { Mouse } from 'lucide-react';


const prata = Prata({subsets: ["cyrillic"], weight:["400"] })

export default function Hero() {
  return (
    <section 
        style={{
          backgroundImage: "url('/assets/images/pricing.jpeg')",
          backgroundPosition: "center",
          objectFit: 'cover',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
    className="flex relative items-center justify-center w-full">
      <div className="px-4 mx-auto overflow-hidden md:px-12 py-32 max-w-7xl ">
        <div className="flex flex-col justify-center items-center mt-20">
          <div className="text-center">
            <p className={`text-white `}>pricing</p>
            <h1 className={`${prata.className} mt-4 sm:mt-2 text-5xl font-medium sm:font-semibold tracking-tighter text-white lg:text-7xl leading-[70px] lg:leading-[90px] text-balance`}>
             Our pricing is simple with no hidden fees
            </h1>
            <p className="w-1/2 mx-auto mt-4 text-base font-medium text-white text-balance">
            Pricing plans for businesses at every stage of growth
            </p>
            <div className="flex flex-col items-center justify-center gap-2 mx-auto mt-8 md:flex-row">
              <button
                className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-black md:w-auto rounded-none hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                aria-label="Primary action"
              >
                <span>Scroll Down</span>
                <Mouse />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
