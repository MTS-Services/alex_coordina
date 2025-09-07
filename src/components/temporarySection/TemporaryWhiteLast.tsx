import Image from "next/image";
import Link from "next/link";

import React from "react";

const TemporaryWhiteLast = ({ title, des, image, buttonText }) => {
  return (
    <section className="w-full min-h-[604px] bg-[#F5FAFC] py-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-6 lg:gap-14 items-center mt-6 px-6 lg:px-12">
        {/* Image Section */}
        <div className="w-full h-full lg:ml-[-60px]">
          <Image
            src={image}
            alt="Placeholder"
            width={688}
            height={516}
            className="w-full h-auto object-cover rounded-4xl"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-4 ml-4 sm:ml-6 md:ml-20">

      {/* Text Section */}
      <div className="w-full sm:w-[450px]">
        <h2 className="text-[20px] sm:text-[28px] md:text-[36px] lg:text-[58px] font-extrabold text-[#222222] mb-4 leading-snug">
          {title}
        </h2>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#222222] mb-6 font-medium leading-relaxed">
          {des}
        </p>
      </div>

      {/* Button */}
      <Link
        href={""}
        className="w-full sm:w-[200px] h-[56px] font-bold text-center flex justify-center items-center text-[16px] bg-[#00A3E0] rounded-4xl"
      >
        {buttonText}
      </Link>
    </div>
      </div>
    </section>
  );
};

export default TemporaryWhiteLast;
