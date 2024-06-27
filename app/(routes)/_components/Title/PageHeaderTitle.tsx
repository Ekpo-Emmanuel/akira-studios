import React from "react";
import { Prata } from "next/font/google";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface PageInfo {
  subTitle: string;
  title: string;
  description: string;
  buttonActive: boolean;
  button: any;
  url: string;
}

const prata = Prata({ subsets: ["cyrillic"], weight: ["400"] });

export default function PageHeaderTitle(props: PageInfo) {
  return (
    <div>
      <div className="max-w-xl mx-auto lg:mx-0">
        <p className="text-white">{props.subTitle}</p>
        <h1
          className={`mt-4 text-4xl font-semibold tracking-tighter text-white lg:text-5xl text-balance ${prata.className}`}
        >
          {props.title}
        </h1>
        <p className="mt-4 text-base font-medium text-gray-300">
          {props.description}
        </p>
      </div>
      {props.buttonActive && (
        <div className="flex flex-col gap-3 mt-10 lg:flex-row lg:gap-6">
          <Link
            className="inline-flex gap-2 bg-white items-center justify-center w-full px-4 py-2 text-base font-semibold text-black rounded-none active:bg-tangaroa-800 active:text-tangaroa-300 bg-tangaroa-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tangaroa-900 focus:outline-none group hover:bg-tangaroa-700 hover:text-tangaroa-100 lg:w-auto"
            href={props.url}
          >
            {props.button}
            <ArrowRight size={20} />
          </Link>
        </div>
      )}
    </div>
  );
}
