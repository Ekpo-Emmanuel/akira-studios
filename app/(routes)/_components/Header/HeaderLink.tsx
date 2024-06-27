import React from 'react'
import Link from 'next/link'
import HeaderItem from './HeaderItem'
import { navItems } from '@/app/actions'



export default function HeaderLink() {
  return (
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
        {navItems.map((item, index) => (
            <HeaderItem 
                key={index}
                title={item.title}
                href={item.href}
            />        
        ))}
    </ul>
  )
}
