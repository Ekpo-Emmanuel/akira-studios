import React from 'react'
import PageHeaderTitleLight from '../Title/PageHeaderTitleLight'
import { Prata } from "next/font/google";




const prata = Prata({ subsets: ["cyrillic"], weight: ["400"] });

export default function Services() {
  return (
    <section className="mx-auto max-w-screen-2xl">
      <div className="py-24">
        <div className='grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr] lg:grid-cols-[1.2fr_1.7fr] gap-10'>
          <div className='px-4 md:pl-12 lg:pl-24'>
            <div className="max-w-xl mx-auto lg:mx-0">
        <h1
          className={`mt-4 text-4xl font-semibold text-black lg:text-5xl text-balance ${prata.className}`}
        >
          Our Services
        </h1>
        <p className="mt-4 sm:mt-8 text-base md:text-xl font-medium text-black">
        From eye catching photography to immersive video content, our comprehensive suite of digital marketing services is designed to elevate your brand and drive real results.
        </p>
      </div>
          </div>
          <div className='relative md:flex md:justify-between max-w-7xl'>
            <div className='bg-black text-white px-10 py-10 md:w-[78%] md:h-fit '>
              Unlock your brands potential - where creativity and excellence collide! Inspired by our name, 
              "light," we illuminate your brand with unparalleled brilliance. 
            </div>
            <div className='bg-yellow h-32 md:h-[400px] w-full translate-x-20 md:translate-x-0' />
            <div className='bg-black h-32 md:h-[450px] w-full translate-x-32 md:translate-x-0'>
              <div className='hidden md:block bg-white w-full h-[300px]' />
            </div>
            <div className='hidden md:block bg-black h-32 md:h-[600px] md:translate-y-[-96px] w-full translate-x-32 md:translate-x-0' />
          </div>
        </div>
      </div>
    </section>
  )
}
