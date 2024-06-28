import React from 'react'
import Link from 'next/link'
import HeaderItem from './HeaderItem'
import { navItems } from '@/app/actions'

interface NavItem {
  onClick: any;
}

export default function HeaderLink({onClick}: NavItem) {
  return (
    // <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
    //     {navItems.map((item, index) => (
    //         <HeaderItem 
    //             key={index}
    //             title={item.title}
    //             href={item.href}
    //         />        
    //     ))}
    // </ul>
    <ul className="h-screen md:h-fit mt-10 md:mt-0 flex flex-col gap-5 md:flex-row md:gap-2 ">
        {navItems.map((item, index) => (
            <HeaderItem 
                key={index}
                title={item.title}
                href={item.href}
                onClick={onClick}
            />        
        ))}
    </ul>
  )
}
