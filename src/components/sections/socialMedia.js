import React, { useState } from "react";
import Image1 from "../../Assests/Portfolio/70 1.png";
import Image2 from "../../Assests/Portfolio/21 1.png";
import Image3 from "../../Assests/Portfolio/62 1.png";
import Image4 from "../../Assests/Portfolio/13 1.png";
import Image5 from "../../Assests/Portfolio/33 2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const SocialMedia = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const images = [
    { src: Image1, alt: "Image 1" },
    { src: Image2, alt: "Image 2" },
    { src: Image3, alt: "Image 3" },
    { src: Image4, alt: "Image 4" },
    { src: Image5, alt: "Image 5" },
  ];

  return (
    <>
      <div className="bg-black text-white my-[3rem] relative overflow-hidden">
        <div className="flex justify-left items-center">
          <h1 className="text-bold text-4xl my-3 mx-9 py-6">
            SOCIAL MEDIA DESIGN PORTFOLIO
          </h1>
        </div>
        <div className="w-[600px] border-b border-orange-500 mb-4 mx-auto"></div>
        <div className="relative -bottom-16">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative flex justify-center items-center ${
                  index === 2 ? "w-[400px] h-[300px]" : "w-[300px] h-[200px]"
                } mx-4`}
                style={{
                  margin: "0 10px",
                  position: "relative",
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="w-[600px] border-b border-orange-500 mb-4"></div>
        <div className="flex justify-center gap-4 px-4">
          <button onClick={handlePrev} className="p-2">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </button>
          <button onClick={handleNext} className="p-2">
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
