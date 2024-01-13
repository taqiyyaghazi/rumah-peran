import { gilroy, inter } from '@/lib/fonts';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-[url('/program-pattern.svg')] z-10 bg-no-repeat bg-cover bg-center relative overflow-hidden mb-16">
      <div className="px-4 md:px-8 xl:px-32 2xl:px-96 pt-32 pb-16 flex max-sm:flex-col gap-x-32">
        <div>
          <h1
            className={`${gilroy.className} text-rumah-peran-red font-extrabold text-3xl md:text-6xl md:mb-32`}
          >
            Tentang Kami
          </h1>

          <div className="flex gap-x-4 max-sm:hidden">
            <div>
              <div className="relative w-64 aspect-square">
                <Image src="/about-image.svg" alt="about image" fill />
              </div>
            </div>
            <div>
              <div className="relative w-64 aspect-[10/3] mb-4">
                <Image src="/about-pattern.svg" alt="about image" fill />
              </div>
              <div className="relative w-64 aspect-square rotate-180">
                <Image src="/about-image.svg" alt="about image" fill />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-x-4 mb-32 max-sm:hidden">
            <div>
              <div className="relative w-64 aspect-square">
                <Image src="/about-image.svg" alt="about image" fill />
              </div>
            </div>
            <div>
              <div className="relative w-64 aspect-[10/3] mb-4">
                <Image src="/about-pattern.svg" alt="about image" fill />
              </div>
              <div className="relative w-64 aspect-square rotate-180">
                <Image src="/about-image.svg" alt="about image" fill />
              </div>
            </div>
          </div>
          <p
            className={`${inter.className} text-rumah-peran-red md:text-2xl font-semibold`}
          >
            Kami akan membawamu mengenal lebih dalam tentang cerita
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-soft-cream to-soft-cream/40 h-[96rem] w-full absolute top-0 left-0 -z-10"></div>
      <div className="bg-gradient-to-t from-white to-transparent h-28 relative z-10"></div>
    </section>
  );
};

export default HeroSection;
