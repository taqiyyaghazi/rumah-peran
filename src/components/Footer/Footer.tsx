import { gilroy, roboto } from '@/lib/fonts';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="relative -z-10 h-16 overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="224"
            height="207"
            viewBox="0 0 224 207"
            className="absolute top-8 left-8 rotate-45"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M114.118 0.00624974C158.427 0.405153 202.193 20.2919 217.121 61.961C233.395 107.388 220.513 159.561 181.444 187.938C142.325 216.353 89.4073 211.546 50.2769 183.147C11.1571 154.755 -10.6636 105.665 5.23623 60.0535C20.3071 16.8197 68.2834 -0.406381 114.118 0.00624974Z"
              fill="#EC9B3D"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="224"
            height="207"
            viewBox="0 0 224 207"
            className="absolute top-0 left-32"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M114.118 0.00624974C158.427 0.405153 202.193 20.2919 217.121 61.961C233.395 107.388 220.513 159.561 181.444 187.938C142.325 216.353 89.4073 211.546 50.2769 183.147C11.1571 154.755 -10.6636 105.665 5.23623 60.0535C20.3071 16.8197 68.2834 -0.406381 114.118 0.00624974Z"
              fill="#EC9B3D"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="224"
            height="207"
            viewBox="0 0 224 207"
            className="absolute top-8 right-8 -rotate-45"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M114.118 0.00624974C158.427 0.405153 202.193 20.2919 217.121 61.961C233.395 107.388 220.513 159.561 181.444 187.938C142.325 216.353 89.4073 211.546 50.2769 183.147C11.1571 154.755 -10.6636 105.665 5.23623 60.0535C20.3071 16.8197 68.2834 -0.406381 114.118 0.00624974Z"
              fill="#F7CA17"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="224"
            height="207"
            viewBox="0 0 224 207"
            className="absolute top-0 right-32"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M114.118 0.00624974C158.427 0.405153 202.193 20.2919 217.121 61.961C233.395 107.388 220.513 159.561 181.444 187.938C142.325 216.353 89.4073 211.546 50.2769 183.147C11.1571 154.755 -10.6636 105.665 5.23623 60.0535C20.3071 16.8197 68.2834 -0.406381 114.118 0.00624974Z"
              fill="#F7CA17"
            />
          </svg>
        </div>
      </div>

      <div className="bg-soft-cream px-8 xl:px-36 pb-16 pt-32">
        <div className={`${roboto.className} flex items-center justify-between`}>
          <div className="p-4">
            <Image src="/logo.svg" alt="logo" width={250} height={121} />
          </div>
          <div className="flex items-start gap-8">
            <div className='max-w-xs'>
              <p className="font-medium mb-2">Lokasi</p>
              <p className={gilroy.className}>
                Jl. Adhyaksa VII No.1, RT.1/RW.5, Lb. Bulus, Kec. Cilandak, Kota
                Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440{' '}
              </p>
            </div>
            <div>
              <p className="font-medium mb-2">Pages</p>
              <div className={`${gilroy.className} flex flex-col font-normal`}>
                <Link href="/" className="mb-1">
                  Home
                </Link>
                <Link href="/program" className="mb-1">
                  Program
                </Link>
                <Link href="/about" className="mb-1">
                  Tentang Kami
                </Link>
                <Link href="/instructor" className="mb-1">
                  Pengajar
                </Link>
              </div>
            </div>
            <div>
              <p className="font-medium mb-2">Social Media</p>
              <div className={`${gilroy.className} flex flex-col font-normal`}>
                <Link href="/" className="mb-1">
                  Youtube
                </Link>
                <Link href="/program" className="mb-1">
                  Facebook
                </Link>
                <Link href="/about" className="mb-1">
                  Instagram
                </Link>
              </div>
            </div>
            <div>
              <p className="font-medium mb-2">Kontak Kami</p>
              <div className={`${gilroy.className} flex flex-col font-normal`}>
                <Link href="/" className="mb-1">
                  company@email.com
                </Link>
                <Link href="/program" className="mb-1">
                  +62 823 1234 3245
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#B4B4B4] my-4" />
        <div className={`${gilroy.className} text-center`}>
          <p>Made with Love by Rumah Peran Indonesia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
