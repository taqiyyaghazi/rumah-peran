import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { footer } from '@/data/footer';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rumah Peran | Art & Entertaining School',
  description:
    'Rumah Peran adalah lembaga pendidikan alternatif yang holistik berfokus pada pengembangan skill dan karakter setiap individu terutama dalam bidang Art & Entertainment.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer data={footer} />
      </body>
    </html>
  );
}
