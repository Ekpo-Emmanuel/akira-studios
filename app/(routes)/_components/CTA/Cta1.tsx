import React from "react";
import PageHeaderTitle from "../Title/PageHeaderTitle";

export default function Cta1() {
  return (
    <section className="bg-black">
      <div className=" relative items-center w-full px-4 pb-6 sm:pb-24 py-24 mx-auto overflow-hidden md:px-8 lg:px-12 max-w-7xl">
        <div className="grid items-start grid-cols-1 gap-12 md:grid-cols-2">
          <PageHeaderTitle
            subTitle="Get in touch"
            title="Elevate Your Digital Presence"
            description="Welcome Akira Studios, where we believe that the power of visuals can transform your digital marketing strategy. As a innovative agency, we specialize in creating captivating photography and cinematography."
            buttonActive={true}
            button="Explore services"
            url="/services"
          />
        </div>
      </div>
    </section>
  );
}
