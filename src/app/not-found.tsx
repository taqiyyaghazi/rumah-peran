import Button from '@/components/Button';
import { gilroy, inter } from '@/lib/fonts';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="text-center min-h-[80vh] flex flex-col justify-center">
      <h2
        className={`${gilroy.className} text-rumah-peran-red font-extrabold text-4xl`}
      >
        Not Found
      </h2>
      <p className={`${inter.className} text-soft-black mb-32`}>
        Could not find requested resource
      </p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </section>
  );
}
