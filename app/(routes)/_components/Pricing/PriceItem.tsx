import React from "react";

interface Feature {
  name: string;
}

interface Package {
  name: string;
  price: string;
  niche: string;
  features: Feature[];
  callToAction: string;
}

export default function PriceItem(props: Package) {
  return (
    <div className="w-full  border rounded-none dak:border-gray-700">
      <div className="p-6">
        <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-2xl dak:text-white">
          {props.name}
        </h1>
        <p className="mt-4 text-gray-500 dak:text-gray-300">{props.niche}</p>
        <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl dak:text-gray-300">
          ${props.price} <span className="text-base font-medium"></span>
        </h2>
        <p className="mt-1 text-gray-500 dak:text-gray-300">Yearly payment</p>
        <button className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-none hover:bg-black/70 focus:outline-none focus:bg-black focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Contact us
        </button>
      </div>
      <hr className="border-gray-200 dak:border-gray-700" />
      <div className="p-6">
        <div className="space-y-4">
          {props.features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-orange"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="mx-4 text-gray-700 dak:text-gray-300">
                {feature.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
