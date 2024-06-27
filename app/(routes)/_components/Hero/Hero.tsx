import React from "react";
import { Inter, Prata, Lato } from "next/font/google";


const prata = Prata({subsets: ["cyrillic"], weight:["400"] })

export default function Hero() {
  return (
    <section className="flex relative items-center justify-center w-full h-screen bg-black/50">
      <div className="px-4 mx-auto overflow-hidden md:px-12 max-w-7xl ">
        {/* <div className="grid items-center mt-20 grid-cols-1 gap-12 lg:grid-cols-2"> */}
        <div className="flex flex-col justify-center items-center mt-20">
          <div className="text-center">
            <p className={`text-white ${prata.className}`}>Akira Studios</p>
            <h1 className="mt-4 sm:mt-2 text-5xl font-medium sm:font-semibold tracking-tighter text-white lg:text-7xl text-balance">
            Elevating Your Digital Presence 
            </h1>
            <p className="w-1/2 mx-auto mt-4 text-base font-medium text-white text-balance">
            Unleash The Power of Visuals
            </p>
            <div className="flex flex-col items-center justify-center gap-2 mx-auto mt-8 md:flex-row">
              <button
                className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-black md:w-auto rounded-none hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                aria-label="Primary action"
              >
                Get started
              </button>
              <button
                className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 md:w-auto rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label="Secondary action"
              >
                Secondary button
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
