import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/techsis-logo.png'
import Link from 'next/link'
import Container from '../Container'
import X from '../icons/X'
import Instagram from '../icons/Instagram'
import Facebook from '../icons/Facebook'
import Tiktok from '../icons/Tiktok'
import LinkedInIcon from '../icons/Linkedln-icon'
const FooterMain = () => {
    return (
        <section className='w-full bg-[url(../../public/footer-main.jpg)] bg-cover'>
            <div className="bg-[#000000CC] text-white h-full w-full pt-[50px] lg:pt-[100px] ">
                <Container className='flex flex-col text-base lg:text-lg'>
                    <div className="flex flex-col-reverse md:items-center lg:items-start lg:flex-row gap-[50px] xl:gap-[134px]">
                        <div className="flex flex-col gap-[50px]">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className='text-xl font-bold lg:text-2xl lg:font-semibold'>Contact</h3>
                                <ul className="flex flex-col gap-5">
                                    <li className='max-w-[295px]'>Graham Douglas Drive Rumuibekwe Estate, Port-harcourt.</li>
                                    <li><Link href={'https://wa.me/2347047221018'}>Whatsapp: +234 704 722 1018</Link></li>
                                    <li><Link href={'mailto:Techsisnetwork@gmail.com'}>Techsisnetwork@gmail.com</Link></li>
                                </ul>
                            </div>
                            <div className="flex gap-[30px] *:size-6 *:lg:size-auto *:hover:text-primary">
                                <Link href={'https://x.com/TechsisNetwork'} target='blank'><X/></Link>
                                <Link href={'https://www.instagram.com/techsisnetwork'} target='blank'><Instagram/></Link>
                                <Link href={'https://www.linkedin.com/company/techsisnetwork/'} target='blank'><LinkedInIcon/></Link>
                                <Link href={'https://web.facebook.com/people/TechSis-Network/61566810336368/?mibextid=kFxxJD'} target='blank'><Facebook/></Link>
                                <Link href={'https://www.tiktok.com/@techsisnetwork'} target='blank'><Tiktok/></Link>
                            </div>
                        </div>
                        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-15 lg:gap-24 xl:gap-[150px]">
                            <div className="flex flex-col-reverse md:flex-row gap-[50px] xl:gap-[135px]">
                                <div className="flex flex-col gap-[30px]">
                                    <h3 className='text-xl font-bold lg:text-2xl lg:font-semibold'>Company</h3>
                                    <ul className="flex flex-col gap-5">
                                        <li><Link href={'/#about'}>About Us</Link></li>
                                        <li><Link href={'/#internship'}>Internship</Link></li>
                                        <li><Link href={'/#consultation'}>Consultation Service</Link></li>
                                        <li><Link href={'/#podcast'}>Podcast</Link></li>
                                        <li><Link href={'/privacy-policy'}>Privacy Policy</Link></li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-[30px]">
                                    <h3 className='text-xl font-bold lg:text-2xl lg:font-semibold'>Support</h3>
                                    <ul className="flex flex-col gap-5">
                                        <li><Link href={'/contact-us'}>Help Center</Link></li>
                                        <li><Link href={'/#newsletter'}>Newsletter</Link></li>
                                        {/* <li><Link href={'#'}>FAQs</Link></li> */}
                                        <li><Link href={'/blog'}>Blog</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <Image src={Logo} alt='logo' width={130.1} height={126} className='w-[82.6px] h-[80px] xl:w-[130.1px] xl:h-[126px]' />
                        </div>
                    </div>
                    <div className="border-t border-[#5C5A5A] py-6 lg:py-[50.5px] mt-[150px] text-sm lg:text-base">
                        <p className=" text-center">Copyright © {new Date().getFullYear()}. TechSis Network. All Rights Reserved.</p>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default FooterMain
