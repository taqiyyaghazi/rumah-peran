import { gilroy, inter } from '@/lib/fonts';
import Image from 'next/image';
import Button from '../Button';

const programs = [
  {
    id: 1,
    title: 'Company Training',
    desc: 'Pelatihan seni peran dan public speaking untuk meningkatkan performa kerja karyawan di perusahaan. Bentuk pelatihan dapat dirancang sesuai dengan kebutuhan karyawan.',
    image: '/dummy-image.jpeg',
  },
  {
    id: 2,
    title: 'Community Intensive Program',
    desc: 'Pelatihan seni peran yang dirancang khusus sesuai kebutuhan grup seperti: influencer, komunitas orang tua, youtuber/content creator, dll.',
    image: '/dummy-image.jpeg',
  },
  {
    id: 3,
    title: 'Company Training',
    desc: 'Pelatihan seni peran dan bimbingan intensif untuk sekolah baik dalam bentuk workshop, ekstrakurikuler, atau produksi pementasan musikal tahunan.',
    image: '/dummy-image.jpeg',
  },
];
const CollaborationProgram = () => {
  return (
    <div>
      <p className={`${inter.className} my-8 max-sm:text-xs`}>
        Kami menyediakan kesempatan untuk partner berkolaborasi dalam
        menghadirkan program yang sesuai dengan kebutuhan perusahaan/komunitas
      </p>
      <div className='flex max-sm:flex-col gap-4'>
        {programs.map(({ id, title, desc, image }) => (
          <div key={id} className="rounded-xl shadow-md md:w-96 overflow-hidden">
            <div className="relative w-full aspect-video">
              <Image src={image} alt={title} fill />
            </div>
            <div className="p-4 flex flex-col justify-between min-h-64">
              <div>
                <h3
                  className={`${gilroy.className} font-extrabold text-soft-black md:text-lg mb-2`}
                >
                  {title}
                </h3>
                <p className={`${inter.className} text-sm text-[#4D4D4D]`}>
                  {desc}
                </p>
              </div>
              <Button size='full'>Hubungi Kami</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborationProgram;
