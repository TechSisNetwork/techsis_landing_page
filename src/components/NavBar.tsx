'use client'
import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Image from 'next/image'
import Logo from '../../public/techsis-logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Hamburger from './icons/Hamburger'

const NavBar = () => {
    const pathname = usePathname()
    const navRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = () => {
        if (navRef.current) {
            const threshold = navRef.current.offsetHeight * 0.3;
            setIsSticky(window.scrollY > threshold);
        }
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { label: 'Home', href: '/' },
        { label: 'About us', href: '/about-us' },
        { label: 'Internship', href: '/internship' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact Us', href: '/contact-us' },
    ];

    return (
        <nav
            ref={navRef}
            className={`relative w-full py-3 z-50 bg-white ${isSticky ? "sticky top-0 shadow-sm" : ""}`}
        >
            <Container className='flex justify-between items-center'>
                <Link href={'/'}>
                    <Image
                        alt='logo'
                        src={Logo}
                        height={72.3}
                        width={70}
                        className='h-11 w-11 object-contain'
                    />
                </Link>
                <div className="hidden md:flex items-center gap-3 text-base">
                    {links.map(link => (
                        <Link key={link.href} href={link.href} className={`px-3 py-2 transition-colors hover:text-primary ${pathname === link.href ? "text-primary font-semibold" : ""}`}>{link.label}</Link>
                    ))}
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeSLpiEx6IXZlqaiO0M_GH8uLuZM9Li4A--avHDor1KHIc9bA/viewform" target="_blank" className="ml-2 rounded-xl bg-primary px-7 py-3 text-white">Join our Community</Link>
                </div>
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation"><Hamburger /></button>
            </Container>
            {isOpen && <div className="absolute top-full left-0 right-0 bg-white shadow-lg px-5 py-4 md:hidden">
                {links.map(link => <Link onClick={() => setIsOpen(false)} key={link.href} href={link.href} className="block border-b border-gray-100 py-3">{link.label}</Link>)}
            </div>}
        </nav>
    )
}

export default NavBar
