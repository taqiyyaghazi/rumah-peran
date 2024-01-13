import Button, { ColorType } from '@/components/Button';
import CtaBox from '@/components/CtaBox';
import FavoriteProgramSection from '@/components/FavoriteProgramSection';
import HeroSection from '@/components/HeroSection';
import ProjectSection from '@/components/ProjectSection';
import TestimoniSection from '@/components/TestimoniSection';
import VisionSection from '@/components/VisionSection';
import WhyUsSection from '@/components/WhyUsSection';
import { achievements } from '@/data/achievements';
import { partners } from '@/data/partners';
import { programs } from '@/data/programs';
import { projects } from '@/data/projects';
import { summary } from '@/data/summary';
import { testimonials } from '@/data/testimonials';
import { vision } from '@/data/vision';
import { whyUs } from '@/data/whyUs';
import { gilroy } from '@/lib/fonts';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <HeroSection achievements={achievements} summary={summary} />
      <VisionSection vision={vision} />
      <WhyUsSection data={whyUs} />
      <FavoriteProgramSection data={programs} />
      <TestimoniSection testimonials={testimonials} partners={partners} />
      <ProjectSection data={projects} />

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
