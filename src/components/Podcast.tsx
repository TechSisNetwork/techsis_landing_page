import React from 'react';
import Image from 'next/image';
import PodcastCover from '../../public/podcast.png';
import Button from './Button';
import Container from './Container';

const Podcast = () => {
  return (
    <section className="w-full py-20 md:py-34 bg-[#FFE1E817]">
      <Container className="grid lg:grid-cols-2 items-center gap-[38.11px]">
        {/* Left - Podcast Cover Image */}
        <div className="w-full max-w-md rounded-2xl overflow-hidden mx-auto lg:mx-0">
          <Image
            src={PodcastCover}
            alt="Unscripted and Uncharted Podcast Cover"
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Right - Text and Button */}
        <div className="flex-1 flex flex-col  items-center lg:items-start gap-10 lg:gap-[50px]">
          <div className="flex flex-col  gap-4 lg:gap-5 text-center lg:text-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B2B2B] leading-tight">
            Bold Voices in Tech<br />and Leadership!
          </h2>
          <p className="text-[#606060]  text-base lg:text-xl">
       Keep up with everything tech and women empowerment with<br />
      <span>
        Ofure on <span className="text-primary font-semibold">'UNSCRIPTED AND UNCHARTED'</span> podcast.
      </span>
</p>


          <Button
            text="Listen Now"
            variant="primary"
            className="!bg-[#404040] hover:!bg-[#303030] text-white !px-[43px] lg:!px-[50px]"
          />
        </div>
        </div>
      </Container>
    </section>
  );
};

export default Podcast;
