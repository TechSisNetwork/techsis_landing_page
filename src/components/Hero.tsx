import React from 'react'
import Button from './Button'
import Container from './Container'
import Image from 'next/image'
import HeroImg from "../../public/hero-image.png"
import Portriats from "../../public/portraits.png"

const Hero = () => {
    return (
        <section className='w-full min-h-screen 2xl:min-h-[50vh] flex items-center justify-between pt-10 lg:pt-0'>
            <Container className='flex items-center flex-col lg:grid lg:grid-cols-2  gap-[38.11px]'>
                <div className="flex flex-col items-center lg:items-start gap-10 lg:gap-[50px] lg:justify-end pb-[22.5px]">
                    <div className="flex flex-col gap-4 lg:gap-5 text-center lg:text-start">
                        <h1 className='font-bold text-2xl md:text-4xl lg:text-5xl  xl:text-[64px] text-[#2B2B2B] leading-[100%] tracking-[0px]'>
                            Empowering Women,<br className='hidden md:block lg:hidden'/> Transforming the Future of Tech.
                        </h1>
                        <p className="text-sm lg:text-xl text-[#606060]">
                            A thriving community where women in tech connect, collaborate, and grow. <br className='hidden md:block lg:hidden'/>From beginners to experts, every woman’s
                            journey matters here.<br className='hidden md:block lg:hidden'/> Join us in creating a more inclusive and innovative tech industry!
                        </p>
                    </div>
                    <Button className='px-[43px] lg:px-[50px]' text={"Get Started"} />

                    <div className="flex gap-2.5">
                        <Image alt='portiats' height={25} width={70} src={Portriats} />
                        <p className="text-[#B8B8B8] text-sm lg:text-xl">We have empowered 500+ women.</p>
                    </div>
                </div>
                <Image alt='hero-image' height={735} width={608} src={HeroImg} priority={true} className='w-[310px] h-[374.44px] md:h-1/2 md:w-1/2 lg:w-[608px] lg:h-[735px] object-contain'/>
            </Container>
        </section>
    )
}

export default Hero
