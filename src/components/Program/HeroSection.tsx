import { gilroy, inter } from '@/lib/fonts';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';

const HeroSection = () => {
  return (
    <section className="py-16 h-96 sm:h-[30rem] md:h-[35rem] lg:h-[45rem] xl:h-[60rem] 2xl:h-[90rem] relative overflow-hidden">
      <div>
        <h2
          className={`${inter.className} text-base md:text-xl xl:text-2xl text-center font-semibold text-rumah-peran-red mb-4`}
        >
          Program Kami
        </h2>
        <div
          className={`${gilroy.className} font-extrabold text-xl md:text-3xl xl:text-6xl uppercase text-center`}
        >
          <p className="text-[#1E1E1E] md:mb-4">Kembangkan Potensi & Skill,</p>
          <p className="text-rumah-peran-red">Jadilah Versi Terbaikmu</p>
        </div>
        <div className="flex items-center justify-center my-8">
          <Link href="/program#program">
            <Button className="bg-rumah-peran-red text-soft-cream">
              Lihat Program
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-[115vw] aspect-video absolute bottom-0 -left-6 md:-left-16 lg:-left-20 xl:-left-28 2xl:-left-48 -z-20">
        <Image src="program-hero.svg" alt="program background" fill />
      </div>
    </section>
  );
};

export default HeroSection;
