import { gilroy, inter } from '@/lib/fonts';
import Image from 'next/image';

interface Props {
  title: string;
  currentBatch: number;
  info: string | null;
  location: string;
}

const HeroSection = ({ title, currentBatch, info, location }: Props) => {
  return (
    <section className="bg-[url('/program-pattern.svg')] z-10 bg-no-repeat bg-cover bg-center relative overflow-hidden">
      <div className="px-4 md:px-8 xl:px-32 2xl:px-96 pt-32 pb-16">
        <h2
          className={`${inter.className} max-sm:text-xs text-rumah-peran-red font-semibold`}
        >
          KELAS REGULAR
        </h2>
        <h1
          className={`${gilroy.className} text-rumah-peran-red max-sm:text-2xl text-5xl font-extrabold max-w-96 my-4 leading-24`}
        >
          {title}
        </h1>
        <div>
          <div className="flex gap-x-4">
            {[`Batch ${currentBatch}`, info, location]
              .filter((item) => !!item)
              .map((item) => (
                <div
                  key={item}
                  className={`${inter.className} max-sm:text-xs px-4 py-2 border border-rumah-peran-red rounded-md text-rumah-peran-red bg-white`}
                >
                  {item}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="max-md:hidden absolute -top-24 -right-72 xl:right-24 w-[38rem] aspect-[5/6]">
        <Image src="/program-image.svg" alt="program-image" fill />
      </div>
      <div className="bg-gradient-to-r from-soft-cream to-soft-cream/40 h-[50rem] w-full absolute top-0 left-0 -z-10"></div>
      <div className="bg-gradient-to-t from-white to-transparent h-28 relative z-10"></div>
    </section>
  );
};

export default HeroSection;
