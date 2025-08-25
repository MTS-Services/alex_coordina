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

// Swiper এর প্রয়োজনীয় CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeroConnectedSection() {
  // এক জায়গায় কনটেন্ট লিখে রাখলাম
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
            <h1 className='text-white font-extrabold tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-6xl'>
              Connected Teams
              <br />
              Coordinated Projects
            </h1>
            <p className='mt-4 text-neutral-200 text-base sm:text-lg lg:text-xl leading-relaxed'>
              Manage your sites, coordinate teams, and keep every task on track.
              Your all-in-one solution for seamless construction Project
              management.
            </p>
            <div className='mt-6'>
              <Link
                href='/demo'
                className='inline-flex h-12 sm:h-14 px-6 sm:px-8 rounded-full bg-sky-500 hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 text-white font-semibold text-sm sm:text-base items-center justify-center transition'
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
    <section className='relative isolate min-h-[560px] lg:min-h-[640px] xl:min-h-[720px] overflow-hidden'>
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Mousewheel, Autoplay]}
        slidesPerView={1}
        speed={700}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        keyboard={{ enabled: true }}
        mousewheel={{ forceToAxis: true }}
        pagination={{ el: '.hero-pagination', clickable: true }}
        navigation={{ nextEl: '.hero-next', prevEl: '.hero-prev' }}
        className='w-full h-full'
      >
        {/* একই কনটেন্ট ৫ বার রিপিট করলাম */}
        {[...Array(5)].map((_, i) => (
          <SwiperSlide key={i}>{slideContent}</SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination (ডান পাশে) */}
      <div className='hero-pagination absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3' />

      {/* Navigation button নিচে */}
      <button
        aria-label='Next slide'
        className='hero-next absolute left-1/2 -translate-x-1/2 bottom-6 z-20 h-10 w-10 rounded-full bg-gray-800/85 hover:bg-gray-900/90 flex items-center justify-center shadow-lg backdrop-blur'
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

      {/* Bullet styling */}
      <style jsx global>{`
        .hero-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.8);
          opacity: 1;
          transition: all 0.25s ease;
        }
        .hero-pagination .swiper-pagination-bullet-active {
          width: 10px;
          height: 24px;
          border-radius: 9999px;
          background: #38bdf8;
          box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </section>
  );
}
