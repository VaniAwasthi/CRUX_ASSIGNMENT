import React from "react";

const GrowthSection = () => {
  return (
    <div className="bg-[#f6f6f6] flex flex-col items-center lg:items-left py-10">
      <h1 className="text-2xl lg:text-6xl growth-text py-4 px-5 font-bold text-center lg:text-left m-4 lg:m-10">
        Transformational Growth
        <br />
        Our Clients Enjoy
      </h1>
      <div className="flex flex-col lg:flex-row flex-wrap gap-8 justify-center lg:justify-between items-center my-10 lg:my-[5rem] mx-5 lg:mx-[5rem]">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="mt-2 text-2xl lg:text-3xl font-bold">
            Increased
            <br />
            website traffic
            <br /> via enterprise SEO by
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold growth-text mt-2">
            35000%
          </h2>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-px h-[8rem] bg-gray-300"></div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="mt-2 text-2xl lg:text-3xl font-bold">
            Increased
            <br /> organic traffic via
            <br />
            vernacular SEO by
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold growth-text mt-2">
            270%
          </h2>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-px h-[8rem] bg-gray-300"></div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="mt-2 text-2xl lg:text-3xl font-bold">
            Increased
            <br />
            organic views on
            <br />
            YouTube channel by
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold growth-text mt-2">
            147%
          </h2>
        </div>
      </div>
    </div>
  );
};

export default GrowthSection;
