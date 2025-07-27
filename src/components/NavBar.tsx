'use client'
import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Image from 'next/image'
import Logo from '../../public/techsis-logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Hamburger from './icons/Hamburger'

const debounce = (func: (...args: []) => void, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: []) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

const NavBar = () => {
    const pathname = usePathname()
    const navRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        if (navRef.current) {
            const threshold = navRef.current.offsetHeight * 0.3;
            setIsSticky(window.scrollY > threshold);
        }
    };

    const debouncedHandleScroll = debounce(handleScroll, 200);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", debouncedHandleScroll);
        return () => window.removeEventListener("scroll", debouncedHandleScroll);
    }, [debouncedHandleScroll]);

    return (
        <nav
            ref={navRef}
            className={` w-full py-[15px] sticky  ${isSticky ? "top-0 bg-white shadow-md" : "transition-all"} `}
        >
            <Container className='flex justify-between items-center'>
                <Link href={'/'} className='hidden lg:block'>
                    <Image
                        alt='logo'
                        src={Logo}
                        height={72.3}
                        width={70}
                    />
                </Link>
                <Link href={'/'} className='lg:hidden'>
                    <Image
                        alt='logo'
                        src={Logo}
                        height={40}
                        width={41.3}
                    />
                </Link>
                <div className="hidden lg:flex gap-4 text-xl">
                    <Link href={'/'}><p className={`p-4 ${pathname === ("/") ? "text-primary" : ""}`}>Home</p></Link>
                    <Link href={'/blog'}><p className={`p-4 ${pathname === ("/blog") ? "text-primary" : ""}`}>Blog</p></Link>
                    <Link href={'/contact-us'}><p className={`p-4 ${pathname === ("/contact-us") ? "text-primary" : ""}`}>Contact Us</p></Link>
                </div>
                <Hamburger className='lg:hidden' />
            </Container>
        </nav>
    )
}

export default NavBar
