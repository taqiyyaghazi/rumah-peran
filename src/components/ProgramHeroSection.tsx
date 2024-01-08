import { gilroy, inter } from '@/lib/fonts';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const ProgramHeroSection = () => {
  return (
    <section className="py-16 h-[60vh] md:h-[90vh] xl:h-[125vh] relative overflow-hidden">
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
        <div className='flex items-center justify-center my-8'>
          <Link href="/program">
            <Button className="bg-rumah-peran-red text-soft-cream">
              Lihat Program
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-[115vw] aspect-video absolute bottom-0 -left-6 md:-left-16 xl:-left-28 -z-20">
        <Image src="program-hero.svg" alt="program background" fill />
      </div>
    </section>
  );
};

export default ProgramHeroSection;
