"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowDown } from "react-icons/io";

import {
  Navigation,
  Pagination,
  Keyboard,
  Mousewheel,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type HeroConnectedSectionProps = {
  title: string;
  description: string;
  image: string;
};

export default function HeroConnectedSection({
  title,
  description,
  image,
}: HeroConnectedSectionProps) {
  const slideContent = (
    <div className="relative w-full h-[560px] lg:h-[640px] xl:h-[730px]">
      <div className="">
        <Image
          src={image}
          alt="Construction project management"
          fill
          priority
          className="bg-cover object-cover w-full h-full"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      <div className="relative z-10 flex h-full items-center">
        <div className="w-full mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl">
            <h1 className="text-white md:font-extrabold font-semibold tracking-tight leading-[1.05]  text-4xl sm:text-5xl lg:text-[57px]">
              {title}
            </h1>
            <p className="mt-4 text-white text-base sm:text-lg lg:text-[22px]  font-medium leading-relaxed">
              {description}
            </p>
            <div className="mt-6">
              <Link
                href="/bookdemo"
                className="inline-flex py-[10px] px-[48px] text-[16px]  font-[700] rounded-[30px] bg-[#00A3E0] hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 text-white  text-sm sm:text-base items-center justify-center 
                transition"
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

      <section className="relative isolate min-h-[560px] lg:min-h-[640px] xl:min-h-[720px] overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Mousewheel, Autoplay]}
          slidesPerView={1}
          speed={700}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          keyboard={{ enabled: true }}
          mousewheel={{ forceToAxis: true }}
          pagination={{ clickable: true, type: "bullets" }}
          navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
          className="w-full h-full hero-swiper"
        >
          {[...Array(5)].map((_, i) => (
            <SwiperSlide key={i}>{slideContent}</SwiperSlide>
          ))}
        </Swiper>

        <button
          aria-label="Next slide"
          className="hero-next absolute left-1/2 -translate-x-1/2 bottom-6 z-20 h-10 w-10 text-white rounded-full bg-gray-800/85 hover:bg-gray-900/90 flex items-center justify-center shadow-lg backdrop-blur transition-all duration-200"
        >
          <IoIosArrowDown className="w-5 h-5 text-white font-bold" />
        </button>
        <button className="hero-prev hidden" aria-label="Previous slide" />
      </section>
    </>
  );
}
