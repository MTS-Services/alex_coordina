'use client';

import React from 'react';
import { FiHome, FiFileText, FiUsers } from 'react-icons/fi';

export default function FeatureRail() {
  return (
    <section className='w-full bg-[#1f2b31]'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-14'>
        <ul className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 lg:gap-24 py-12 md:py-16'>
          {/* Item 1 */}
          <li
            className='relative flex flex-col items-start space-y-3
                       md:after:content-[""] md:after:absolute
                       md:after:right-[-32px] md:after:top-1/2
                       md:after:h-24 md:after:w-px md:after:-translate-y-1/2
                       md:after:bg-white/20'
          >
            <span className='rounded-xl p-2 ring-1 ring-white/20 text-white'>
              <FiHome className='h-8 w-8' aria-hidden='true' />
            </span>
            <h3 className='w-[260px] text-white text-2xl font-bold leading-7 tracking-tight'>
              Manage <br className='hidden sm:block' />
              Temporary Works
            </h3>
          </li>

          {/* Item 2 */}
          <li
            className='relative flex flex-col items-start space-y-3
                       md:after:content-[""] md:after:absolute
                       md:after:right-[-32px] md:after:top-1/2
                       md:after:h-24 md:after:w-px md:after:-translate-y-1/2
                       md:after:bg-white/20'
          >
            <span className='rounded-xl p-2 ring-1 ring-white/20 text-white'>
              <FiFileText className='h-8 w-8' aria-hidden='true' />
            </span>
            <h3 className='w-[260px] text-white text-2xl font-bold leading-7 tracking-tight'>
              Centralize <br className='hidden sm:block' />
              Your Documents
            </h3>
          </li>

          {/* Item 3 */}
          <li className='relative flex flex-col items-start space-y-3'>
            <span className='rounded-xl p-2 ring-1 ring-white/20 text-white'>
              <FiUsers className='h-8 w-8' aria-hidden='true' />
            </span>
            <h3 className='w-[260px] text-white text-2xl font-bold leading-7 tracking-tight'>
              Simplify <br className='hidden sm:block' />
              Team Management
            </h3>
          </li>
        </ul>
      </div>
    </section>
  );
}
