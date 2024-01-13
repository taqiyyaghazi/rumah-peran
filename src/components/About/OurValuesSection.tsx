import { ourValues } from '@/data/ourValues';
import { gilroy } from '@/lib/fonts';
import Image from 'next/image';

const OurValuesSection = () => {
  return (
    <section className="gap-8 px-4 md:px-8 xl:px-32 2xl:px-96 py-16">
      <h2
        className={`${gilroy.className} text-rumah-peran-red font-extrabold text-2xl md:text-5xl mb-8 text-center`}
      >
        Nilai Kami
      </h2>
      <div className="flex max-sm:flex-col items-center max-xl:flex-wrap max-xl:justify-center">
        {ourValues.map(({ value, icon }, index) => (
          <div key={value} className="flex max-sm:flex-col items-center">
            <div className="flex flex-col items-center justify-center w-56 md:w-72 aspect-square md:aspect-[3/4]">
              <div className="relative w-20 aspect-square bg-[url('/circle-cream.svg')] bg-no-repeat bg-contain mb-8">
                <Image src={icon} alt={value} fill />
              </div>
              <p
                className={`${gilroy.className} font-extrabold md:text-4xl text-center text-soft-black`}
              >
                {value}
              </p>
            </div>
            {index !== ourValues.length - 1 && (
              <div className="h-[1px] w-56 md:w-[1px] md:h-56 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-[#B5B5B5] to-transparent" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValuesSection;
