import BannerSection from '@/components/BannerSection';
import Button, { ColorType } from '@/components/Button';
import CtaBox from '@/components/CtaBox';
import ProgramHeroSection from '@/components/ProgramHeroSection';
import ProgramSection from '@/components/ProgramSection/ProgramSection';
import { gilroy } from '@/lib/fonts';
import Image from 'next/image';

export default function Program() {
  return (
    <main>
      <ProgramHeroSection />
      <BannerSection />
      <ProgramSection />
      <CtaBox>
        <p
          className={`${gilroy.className} font-extrabold text-xl md:text-3xl text-center text-soft-cream mb-4`}
        >
          {}
          Punya pertanyaan seputar program kami?
        </p>
        <div className="flex items-end justify-center gap-4">
          <div>
            <Button color={ColorType.secondary}>Daftar Sekarang</Button>
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
