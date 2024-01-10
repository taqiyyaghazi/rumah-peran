import { inter } from '@/lib/fonts';
import ProgramCard from '../ProgramCard';

const programs = [
  {
    id: 1,
    info: 'Usia Min. 13 Tahun',
    title: 'Kelas Akting & Pengembangan Diri (Batch 1)',
    date: 'Sabtu & Minggu, 13:30 - 21:00 WIB',
    price: 'Rp3.500.000',
    totalSessions: 14,
    image: '/dummy-image.jpeg',
  },
  {
    id: 2,
    info: 'Usia Min. 13 Tahun',
    title: 'Kelas Akting & Pengembangan Diri (Batch 1)',
    date: 'Sabtu & Minggu, 13:30 - 21:00 WIB',
    price: 'Rp3.500.000',
    totalSessions: 14,
    image: '/dummy-image.jpeg',
  },
  {
    id: 3,
    info: 'Usia Min. 13 Tahun',
    title: 'Kelas Akting & Pengembangan Diri (Batch 1)',
    date: 'Sabtu & Minggu, 13:30 - 21:00 WIB',
    price: 'Rp3.500.000',
    totalSessions: 14,
    image: '/dummy-image.jpeg',
  },
  {
    id: 4,
    info: 'Usia Min. 13 Tahun',
    title: 'Kelas Akting & Pengembangan Diri (Batch 1)',
    date: 'Sabtu & Minggu, 13:30 - 21:00 WIB',
    price: 'Rp3.500.000',
    totalSessions: 14,
    image: '/dummy-image.jpeg',
  },
  {
    id: 5,
    info: 'Usia Min. 13 Tahun',
    title: 'Kelas Akting & Pengembangan Diri (Batch 1)',
    date: 'Sabtu & Minggu, 13:30 - 21:00 WIB',
    price: 'Rp3.500.000',
    totalSessions: 14,
    image: '/dummy-image.jpeg',
  },
];
const RegularProgram = () => {
  return (
    <div>
      <p className={`${inter.className} my-8 max-sm:text-xs`}>
        Kami menyediakan program yang bervariasi untuk mendukung pengembangan
        potensi dan memfasilitasi keunikan setiap individu
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {programs.map((program) => (
          <ProgramCard key={program.id} data={program} type="regular" />
        ))}
      </div>
    </div>
  );
};

export default RegularProgram;
