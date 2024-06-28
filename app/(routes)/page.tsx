import Image from "next/image";
import Hero from "./_components/Hero/Hero";
import About from "./_components/_Home/About";
import WhyUs from "./_components/_Home/WhyUs";
import Services from "./_components/_Home/Services";
import Cta1 from "./_components/CTA/Cta1";
import Contact from "./_components/_Home/Contact";
import Team from "./_components/_Home/Team";

export default function Home() {
  return (
    <div >
      <div 
        className="relative" 
        style={{
          backgroundImage: "url('/assets/images/hero.png')",
          backgroundPosition: "center",
          objectFit: 'cover',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
          <Hero />
        </div>
        <About />
        <WhyUs />
        <Services />
        <Team />
        <Cta1 />
        <Contact />
    </div>
  );
}
