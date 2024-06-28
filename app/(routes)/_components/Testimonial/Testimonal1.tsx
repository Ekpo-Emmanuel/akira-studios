'use client';

import React, { useEffect, useRef, useState } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import PageHeaderTitleLight from '../Title/PageHeaderTitleLight'
import { Inter, Prata, Lato } from "next/font/google";
import { useKeenSlider } from "keen-slider/react"





const prata = Prata({subsets: ["cyrillic"], weight:["400"] })

export default function Testimonal1() {
    const sliderRef = useRef(null);
    const keenSliderRef = useRef(null);
    const [ref] = useKeenSlider<HTMLDivElement>()

    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef1, instanceRef1] = useKeenSlider<HTMLDivElement>({
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    })


    useEffect(() => {
        if (sliderRef.current) {
          keenSliderRef.current = new KeenSlider(sliderRef.current, {
            loop: true,
            slides: {
              origin: 'center',
              perView: 1.25,
              spacing: 16,
            },
            breakpoints: {
              '(min-width: 1024px)': {
                slides: {
                  origin: 'auto',
                  perView: 1.5,
                  spacing: 32,
                },
              },
            },
          });
    
          return () => {
            if (keenSliderRef.current) {
              // keenSliderRef.current.destroy();
            }
          };
        }
      }, []);

      const handlePrev = () => {
        // if (keenSliderRef.current) {
        //   keenSliderRef.current.prev();
        // }
      };
    
      const handleNext = () => {
        // if (keenSliderRef.current) {
        //   keenSliderRef.current.next();
        // }
      };

    const testimonials = [
        {
          name: "Jane Doe",
          jobTitle: "Marketing Manager",
          title: 'Transformational Marketing as',
          testimonial: "This product has transformed our marketing strategy. Our engagement and conversions have doubled since we started using it."
        },
        {
          name: "John Smith",
          jobTitle: "Software Engineer",
          title: 'Best Workflow',
          testimonial: "As a developer, I appreciate the intuitive design and robust features. It's made my workflow so much more efficient."
        },
        {
          name: "Alice Johnson",
          jobTitle: "Product Designer",
          title: 'User Experience',
          testimonial: "The attention to detail in this product is incredible. It's clear that the team behind it really cares about user experience."
        },
        {
          name: "Michael Brown",
          jobTitle: "Sales Director",
          title: 'Sales Optimization',
          testimonial: "We've seen a significant increase in our sales numbers since we started using this product. It's a game changer."
        },
        {
          name: "Emily Davis",
          jobTitle: "HR Specialist",
          title: 'Human Resources',
          testimonial: "The user-friendly interface and powerful features have streamlined our HR processes. We couldn't be happier."
        },
        {
          name: "David Wilson",
          jobTitle: "Operations Manager",
          title: 'Optimized Operations',
          testimonial: "This product has optimized our operations, saving us both time and money. It's a fantastic investment."
        }
      ];
  return (
    <section className="">
      <div className="relative items-center w-full px-4 pb-6 sm:pb-24 py-24 mx-auto overflow-hidden md:px-8 lg:px-12 max-w-7xl">
        <div className="grid items-start grid-cols-1 gap-12 md:grid-cols-2">
          <PageHeaderTitleLight
            subTitle="Testimonails"
            title="The Voice of Experience"
            description="As a forward-thinking agency, we specialize in crafting compelling photography and cinematography that captivates and inspires."
            buttonActive={false}
            button=""
            url=""
          />
        </div>
        
        <div className='mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16 '>
            <div className='hidden lg:block'>
              <div className="h-full flex flex-col gap-4">
                {testimonials.slice(3).map((testimonial, index) => (
                  <blockquote key={index} className="flex flex-col justify-between border bg-white/90  p-4">
                    <footer className="flex items-center gap-6">
                      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dak:bg-gray-600">
                          <span className="font-medium text-gray-600 dak:text-gray-300">JL</span>
                      </div>

                      <div className=''>
                        <p className="text-black font-medium text-md">{testimonial.name}</p>
                        <p className="text-gray-400 text-[11px] sm:text-sm">{testimonial.jobTitle}</p>
                      </div>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          <div className="-mx-6 lg:col-span-2 lg:mx-0" data-aos="fade-left">
            <div className="block lg:hidden">
              <div ref={sliderRef} className="keen-slider">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="keen-slider__slide cursor-pointer">
                    <blockquote className="flex h-full flex-col justify-between border bg-white/90  p-6 shadow-sm sm:p-8 lg:p-12">
                      <div className=''>
                        <div className='flex justify-between gap-3'>
                          <p className={`${prata.className} text-xl sm:text-2xl tracking-tighter leading-tight text-black`}>
                            {testimonial.title}
                          </p>
                          <div className="flex gap-0.5 text-yellow">
                              {[...Array(5)].map((_, starIndex) => (
                              <svg
                                  key={starIndex}
                                  className="h-5 w-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                  />
                              </svg>
                              ))}
                          </div>
                        </div>
                        <div className="mt-4">
                          {/* <p className="text-2xl font-bold text-black sm:text-3xl">{testimonial.title}</p> */}
                          <p className="">
                            {testimonial.testimonial}
                          </p>
                        </div>
                      </div>
                      <footer className="mt-4 sm:mt-6 flex items-center gap-2">
                      {/* <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" alt={ testimonial.name} />
                          <AvatarFallback>CN</AvatarFallback>
                      </Avatar> */}
      
                      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dak:bg-gray-600">
                          <span className="font-medium text-gray-600 dak:text-gray-300">JL</span>
                      </div>

                      <div className=''>
                        <p className="text-black font-medium text-sm sm:text-md">{testimonial.name}</p>
                        <p className="text-gray-800 text-[11px] sm:text-sm">{testimonial.jobTitle}</p>
                      </div>
                      </footer>
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
            
            <div className='hidden lg:block'>
              <div ref={ref} className="keen-slider">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="keen-slider__slide cursor-pointer">
                    <blockquote className="flex h-full flex-col justify-between px-10">
                      <div className=''>
                        <div className='flex justify-between gap-3'>
                          <p className={`${prata.className} text-xl sm:text-3xl tracking-tighter leading-tight text-black`}>
                            {testimonial.title}
                          </p>
                        </div>
                        <div className="mt-4">
                          <p className="mt-4 text-xl w-3/4 sm:text-2xl tracking-tighter leading-tight text-black">
                          {testimonial.testimonial}
                        </p>
                        </div>
                        <div className="flex mt-8 gap-0.5 text-yellow">
                              {[...Array(5)].map((_, starIndex) => (
                              <svg
                                  key={starIndex}
                                  className="h-5 w-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                  />
                              </svg>
                              ))}
                          </div>
                      </div>
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
              
              <div className="hidden lg:mt-8 px-10 lg:flex lg:gap-6">
                <button
                  aria-label="Previous slide"
                  onClick={handlePrev}
                  className="rounded-full py-3 text-gray-500 transition hover:bg-ayellow hover:border-black hover:text-black  focus:bg-ayellow focus:text-black focus:border-gray-black"
                >
                  <ArrowLeft />
                </button>
                <button
                  aria-label="Next slide"
                  onClick={handleNext}
                  className="rounded-full  py-3 text-gray-500 transition hover:bg-ayellow hover:border-black hover:text-black  focus:bg-ayellow focus:text-black focus:border-gray-black"
                >
                  <ArrowRight />
                </button>
              </div>
          </div>
        </div>
        <div className="flex gap-4 mt-8 lg:hidden">
          <button
            aria-label="Previous slide"
            onClick={handlePrev}
            className="rounded-full py-3 text-gray-500 transition hover:bg-ayellow hover:border-black hover:text-black  focus:bg-ayellow focus:text-black focus:border-gray-black"
          >
            <ArrowLeft />
          </button>
          <button
            aria-label="Next slide"
            onClick={handleNext}
            className="rounded-full  py-3 text-gray-500 transition hover:bg-ayellow hover:border-black hover:text-black  focus:bg-ayellow focus:text-black focus:border-gray-black"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
