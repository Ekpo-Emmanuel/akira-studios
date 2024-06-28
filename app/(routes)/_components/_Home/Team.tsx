import React from 'react'
import PageHeaderTitleLight from '../Title/PageHeaderTitleLight'

export default function Team() {
  return (
<section className='md:translate-y-[-200px]'>
  <div className="px-4 py-12 mx-auto md:px-0 max-w-[96rem] overflow-hidden">
    <div className="grid items-center grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
      <div className="order-first lg:order-last relative">
        <PageHeaderTitleLight
            subTitle=""
            title="Meet the Team"
            description="Behind the scenes of Akira Studios, you’ll find a talented team of creatives who are passionate about helping businesses like yours succeed. "
            buttonActive={true}
            button="Contact us"
            url="/contact"
        />
        <div className="bg-yellow md:mt-10 w-full h-3 md:h-20 translate-x-20" />
        <div className="absolute top-0 right-10 translate-y-[-95px] bg-black mt-10 w-10 h-full translate-x-20 lg:translate-x-0 lg:right-0 lg:w-20 lg:h-[500px] lg:translate-y-[-400px]" />
      </div>
      <div className="lg:order-first block w-full aspect-square lg:mt-0">
  <div className="h-full overflow-hidden  rounded-none">
    <img
      alt="#_"
      className="w-full h-full object-cover rounded-none"
      src="assets/images/hero.png"
    />
  </div>
</div>

    </div>
  </div>
</section>

  )
}
