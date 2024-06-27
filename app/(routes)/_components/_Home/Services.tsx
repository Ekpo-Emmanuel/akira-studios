import React from 'react'
import PageHeaderTitleLight from '../Title/PageHeaderTitleLight'

export default function Services() {
  return (
    <section className="">
      <div className="relative items-center w-full px-4 py-24 mx-auto overflow-hidden md:px-8 lg:px-12 max-w-7xl">
          <PageHeaderTitleLight 
              subTitle=''
              title='Our Services'
              description='From eye catching photography to immersive video content, our comprehensive suite of digital marketing services is designed to elevate your brand and drive real results. '
              buttonActive={false}
              button=""
              url="/"
          />
      </div>
    </section>
  )
}
