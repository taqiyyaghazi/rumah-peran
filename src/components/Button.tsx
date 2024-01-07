import { gilroy } from '@/lib/fonts';
import React from 'react';

export enum ButtonType {
  outlined,
}

interface Props {
  type?: ButtonType;
  children: React.ReactNode;
  className?: string;
}
const Button = ({
  type,
  children,
  className,
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
          className={`${gilroy.className} ${className} font-bold px-6 py-4 rounded-full bg-soft-cream text-rumah-peran-red`}
          {...rest}
        >
          {children}
        </button>
      );
  }
};

export default Button;
