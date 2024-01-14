'use client';
import { IBanner } from '@/types';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface Props {
  data: IBanner[];
}

const BannerSection = ({ data }: Props) => {
  const scrollBannerRef = useRef<HTMLDivElement>(null);
  const handleScrollBanner = (arrow: 'left' | 'right') => {
    if (scrollBannerRef.current) {
      const currentScroll = scrollBannerRef.current.scrollLeft;
      const scrollTo =
        arrow === 'left' ? currentScroll - 500 : currentScroll + 500;
      scrollBannerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      if (count < data.length) {
        handleScrollBanner('right');
      } else {
        scrollBannerRef.current?.scrollTo({
          left: 0,
        });
        count = 0;
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="px-4 xl:px-36 py-16 flex items-center justify-center gap-x-4 relative overflow-hidden">
      <div
        onClick={() => handleScrollBanner('left')}
        className="flex items-center justify-center max-lg:hidden bg-white px-4 w-16 aspect-square cursor-pointer rounded-full border border-rumah-peran-red"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
        >
          <path
            d="M15.25 25.5L6.25 16.5L15.25 7.5M7.5 16.5H25.75"
            stroke="#952F1F"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        ref={scrollBannerRef}
        className="flex overflow-hidden overflow-x-scroll no-scrollbar w-[60rem] 2xl:w-[80rem] aspect-[11/4] snap-x snap-mandatory"
      >
        {data.map(({ image, alt }, index) => (
          <div
            key={index}
            className="snap-center flex-none relative lg:w-[60rem] 2xl:w-[80rem] aspect-[11/4] rounded-xl overflow-hidden"
          >
            <Image src={image} alt={alt} fill />
          </div>
        ))}
      </div>
      <div
        onClick={() => handleScrollBanner('right')}
        className="flex items-center justify-center max-lg:hidden bg-white px-4 w-16 aspect-square cursor-pointer rounded-full border border-rumah-peran-red"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
        >
          <path
            d="M16.75 7.5L25.75 16.5L16.75 25.5M24.5 16.5H6.25"
            stroke="#952F1F"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="absolute w-48 md:w-[30rem] aspect-[5/4] top-10 -left-32 md:-left-64 -z-30 opacity-20">
        <Image src="/squiggles-2.svg" alt="squiggles" fill />
      </div>
      <div className="absolute w-48 md:w-[30rem] aspect-[5/4] top-10 -right-32 md:-right-64 -z-30 opacity-20">
        <Image src="/squiggles-2.svg" alt="squiggles" fill />
      </div>
    </section>
  );
};

export default BannerSection;
