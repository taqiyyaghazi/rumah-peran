import { gilroy, inter } from '@/lib/fonts';
import Image from 'next/image';
import Button from '../../Button';
import { collaborationPrograms } from '@/data/collaborationPrograms';

const CollaborationProgram = () => {
  return (
    <div>
      <p className={`${inter.className} my-8 max-sm:text-xs`}>
        Kami menyediakan kesempatan untuk partner berkolaborasi dalam
        menghadirkan program yang sesuai dengan kebutuhan perusahaan/komunitas
      </p>
      <div className="flex max-sm:flex-col gap-4">
        {collaborationPrograms.map(({ id, title, desc, image }) => (
          <div
            key={id}
            className="rounded-xl shadow-md md:w-96 overflow-hidden"
          >
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
              <Button size="full">Hubungi Kami</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborationProgram;
