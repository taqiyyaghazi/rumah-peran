import { gilroy, inter } from '@/lib/fonts';
import Image from 'next/image';

const ProjectSection = () => {
  const contents = [
    {
      id: 1,
      title: 'Title',
      desc: 'Description',
      background: '/dummy-image.jpeg',
    },
    {
      id: 2,
      title: 'Title',
      desc: 'Description',
      background: '/dummy-image.jpeg',
    },
    {
      id: 3,
      title: 'Title',
      desc: 'Description',
      background: '/dummy-image.jpeg',
    },
    {
      id: 4,
      title: 'Title',
      desc: 'Description',
      background: '/dummy-image.jpeg',
    },
    {
      id: 5,
      title: 'Title',
      desc: 'Description',
      background: '/dummy-image.jpeg',
    },
    {
      id: 6,
      title: 'Title',
      desc: 'Description',
      background: '/dummy-image.jpeg',
    },
  ];
  return (
    <section className="px-4 xl:px-36 py-16 mb-8">
      <h2
        className={`${gilroy.className} font-extrabold text-center text-rumah-peran-red text-2xl md:text-6xl mb-8`}
      >
        Projek & Aktivitas
      </h2>
      <div className="md:grid grid-cols-4 grid-rows-2 gap-4">
        {contents.map(({ id, title, desc, background }) => (
          <div
            key={id}
            className={`relative ${
              [1, 2].includes(id) ? 'max-sm:h-56 md:row-span-2' : 'h-56'
            } rounded-xl overflow-hidden max-sm:mb-4`}
          >
            <div
              className={`${
                inter.className
              } text-white p-4 flex flex-col absolute ${
                id === 2 ? 'top-5 md:bottom-5' : 'top-5'
              } left-5`}
            >
              <div>
                <h3 className="font-bold text-lg md:text-2xl">{title}</h3>
                <p className='text-sm md:text-base'>{desc}</p>
              </div>
              <div className="relative w-16 md:w-32 aspect-square -ml-4 md:-ml-6 cursor-pointer">
                <Image src="/play-icon.svg" alt="play button" fill />
              </div>
            </div>
            <Image
              src={background}
              alt={title}
              fill
              className="object-cover -z-10"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
