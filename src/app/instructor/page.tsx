import Button from '@/components/Button';
import CtaBox from '@/components/CtaBox';
import InstructorAvatar from '@/components/InstructorAvatar';
import { instructors } from '@/data/instructors';
import { gilroy, inter } from '@/lib/fonts';
import Image from 'next/image';

export default function InstructorPage() {
  return (
    <main>
      <section className="bg-[url('/program-pattern.svg')] z-10 bg-no-repeat bg-cover bg-center relative overflow-hidden mb-28">
        <div className="px-4 md:px-8 xl:px-32 2xl:px-96 pt-32 pb-16 md:mb-48">
          <h1
            className={`${gilroy.className} text-rumah-peran-red font-extrabold text-3xl md:text-5xl text-center mb-8`}
          >
            Pengajar Rumah Peran
          </h1>
          <p
            className={`${inter.className} md:text-xl text-rumah-peran-red text-center`}
          >
            Kenalan dengan para pengajar berpengalaman yang senantiasa fokus dan
            sungguh - sungguh membimbing para student untuk menjadi versi
            terbaik dari diri mereka.{' '}
          </p>
        </div>
        <div className="absolute w-full md:w-5/6 aspect-[11/3] left-1/2 -translate-x-1/2 -bottom-3 md:-bottom-20">
          <Image
            src="instructor-illustration.svg"
            alt="instructor illustration"
            fill
          />
        </div>
        <div className="bg-gradient-to-r from-soft-cream to-soft-cream/40 h-[50rem] w-full absolute top-0 left-0 -z-10"></div>
        <div className="bg-gradient-to-t from-white to-transparent h-28 relative z-10"></div>
      </section>
      <section className="px-4 xl:px-36 py-16 flex flex-col gap-24 mb-32">
        <div className="flex justify-center max-sm:gap-y-20">
          <div className="flex max-sm:flex-col gap-4 max-sm:gap-y-20">
            {instructors.slice(0, 3).map((instructor, id) => (
              <InstructorAvatar key={id} data={instructor} />
            ))}
          </div>
        </div>
        <div className="flex justify-center max-sm:gap-y-20">
          <div className="flex max-sm:flex-col gap-4 max-sm:gap-y-20">
            {instructors.slice(3, 5).map((instructor, id) => (
              <InstructorAvatar key={id} data={instructor} />
            ))}
          </div>
        </div>
        <div className="flex justify-center max-sm:gap-y-20">
          <div className="flex max-sm:flex-col gap-4 max-sm:gap-y-20">
            {instructors.slice(5, 7).map((instructor, id) => (
              <InstructorAvatar key={id} data={instructor} />
            ))}
          </div>
        </div>
      </section>
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
