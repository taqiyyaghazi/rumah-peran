'use client';
import { gilroy } from '@/lib/fonts';
import { IProgram, ITab } from '@/types';
import Image from 'next/image';
import { useState } from 'react';
import ActingClassTour from './ActingClassTour';
import AlumniProgram from './AlumniProgram';
import CollaborationProgram from './CollaborationProgram';
import RegularProgram from './RegularProgram';

interface Props {
  tabs: ITab[];
  regularProgram: IProgram[];
}

const ProgramSection = ({ tabs, regularProgram }: Props) => {
  const [currentTab, setCurrentTab] = useState(tabs[0].value);
  return (
    <section className="px-4 xl:px-0 py-16">
      <h2
        className={`${gilroy.className} font-extrabold text-rumah-peran-red text-xl md:text-3xl xl:text-6xl text-center mb-8`}
      >
        Temukan Program yang <br /> Mencerminkan Dirimu Hari Ini!
      </h2>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex items-end justify-center">
          {tabs.map(({ text, value }) => (
            <button
              key={value}
              className={`${
                currentTab === value
                  ? 'bg-soft-cream border-rumah-peran-red text-rumah-peran-red border-b-2 py-3 px-6'
                  : 'bg-slate-100 border-[#4D4D4D] text-[#4D4D4D] border-b py-2 px-4'
              } flex max-sm:flex-col items-center justify-center gap-x-2 rounded-t-xl cursor-pointer w-1/4`}
              onClick={() => setCurrentTab(value)}
            >
              <div
                className={`${
                  currentTab === value
                    ? "w-12 bg-[url('/circle-cream.svg')]"
                    : "bg-[url('/circle-gray.svg')]"
                } w-10 aspect-square relative bg-no-repeat bg-center bg-contain`}
              >
                <Image
                  src={
                    currentTab === value
                      ? '/holistic-icon.svg'
                      : '/report-grayscale-icon.svg'
                  }
                  alt="icon"
                  fill
                />
              </div>
              <p
                className={`${gilroy.className} font-extrabold max-sm:text-[0.5rem]`}
              >
                {text}
              </p>
            </button>
          ))}
        </div>
        {currentTab === 'regular-program' && (
          <RegularProgram data={regularProgram} />
        )}
        {currentTab === 'collaboration-program' && <CollaborationProgram />}
        {currentTab === 'alumni-program' && <AlumniProgram />}
        {currentTab === 'acting-class-tour' && <ActingClassTour />}
      </div>
    </section>
  );
};

export default ProgramSection;
