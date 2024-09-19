import React from "react";
import FAQs from "./index";

const BoostBusinessSection = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#000000] to-[#666666] relative overflow-visible">
        <div className="text-white text-center py-10">
          <h1 className="text-2xl lg:text-4xl font-bold mx-2">
            Struggling To Generate Leads And Increase Your Reach?
          </h1>
          <p className="text-lg p-2">
            Bring the desired online presence and sales for your business growth
            with comprehensive Digital marketing services.
          </p>
        </div>
        <div className="absolute left-[13rem] transform -translate-x-1/2 -bottom-8">
          <button className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-4 py-4 rounded-full ">
            Power My Digital Presence
          </button>
        </div>
      </div>

      <FAQs />
      <div className="flex flex-col lg:flex-row items-center justify-between w-full h-auto py-6 md:py-12 bg-gradient-to-r from-[#000000] to-[#666666] my-2">
        {/* Left part - Text */}
        <div className="flex w-full lg:w-1/2 justify-center lg:justify-end text-center lg:text-left px-4 lg:px-12 text-white text-2xl lg:text-4xl font-bold leading-snug">
          How About Boosting Your Business <br className="hidden lg:block" />{" "}
          Growth Now?
        </div>

        {/* Right part - Button */}
        <div className="flex w-full lg:w-1/2 justify-center lg:justify-start px-4 lg:px-12 mt-4 lg:mt-0">
          <button className="bg-gradient-to-r from-[#F8971D] to-[#CB2027] text-white font-semibold py-2 px-6 rounded-3xl shadow-lg hover:opacity-90 transition-all w-[200px] h-[60px]">
            Yes, Let's Do It
          </button>
        </div>
      </div>
    </>
  );
};

export default BoostBusinessSection;
