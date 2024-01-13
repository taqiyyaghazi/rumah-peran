import { IFooterData } from '@/types';

export const footer: IFooterData = {
  address:
    'Jl. Adhyaksa VII No.1, RT.1/RW.5, Lb. Bulus, Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440',
  pages: [
    {
      id: 1,
      text: 'Home',
      href: '/',
    },
    {
      id: 2,
      text: 'Program',
      href: '/program',
    },
    {
      id: 3,
      text: 'Tentang Kami',
      href: '/about',
    },
    {
      id: 4,
      text: 'Pengajar',
      href: '/instructor',
    },
  ],
  socials: [
    {
      id: 1,
      text: 'Youtube',
      href: '',
    },
    {
      id: 2,
      text: 'Facebook',
      href: '',
    },
    {
      id: 3,
      text: 'Instagram',
      href: '',
    },
  ],
  contacts: [
    {
      id: 1,
      text: 'company@email.com',
      href: '',
    },
    {
      id: 2,
      text: '+62 823 1234 3245',
      href: '',
    },
  ],
};
