import { gilroy, inter } from '@/lib/fonts';
import Link from 'next/link';
import Button from './Button';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section>
      <div className="bg-white relative px-4 xl:px-36 pt-16 flex flex-col items-center justify-center">
        <h2
          className={`${inter.className} text-base md:text-2xl text-center font-semibold text-rumah-peran-red mb-4`}
        >
          ART & ENTERTAINING SCHOOL
        </h2>
        <div className={`${gilroy.className} font-extrabold text-[1.7rem] md:text-6xl mb-12 md:mb-16`}>
          <p className="mb-2">
            <span className="text-[#1E1E1E] text-center">
              Belajar, Berkembang, dan
            </span>
          </p>
          <div className="text-center">
            <div className="text-rumah-peran-red inline-flex flex-col h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
                <li>Temukan</li>
                <li>Ambillah</li>
                <li aria-hidden="true">Temukan</li>
              </ul>
            </div>
            <span className="text-rumah-peran-red">{` `}Peranmu</span>
          </div>
        </div>
        <Link href="/program">
          <Button className="bg-rumah-peran-red text-soft-cream">
            Lihat Program
          </Button>
        </Link>

        <div className="relative h-fit w-full">
          <Image
            src="/arrow-illustration.svg"
            alt="arrow illustration"
            width={252}
            height={117}
            className="absolute max-sm:w-24 max-sm:-rotate-12 -top-24 md:-top-36 right-0 lg:right-36 xl:right-56 2xl:right-[48rem]"
          />
        </div>
      </div>
      <div className="w-full h-56 md:h-96 relative bg-contain bg-[url('/hero-pattern.svg')]">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
        <Image src="/hero-image.svg" alt="hero image" fill className="pb-16" />
      </div>
      <div className="px-4 md:px-8 xl:px-36 py-16 flex max-lg:flex-col 2xl:max-w-screen-xl mx-auto items-center justify-center gap-4 md:gap-16">
        <div className="flex items-center gap-2 md:gap-4">
          <div
            className={`${gilroy.className} text-center flex flex-col items-center justify-center bg-[url('/circle.svg')] bg-no-repeat bg-contain w-24 h-24 md:w-40 md:h-40`}
          >
            <p className="font-extrabold text-rumah-peran-red text-xl md:text-5xl">200+</p>
            <p className='text-xs md:text-base'>Alumni</p>
          </div>
          <div
            className={`${gilroy.className} text-center flex flex-col items-center justify-center bg-[url('/circle.svg')] bg-no-repeat bg-contain w-24 h-24 md:w-40 md:h-40`}
          >
            <p className="font-extrabold text-soft-black text-xl md:text-5xl">95%</p>
            <p className='text-xs md:text-base'>
              Jadi lebih <br /> percaya diri
            </p>
          </div>
          <div
            className={`${gilroy.className} text-center flex flex-col items-center justify-center bg-[url('/circle.svg')] bg-no-repeat bg-contain w-24 h-24 md:w-40 md:h-40`}
          >
            <p className="font-extrabold text-rumah-peran-red text-xl md:text-5xl">85%</p>
            <p className='text-xs md:text-base'>Skill meningkat</p>
          </div>
        </div>
        <div>
          <p className={`${inter.className} text-xl`}>
            Rumah Peran adalah lembaga pendidikan alternatif yang holistik
            berfokus pada pengembangan skill dan karakter setiap individu
            terutama dalam bidang Art & Entertainment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
