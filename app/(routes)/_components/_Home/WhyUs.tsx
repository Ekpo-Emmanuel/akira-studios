import React from "react";
import PageHeaderTitle from "../Title/PageHeaderTitle";


export default function WhyUs() {
  return (
    <section className="bg-black">
      <div className="relative items-center w-full px-4 pb-6 sm:pb-24 py-24 mx-auto overflow-hidden md:px-8 lg:px-12 max-w-7xl">
        <div className="grid items-start grid-cols-1 gap-12 md:grid-cols-2">
            <PageHeaderTitle 
                subTitle="Why Akira Studios?"
                title="Experience the Difference"
                description="At Akira Studios, we are a team of experienced creatives who are dedicated to helping businesses like yours achieve their digital goals."
                buttonActive={true}
                button="Get Started"
                url="/contact"
            />
          <div className="hidden lg:block lg:mt-0 lg:ml-auto">
            <div className="absolute transform lg:-translate-y-1/2 lg:left-1/2 lg:top-1/2 lg:translate-x-8 sm:left-1/2 sm:top-0 sm:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-full w-44">
                    <img
                      alt="#_"
                      className="object-cover"
                      src="/assets/images/why-us.png"
                      decoding="async"
                      height={926}
                      loading="lazy"
                      width={428}
                    />
                  </div>
                  <div className="h-full w-44">
                    <img
                      alt="#_"
                      className="object-cover"
                      src="/assets/images/why-us.png"
                      decoding="async"
                      height={926}
                      loading="lazy"
                      width={428}
                    />
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-full w-44">
                    <img
                      alt="#_"
                      className="object-cover"
                      src="/assets/images/why-us.png "
                      decoding="async"
                      height={926}
                      loading="lazy"
                      width={428}
                    />
                  </div>
                  <div className="h-full w-44">
                    <img
                      alt="#_"
                      className="object-cover"
                      src="/assets/images/why-us.png"
                      decoding="async"
                      height={926}
                      loading="lazy"
                      width={428}
                    />
                  </div>
                  <div className="h-full w-44">
                    <img
                      alt="#_"
                      className="object-cover"
                      src="/assets/images/why-us.png"
                      decoding="async"
                      height={926}
                      loading="lazy"
                      width={428}
                    />
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-full w-44">
                    <img
                      alt="#_"
                      className="object-cover"
                      src="/assets/images/why-us.png"
                      decoding="async"
                      height={926}
                      loading="lazy"
                      width={428}
                    />
                  </div>
                  <div className="h-full w-44">
                    <img
                      alt="#_"
                      className="object-cover"
                      src="/assets/images/why-us.png"
                      decoding="async"
                      height={926}
                      loading="lazy"
                      width={428}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <div className="flex items-center w-full bg-red-50">
              <img
                alt="#_"
                className="object-cover"
                src="/assets/images/why-us.png"
                decoding="async"
                // height={926}
                loading="lazy"
                // width={428}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
