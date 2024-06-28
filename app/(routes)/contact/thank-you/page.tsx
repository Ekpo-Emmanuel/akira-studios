import React from 'react'
import Link from 'next/link'


export default function Thankyou() {
  return (
    <section className="bg-white dark:bg-gray-900 ">
  <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
    <div className="flex flex-col items-center max-w-sm mx-auto text-left md:text-center">
      <h1 className="mt-4 text-xl font-bold md:text-2xl">
        Thank you for contacting us, we will get back to you shortly
      </h1>
      {/* <p className="mt-4 text-black text-sm">
        In the meantime, check out our other products
      </p> */}
      <Link href="/" className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
        <button className="flex items-center justify-center gap-2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-black rounded-none shrink-0 sm:w-auto hover:bg-gray-700 ">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 rtl:rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          Back to home
        </button>
      </Link>
    </div>
  </div>
</section>
  )
}