import React from "react";
import { Prata } from "next/font/google";

const prata = Prata({ subsets: ["cyrillic"], weight: ["400"] });

export default function About() {
  return (
    <section>
      <div className="px-4 py-24 mx-auto overflow-hidden md:px-12 max-w-7xl ">
        <div className="grid lg:grid lg:grid-cols-[0.6fr,1.4fr] lg:gap-10">
          <div>
            <p className={`text-3xl lg:text-4xl lg:leading-[50px]  textbalance ${prata.className}`}>
              Crafting Captivating
            </p>
            <p className="mt-4 text-base text-gray-500">
              At Akira Studios, we are passionate about elevating your digital
              marketing strategy. Our team of experts specializes in crafting
              visually stunning and engaging content that captivates your
              audience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-6 mt-10 lg:mt-0">
            <div>
              <div className="bg-yellow p-5 flex items-center justify-center">
                <img
                  src={"/assets/images/home-about2.png"}
                  alt="Akira Studios"
                />
              </div>
              <div className="mt-3 lg:mt-4">
                <p className="font-bold text-lg">Explore Our Work</p>
                <p className="text-base mt-2 text-gray-500">
                  From dynamic eye-catching visuals that capture an audience to
                  product shots.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-orange p-5 flex items-center justify-center">
                <img
                  src={"/assets/images/home-about1.png"}
                  alt="Akira Studios"
                />
              </div>
              <div className="mt-3 lg:mt-4">
                <p className="font-bold text-lg">Elevate Your Visual Presence </p>
                <p className="text-base mt-2 text-gray-500">
                    Amplify your digital marketing with our state-of-the-art services. We created cinematic masterpieces that showcase products and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
