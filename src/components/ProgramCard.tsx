import { gilroy, inter } from '@/lib/fonts';
import Image from 'next/image';
import Button from './Button';

interface Props {
  data: {
    id: number;
    info: string;
    title: string;
    date: string;
    price: string;
    totalSessions: number;
    image: string;
  };
}

const ProgramCard = ({
  data: { id, info, title, date, price, totalSessions, image },
}: Props) => {
  return (
    <div className="w-72 md:w-80 rounded-xl overflow-hidden shadow-lg">
      <div className="relative h-64 overflow-hidden">
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
      <div className="p-4 bg-white h-56 flex flex-col justify-between">
        <h3 className={`${inter.className} text-soft-black font-bold`}>
          {title}
        </h3>
        <div>
          <p className={`${inter.className} text-sm mb-3`}>{date}</p>
          <div className="flex items-center justify-between">
            <div className="text-rumah-peran-red">
              <p className={`${gilroy.className} font-extrabold text-xl`}>
                {price}
              </p>
              <p className={`${inter.className} text-sm`}>
                {totalSessions} Pertemuan
              </p>
            </div>
            <Button>Lihat Program</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
