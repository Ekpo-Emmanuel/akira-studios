import React from 'react'
import Link from 'next/link'

interface NavItem {
    title: string,
    href: string,
}

export default function HeaderItem({ title, href }: NavItem) {
  return (
    <li>
        <Link
            href={href}
            className="block py-2 px-3 text-black  md:p-0"
            aria-current="page"
        >
            {title}
        </Link>
    </li>
  )
}
