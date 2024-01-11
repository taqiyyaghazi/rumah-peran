import Button, { ColorType } from '@/components/Button';
import CtaBox from '@/components/CtaBox';
import { readJson } from '@/lib';
import { gilroy, inter } from '@/lib/fonts';
import { IProgram } from '@/types';
import React from 'react';
import Image from 'next/image';
import ProgramCard from '@/components/ProgramCard';

export default async function DetailProgram({
  params,
}: {
  params: { id: number };
}) {
  const programs = (await readJson('/src/data/programs.json')) as IProgram[];
  const program = programs.find((item) => item.id === Number(params.id));
  return (
    <main>
      <section className="bg-[url('/program-pattern.svg')] bg-no-repeat bg-cover bg-center relative overflow-hidden">
        <div className="px-4 md:px-8 xl:px-32 2xl:px-96 pt-32 pb-16">
          <h2
            className={`${inter.className} text-rumah-peran-red font-semibold`}
          >
            KELAS REGULAR
          </h2>
          <h1
            className={`${gilroy.className} text-rumah-peran-red text-5xl font-extrabold max-w-96 my-4 leading-24`}
          >
            {program?.title}
          </h1>
          <div>
            <div className="flex gap-x-4">
              {[`Batch ${program?.currentBatch}`, program?.info].map((item) => (
                <div
                  key={item}
                  className={`${inter.className} px-4 py-2 border border-rumah-peran-red rounded-md text-rumah-peran-red bg-white`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute -top-24 right-24 w-[38rem] aspect-[5/6]">
          <Image src="/program-image.svg" alt="program-image" fill />
        </div>
        <div className="bg-gradient-to-t from-white to-transparent h-28 relative z-10"></div>
      </section>
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
