import React from "react";
import { Inter, Prata, Lato } from "next/font/google";
import { cn } from "@/lib/utils";
import Marquee from "@/app/components/magicui/marquee";

const prata = Prata({ subsets: ["cyrillic"], weight: ["400"] });
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
];

const testimonials = [
  {
    name: "Jane Doe",
    jobTitle: "Marketing Manager",
    title: "Transformational Marketing as",
    testimonial:
      "This product has transformed our marketing strategy. Our engagement and conversions have doubled since we started using it.",
    img: '',
  },
  {
    name: "John Smith",
    jobTitle: "Software Engineer",
    title: "Best Workflow",
    testimonial:
      "As a developer, I appreciate the intuitive design and robust features. It's made my workflow so much more efficient.",
    img: '',
  },
  {
    name: "Alice Johnson",
    jobTitle: "Product Designer",
    title: "User Experience",
    testimonial:
      "The attention to detail in this product is incredible. It's clear that the team behind it really cares about user experience.",
    img: '',
  },
  {
    name: "Michael Brown",
    jobTitle: "Sales Director",
    title: "Sales Optimization",
    testimonial:
      "We've seen a significant increase in our sales numbers since we started using this product. It's a game changer.",
    img: '',
  },
  {
    name: "Emily Davis",
    jobTitle: "HR Specialist",
    title: "Human Resources",
    testimonial:
      "The user-friendly interface and powerful features have streamlined our HR processes. We couldn't be happier.",
    img: '',
  },
  {
    name: "David Wilson",
    jobTitle: "Operations Manager",
    title: "Optimized Operations",
    testimonial:
      "This product has optimized our operations, saving us both time and money. It's a fantastic investment.",
    img: '',
  },
];

// const firstRow = reviews.slice(0, reviews.length / 2);
const firstRow = testimonials.slice(0, reviews.length / 2);
const secondRow = testimonials.slice(reviews.length / 2);


const ReviewCard = ({
  img,
  name,
  jobTitle,
  title,
  testimonial,
}: {
  img: string;
  name: string;
  jobTitle: string;
  title: string;
  testimonial: string;
}) => {
  return (
    <blockquote className="flex h-full max-w-[500px] w-[500px] flex-col justify-between bg-white  p-6 shadow-sm sm:p-8 lg:p-12">
      <div className="">
        <div className="flex justify-between gap-3">
          <p
            className={`${prata.className} text-xl sm:text-2xl tracking-tighter leading-tight text-black`}
          >
            {title}
          </p>
          <div className="flex gap-0.5 text-black">
            {[...Array(5)].map((_, starIndex) => (
              <svg
                key={starIndex}
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <p className="">{testimonial}</p>
        </div>
      </div>
      <footer className="mt-4 sm:mt-6 flex items-center gap-2">
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dak:bg-gray-600">
          <span className="font-medium text-gray-600 dak:text-gray-300">
            JL
          </span>
        </div>

        <div className="">
          <p className="text-black font-medium text-sm sm:text-md">
            {name}
          </p>
          <p className="text-gray-800 text-[11px] sm:text-sm">
            {jobTitle}
          </p>
        </div>
      </footer>
    </blockquote>
  );
};

export default function Hero() {
  return (
    <div className="bg-black px-0 py-32 lg:py-20 overflow-hidden">
      <div className="p-8 lg:p-20">
        <h1
          className={`${prata.className} text-white text-3xl md:text-4xl lg:text-5xl text-balance leading-[50px] lg:leading-[65px]`}
        >
          We'd love to hear from you
        </h1>
        <p className="mt-4 text-gray-200">At Akira Studios, we are passionate about elevating your digital marketing strategy.</p>
      </div>
      <div className="w-full relative items-center justify-center overflow-hidden sm:px-20 md:shadow-xl">
        <Marquee pauseOnHover horizontal className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        {/* <Marquee reverse pauseOnHover horizontal className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee> */}
        {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black" /> */}
        {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white lg:from-black" /> */}
      </div>
    </div>
  );
}
