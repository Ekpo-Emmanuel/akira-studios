"use client";
import { useEffect, useState } from "react";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Prata } from "next/font/google";

const prata = Prata({ subsets: ["cyrillic"], weight: ["400"] });


interface NavItem {
    title: string;
    href: string;
    onClick: any;
}

export default function HeaderItem(props: NavItem) {
  const pathName = usePathname();
  const isActive = (pathName === props.href);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <li className=''>
        <Link
            href={props.href}
            className={`block py-2 uppercase lg:normal-case  px-3  text-2xl md:text-base ${scrollY > 100 ? 'text-black' : 'text-black md:text-white'} ${isActive && 'rounded-sm bg-orange text-white p-2'}`}
            onClick={props.onClick}
        >
            {props.title}
        </Link>
    </li>
  )
}
