import Image from "next/image";
import Link from "next/link";
import React from "react";

const TemporaryWhiteLast = ({ title, des, image, buttonText }) => {
  return (
    <section className="w-full min-h-[604px] bg-[#F5FAFC] py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-14 items-center mt-6 px-6 lg:px-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 h-full">
          <Image
            src={image}
            alt="Placeholder"
            width={688}
            height={516}
            className="w-full h-auto object-cover rounded-4xl"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full lg:w-1/2 ml-0 sm:ml-20" >
          <div className="w-full sm:w-[450px] md:w-[400px] lg:w-[450px]">
            <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[58px] font-extrabold text-[#222222] mb-4 leading-snug">
              {title}
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[22px] text-[#222222] mb-6 font-medium leading-relaxed">
              {des}
            </p>
          </div>

          <Link
            href={""}
            className="w-full sm:w-[200px] md:w-[180px] hover:text-[#FFFFFF] h-[56px] font-bold text-center flex justify-center items-center text-[16px] bg-[#00A3E0] rounded-4xl"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TemporaryWhiteLast;
