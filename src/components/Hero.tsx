import React from 'react'
import Button from './Button'
import Container from './Container'
import Image from 'next/image'
import HeroImg from "../../public/hero-image.png"
import Portriats from "../../public/portraits.png"

const Hero = () => {
    return (
        <section className='w-full min-h-screen flex items-center justify-between pt-10 lg:pt-0'>
            <Container className='flex flex-col lg:flex-row items-center lg:items-end gap-[38.11px]'>
                <div className="flex flex-col items-center lg:items-start gap-10 lg:gap-[50px] lg:justify-end pb-[22.5px]">
                    <div className="flex flex-col gap-4 lg:gap-5 text-center lg:text-start">
                        <h1 className='font-bold text-2xl lg:text-[64px] text-[#2B2B2B] leading-[100%] tracking-[0px]'>
                            Empowering Women, Transforming the Future of Tech.
                        </h1>
                        <p className="text-sm lg:text-xl text-[#606060]">
                            A thriving community where women in tech connect, collaborate, and grow. From beginners to experts, every woman’s
                            journey matters here. Join us in creating a more inclusive and innovative tech industry!
                        </p>
                    </div>
                    <Button className='px-[43px] lg:px-[50px]' text={"Get Started"} />

                    <div className="flex gap-2.5">
                        <Image alt='portiats' height={25} width={70} src={Portriats} />
                        <p className="text-[#B8B8B8] text-sm lg:text-xl">We have empowered 500+ women.</p>
                    </div>
                </div>
                <Image alt='hero-image' height={735} width={608} src={HeroImg} priority={true} className='hidden lg:block'/>
                <Image alt='hero-image' height={374.44} width={310} src={HeroImg} className='lg:hidden block' />
            </Container>
        </section>
    )
}

export default Hero
