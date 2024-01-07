'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

const CtaBox = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="w-full flex justify-center -mb-32">
      <div className="bg-rumah-peran-red p-8 rounded-lg max-w-4xl min-h-44 flex-1">
        {children}
      </div>
    </div>
  );
};

export default CtaBox;
