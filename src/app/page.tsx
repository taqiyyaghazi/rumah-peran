import Button, { ColorType } from '@/components/Button';
import CtaBox from '@/components/CtaBox';
import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/VisionSection';
import WhyUsSection from '@/components/WhyUsSection';
import { gilroy } from '@/lib/fonts';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <VisionSection />
      <WhyUsSection />

      <CtaBox>
        <p
          className={`${gilroy.className} font-extrabold text-xl md:text-5xl text-center text-soft-cream mb-4`}
        >
          {}
          Apa lagi yang kamu tunggu?
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
