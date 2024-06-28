import React from 'react'
import PageHeaderTitleLight from '../Title/PageHeaderTitleLight'

export default function Services() {
  return (
    <section className="">
      <div className="py-24">
        <div className='grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr] lg:grid-cols-[1.2fr_1.7fr] gap-10'>
          <div className='px-4 lg:pl-12'>
            <PageHeaderTitleLight 
                subTitle=''
                title='Our Services'
                description='From eye catching photography to immersive video content, our comprehensive suite of digital marketing services is designed to elevate your brand and drive real results. '
                buttonActive={false}
                button=""
                url="/"
            />
          </div>
          <div className='relative md:flex md:justify-between max-w-7xl'>
            <div className='bg-black text-white px-10 py-10 md:w-[78%] md:h-[350px] '>
              Unlock your brands potential - where creativity and excellence collide! Inspired by our name, 
              "light," we illuminate your brand with unparalleled brilliance. 
            </div>
            <div className='bg-yellow h-32 md:h-[500px] w-full translate-x-20 md:translate-x-0' />
            <div className='bg-black h-32 md:h-[600px] w-full translate-x-32 md:translate-x-0'>
              <div className='hidden md:block bg-white w-full h-[400px]' />
            </div>
            <div className='hidden md:block bg-black h-32 md:h-[600px] md:translate-y-[-96px] w-full translate-x-32 md:translate-x-0' />
          </div>
        </div>
      </div>
    </section>
  )
}
