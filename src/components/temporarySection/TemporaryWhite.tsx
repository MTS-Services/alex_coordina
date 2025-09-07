import Image from "next/image";
import React from "react";

const TemporaryWhite = ({ title, des, icon, image, buttonText }) => {
  return (
    <section className="w-full bg-[#F5FAFC] py-14 px-2 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-4 sm:gap-6 lg:gap-14 mt-6 px-2 sm:px-6 lg:px-12 items-start lg:items-center">

        {/* Image Section */}
        <div className="flex justify-center md:justify-start md:pl-4">
        <div className="w-full max-w-[688px] h-auto rounded-4xl overflow-hidden">
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
        <div className="flex flex-col gap-4">

          {/* Icon & Button Section */}
          <div className="w-[100px] h-[90px] mb-4 sm:mb-2 rounded-xl bg-[#E6F3F7] flex flex-col items-center justify-center gap-1 sm:gap-1.5">
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

          <div className="w-[450px]">
            <h2 className="text-[22px] md:text-[28px] font-extrabold text-[#222222] mb-4 leading-snug">
              {title}
            </h2>
            <p className="text-[#222222] mb-6 text-[15px] md:text-[16px] font-medium leading-relaxed">
              {des}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemporaryWhite;
