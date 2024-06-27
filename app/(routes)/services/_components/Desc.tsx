import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Prata } from "next/font/google";
import React from "react";

const prata = Prata({ subsets: ["cyrillic"], weight: ["400"] });

export default function Desc() {
  return (
    <section>
      <div className="relative w-full overflow-hidden pb-6 sm:pb-32">
        <div className="bg-white grid grid-cols-1 sm:grid-cols-[0.3fr,2.4fr,0.3fr] sm:gap-10 lg:gap-20">
          <div className="bg-yellow sm:py-0 sm:flex sm:items-center sm:h-full">
            <p
              className={` lg:rotate-[-90deg] px-4 pb-6 sm:pb-0 py-14 mx-auto  text-4xl font-semibold tracking-tighter text-black lg:text-4xl text-balance ${prata.className}`}
            >
              About Us
            </p>
          </div>

          <div className="px-4 sm:px-0 sm:py-10 max-w-7xl lg:mx-auto">
            <div>
              <p className="mt-4 text-base md:text-lg lg:text-xl font-medium text-gray-900">
                {`Our journey began with a passion for visual storytelling and a
  commitment to bringing our clients' visions to life. We believe
  that every project is an opportunity to create something
  extraordinary, and we pour our hearts into every detail to
  ensure that your content stands out.`}
              </p>
              <p className="mt-4 text-base md:text-lg lg:text-xl font-medium text-gray-900">
                {`Our team is more than just a group of professionals; we're a family of creative minds dedicated to making your dreams a reality. We understand that your brand is your baby, and we treat it with the same care and compassion. Whether it's a commercial, a promotional video, or a photoshoot, we approach each project with the same enthusiasm and dedication as if it were our own.`}
              </p>
            </div>
            <div className="flex flex-col gap-3 mt-10 lg:flex-row lg:gap-6">
              <Link
                className="inline-flex gap-2 bg-black items-center justify-center w-full px-4 py-2 text-base md:text-lg lg:text-xl font-semibold lg:font-medium text-white rounded-none active:bg-tangaroa-800 active:text-tangaroa-300 bg-tangaroa-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tangaroa-900 focus:outline-none group hover:bg-tangaroa-700 hover:text-tangaroa-100 lg:w-auto"
                href="/learn-more"
              >
                Learn more
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="hidden sm:block mt-4 sm:mt-0 px-4 sm:px-0 bg-black h-full" />
          <div className="block sm: mt-4 px-4 absolute bottom-0 left-10 translate-y-[-10px] sm:translate-y-[-10px] sm:translate-x-[89px] md:translate-x-[389px] lg:translate-x-[789px] lg:translate-y-[-30px] z-[-2] bg-orange h-10 sm:h-[120px] w-full" />
        </div>
      </div>
    </section>
  );
}
