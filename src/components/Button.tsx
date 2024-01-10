import { gilroy } from '@/lib/fonts';
import React from 'react';

export enum ButtonType {
  outlined = 'outlined',
}

export enum ColorType {
  primary = 'primary',
  secondary = 'secondary',
}

interface Props {
  type?: ButtonType;
  children: React.ReactNode;
  className?: string;
  color?: ColorType;
  size?: 'auto' | 'sm' | 'full';
}
const Button = ({
  type,
  children,
  className,
  color = ColorType.primary,
  size = 'auto',
  ...rest
}: Props & React.HTMLAttributes<HTMLElement>) => {
  switch (type) {
    case ButtonType.outlined:
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
            color === ColorType.primary && 'text-soft-cream bg-rumah-peran-red'
          } ${
            color === ColorType.secondary &&
            'bg-soft-cream text-rumah-peran-red'
          }`}
          {...rest}
        >
          {children}
        </button>
      );
  }
};

export default Button;
