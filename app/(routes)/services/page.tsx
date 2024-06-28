import React from 'react'
import Hero from '../about/_components/Hero'
import About from './_components/About'
import ServiceContainer from './_components/service/ServiceContainer'
import Testimonal1 from '../_components/Testimonial/Testimonal1'

export default function page() {
  return (
    <div>
      <Hero />
      <About />
      <ServiceContainer />
      <Testimonal1 />
    </div>
  )
}
