import BannerSection from '@/components/Program/BannerSection';
import Button from '@/components/Button';
import CtaBox from '@/components/CtaBox';
import ProgramHeroSection from '@/components/Program/HeroSection';
import ProgramSection from '@/components/Program/ProgramSection/ProgramSection';
import { banners } from '@/data/banners';
import { programs } from '@/data/programs';
import { tabs } from '@/data/tabs';
import { gilroy } from '@/lib/fonts';
import Image from 'next/image';

export default function Program() {
  return (
    <main>
      <ProgramHeroSection />
      <BannerSection data={banners} />
      <ProgramSection tabs={tabs} regularProgram={programs} />
      <CtaBox>
        <p
          className={`${gilroy.className} font-extrabold text-xl md:text-3xl text-center text-soft-cream mb-4`}
        >
          {}
          Punya pertanyaan seputar program kami?
        </p>
        <div className="flex items-end justify-center gap-4">
          <div>
            <Button color="secondary">Daftar Sekarang</Button>
          </div>
        </div>
        <div className="hidden md:block relative">
          <Image
            src="/arrow-illustration.svg"
            alt="arrow illustration"
            width={140}
            height={70}
            className="absolute -top-16 right-16 lg:right-44"
          />
        </div>
      </CtaBox>
    </main>
  );
}
