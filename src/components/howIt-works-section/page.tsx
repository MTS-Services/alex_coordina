'use client';
import React from 'react';

const HowItWorksSection = () => {
  return (
    <section
      className='relative flex items-center justify-center sm:justify-start 
                 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-52 
                 py-20 sm:py-28 md:py-32 
                 bg-cover bg-center'
      style={{ backgroundImage: "url('/images/HowItWorksSection.png')" }}
    >
      {/* Dark overlay (optional for readability on mobile) */}

      <div className='sm:px-30 px-0'>
        <div className='relative md:px-5 px-0 z-10 w-full max-w-[500px] flex flex-col items-center sm:items-start text-center sm:text-left gap-6'>
          {/* Heading */}
          <h2 className='text-[#222] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-snug sm:leading-tight tracking-tight'>
            See How It Works
          </h2>

          {/* Sub Text */}
          <p className='text-[#222] text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-[420px]'>
            Get a clear view of how CoorDeck simplifies construction project
            management.
          </p>

          {/* Button */}
          <button className='w-full sm:w-auto max-w-[240px] py-3 px-10 bg-sky-500 hover:bg-sky-600 transition-all rounded-full flex items-center justify-center'>
            <span className='text-white text-base font-bold tracking-tight'>
              Book a Demo
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
