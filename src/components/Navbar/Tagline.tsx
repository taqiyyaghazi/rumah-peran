import { inter } from '@/lib/fonts';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Tagline = () => {
  return (
    <div
      className={`${inter.className} text-rumah-peran-red bg-soft-cream py-4 px-6 xl:px-32`}
    >
      <Marquee>
        <div className="flex items-center gap-8 mr-8">
          <p>Ambillah Peranmu</p>
          <p>Ambillah Peranmu</p>
          <p>Ambillah Peranmu</p>
          <p>Ambillah Peranmu</p>
          <p>Ambillah Peranmu</p>
          <p>Ambillah Peranmu</p>
          <p>Ambillah Peranmu</p>
        </div>
      </Marquee>
    </div>
  );
};

export default Tagline;
