import React from "react";
import { Prata } from "next/font/google";

const prata = Prata({ subsets: ["cyrillic"], weight: ["400"] });

export default function Skill() {
  return (
    <section className="px-4 sm:px-0 py-24">
      <div className="py-20 px-5 flex md:items-center md:justify-center">
        <h1
          className={`text-4xl font-semibold tracking-tighter text-black lg:text-4xl text-balance ${prata.className}`}
        >
          Mission
        </h1>
      </div>
      <div className="bg-black py-20 px-5 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center gap-10">
        <h1
          className={`text-4xl font-semibold tracking-tighter text-white lg:text-4xl text-balance ${prata.className}`}
        >
          Vision
        </h1>
        <p className="mt-4 text-base text-gray-200 md:w-1/2 lg:w-[30%] md:max-w-1/2 lg:max-w-[30%]">
          {`At Akira Studios, we transcend the ordinary to elevate your brand's
          visual storytelling. Our efficient and adaptable team crafts stunning
          videography, photography, and visual content, ensuring high-quality,
          cost-effective results. Let us captivate your audience and achieve
          your digital marketing goals with unparalleled excellence.`}
        </p>
      </div>
      <div className="py-20 px-5 flex flex-col gap-10 md:items-center md:justify-center ">
        <h1
          className={`text-4xl font-semibold tracking-tighter text-black lg:text-4xl text-balance ${prata.className}`}
        >
          Skillful
        </h1>
        <div className="border-t border-t-1 border-black  w-full max-w-7xl">
          <ul className="grid grid-cols-2 sm:grid-cols-4">
            <li className={`py-2 border-r border-black sm:px-4  sm:flex sm:items-center sm:justify-center sm:text-2xl  sm:py-10 ${prata.className}`}>
              Creativity
            </li>
            <li className={`py-2 px-4 sm:border-black sm:border-r sm:flex sm:items-center sm:justify-center sm:text-2xl sm:py-10  ${prata.className}`}>Innovation</li>
            <li className={`py-2 border-r border-black sm:px-4  sm:flex sm:items-center sm:justify-center sm:text-2xl sm:py-10 ${prata.className}`}>
              Expert Team
            </li>
            <li className={`py-2 px-4  sm:flex sm:items-center sm:justify-center sm:text-2xl sm:py-10  ${prata.className}`}>Captivating</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
