import Button from '@/components/Button';
import CtaBox from '@/components/CtaBox';
import About from '@/components/DetailProgram/About';
import HeroSection from '@/components/DetailProgram/HeroSection';
import ProgramCard from '@/components/ProgramCard';
import { programs } from '@/data/programs';
import { gilroy } from '@/lib/fonts';
import { isBefore } from 'date-fns';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default function DetailProgram({
  params,
}: {
  params: { slug: string };
}) {
  const program = programs.find((item) => item.slug === params.slug);
  if (!program) redirect('/not-found');
  const nearestSchedule = program.schedules.find((schedule) =>
    isBefore(new Date(), schedule.startDate)
  );
  return (
    <main>
      <HeroSection
        title={program.title}
        currentBatch={nearestSchedule?.batch}
        info={program.info}
        location={program.location}
        image={program.image}
      />
      <About
        desc={program.desc}
        instructors={program.instructors}
        materials={program.materials}
        price={program.price}
        time={program.time}
        totalSessions={program.totalSessions}
        schedules={program.schedules}
        benefits={program.benefits}
        nearestSchedule={nearestSchedule}
      />
      <section className="px-4 md:px-8 xl:px-32 2xl:px-96 py-16">
        <h2
          className={`${gilroy.className} text-center mb-8 font-extrabold text-rumah-peran-red text-2xl md:text-5xl`}
        >
          Ikut Juga Kelas Lainnya!
        </h2>
        <div className="flex max-sm:flex-col gap-4 flex-wrap items-center md:items-start justify-center">
          {programs
            .slice(0, 4)
            .filter((program) => program.slug !== params.slug)
            .map((program, id) => (
              <ProgramCard key={id} type="regular-vertical" data={program} />
            ))}
        </div>
      </section>
      <CtaBox>
        <p
          className={`${gilroy.className} font-extrabold text-xl md:text-3xl text-center text-soft-cream mb-4`}
        >
          {}
          Yuk, segera daftar dan rasakan keseruannya
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
