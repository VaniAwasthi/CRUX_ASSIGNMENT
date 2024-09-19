import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Digital from "../../Assests/digital/Layer_1.png";
import Strategies from "../../Assests/digital/Group 88.png";
import Data from "../../Assests/digital/Layer_1 (1).png";
const BusinessNeed = () => {
  return (
    <>
      <div className="p-5 my-2">
        <div className="text-center mb-6">
          <h2 className="text-3xl lg:text-7xl font-bold mb-4 text-center mx-5 px-6">
            Why Your Business Needs
            <br />
            Digital Marketing Service
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-start w-[350px] h-[100px] border-l-4 border-orange-500 pl-4 m-3 py-4">
            <h3 className="text-lg font-bold mb-2">Support brand value</h3>
            <p className="text-gray-500 text-sm mb-2">
              Digital marketing firms assist your company in expanding its reach
              and making your offerings stand out in a competitive market.
            </p>
          </div>
          <div className="flex flex-col items-start  w-[350px] h-[100px] border-l-4 border-orange-500 pl-4 py-4 m-3 py-4">
            <h3 className="text-lg font-bold mb-2">Drive more traffic</h3>
            <p className="text-gray-500">
              Digital marketing agency helps to propel multiple cross-channel
              business opportunities to enable exceptional user experience.
            </p>
          </div>

          <div className="flex flex-col  w-[350px] items-start h-[100px] border-l-4 border-orange-500 pl-4 m-3 py-4">
            <h3 className="text-lg font-bold mb-2">Boost user relationships</h3>
            <p className="text-gray-500">
              Our analytics helps to dig out the crucial and concise user needs
              and help you target the potential audience on the receiving end.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-start  w-[350px] h-[100px] border-l-4 border-orange-500 pl-4 m-3 py-4">
            <h3 className="text-lg font-bold mb-2">Stay on top</h3>
            <p className="text-gray-500">
              These marketing services allow you to use multiple channels with a
              consistent funnel to check for seamless connectivity.
            </p>
          </div>
          <div className="flex flex-col items-start  w-[350px] h-[100px] border-l-4 border-orange-500 pl-4 m-3 py-4">
            <h3 className="text-lg font-bold mb-2">Increase in competition</h3>
            <p className="text-gray-500">
              Digital marketing experts help small to mid-sized enterprises to
              compete head-to-head with multinational firms.
            </p>
          </div>
          <div className="flex flex-col items-start w-[350px] h-[100px] border-l-4 border-orange-500 pl-4 m-3 py-4">
            <h3 className="text-lg font-bold mb-2">Improve conversion rates</h3>
            <p className="text-gray-500 ">
              Attract numerous leads, businesses, conversions, opportunities,
              and users to your brand products and services.
            </p>
          </div>
        </div>
      </div>
      <div className="py-5 my-8 bg-[#f6f6f6] ">
        <div className="max-w-7xl mx-auto px-4s">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-5xl font-bold">
              Why Choose Crux as a Digital <br />
              Marketing Company in Gurgaon
            </h1>
            <p className="text-xl my-6 text-center">
              Choosing Crux as your best Digital Marketing agency in Gurgaon
              <br />
              means choosing innovation, expertise, and a commitment to your
              brand's prosperity.
            </p>
          </div>

          <div className="flex items-center justify-center mt-4 my-5">
            <div className="w-full max-w-[700px] border-b-4 border-orange-500 mb-4"></div>
            <div className="flex gap-4 px-4">
              <button className="p-2">
                <FontAwesomeIcon icon={faArrowAltCircleLeft} />
              </button>
              <button className="p-2">
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </button>
            </div>
          </div>

          <div className="p-4 flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full max-w-[300px] h-[200px] bg-white rounded-lg p-6 shadow-lg">
              <div className="absolute -top-9 left-6 w-16 h-16 rounded-full bg-gradient-to-r from-[#000000] to-[#666666] flex items-center justify-center">
                <img src={Digital} alt="Digital" className="w-[30px]" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold">
                  A Team of Digital Pioneers
                </h3>
                <p className="mt-2">
                  At Crux, our team isn't just a group of professionals; we're
                  trailblazers in the digital world.{" "}
                  <span className="text-[#CB2027]">Read more...</span>
                </p>
              </div>
            </div>

            <div className="relative w-full max-w-[300px] h-[200px] bg-white rounded-lg p-6 shadow-lg">
              <div className="absolute -top-9 left-6 w-16 h-16 rounded-full bg-gradient-to-r from-[#000000] to-[#666666] flex items-center justify-center">
                <img src={Strategies} alt="Strategies" className="w-[30px]" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold">
                  Custom-Tailored Strategies
                </h3>
                <p className="mt-2">
                  Your business isn't like any other, so why should your
                  marketing strategy be?{" "}
                  <span className="text-[#CB2027]">Read more...</span>
                </p>
              </div>
            </div>

            <div className="relative w-full max-w-[300px] h-[200px] bg-white rounded-lg p-6 shadow-lg">
              <div className="absolute -top-9 left-6 w-16 h-16 rounded-full bg-gradient-to-r from-[#000000] to-[#666666] flex items-center justify-center">
                <img src={Data} alt="Data" className="w-[30px]" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold">Data-Driven Excellence</h3>
                <p className="mt-2">
                  Numbers don't lie, and we're avid data enthusiasts. Our
                  commitment to data-driven success ensures your growth.{" "}
                  <span className="text-[#CB2027]">Read more...</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessNeed;
