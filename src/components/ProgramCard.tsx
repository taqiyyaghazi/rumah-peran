import { gilroy, inter } from '@/lib/fonts';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

interface Props {
  data: {
    slug: string;
    info: string | null;
    title: string;
    schedule: string;
    price: string;
    pricePer: string;
    totalSessions: number | null;
    image: string;
  };
  type: 'favorite' | 'regular' | 'regular-vertical';
}

const ProgramCard = ({
  data: { slug, info, title, schedule, price, totalSessions, image, pricePer },
  type,
}: Props) => {
  switch (type) {
    case 'regular':
      return (
        <div className="rounded-xl shadow-md lg:min-h-72 flex max-lg:flex-col overflow-hidden">
          <div className="relative w-full lg:w-60 aspect-square">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
            <Image src={image} alt={title} fill className="object-cover" />
            {info && (
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 6C11 6.55228 10.5523 7 10 7C9.44772 7 9 6.55228 9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6ZM9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11V14C9 14.5523 9.44772 15 10 15H11C11.5523 15 12 14.5523 12 14C12 13.4477 11.5523 13 11 13V10C11 9.44772 10.5523 9 10 9H9Z"
                    fill="white"
                  />
                </svg>
                <p className={`${inter.className} text-xs text-white`}>
                  {info}
                </p>
              </div>
            )}
          </div>
          <div className="p-4 lg:h-full lg:flex lg:flex-col lg:justify-between">
            <div className="mb-8">
              <h3
                className={`${gilroy.className} font-extrabold md:text-lg text-soft-black`}
              >
                {title}
              </h3>
              {totalSessions && (
                <p
                  className={`${inter.className} text-sm text-rumah-peran-red`}
                >
                  {totalSessions}x pertemuan
                </p>
              )}
              <p className={`${inter.className} text-xs text-[#4D4D4D]`}>
                {schedule}
              </p>
            </div>
            <div>
              <p className={`${inter.className} text-xs text-[#4D4D4D]`}>
                Harga mulai
              </p>
              <p
                className={`${gilroy.className} font-extrabold md:text-xl text-rumah-peran-red`}
              >
                {price}{' '}
                <span className="text-xs font-light -ml-1">/{pricePer}</span>
              </p>
              <div className="flex gap-x-2 mt-2">
                <Link href={`/program/${slug}`}>
                  <Button
                    type="outlined"
                    size="sm"
                    className="border-soft-black text-sm text-soft-black"
                  >
                    Lihat Program
                  </Button>
                </Link>
                <Button size="sm">Daftar Sekarang</Button>
              </div>
            </div>
          </div>
        </div>
      );
    case 'regular-vertical':
      return (
        <div className="rounded-xl shadow-md flex flex-col overflow-hidden">
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
            <Image src={image} alt={title} fill className="object-cover" />
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 6C11 6.55228 10.5523 7 10 7C9.44772 7 9 6.55228 9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6ZM9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11V14C9 14.5523 9.44772 15 10 15H11C11.5523 15 12 14.5523 12 14C12 13.4477 11.5523 13 11 13V10C11 9.44772 10.5523 9 10 9H9Z"
                  fill="white"
                />
              </svg>
              <p className={`${inter.className} text-xs text-white`}>{info}</p>
            </div>
          </div>
          <div className="p-4">
            <div className="mb-8">
              <h3
                className={`${gilroy.className} font-extrabold md:text-lg text-soft-black`}
              >
                {title}
              </h3>
              <p className={`${inter.className} text-sm text-rumah-peran-red`}>
                {totalSessions}x pertemuan
              </p>
              <p className={`${inter.className} text-xs text-[#4D4D4D]`}>
                {schedule}
              </p>
            </div>
            <div>
              <p className={`${inter.className} text-xs text-[#4D4D4D]`}>
                Harga mulai
              </p>
              <p
                className={`${gilroy.className} font-extrabold md:text-xl text-rumah-peran-red`}
              >
                {price}{' '}
                <span className="text-xs font-light -ml-1">/Pertemuan</span>
              </p>
              <div className="flex gap-x-2 mt-2">
                <Link href={`/program/${slug}`}>
                  <Button
                    type="outlined"
                    size="sm"
                    className="border-soft-black text-sm text-soft-black"
                  >
                    Lihat Program
                  </Button>
                </Link>
                <Button size="sm">Daftar Sekarang</Button>
              </div>
            </div>
          </div>
        </div>
      );
    case 'favorite':
      return (
        <div className="w-72 md:w-80 rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
            <Image src={image} alt={title} fill className="object-cover" />
            {info && (
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 6C11 6.55228 10.5523 7 10 7C9.44772 7 9 6.55228 9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6ZM9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11V14C9 14.5523 9.44772 15 10 15H11C11.5523 15 12 14.5523 12 14C12 13.4477 11.5523 13 11 13V10C11 9.44772 10.5523 9 10 9H9Z"
                    fill="white"
                  />
                </svg>
                <p className={`${inter.className} text-xs text-white`}>
                  {info}
                </p>
              </div>
            )}
          </div>
          <div className="p-4 bg-white h-56 flex flex-col justify-between">
            <h3 className={`${inter.className} text-soft-black font-bold`}>
              {title}
            </h3>
            <div>
              <p className={`${inter.className} text-sm mb-3`}>{schedule}</p>
              <div className="flex items-center justify-between">
                <div className="text-rumah-peran-red">
                  <p className={`${gilroy.className} font-extrabold text-xl`}>
                    {price}
                  </p>
                  {totalSessions && (
                    <p className={`${inter.className} text-sm`}>
                      {totalSessions} Pertemuan
                    </p>
                  )}
                </div>
                <Link href={`/program/${slug}`}>
                  <Button>Lihat Program</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
  }
};

export default ProgramCard;
