import AboutSection from '@/components/About/AboutSection';
import HeroSection from '@/components/About/HeroSection';
import OurValuesSection from '@/components/About/OurValuesSection';
import Button from '@/components/Button';
import CtaBox from '@/components/CtaBox';
import { gilroy } from '@/lib/fonts';
import Image from 'next/image';

export default function page() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <OurValuesSection />
      <CtaBox>
        <p
          className={`${gilroy.className} font-extrabold text-xl md:text-3xl text-center text-soft-cream mb-4`}
        >
          {}
          Punya pertanyaan seputar program kami?
        </p>
        <div className="flex items-end justify-center gap-4">
          <div>
            <Button color="secondary">Hubungi Kami</Button>
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
