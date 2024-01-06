import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });
export const gilroy = localFont({
  src: [
    {
      path: '../fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Gilroy-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});
