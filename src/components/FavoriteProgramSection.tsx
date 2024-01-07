'use client';
import { gilroy, inter } from '@/lib/fonts';
import Button from './Button';
import ProgramCard from './ProgramCard';
import { useRef } from 'react';

const programs = [
  {
    id: 1,
    info: 'Usia Min. 13 Tahun',
    title: 'Kelas Akting & Pengembangan Diri (Batch 1)',
    date: 'Sabtu & Minggu, 13:30 - 21:00 WIB',
    price: 'Rp3.500.000',
    totalSessions: 14,
    image: '/dummy-image.jpeg',
  },
  {
    id: 2,
    info: 'Usia Min. 13 Tahun',
    title: 'Kelas Akting & Pengembangan Diri (Batch 1)',
    date: 'Sabtu & Minggu, 13:30 - 21:00 WIB',
    price: 'Rp3.500.000',
    totalSessions: 14,
    image: '/dummy-image.jpeg',
  },
  {
    id: 3,
    info: 'Usia Min. 13 Tahun',
    title: 'Kelas Akting & Pengembangan Diri (Batch 1)',
    date: 'Sabtu & Minggu, 13:30 - 21:00 WIB',
    price: 'Rp3.500.000',
    totalSessions: 14,
    image: '/dummy-image.jpeg',
  },
  {
    id: 4,
    info: 'Usia Min. 13 Tahun',
    title: 'Kelas Akting & Pengembangan Diri (Batch 1)',
    date: 'Sabtu & Minggu, 13:30 - 21:00 WIB',
    price: 'Rp3.500.000',
    totalSessions: 14,
    image: '/dummy-image.jpeg',
  },
  {
    id: 5,
    info: 'Usia Min. 13 Tahun',
    title: 'Kelas Akting & Pengembangan Diri (Batch 1)',
    date: 'Sabtu & Minggu, 13:30 - 21:00 WIB',
    price: 'Rp3.500.000',
    totalSessions: 14,
    image: '/dummy-image.jpeg',
  },
];
const FavoriteProgramSection = () => {
  const scrollProgramsRef = useRef<HTMLDivElement>(null);
  const handleScrollPrograms = (arrow: 'left' | 'right') => {
    if (scrollProgramsRef.current) {
      const currentScroll = scrollProgramsRef.current.scrollLeft;
      const scrollTo =
        arrow === 'left' ? currentScroll - 336 : currentScroll + 336;
      scrollProgramsRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      });
    }
  };
  return (
    <section className="py-16 mb-16 md:px-8 xl:px-32 2xl:px-96 flex items-start md:items-center flex-col md:flex-row gap-x-20 max-sm:gap-y-10 overflow-hidden">
      <div className="w-full md:w-1/3 lg:w-2/5 max-sm:px-8">
        <h2
          className={`${gilroy.className} font-extrabold text-2xl md:text-6xl text-rumah-peran-red`}
        >
          Program Terfavorit
        </h2>
        <p className={`${inter.className} text-xl text-[#4D4D4D] mb-8`}>
          Program kelas paling populer saat ini
        </p>
        <Button>Lihat Program Lainnya</Button>
      </div>
      <div className="bg-contain bg-no-repeat bg-[url('/program-bg.svg')] flex-1 w-full md:w-2/3 lg:w-4/5 md:-mr-32 2xl:-mr-96 md:py-16 md:pl-16">
        <div
          ref={scrollProgramsRef}
          className="flex flex-nowrap items-center gap-x-4 overflow-hidden overflow-x-scroll no-scrollbar snap-x"
        >
          <div className="w-20 md:hidden" />
          {programs.map((program) => (
            <div
              key={program.id}
              className="flex-1 pb-4 snap-center md:snap-start"
            >
              <ProgramCard data={program} />
            </div>
          ))}
          <div className="w-20" />
        </div>
        <div className="flex items-center max-sm:justify-center gap-x-4 cursor-pointer mt-4">
          <div
            className="rounded-full bg-white shadow-md w-fit p-2"
            onClick={() => handleScrollPrograms('left')}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.6688 23.5314C11.044 22.9065 11.044 21.8935 11.6688 21.2686L16.9375 16L11.6688 10.7314C11.044 10.1065 11.044 9.09347 11.6688 8.46863C12.2937 7.84379 13.3067 7.84379 13.9316 8.46863L20.3316 14.8686C20.9564 15.4935 20.9564 16.5065 20.3316 17.1314L13.9316 23.5314C13.3067 24.1562 12.2937 24.1562 11.6688 23.5314Z"
                fill="#721620"
              />
            </svg>
          </div>
          <div
            className="rounded-full bg-white shadow-md w-fit p-2"
            onClick={() => handleScrollPrograms('right')}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.6688 23.5314C11.044 22.9065 11.044 21.8935 11.6688 21.2686L16.9375 16L11.6688 10.7314C11.044 10.1065 11.044 9.09347 11.6688 8.46863C12.2937 7.84379 13.3067 7.84379 13.9316 8.46863L20.3316 14.8686C20.9564 15.4935 20.9564 16.5065 20.3316 17.1314L13.9316 23.5314C13.3067 24.1562 12.2937 24.1562 11.6688 23.5314Z"
                fill="#721620"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoriteProgramSection;
