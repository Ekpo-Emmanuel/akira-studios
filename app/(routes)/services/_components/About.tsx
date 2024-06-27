import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Prata } from "next/font/google";
import React from "react";

const prata = Prata({ subsets: ["cyrillic"], weight: ["400"] });

export default function About() {
  return (
    <section>
      <div className="relative w-full overflow-hidden pb-6 sm:pb-32">
        <div className="bg-white grid grid-cols-1 sm:grid-cols-[0.7fr,1.8fr,0.7fr] sm:gap-10 lg:gap-20">
          <div className="bg-black h-full">
            <div className="h-full w-[40%] bg-yellow" />
          </div>

          <div className="px-4 sm:px-0 sm:py-10 max-w-7xl lg:mx-auto">
            <div>
              <p className="mt-4 text-xl lg:text-3xl md:tracking-tighter leading-[30px] text-gray-900">
                Our approach is efficient, adaptable, and scalable. 
                Each project begins with an assessment of your requirements. 
                We allocate the most suitable experts for each task, assemble the
                team, oversee the work, and deliver high-quality, cost-effective 
                projects in a secure environment from start to finish.
              </p>
            </div>
            <div className="flex flex-col gap-3 mt-10 lg:flex-row lg:gap-6">
              <Link
                className="inline-flex gap-2 bg-black items-center justify-center w-full px-4 py-2 text-base md:text-lg lg:text-xl font-semibold lg:font-medium text-white rounded-none active:bg-tangaroa-800 active:text-tangaroa-300 bg-tangaroa-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tangaroa-900 focus:outline-none group hover:bg-tangaroa-700 hover:text-tangaroa-100 lg:w-auto"
                href="/contact-us"
              >
                Contact us
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
