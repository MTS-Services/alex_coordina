import Image from "next/image";
import React from "react";

const TemporaryBlack = ({ title, des, icon, image, buttonText }) => {
  return (
    <section className="w-full bg-[#121C21] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Side - Text */}
        <div className="flex flex-col ml-0 md:ml-12">
          <div className="w-[100px] h-[90px] mb-6 rounded-xl bg-[#1E2E36] flex flex-col items-center justify-center gap-2">
            <Image
              src={icon}
              alt="icon"
              width={28}
              height={24}
              className="object-contain"
            />
            <h2 className="text-[#FFFFFF] text-[12px] font-medium">
              {buttonText}
            </h2>
          </div>

          <div className="w-full md:w-[450px]">
            <h2 className="text-[22px] md:text-[28px] font-extrabold text-[#FFFFFF] mb-4 leading-snug">
              {title}
            </h2>
            <p className="text-[#FFFFFF] mb-6 text-[15px] md:text-[16px] font-medium leading-relaxed">
              {des}
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center md:justify-end md:pr-14">
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
      </div>
    </section>
  );
};

export default TemporaryBlack;
