import React from "react";
import AboveBorder from "../../Assests/Vector 17.png";
import ArroundBorder from "../../Assests/Vector 11.png";
import SEOImg from "../../Assests/marketing/Layer_1.png";
import SocialMarketing from "../../Assests/marketing/Layer_1 (1).png";
import SEM from "../../Assests/marketing/Layer_1 (2).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const Marketing = () => {
  return (
    <>
      <div className="bg-black text-white relative py-20 px-4 h-[120vh] lg:h-auto">
        <div className="absolute m-[3rem] hidden lg:block">
          <img src={AboveBorder} alt="Above Border" className="w-full" />
        </div>
        <div>
          <div className="relative z-10 m-[3rem] hidden lg:block">
            <img src={ArroundBorder} alt="Around Border" className="w-full" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 py-12 mx-[3rem]">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-left w-full">
              How Digital Marketing Agency <br />
              In Gurgaon Can Drive Growth In Business
            </h1>
            <p className="text-base lg:text-lg mb-8 text-left w-full">
              In today's fast-paced digital landscape, your business's growth
              hinges on harnessing the full potential of the online realm.
              That's where we, the best digital marketing company in Gurgaon,
              come into play. We're not just a digital marketing company; we're
              your strategic partner in catapulting your business to dazzling
              new heights.
            </p>
            <div className="flex flex-wrap gap-8 justify-center items-center">
              <div className="flex flex-col items-center text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold gradient-text">
                  9+
                </h2>
                <p className="mt-2">Years of Experience</p>
              </div>
              <div className="hidden lg:block w-px h-16 bg-white"></div>

              <div className="flex flex-col items-center text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold gradient-text">
                  200+
                </h2>
                <p className="mt-2">Global Top Brands & Enterprises Served</p>
              </div>
              <div className="hidden lg:block w-px h-16 bg-white"></div>

              <div className="flex flex-col items-center text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold gradient-text">
                  60+
                </h2>
                <p className="mt-2">Industry-best tech professionals</p>
              </div>
              <div className="hidden lg:block w-px h-16 bg-white"></div>

              <div className="flex flex-col items-center text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold gradient-text">
                  200+
                </h2>
                <p className="mt-2">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-5 my-8">
        <h1 className="mx-5 text-3xl lg:text-6xl font-bold">
          Crux Digital Marketing
          <br />
          Services in Gurgaon
        </h1>
        <p className="mx-5 my-6 text-xl">
          At Crux, we redefine digital marketing in Gurgaon, offering innovative
          solutions that drive your business forward.
        </p>
        <div className="flex items-center justify-center mt-4">
          <div className="w-[700px] border-b border-orange-500 mb-4"></div>
          <div className="flex justify-center gap-4 px-4">
            <button className="p-2">
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </button>
            <button className="p-2">
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
          </div>
        </div>
        <div className="p-4 mx-5 px-3 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full max-w-[300px] h-[200px]  p-6 bg-[#f6f6f6] rounded-lg">
            <div className="absolute -top-9 left-6 w-16 h-16 rounded-full  bg-gradient-to-r from-[#000000] to-[#666666]  flex items-center justify-center">
              <img src={SEOImg} alt="SEO-image" className="w-[30px]" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold">
                Search Engine Optimization (SEO)
              </h3>
              <p className="mt-2 ">
                Enhance your digital presence with our comprehensive SEO
                strategies.
                <span className="text-[#CB2027]">Read more...</span>
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-[300px] h-[200px] p-6 bg-[#f6f6f6] rounded-lg  bg-[#f6f6f6]">
            <div className="absolute -top-9 left-6 w-16 h-16 rounded-full bg-gradient-to-r from-[#000000] to-[#666666]  flex items-center justify-center">
              <img src={SocialMarketing} alt="Social" className="w-[30px]" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold">Social Media Marketing</h3>
              <p className="mt-2 ">
                Leverage the full potential of social media with our strategic
                marketing services.
                <span className="text-[#CB2027]">Read more...</span>
              </p>
            </div>
          </div>
          <div className="relative w-full max-w-[300px] h-[200px] p-6 bg-[#f6f6f6] rounded-lg">
            <div className="absolute -top-9 left-6 w-16 h-16 rounded-full bg-gradient-to-r from-[#000000] to-[#666666]  flex items-center justify-center border-gradient-to-r">
              <img src={SEM} alt="SEM" className="w-[30px]" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold my-2">
                Search Engine Marketing (SEM)
              </h3>
              <p className="mt-2 ">
                Achieve instant visibility on search engine results pages
                through our SEM expertise.
                <span className="text-[#CB2027]">Read more...</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
