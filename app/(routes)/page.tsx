import Image from "next/image";
import Hero from "./_components/Hero/Hero";
import About from "./_components/_Home/About";
import WhyUs from "./_components/_Home/WhyUs";
import Services from "./_components/_Home/Services";
import Cta1 from "./_components/CTA/Cta1";
import Contact from "./_components/_Home/Contact";

export default function Home() {
  return (
    <div >
      <div 
        className="relative" 
        style={{
          backgroundImage: "url('/assets/images/hero.png')",
          backgroundPosition: "center",
          objectFit: 'cover',
          backgroundSize: 'contain'
        }}
      >
          {/* <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full" >
            <source src={videoUrl} type="video/mp4" />
          </video> */}
          <Hero />
        </div>
        <About />
        <WhyUs />
        <Services />
        <Cta1 />
        <Contact />
    </div>
  );
}
