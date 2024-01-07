import { gilroy, inter } from '@/lib/fonts';
import Image from 'next/image';

const WhyUsSection = () => {
  const content = [
    {
      title: 'Pendidikan Holistic',
      desc: 'bukan hanya skill, tapi juga pengembangan diri, menjadi manusia',
      img: '/holistic-icon.svg',
    },
    {
      title: 'Networking',
      desc: 'Kamu akan bertemu orang - orang yang tepat untuk terjun ke seni & entertainment',
      img: '/networking-icon.svg',
    },
    {
      title: 'Laporan Hasil Belajar',
      desc: 'Kamu dapat melihat hasil belajarmu melalui report card, video hasil shooting, video live performance, dan apresiasi',
      img: '/report-icon.svg',
    },
    {
      title: 'Kegiatan Alumni',
      desc: 'Para alumni juga banyak mengadakan kegiatan bermanfaat',
      img: '/alumni-icon.svg',
    },
    {
      title: 'Pengajar Profesional',
      desc: 'Para pengajar di sini sudah sangat berpengalaman dan profesional di bidangnya',
      img: '/instructor-icon.svg',
    },
    {
      title: 'Pendidikan Praktikal',
      desc: 'Sistem pengajaran mengedepankan praktik sehingga menjadikan peserta didik “siap pakai”',
      img: '/practical-icon.svg',
    },
    {
      title: 'Menjadi Rumah',
      desc: 'Kami membuat sekolah ini menjadi tempat berkembang yang nyaman, aman, dan kekeluargaan',
      img: '/home-icon.svg',
    },
  ];
  return (
    <section className="bg-soft-cream py-16 px-8 xl:px-32 2xl:px-96 rounded-[4rem] md:rounded-[8rem] relative overflow-hidden">
      <h2
        className={`${gilroy.className} font-extrabold text-2xl md:text-6xl text-rumah-peran-red text-center mb-8`}
      >
        Mengapa Pilih Kami?
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-8">
        {content.map(({ title, desc, img }) => (
          <div
            key={title}
            className="flex items-center justify-center gap-4 w-fit max-w-lg"
          >
            <div>
              <div className="w-16 md:w-32 aspect-square relative bg-contain bg-no-repeat bg-[url('/circle-cream.svg')]">
                <Image src={img} alt={title} fill />
              </div>
            </div>
            <div>
              <h3
                className={`${gilroy.className} font-bold text-lg md:text-4xl text-soft-black`}
              >
                {title}
              </h3>
              <p className={`${inter.className} text-sm md:text-base text-[#4D4D4D]`}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute w-[25rem] h-[33rem] top-32 -right-56 md:-right-10">
        <Image src="squiggles.svg" alt="squiggles" fill />
      </div>
    </section>
  );
};

export default WhyUsSection;
