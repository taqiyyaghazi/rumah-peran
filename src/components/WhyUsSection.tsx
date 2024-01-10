import { readJson } from '@/lib';
import { gilroy, inter } from '@/lib/fonts';
import { IWhyUsData } from '@/types';
import Image from 'next/image';

interface Props {
  data: IWhyUsData[];
}
const WhyUsSection = async ({ data }: Props) => {
  return (
    <section className="bg-soft-cream py-16 px-8 xl:px-32 2xl:px-96 rounded-[4rem] md:rounded-[8rem] relative overflow-hidden">
      <h2
        className={`${gilroy.className} font-extrabold text-2xl md:text-6xl text-rumah-peran-red text-center mb-8`}
      >
        Mengapa Pilih Kami?
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-8">
        {data.map(({ title, desc, img }) => (
          <div
            key={title}
            className="flex items-center justify-center gap-4 w-fit max-w-lg"
          >
            <div>
              <div className="w-16 md:w-32 aspect-square relative bg-contain bg-no-repeat bg-[url('/circle-cream.svg')]">
                <Image src={img} alt={title} fill />
              </div>
            </div>
            <div>
              <h3
                className={`${gilroy.className} font-bold text-lg md:text-4xl text-soft-black`}
              >
                {title}
              </h3>
              <p
                className={`${inter.className} text-sm md:text-base text-[#4D4D4D]`}
              >
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute w-[25rem] h-[33rem] top-32 -right-56 md:-right-10">
        <Image src="squiggles.svg" alt="squiggles" fill />
      </div>
    </section>
  );
};

export default WhyUsSection;
