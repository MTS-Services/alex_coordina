import Image from "next/image";
import React from "react";

const TemporaryWhite = ({ title, des, icon, image, buttonText }) => {
  return (
    <section className="w-full bg-[#F5FAFC] py-6 sm:py-12 lg:py-14 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-col-reverse lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-14 mt-6 px-2 sm:px-6 lg:px-12 items-start lg:items-center mb-0 sm:mb-6">
        {/* Image Section */}
        <div className="flex justify-center md:justify-center lg:justify-start md:mb-6 lg:mb-0">
          <div className="w-full md:max-w-[550px] lg:max-w-[688px] h-auto rounded-4xl overflow-hidden">
            <Image
              src={image}
              alt="Placeholder"
              width={688}
              height={516}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-4 md:items-center lg:items-start md:text-center lg:text-left md:ml-0 sm:ml-20 lg:ml-20">
          {/* Icon & Button Section */}
          <div className="w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] mb-2 sm:mb-4 rounded-xl bg-[#E6F3F7] flex flex-col items-center justify-center gap-1 sm:gap-1.5">
            <Image
              src={icon}
              alt="icon"
              width={28}
              height={24}
              className="object-contain"
            />
            <h2 className="text-[#002A3B] text-[12px] font-medium">
              {buttonText}
            </h2>
          </div>
          <div className="w-full md:w-[400px] lg:w-[450px]">
            <h2 className="text-[22px] md:text-[26px] lg:text-[28px] font-extrabold text-[#222222] mb-4 leading-snug">
              {title}
            </h2>
            <p className="text-[#222222] mb-6 text-[15px] md:text-[15.5px] lg:text-[16px] font-medium leading-relaxed">
              {des}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemporaryWhite;
