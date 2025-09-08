import Image, { type StaticImageData } from 'next/image';
import React, { memo } from 'react';

interface TemporaryBlackProps {
  title: string;
  des: string;
  icon: string | StaticImageData;
  image: string | StaticImageData;
  imageAlt: string;
  buttonText: string;
}

const TemporaryBlack: React.FC<TemporaryBlackProps> = ({
  title,
  des,
  icon,
  image,
  imageAlt,
  buttonText,
}) => {
  return (
    <section className='w-full bg-[#121C21] px-4 py-14 sm:px-6 lg:px-8'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 items-start gap-4 px-2 sm:grid-cols-2 sm:gap-6 sm:px-6 lg:items-center lg:gap-14 lg:px-12'>
        {/* Left Side - Text Content */}
        <div className='flex flex-col md:ml-12'>
          <div className='mb-6 flex h-[90px] w-[100px] flex-col items-center justify-center gap-2 rounded-xl bg-[#1E2E36]'>
            <Image
              src={icon}
              alt={`${buttonText} icon`}
              width={28}
              height={24}
              className='object-contain'
            />
            <h2 className='text-[12px] font-medium text-[#FFFFFF]'>
              {buttonText}
            </h2>
          </div>

          <div className='w-full md:w-[450px]'>
            <h2 className='mb-4 text-[22px] font-extrabold leading-snug text-[#FFFFFF] md:text-[28px]'>
              {title}
            </h2>
            <p className='mb-6 text-[15px] font-medium leading-relaxed text-[#FFFFFF] md:text-[16px]'>
              {des}
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className='flex justify-center md:justify-end md:pr-14'>
          <div className='h-auto w-full max-w-[688px] overflow-hidden rounded-4xl'>
            <Image
              src={image}
              alt={imageAlt}
              width={688}
              height={516}
              className='h-auto w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(TemporaryBlack);
