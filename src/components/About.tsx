import React from 'react';
import Image from 'next/image';
import Container from './Container';
import AboutImage from '../../public/girl.png'; 

const About = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-between pt-10 lg:pt-0">
      <Container className="flex flex-col lg:flex-row items-center lg:items-end gap-[38.11px]">
        <div className="relative  h-full  flex flex-col justify-center items-center flex-shrink-0">
          <div className=" -z-50 size-56  bg-[#4d609e] rounded-full " />

          <Image
            src={AboutImage}
            alt="Young woman with laptop"
            width={300}
            height={300}
            className="absolute  -right-10 -z-10 object-contain lg:left-20"
            priority
          />
        </div>

        
        <div className="flex-1 flex flex-col items-center lg:items-start gap-10 lg:gap-[50px] pb-[22.5px] lg:ml-100">
          <div className="flex flex-col gap-4 lg:gap-5 text-center lg:text-start">
            <h2 className="font-bold text-2xl flexg md:text-4xl lg:text-5xl text-[#2B2B2B] leading-[100%] tracking-[0px]">
              <span className="inline-block ">Breaking Barriers,</span>
              <span className="inline-block pr-10">Sharing Knowledge,</span>
              <br />
              <span className="inline-block pr-0">and Building the</span>
              <br />
              <span className="inline-block pr-10">Future Together.</span>
            </h2>
            <p className="text-sm lg:text-xl text-[#606060]">
              <span className="text-primary font-semibold">TechSis Network</span> is a dynamic and innovative organization dedicated to closing the gender gap in the tech workforce.<br className='hidden md:block lg:hidden'/>
              Focused on empowering women, TechSis Network provides hands-on experience through collaborative live projects in the software development lifecycle.
            </p>
            <p className="text-sm lg:text-xl text-[#606060]">
              We also provide consulting services for small and medium-sized businesses, helping them improve processes and implement tech solutions.<br className='hidden md:block lg:hidden'/>
              With a goal to empower 500 females in its first year.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;