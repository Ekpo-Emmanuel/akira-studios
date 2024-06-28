import { Prata } from "next/font/google";
import React from "react";
import { services } from "@/app/actions";
import Link from "next/link";

const prata = Prata({ subsets: ["cyrillic"], weight: ["400"] });

export default function ServiceContainer() {
  return (
    <section className="bg-black">
      <div className="container px-4 py-24 mx-auto max-x-7xl">
        {/* <h1 className="text-2xl font-semibold text-white capitalize lg:text-3xl dak:text-white">
          explore our <br /> awesome{" "}
          <span className="underline decoration-orange">Services</span>
        </h1>
        <p className="mt-4 text-gray-300 xl:mt-6 dak:text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam
          voluptatibus
        </p> */}
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="space-y-3">
              <span className="inline-block p-3 px-0 text-yellow bg-glack rounded-full">
                <service.icon className="w-6 h-6" />
              </span>
              <h1 className="text-xl font-semibold text-white capitalize ">
                {service.title}
              </h1>
              <p className="text-gray-200">{service.description}</p>
              {/* <Link
                href="#"
                className="inline-flex items-center -mx-1 text-sm text-yellow capitalize transition-colors duration-300 transform dak:text-blue-400 hover:underline hover:text-blue-600 dak:hover:text-blue-500"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
