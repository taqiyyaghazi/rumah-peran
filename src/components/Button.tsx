import { gilroy } from '@/lib/fonts';
import React from 'react';

export enum ButtonType {
  outlined,
}

type Props = {
  type: ButtonType;
  children: React.ReactNode;
};
const Button = ({ type, children }: Props) => {
  switch (type) {
    case ButtonType.outlined:
      return (
        <button
          className={`${gilroy.className} font-bold px-6 py-4 rounded-full border border-rumah-peran-red text-rumah-peran-red`}
        >
          {children}
        </button>
      );
    default:
      return <div>Button</div>;
  }
};

export default Button;
