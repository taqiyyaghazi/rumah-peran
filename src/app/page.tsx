import Button, { ColorType } from '@/components/Button';
import CtaBox from '@/components/CtaBox';
import FavoriteProgramSection, {
  IProgram,
} from '@/components/FavoriteProgramSection';
import HeroSection from '@/components/HeroSection';
import ProjectSection from '@/components/ProjectSection';
import TestimoniSection from '@/components/TestimoniSection';
import VisionSection from '@/components/VisionSection';
import WhyUsSection from '@/components/WhyUsSection';
import { readJson } from '@/lib';
import { gilroy } from '@/lib/fonts';
import {
  IAchievement,
  IPartners,
  IProject,
  ISummary,
  ITestimonial,
  IVision,
  IWhyUsData,
} from '@/types';
import Image from 'next/image';

export default async function Home() {
  const favoriteProgramsData = (await readJson(
    '/src/data/programs.json'
  )) as IProgram[];
  const whyUsData = (await readJson('/src/data/whyUs.json')) as IWhyUsData[];
  const testimonialsData = (await readJson(
    '/src/data/testimonials.json'
  )) as ITestimonial[];
  const partnersData = (await readJson(
    '/src/data/partners.json'
  )) as IPartners[];
  const projectsData = (await readJson(
    '/src/data/projects.json'
  )) as IProject[];
  const { vision } = (await readJson('/src/data/vision.json')) as IVision;
  const achievementsData = (await readJson(
    '/src/data/achievements.json'
  )) as IAchievement[];
  const { summary } = (await readJson('/src/data/summary.json')) as ISummary;
  return (
    <main>
      <HeroSection achievements={achievementsData} summary={summary} />
      <VisionSection vision={vision} />
      <WhyUsSection data={whyUsData} />
      <FavoriteProgramSection data={favoriteProgramsData} />
      <TestimoniSection
        testimonials={testimonialsData}
        partners={partnersData}
      />
      <ProjectSection data={projectsData} />

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
