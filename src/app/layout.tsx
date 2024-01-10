import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/Navbar';
import type { Metadata } from 'next';
import './globals.css';
import { readJson } from '@/lib';
import { IFooterData } from '@/types';

export const metadata: Metadata = {
  title: 'Rumah Peran | Art & Entertaining School',
  description:
    'Rumah Peran adalah lembaga pendidikan alternatif yang holistik berfokus pada pengembangan skill dan karakter setiap individu terutama dalam bidang Art & Entertainment.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footerData = (await readJson('/src/data/footer.json')) as IFooterData;
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer data={footerData} />
      </body>
    </html>
  );
}
