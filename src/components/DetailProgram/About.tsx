import { gilroy, inter } from '@/lib/fonts';
import { IInstructor, IMaterial, ISchedule } from '@/types';
import Image from 'next/image';
import Button from '../Button';

interface Props {
  desc: string;
  instructors: IInstructor[];
  materials: IMaterial[];
  price: string;
  kuota: string;
  date: string;
  schedule: string;
  totalSessions: number | null;
  schedules: ISchedule[];
  currentScheduleId: number;
}

const About = ({
  desc,
  instructors,
  materials,
  price,
  kuota,
  date,
  schedule,
  totalSessions,
  schedules,
  currentScheduleId,
}: Props) => {
  return (
    <section className="px-4 xl:px-36 flex max-lg:flex-col-reverse max-lg:items-center gap-12 -mt-10 z-10 relative overflow-hidden">
      <div className="w-full">
        <div className="mb-16">
          <p
            className={`${gilroy.className} font-extrabold text-soft-black text-lg sm:text-2xl mb-4`}
          >
            Tentang Kelas
          </p>
          <p className="max-sm:text-xs">{desc}</p>
        </div>
        <div className="mb-16">
          <p
            className={`${gilroy.className} font-extrabold text-soft-black text-lg sm:text-2xl mb-4`}
          >
            Pengajar
          </p>
          <div className="flex max-md:flex-col gap-4">
            {instructors.map(({ name, title, image }, id) => (
              <div key={id} className="flex items-center gap-x-4 w-full">
                <div className="relative w-16 aspect-square rounded-full overflow-hidden">
                  <Image src={image} alt={name} fill className="object-cover" />
                </div>
                <div className="p-4 border border-[#E3E8EF] rounded-t-xl rounded-br-xl w-full">
                  <p
                    className={`${gilroy.className} font-extrabold sm:text-xl text-rumah-peran-red`}
                  >
                    {name}
                  </p>
                  <p
                    className={`${inter.className} max-sm:text-xs text-[#4D4D4D]`}
                  >
                    {title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p
            className={`${gilroy.className} font-extrabold text-soft-black text-lg md:text-2xl mb-4`}
          >
            Materi yang Akan Kamu Pelajari
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-16">
            {materials.map(({ text, image }, id) => (
              <div
                key={id}
                className={`p-4 rounded-xl shadow-md h-64 relative overflow-hidden ${
                  (id + 1) % 2 === 0 ? 'bg-white' : 'bg-bright-yellow'
                }`}
              >
                <p
                  className={`${gilroy.className} text-soft-black max-sm:text-sm font-extrabold mb-2`}
                >
                  {text}
                </p>
                <div className="relative w-24 aspect-square bg-[url('/circle-cream.svg')] bg-no-repeat bg-contain">
                  <Image src={image} alt={text} fill />
                </div>
                <div
                  className={`${gilroy.className} text-transparent font-extrabold text-[10rem] absolute font-outline-4 -bottom-20 -right-5`}
                >
                  {id + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <p
            className={`${gilroy.className} font-extrabold text-soft-black text-lg md:text-2xl mb-4`}
          >
            Jadwal Kelas
          </p>
          <div>
            {schedules.map(({ batch, schedule }, id) => (
              <div
                key={id}
                className={`${
                  id <= currentScheduleId
                    ? 'border-l-2 border-rumah-peran-red'
                    : 'border-l'
                } py-4 px-6`}
              >
                {id === currentScheduleId && (
                  <p
                    className={`${inter.className} text-[#4D4D4D] text-xs mb-2`}
                  >
                    Jadwal Terdekat
                  </p>
                )}
                <div className="flex max-md:flex-col items-center justify-between gap-y-4">
                  <div className="max-md:w-full">
                    <div
                      className={`${
                        id <= currentScheduleId
                          ? 'bg-rumah-peran-red text-white'
                          : 'bg-white text-rumah-peran-red'
                      } border border-rumah-peran-red rounded-full py-2 px-4 md:w-96 flex items-center justify-center gap-x-2`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M17.2505 13.3501H12.7505V17.8501H17.2505V13.3501ZM15.7505 3.6001V5.1001H8.25047V3.6001H6.00047V5.1001H4.875C3.84366 5.1001 3 5.94375 3 6.9751V19.7251C3 20.7564 3.84366 21.6001 4.875 21.6001H19.1255C20.1568 21.6001 21.0005 20.7564 21.0005 19.7251V6.9751C21.0005 5.94375 20.1568 5.1001 19.1255 5.1001H18.0005V3.6001H15.7505ZM19.1255 19.7251H4.875V9.7876H19.1255V19.7251Z"
                          fill={id <= currentScheduleId ? 'white' : '#952F1F'}
                        />
                      </svg>
                      <p
                        className={`${inter.className} max-md:text-sm font-medium`}
                      >
                        Batch {batch}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`${
                      id <= currentScheduleId
                        ? 'text-rumah-peran-red'
                        : 'text-neutral-700'
                    } ${gilroy.className} font-bold max-md:text-sm`}
                  >
                    {schedule}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p
            className={`${gilroy.className} font-extrabold text-soft-black text-lg md:text-2xl mb-4`}
          >
            Mekanisme Pembayaran
          </p>
          <div>
            <div className="border rounded-2xl py-4 px-8 mb-4">
              <p
                className={`${gilroy.className} font-bold text-soft-black mb-4`}
              >
                LUNAS SAAT PENDAFTARAN
              </p>
              <div className="flex items-center max-md:flex-col gap-4">
                <div className="flex items-center gap-x-4">
                  <div className="relative w-16 aspect-square bg-[url('/circle-cream.svg')] bg-no-repeat bg-contain">
                    <Image src="/holistic-icon.svg" alt="icon" fill />
                  </div>
                  <div>
                    <p
                      className={`${gilroy.className} max-md:text-sm text-soft-black font-bold`}
                    >
                      Cash
                    </p>
                    <p className={`${inter.className} text-xs text-[#4D4D4D]`}>
                      Kamu bisa bayar secara cash melalui teller bank.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-x-4">
                  <div className="relative w-16 aspect-square bg-[url('/circle-cream.svg')] bg-no-repeat bg-contain">
                    <Image src="/holistic-icon.svg" alt="icon" fill />
                  </div>
                  <div>
                    <p
                      className={`${gilroy.className} max-md:text-sm text-soft-black font-bold`}
                    >
                      Transfer Bank
                    </p>
                    <p className={`${inter.className} text-xs text-[#4D4D4D]`}>
                      Lebih cepat bayar lunas melalui virtual account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded-2xl py-4 px-8">
              <p
                className={`${gilroy.className} font-bold text-soft-black mb-4`}
              >
                SKEMA CICILAN
              </p>
              <div className="flex items-center max-md:flex-col justify-between gap-4">
                <div className="flex items-center gap-x-4">
                  <div className="relative w-16 aspect-square bg-[url('/circle-cream.svg')] bg-no-repeat bg-contain">
                    <Image src="/holistic-icon.svg" alt="icon" fill />
                  </div>
                  <div>
                    <p
                      className={`${gilroy.className} max-md:text-sm text-soft-black font-bold`}
                    >
                      DP 50% saat pendaftaran
                    </p>
                    <p className={`${inter.className} text-xs text-[#4D4D4D]`}>
                      Cicilan 1 saat pertemuan ke 3
                    </p>
                    <p className={`${inter.className} text-xs text-[#4D4D4D]`}>
                      Cicilan 2 saat pertemuan ke 5
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-x-4">
                  <Button type="outlined">Konsultasi Skema Cicilan</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="md:w-96 rounded-2xl shadow-md py-6 px-8 bg-white">
          <p
            className={`${gilroy.className} font-extrabold text-rumah-peran-red text-xl md:text-3xl`}
          >
            {price}
          </p>
          <p className={`${inter.className} text-soft-black text-xs mb-4`}>
            {kuota}
          </p>
          <Button size="full" className="mb-8">
            Daftar Sekarang
          </Button>
          <div>
            <div className="flex items-center gap-x-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="flex-none"
              >
                <path
                  d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                  stroke="#952F1F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 2V6"
                  stroke="#952F1F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 2V6"
                  stroke="#952F1F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 10H21"
                  stroke="#952F1F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p
                className={`${inter.className} max-md:text-sm text-soft-black`}
              >
                {date}
              </p>
            </div>
            <div className="flex items-center gap-x-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="flex-none"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#952F1F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 6V12L16 14"
                  stroke="#952F1F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p
                className={`${inter.className} max-md:text-sm text-soft-black`}
              >
                {schedule}
              </p>
            </div>
            {totalSessions && (
              <div className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_354_5282)">
                    <path
                      d="M4 4H20V16H5.17L4 17.17V4ZM4 2C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2H4ZM6 12H14V14H6V12ZM6 9H18V11H6V9ZM6 6H18V8H6V6Z"
                      fill="#952F1F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_354_5282">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p
                  className={`${inter.className} max-md:text-sm text-soft-black`}
                >
                  {totalSessions}X Pertemuan
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
