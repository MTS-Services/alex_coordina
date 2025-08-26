// components/HeroConnectedSection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Keyboard,
  Mousewheel,
  Autoplay,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeroConnectedSection() {
  const slideContent = (
    <div className='relative w-full h-[560px] lg:h-[640px] xl:h-[720px]'>
      <Image
        src='/images/hero.png'
        alt='Construction project management'
        fill
        priority
        className='object-cover'
        sizes='100vw'
      />
      <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent' />
      <div className='relative z-10 flex h-full items-center'>
        <div className='w-full mx-auto max-w-7xl px-5 sm:px-8 lg:px-12'>
          <div className='max-w-xl sm:max-w-2xl lg:max-w-3xl'>
            <h1 className='text-[#FFF] font-[800] tracking-tight leading-[1.05]  text-4xl sm:text-5xl lg:text-[57px]'>
              Connected Teams
              <br />
              Coordinated Projects
            </h1>
            <p className='mt-4 text-[#FFF] text-base sm:text-lg lg:text-[22px]  font-[500] leading-relaxed'>
              Manage your sites, coordinate teams, and keep every task on track.
              Your all-in-one solution for seamless construction Project
              management.
            </p>
            <div className='mt-6'>
              <Link
                href='/demo'
                className='inline-flex py-[10px] px-[48px] text-[16px]  font-[700] rounded-[30px] bg-[#00A3E0] hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 text-white  text-sm sm:text-base items-center justify-center 
                transition'
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style jsx global>{`
        .hero-swiper .swiper-pagination {
          position: absolute;
          right: 0.75rem; /* ✅  */
          left: auto;
          top: 60%;
          transform: translateY(-50%);
          width: auto;
          height: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 30;
        }

        .hero-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.9);
          opacity: 1;
          margin: 0;
          transition: all 0.25s ease;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          width: 10px !important;
          height: 24px !important;
          border-radius: 12px !important;
          background: #38bdf8 !important; /* sky-500 */
          box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2) !important;
        }
      `}</style>

      <section className='relative isolate min-h-[560px] lg:min-h-[640px] xl:min-h-[720px] overflow-hidden'>
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Mousewheel, Autoplay]}
          slidesPerView={1}
          speed={700}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          keyboard={{ enabled: true }}
          mousewheel={{ forceToAxis: true }}
          pagination={{ clickable: true, type: 'bullets' }}
          navigation={{ nextEl: '.hero-next', prevEl: '.hero-prev' }}
          className='w-full h-full hero-swiper'
        >
          {[...Array(5)].map((_, i) => (
            <SwiperSlide key={i}>{slideContent}</SwiperSlide>
          ))}
        </Swiper>

        <button
          aria-label='Next slide'
          className='hero-next absolute left-1/2 -translate-x-1/2 bottom-6 z-20 h-10 w-10 text-white rounded-full bg-gray-800/85 hover:bg-gray-900/90 flex items-center justify-center shadow-lg backdrop-blur transition-all duration-200'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 stroke-white'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m6 9 6 6 6-6'
            />
          </svg>
        </button>
        <button className='hero-prev hidden' aria-label='Previous slide' />
      </section>
    </>
  );
}
