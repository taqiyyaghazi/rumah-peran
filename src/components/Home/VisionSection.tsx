import { gilroy, inter } from '@/lib/fonts';
import Image from 'next/image';

interface Props {
  vision: string;
}

const VisionSection = ({ vision }: Props) => {
  return (
    <section className="py-16 mb-16 px-8 xl:px-32 2xl:px-96 max-sm:flex max-sm:flex-col-reverse max-sm:items-center max-sm:gap-4 md:relative overflow-hidden">
      <div className="max-w-2xl md:py-24">
        <h2
          className={`${gilroy.className} font-extrabold text-2xl md:text-6xl`}
        >
          AMBILLAH <span className="text-rumah-peran-red">PERANMU!</span>
        </h2>
        <p className={`${inter.className} text-base md:text-xl`}>{vision}</p>
      </div>
      <div className="w-72 md:w-[32rem] aspect-square relative md:absolute md:top-0 md:-right-96 lg:-right-36 xl:-right-20">
        <Image
          src="/doodles-illustration.svg"
          alt="doodles illustration"
          fill
        />
      </div>
    </section>
  );
};

export default VisionSection;
