import React from "react";
import { Inter, Prata, Lato } from "next/font/google";


const prata = Prata({subsets: ["cyrillic"], weight:["400"] })

export default function Hero() {
  return (
    <section className="flex relative items-center justify-center w-full h-screen bg-black/50">
      <div className="px-4 mx-auto overflow-hidden md:px-12 md:py-32 max-w-7xl ">
        {/* <div className="grid items-center mt-20 grid-cols-1 gap-12 lg:grid-cols-2"> */}
        <div className="flex flex-col justify-center items-center mt-20">
          <div className="text-center">
            <p className={`text-white lg:text-2xl ${prata.className}`}>Akira Studios</p>
            <h1 className="mt-4 text-7xl leading-[90px] font-light tracking-tighter text-white lg:text-[8rem] lg:leading-[140px] lg:w-3/4 lg:mx-auto text-balance">
            Elevating Your Digital Presence 
            </h1>
            <p className="w-1/2 mx-auto mt-4 text-xl font-light text-white text-balance">
            Unleash The Power of Visuals
            </p>
            {/* <div className="flex flex-col items-center justify-center gap-2 mx-auto mt-8 md:flex-row">
              <button
                className="inline-flex items-center justify-center w-full md:w-1/2 gap-3 px-5 py-5 font-medium text-black text-xl duration-200 bg-white rounded-none hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                aria-label="Primary action"
              >
                Get started
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
