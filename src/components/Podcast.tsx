import React from 'react';
import Image from 'next/image';
import PodcastCover from '../../public/podcast.png';
import Button from './Button';
import Container from './Container';
import Link from 'next/link';

const Podcast = () => {
  return (
    <section id='podcast' className="w-full py-20 md:py-34">
      <Container className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[106px]">
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

        <div className="flex flex-col  gap-4 lg:gap-5 items-center lg:items-start text-center lg:text-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B2B2B] leading-tight">
            Bold Voices in Tech<br />and Leadership!
          </h2>
          <p className="text-[#606060] text-base lg:text-lg">
            Keep up with everything tech and women empowerment with<br />
            <span>
              Ofure on <span className="text-primary font-semibold">&apos;UNSCRIPTED AND UNCHARTED&apos;</span> podcast.
            </span>
          </p>

          <Link href={'https://open.spotify.com/show/3CwxCU1CPvYlVQWiHrtkog'} target='blank'>
            <Button
              text="Listen Now"
              variant="primary"
              className="!bg-[#404040] hover:!bg-[#303030] text-white !px-[43px] lg:!px-[50px]"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Podcast;
