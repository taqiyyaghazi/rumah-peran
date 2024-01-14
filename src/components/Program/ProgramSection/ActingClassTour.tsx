import { actingClassTourSchedules } from '@/data/actingClassTourSchedules';
import { actingClassTourWhy } from '@/data/actingClassTourWhy';
import { gilroy, inter } from '@/lib/fonts';
import Image from 'next/image';

const ActingClassTour = () => {
  return (
    <div>
      <p className={`${inter.className} my-8 max-sm:text-xs`}>
        Program khusus untuk para alumni Rumah Peran Indonesia agar dapat terus
        mendapat dukungan untuk berkarya
      </p>
      <div>
        <h3
          className={`${gilroy.className} font-extrabold text-lg md:text-2xl text-soft-black mb-8`}
        >
          Kenapa kamu harus ikut class tour ini?
        </h3>
        <div className="flex max-sm:flex-col items-center justify-between rounded-lg shadow-md p-6 gap-4">
          {actingClassTourWhy.map(({ text, image }, id) => (
            <div key={id} className="w-full">
              <div className="w-16 mx-auto relative aspect-square bg-[url('/circle-cream.svg')] bg-no-repeat bp-center bg-contain">
                <Image src={image} alt={text} fill />
              </div>
              <p
                className={`${inter.className} text-center text-xs md:text-sm text-soft-black`}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3
          className={`${gilroy.className} font-extrabold text-lg md:text-2xl text-soft-black my-8`}
        >
          Jadwal Tiap Kota
        </h3>
        <div className="flex max-sm:flex-col md:flex-wrap items-center gap-4">
          {actingClassTourSchedules.map(
            ({ city, month, location, price, image }, id) => (
              <div
                key={id}
                className="flex flex-col justify-end p-4 text-white w-48 aspect-[3/4] rounded-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/30 -z-10"></div>
                <Image
                  src={image}
                  alt={city}
                  fill
                  className="object-cover -z-20"
                />
                <div></div>
                <div>
                  <p
                    className={`${gilroy.className} font-extrabold md:text-lg mb-2`}
                  >
                    {city}
                  </p>
                  <div className="flex items-center gap-x-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_405_1702)">
                        <path
                          d="M17.5 10.2002V16.0335C17.5 16.4756 17.3244 16.8995 17.0118 17.212C16.6993 17.5246 16.2754 17.7002 15.8333 17.7002H4.16667C3.72464 17.7002 3.30072 17.5246 2.98816 17.212C2.67559 16.8995 2.5 16.4756 2.5 16.0335V10.2002H17.5ZM13.3333 2.7002C13.5543 2.7002 13.7663 2.78799 13.9226 2.94427C14.0789 3.10055 14.1667 3.31251 14.1667 3.53353V4.36686H15.8333C16.2754 4.36686 16.6993 4.54246 17.0118 4.85502C17.3244 5.16758 17.5 5.5915 17.5 6.03353V8.53353H2.5V6.03353C2.5 5.5915 2.67559 5.16758 2.98816 4.85502C3.30072 4.54246 3.72464 4.36686 4.16667 4.36686H5.83333V3.53353C5.83333 3.31251 5.92113 3.10055 6.07741 2.94427C6.23369 2.78799 6.44565 2.7002 6.66667 2.7002C6.88768 2.7002 7.09964 2.78799 7.25592 2.94427C7.4122 3.10055 7.5 3.31251 7.5 3.53353V4.36686H12.5V3.53353C12.5 3.31251 12.5878 3.10055 12.7441 2.94427C12.9004 2.78799 13.1123 2.7002 13.3333 2.7002Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_405_1702">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(0 0.200195)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className={`${inter.className} text-xs md:text-sm`}>
                      {month}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.0007 1.86719C6.31898 1.86719 3.33398 5.20302 3.33398 8.95052C3.33398 12.6689 5.46148 16.7105 8.78148 18.2622C9.16308 18.4409 9.57929 18.5335 10.0007 18.5335C10.422 18.5335 10.8382 18.4409 11.2198 18.2622C14.5398 16.7105 16.6673 12.6689 16.6673 8.95052C16.6673 5.20302 13.6823 1.86719 10.0007 1.86719ZM10.0007 10.2005C10.4427 10.2005 10.8666 10.0249 11.1792 9.71237C11.4917 9.39981 11.6673 8.97588 11.6673 8.53385C11.6673 8.09183 11.4917 7.6679 11.1792 7.35534C10.8666 7.04278 10.4427 6.86719 10.0007 6.86719C9.55862 6.86719 9.1347 7.04278 8.82214 7.35534C8.50958 7.6679 8.33398 8.09183 8.33398 8.53385C8.33398 8.97588 8.50958 9.39981 8.82214 9.71237C9.1347 10.0249 9.55862 10.2005 10.0007 10.2005Z"
                        fill="white"
                      />
                    </svg>
                    <p className={`${inter.className} text-xs md:text-sm`}>
                      {location}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M15.4173 6.03385C15.7488 6.03385 16.0668 5.90216 16.3012 5.66774C16.5356 5.43332 16.6673 5.11537 16.6673 4.78385C16.6673 4.45233 16.5356 4.13439 16.3012 3.89997C16.0668 3.66555 15.7488 3.53385 15.4173 3.53385C15.0858 3.53385 14.7679 3.66555 14.5334 3.89997C14.299 4.13439 14.1673 4.45233 14.1673 4.78385C14.1673 5.11537 14.299 5.43332 14.5334 5.66774C14.7679 5.90216 15.0858 6.03385 15.4173 6.03385ZM2.15899 9.85052L9.65899 2.35052C9.95898 2.05052 10.3757 1.86719 10.834 1.86719H16.6673C17.5923 1.86719 18.334 2.60885 18.334 3.53385V9.36719C18.334 9.82552 18.1507 10.2422 17.8423 10.5422L10.3507 18.0422C10.0423 18.3422 9.62565 18.5339 9.16732 18.5339C8.70898 18.5339 8.29232 18.3422 7.99232 18.0422L2.15899 12.2089C1.85065 11.9089 1.66732 11.4922 1.66732 11.0339C1.66732 10.5672 1.85898 10.1505 2.15899 9.85052Z"
                        fill="white"
                      />
                    </svg>
                    <p className={`${inter.className} text-xs md:text-sm`}>
                      {price}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ActingClassTour;
