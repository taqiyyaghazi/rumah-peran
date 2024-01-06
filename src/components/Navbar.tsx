'use client';
import { gilroy } from '@/lib/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Button, { ButtonType } from './Button';

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
  return (
    <nav className="flex items-center justify-between px-36 py-4">
      <Image src="/logo.svg" alt="logo" width={142} height={71} />
      <div
        className={`${gilroy.className} font-semibold flex items-center justify-center gap-12`}
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
      <Button type={ButtonType.outlined}>Kontak Kami</Button>
    </nav>
  );
};

export default Navbar;
