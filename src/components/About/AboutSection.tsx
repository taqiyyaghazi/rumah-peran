import { gilroy, inter } from '@/lib/fonts';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="flex max-lg:flex-col-reverse items-center gap-8 px-4 md:px-8 xl:px-32 2xl:px-96 py-16">
      <div>
        <h2
          className={`${gilroy.className} text-rumah-peran-red font-extrabold text-2xl md:text-5xl mb-8`}
        >
          Cerita Kami
        </h2>
        <div className={`${inter.className} text-[#4D4D4D] leading-loose`}>
          <p className="mb-4">
            Berawal dari keresahan akan kurangnya regenerasi aktor berkualitas
            di dunia perfilman Indonesia, berdirilah{' '}
            <span className="text-rumah-peran-red font-bold">
              Rumah Peran Indonesia
            </span>
            sebagai{' '}
            <span className="text-rumah-peran-red font-bold">
              Art & Entertainment School
            </span>
            . Didirikan oleh{' '}
            <span className="text-rumah-peran-red font-bold">
              Raymond Handaya pada tahun 2019
            </span>
            , Rumah Peran bukan sekadar menyelenggarakan kelas akting biasa
            tetapi juga sebuah perjalanan pengembangan diri yang menyenangkan.
            Dengan tagline{' '}
            <span className="text-rumah-peran-red font-bold">
              “Ambillah Peranmu!”
            </span>
            , Rumah Peran adalah tempat di mana setiap individu diberdayakan
            untuk mengenal dirinya, menemukan potensinya, dan tampil percaya
            diri dalam perannya masing-masing dalam kehidupan.
          </p>
          <p
            className={`${gilroy.className} font-bold text-rumah-peran-red text-xl mb-4`}
          >
            “Kami percaya bahwa setiap individu memiliki potensi yang luar
            biasa, dan misi kami adalah membantumu untuk menggali keunikan dan
            mengasah kepercayaan diri.”
          </p>
          <p className="mb-4">
            Di sini, setiap orang dapat menemukan ruang untuk tumbuh dan
            bersinar. Tidak peduli apakah kamu seorang pelajar yang penuh
            semangat, seorang karyawan yang sedang mencari inspirasi, seorang
            pengusaha yang ingin tampil lebih karismatik, atau bahkan seorang
            pengacara yang ingin meningkatkan kinerjanya, di Rumah Peran, pintu
            kami terbuka lebar untuk semua kalangan dan profesi.
          </p>
          <p className="mb-4">
            <span className="text-rumah-peran-red font-bold">Tujuan kami</span>{' '}
            adalah bukan hanya membantu kamu yang ingin menjadi aktor hebat di
            atas panggung, tetapi juga bagi siapa pun yang ingin menjadi pemeran
            utama dalam kisah hidupmu sendiri. Bersama-sama, kita akan
            menjelajahi potensi yang belum tergali, menggali nilai-nilai yang
            membuatmu unik, dan membantu tumbuh menjadi individu yang lebih
            percaya diri.
          </p>
        </div>
      </div>
      <div>
        <div className="relative w-64 md:w-[32rem] aspect-square">
          <Image src="/about-illustration.svg" alt="about us" fill />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
