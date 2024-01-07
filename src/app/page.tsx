import Button, { ColorType } from '@/components/Button';
import CtaBox from '@/components/CtaBox';
import HeroSection from '@/components/HeroSection';
import { gilroy, inter } from '@/lib/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <HeroSection />

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
