import React from 'react'
import Hero from '../about/_components/Hero'
import About from './_components/About'
import ServiceContainer from './_components/service/ServiceContainer'

export default function page() {
  return (
    <div>
      <Hero />
      <About />
      <ServiceContainer />
    </div>
  )
}
