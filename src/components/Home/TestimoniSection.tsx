import { gilroy, roboto } from '@/lib/fonts';
import { IPartners, ITestimonial } from '@/types';
import Image from 'next/image';

interface Props {
  testimonials: ITestimonial[];
  partners: IPartners[];
}

const TestimoniSection = ({ testimonials, partners }: Props) => {
  return (
    <section className="px-4 xl:px-36 py-16 bg-[url('/circle-bg.svg')] bg-no-repeat bg-center relative">
      <div className="mb-32">
        <h2
          className={`${gilroy.className} font-extrabold text-center text-rumah-peran-red text-2xl md:text-6xl mb-8`}
        >
          Testimoni Alumni
        </h2>
        <div className="md:grid grid-rows-3 grid-cols-3 gap-4">
          {testimonials.map(({ image, name, message }, id) => (
            <div
              key={id}
              className={`max-sm:mb-4 flex items-start gap-x-2 p-4 bg-white rounded-t-lg ${
                id % 2 === 0 ? 'rounded-bl-lg' : 'rounded-br-lg'
              } border border-[#E3E8EF]`}
            >
              <div className="flex-none relative w-8 md:w-16 aspect-square mt-1">
                <Image src={image} alt={name} fill />
              </div>
              <div className={roboto.className}>
                <p className="font-bold text-rumah-peran-red">{name}</p>
                <p className="text-neutral-800 text-sm">{message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        {partners.map(({ image, name }) => (
          <div key={name} className="w-32 h-20 md:w-40 md:h-24 relative">
            <Image src={image} alt={name} fill />
          </div>
        ))}
      </div>
      <Image
        src="/ornament-1.svg"
        alt="ornament"
        width={100}
        height={100}
        className="absolute top-20 left-0 lg:top-32 lg:left-32 2xl:left-[36rem] -z-10"
      />
      <Image
        src="/ornament-2.svg"
        alt="ornament"
        width={100}
        height={100}
        className="absolute top-64 right-0 lg:top-32 lg:right-32 2xl:right-[36rem] -z-10"
      />
      <Image
        src="/ornament-2.svg"
        alt="ornament"
        width={100}
        height={100}
        className="absolute bottom-80 left-0 lg:bottom-32 lg:left-32 2xl:left-[36rem] -z-10"
      />
      <Image
        src="/ornament-1.svg"
        alt="ornament"
        width={100}
        height={100}
        className="absolute bottom-96 right-0 lg:bottom-32 lg:right-32 2xl:right-[36rem] -z-10"
      />
    </section>
  );
};

export default TestimoniSection;
