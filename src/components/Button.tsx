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
}
const Button = ({
  type,
  children,
  className,
  color = ColorType.primary,
  ...rest
}: Props & React.HTMLAttributes<HTMLElement>) => {
  switch (type) {
    case ButtonType.outlined:
      return (
        <button
          className={`${gilroy.className} ${className} font-bold px-6 py-4 rounded-full border border-rumah-peran-red text-rumah-peran-red`}
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
          } ${className} font-bold px-6 py-4 rounded-full ${
            color === ColorType.primary &&
            'text-soft-cream bg-rumah-peran-red'
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
