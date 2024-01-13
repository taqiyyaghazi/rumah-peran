import Button from '@/components/Button';
import CtaBox from '@/components/CtaBox';
import About from '@/components/DetailProgram/About';
import HeroSection from '@/components/DetailProgram/HeroSection';
import ProgramCard from '@/components/ProgramCard';
import { programs } from '@/data/programs';
import { gilroy, inter } from '@/lib/fonts';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default function DetailProgram({ params }: { params: { id: number } }) {
  const program = programs.find((item) => item.id === Number(params.id));
  if (!program) redirect('/not-found');
  return (
    <main>
      <HeroSection
        title={program.title}
        currentBatch={program.currentBatch}
        info={program.info}
        location={program.location}
      />
      <About
        desc={program.desc}
        instructors={program.instructors}
        materials={program.materials}
        price={program.price}
        kuota={program.kuota}
        date={program.date}
        schedule={program.schedule}
        totalSessions={program.totalSessions}
        schedules={program.schedules}
        currentScheduleId={program.currentScheduleId}
      />
      <section className="px-4 md:px-8 xl:px-32 2xl:px-96 py-16">
        <h2
          className={`${gilroy.className} text-center mb-8 font-extrabold text-rumah-peran-red text-2xl md:text-5xl`}
        >
          Ikut Juga Kelas Lainnya!
        </h2>
        <div className="flex max-sm:flex-col gap-4">
          {programs.slice(0, 4).map((program) => (
            <ProgramCard
              key={program.id}
              type="regular-vertical"
              data={program}
            />
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
