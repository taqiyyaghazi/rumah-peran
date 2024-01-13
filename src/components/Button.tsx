import { gilroy } from '@/lib/fonts';
import React from 'react';

interface Props {
  type?: 'outlined';
  children: React.ReactNode;
  className?: string;
  color?: 'primary' | 'secondary';
  size?: 'auto' | 'sm' | 'full';
}
const Button = ({
  type,
  children,
  className,
  color = 'primary',
  size = 'auto',
  ...rest
}: Props & React.HTMLAttributes<HTMLElement>) => {
  switch (type) {
    case 'outlined':
      return (
        <button
          className={`${
            gilroy.className
          } ${className} max-sm:text-sm font-bold ${
            size === 'auto' && 'px-3 py-2 md:px-6 md:py-4'
          } ${size === 'full' && 'px-3 py-1.5 text-sm w-full'} ${
            size === 'sm' && 'px-3 py-1.5 text-sm'
          } rounded-full border border-rumah-peran-red text-rumah-peran-red`}
          {...rest}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          className={`${
            gilroy.className
          } ${className} max-sm:text-sm font-bold ${
            size === 'auto' && 'px-3 py-2 md:px-6 md:py-4'
          } ${size === 'full' && 'px-3 py-1.5 text-sm w-full'} ${
            size === 'sm' && 'px-3 py-1.5 text-sm'
          } rounded-full ${
            color === 'primary' && 'text-soft-cream bg-rumah-peran-red'
          } ${color === 'secondary' && 'bg-soft-cream text-rumah-peran-red'}`}
          {...rest}
        >
          {children}
        </button>
      );
  }
};

export default Button;
