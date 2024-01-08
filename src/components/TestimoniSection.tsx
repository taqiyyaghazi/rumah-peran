import { gilroy, roboto } from '@/lib/fonts';
import Image from 'next/image';

const TestimoniSection = () => {
  const testimonials = [
    {
      id: 1,
      image: '/dummy-avatar.svg',
      name: 'Meatball melted',
      message: 'Sed proin cursus mattis aliquam placerat. Diam tincidunt at.',
    },
    {
      id: 2,
      image: '/dummy-avatar.svg',
      name: 'Meatball melted',
      message:
        'Morbi cursus commodo elit sed felis. Nunc libero velit nec hendrerit. Donec pulvinar ut rutrum facilisis nisl vulputate sit sed.',
    },
    {
      id: 3,
      image: '/dummy-avatar.svg',
      name: 'Meatball melted',
      message: 'Sed proin cursus mattis aliquam placerat. Diam tincidunt at.',
    },
    {
      id: 4,
      image: '/dummy-avatar.svg',
      name: 'Meatball melted',
      message: 'Sed proin cursus mattis aliquam placerat. Diam tincidunt at.',
    },
    {
      id: 5,
      image: '/dummy-avatar.svg',
      name: 'Meatball melted',
      message: 'Sed proin cursus mattis aliquam placerat. Diam tincidunt at.',
    },
    {
      id: 6,
      image: '/dummy-avatar.svg',
      name: 'Meatball melted',
      message: 'Sed proin cursus mattis aliquam placerat. Diam tincidunt at.',
    },
    {
      id: 7,
      image: '/dummy-avatar.svg',
      name: 'Meatball melted',
      message: 'Sed proin cursus mattis aliquam placerat. Diam tincidunt at.',
    },
    {
      id: 8,
      image: '/dummy-avatar.svg',
      name: 'Meatball melted',
      message: 'Sed proin cursus mattis aliquam placerat. Diam tincidunt at.',
    },
  ];

  const companies = [
    {
      image: '/fosa-logo.svg',
      name: 'Fosa Pictures',
    },
    {
      image: '/starvision-logo.svg',
      name: 'Starvision',
    },
    {
      image: '/md-logo.svg',
      name: 'MD Entertaintment',
    },
    {
      image: '/paragon-logo.svg',
      name: 'Paragon Pictures',
    },
    {
      image: '/sdh-logo.svg',
      name: 'Sekolah Dian Harapan',
    },
    {
      image: '/unj-logo.svg',
      name: 'Yayasan Pembina Universitas Negeri Jakarta',
    },
  ];
  return (
    <section className="px-4 xl:px-36 pt-16 bg-[url('/circle-bg.svg')] bg-no-repeat bg-center relative">
      <div className="mb-32">
        <h2
          className={`${gilroy.className} font-extrabold text-center text-rumah-peran-red text-2xl md:text-6xl mb-8`}
        >
          Testimoni Alumni
        </h2>
        <div className="md:grid grid-rows-3 grid-cols-3 gap-4">
          {testimonials.map(({ id, image, name, message }) => (
            <div
              key={id}
              className={`max-sm:mb-4 flex items-start gap-x-2 p-4 bg-white rounded-t-lg ${
                id % 2 === 0 ? 'rounded-bl-lg' : 'rounded-br-lg'
              } border border-[#E3E8EF]`}
            >
              <div className="flex-none relative w-8 md:w-16 aspect-square mt-1">
                <Image src={image} alt={name} fill />
              </div>
              <div className={roboto.className}>
                <p className="font-bold text-rumah-peran-red">{name}</p>
                <p className="text-neutral-800 text-sm">{message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        {companies.map(({ image, name }) => (
          <div key={name} className="w-32 h-20 md:w-40 md:h-24 relative">
            <Image src={image} alt={name} fill />
          </div>
        ))}
      </div>
      <Image src="/ornament-1.svg" alt="ornament" width={100} height={100} className='absolute top-20 left-0 lg:top-32 lg:left-32 2xl:left-[36rem] -z-10'/>
      <Image src="/ornament-2.svg" alt="ornament" width={100} height={100} className='absolute top-64 right-0 lg:top-32 lg:right-32 2xl:right-[36rem] -z-10'/>
      <Image src="/ornament-2.svg" alt="ornament" width={100} height={100} className='absolute bottom-80 left-0 lg:bottom-32 lg:left-32 2xl:left-[36rem] -z-10'/>
      <Image src="/ornament-1.svg" alt="ornament" width={100} height={100} className='absolute bottom-96 right-0 lg:bottom-32 lg:right-32 2xl:right-[36rem] -z-10'/>
    </section>
  );
};

export default TestimoniSection;
