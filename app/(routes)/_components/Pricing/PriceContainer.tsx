import React from "react";
import { packages } from "@/app/actions";
import PriceItem from "./PriceItem";



export default function PriceContainer() {
  return (
    <div className="bg-white dak:bg-gray-900 flex items-center justify-center">
      <div className="container px-4 py-24 mx-auto">
        <div className="">
          <div className="">
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {packages.map((item, index) => (
                <PriceItem
                  key={index}
                  name={item.name}
                  price={item.price}
                  niche={item.niche}
                  features={item.features}
                  callToAction={item.callToAction}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
