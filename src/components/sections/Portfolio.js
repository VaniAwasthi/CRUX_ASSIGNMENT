import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Profile from "../../Assests/gaurav1 1.png";

const Portfolio = () => {
  return (
    <>
      <div className="my-3">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-evenly py-7 px-2">
          <h2 className="text-center text-2xl lg:text-5xl font-bold px-3 mb-4 lg:mb-0">
            What Our Clients Say
          </h2>
          <div className="flex justify-center lg:justify-end gap-4 px-2">
            <button className="p-2">
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </button>
            <button className="p-2">
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="p-4 m-5 px-3 flex flex-col md:flex-row gap-2 justify-between md:justify-evenly items-center my-4">
          {/* Card 1 */}
          <div className="relative w-full max-w-[300px] h-[400px] p-4 bg-[#f6f6f6] rounded-lg">
            <div className="relative w-full h-[200px] bg-[#f6f6f6] rounded-lg">
              <div className="absolute -top-11 left-6 w-16 h-16 rounded-full bg-gradient-to-r from-[#000000] to-[#666666] flex items-center justify-center">
                <img src={Profile} alt="profile" className="w-[30px]" />
              </div>
              <div className="text-center">
                <h3 className="text-lg py-4 font-bold text-left">
                  Gaurav Aggarwal, Founder & Ceo Carlelo Pvt Ltd
                </h3>
                <p className="mt-2 text-left">
                  I highly recommend Shelly Bhasin, CEO of Crux Creative
                  Solutions, for her exceptional work on our Carlelo tech
                  platform. Shelly has played a pivotal role in shaping our
                  brand, executing effective digital and social media.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-full max-w-[300px] h-[400px] p-4 bg-[#f6f6f6] rounded-lg">
            <div className="relative w-full h-[200px] bg-[#f6f6f6] rounded-lg">
              <div className="absolute -top-11 left-6 w-16 h-16 rounded-full bg-gradient-to-r from-[#000000] to-[#666666] flex items-center justify-center">
                <img src={Profile} alt="profile" className="w-[30px]" />
              </div>
              <div className="text-center">
                <h3 className="text-lg py-4 font-bold text-left">
                  Gaurav Aggarwal, Founder & Ceo Carlelo Pvt Ltd
                </h3>
                <p className="mt-2 text-left">
                  I highly recommend Shelly Bhasin, CEO of Crux Creative
                  Solutions, for her exceptional work on our Carlelo tech
                  platform. Shelly has played a pivotal role in shaping our
                  brand, executing effective digital and social media.
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-[300px] h-[400px] p-4 bg-[#f6f6f6] rounded-lg m-5 ">
            <div className="relative w-full h-[200px] bg-[#f6f6f6] rounded-lg">
              <div className="absolute -top-11 left-6 w-16 h-16 rounded-full bg-gradient-to-r from-[#000000] to-[#666666] flex items-center justify-center">
                <img src={Profile} alt="Profile" className="w-[30px]" />
              </div>
              <div className="text-center">
                <h3 className="text-lg py-4 font-bold text-left ">
                  Gaurav Aggarwal, Founder & Ceo Carlelo Pvt Ltd
                </h3>
                <p className="mt-2 text-left">
                  I highly recommend Shelly Bhasin, CEO of Crux Creative
                  Solutions, for her exceptional work on our Carlelo tech
                  platform. Shelly has played a pivotal role in shaping our
                  brand, executing effective digital and social media.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
