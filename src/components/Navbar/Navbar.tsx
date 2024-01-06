'use client';
import { gilroy } from '@/lib/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import Button, { ButtonType } from '../Button';
import Tagline from './Tagline';

const menus = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Program',
    href: '/program',
  },
  {
    name: 'Tentang Kami',
    href: '/about',
  },
  {
    name: 'Pengajar',
    href: '/instructor',
  },
];
const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="flex items-center justify-between px-8 xl:px-36 py-4">
        <Image src="/logo.svg" alt="logo" width={142} height={71} />
        <div
          className={`${gilroy.className} hidden font-semibold md:flex items-center justify-center gap-6 xl:gap-12`}
        >
          {menus.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`${
                href === pathname && 'font-bold text-rumah-peran-red'
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
        <Button type={ButtonType.outlined} className="max-sm:hidden">
          Kontak Kami
        </Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 50 50"
          className="md:hidden fill-current text-rumah-peran-red"
          onClick={() => setOpen(true)}
        >
          <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
        </svg>

        {open && (
          <div className="w-full min-h-screen fixed top-0 left-0 z-30 bg-white">
            <div
              className={`${gilroy.className} font-semibold flex flex-col items-center justify-center gap-5 px-5 pt-5`}
            >
              <div
                className="flex justify-end w-full"
                onClick={() => setOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                >
                  <path d="M 38.982422 6.9707031 A 2.0002 2.0002 0 0 0 37.585938 7.5859375 L 24 21.171875 L 10.414062 7.5859375 A 2.0002 2.0002 0 0 0 8.9785156 6.9804688 A 2.0002 2.0002 0 0 0 7.5859375 10.414062 L 21.171875 24 L 7.5859375 37.585938 A 2.0002 2.0002 0 1 0 10.414062 40.414062 L 24 26.828125 L 37.585938 40.414062 A 2.0002 2.0002 0 1 0 40.414062 37.585938 L 26.828125 24 L 40.414062 10.414062 A 2.0002 2.0002 0 0 0 38.982422 6.9707031 z"></path>
                </svg>
              </div>
              {menus.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className={`${
                    href === pathname && 'font-bold text-rumah-peran-red'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {name}
                </Link>
              ))}
              <Button type={ButtonType.outlined} className='mt-4'>
                Kontak Kami
              </Button>
            </div>
          </div>
        )}
      </nav>
      <Tagline />
    </div>
  );
};

export default Navbar;
