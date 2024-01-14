import { gilroy, inter } from '@/lib/fonts';
import Image from 'next/image';
import Button from '../../Button';
import { alumniPrograms } from '@/data/alumniPrograms';

const AlumniProgram = () => {
  return (
    <div>
      <p className={`${inter.className} my-8 max-sm:text-xs`}>
        Program khusus untuk para alumni Rumah Peran Indonesia agar dapat terus
        mendapat dukungan untuk berkarya
      </p>
      <div className="flex gap-4 max-sm:flex-col items-center">
        {alumniPrograms.map(
          ({ title, desc, schedule, time, price, priceInfo, image }, id) => (
            <div
              key={id}
              className="w-64 min-h-[32rem] rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative w-full aspect-[5/4]">
                <Image src={image} alt={title} fill className="object-cover" />
              </div>
              <div className="h-80 p-4 flex flex-col justify-between">
                <div>
                  <h3
                    className={`${gilroy.className} text-soft-black font-extrabold text-lg mb-2`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`${inter.className} text-xs text-[#4D4D4D] mb-4`}
                  >
                    {desc}
                  </p>
                  <div>
                    <div className="flex gap-x-2 items-center">
                      <Image
                        src="/calendar-icon.svg"
                        alt="calendar icon"
                        width={20}
                        height={20}
                      />
                      <p
                        className={`${inter.className} text-xs text-[#4D4D4D]`}
                      >
                        {schedule}
                      </p>
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <Image
                        src="/clock-icon.svg"
                        alt="clock icon"
                        width={20}
                        height={20}
                      />
                      <p
                        className={`${inter.className} text-xs text-[#4D4D4D]`}
                      >
                        {time}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex gap-x-1 items-center">
                    <p
                      className={`${gilroy.className} font-extrabold text-rumah-peran-red text-lg md:text-xl`}
                    >
                      {price}
                    </p>
                    <p className={`${inter.className} text-xs text-[#4D4D4D]`}>
                      {priceInfo}
                    </p>
                  </div>
                  <Button size="full">Hubungi Kami</Button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AlumniProgram;
