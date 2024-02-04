import { gilroy, inter } from '@/lib/fonts';
import { IInstructor } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  data: IInstructor;
}

const InstructorAvatar = ({
  data: { title, name, image, desc, instagram },
}: Props) => {
  return (
    <div className="flex items-center flex-col">
      <div className="bg-soft-cream relative outline outline-8 outline-bright-yellow rounded-full w-48 lg:w-80 aspect-square mb-4">
        <div className="absolute w-48 lg:w-80 aspect-[3/4] rounded-full overflow-hidden bottom-0 left-0 px-20">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain object-bottom"
          />
        </div>
        {!!instagram && (
          <div className="absolute p-2 lg:p-5 w-16 lg:w-28 aspect-square rounded-full border border-[#E2E2E2] bottom-0 right-0">
            <Link
              href={instagram as string}
              className="bg-white w-full h-full rounded-full flex items-center justify-center cursor-pointer"
              target="_blank"
            >
              <div className="relative w-5 lg:w-10 aspect-square">
                <Image src="/instagram.svg" alt="instagram icon" fill />
              </div>
            </Link>
          </div>
        )}
      </div>
      {!!desc && (
        <div className="w-56 lg:w-96">
          <p
            className={`${inter.className} text-rumah-peran-red text-center text-xl font-semibold`}
          >
            {title}
          </p>
          <p
            className={`${gilroy.className} text-soft-black font-extrabold text-3xl text-center`}
          >
            {name}
          </p>
          <p className={`${inter.className} text-[#616161] text-center`}>
            {desc}
          </p>
        </div>
      )}
    </div>
  );
};

export default InstructorAvatar;
