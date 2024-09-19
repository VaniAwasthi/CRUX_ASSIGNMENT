import React from "react";
import Logo from "../../Assests/footerLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-black text-white font-sans py-8">
      <div className="flex mt-10 flex-col lg:flex-row items-start justify-between px-4 lg:px-8">
        <div className="w-full lg:w-1/3 px-4 lg:px-8 mb-8 lg:mb-0">
          <div className="flex items-center mb-6">
            <img src={Logo} alt="Logo" className="w-32" />
          </div>
          <div className="bg-neutral-800 p-10 rounded-lg">
            <h2 className="text-xl text-neutral-600 mb-4">
              Seeking personalized support?
              <span className="text-white">Request a call from our team</span>
            </h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  id="name"
                  className="rounded-2xl mt-1 p-2 w-full bg-neutral-800 border-2 border-white rounded-xl "
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="phoneNumber"
                  className="rounded-2xl mt-1 p-2 w-full bg-neutral-800 border-2 border-white rounded-xl"
                  required
                  placeholder="Phone Number"
                />
              </div>
              <button
                type="submit"
                className="text-white font-medium py-2 px-4 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(90deg, #F8971D 0%, #CB2027 100%)",
                  border: "none",
                }}
              >
                Send a request
              </button>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-2/3 px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col">
              <span className="mb-2">About Us</span>
              <span className="mb-2">Our Work</span>
            </div>
            <div className="flex flex-col">
              <span className="mb-2">Our Client</span>
              <span className="mb-2">Blog</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg text-gradient font-bold mb-2">
                INDIA OFFICE
              </h3>
              <p className="text-sm mb-1">
                524, Udyog Vihar Phase V, Sector 19, Gurugram,
              </p>
              <p className="text-sm mb-1">Haryana 122016</p>
              <p className="text-sm mb-1">9810671230, 9990483343</p>
              <p className="text-sm">reachout@cruxcreativesolutions.com</p>
            </div>
            <div>
              <h3 className="text-lg text-lg text-gradient font-bold mb-2">
                CANADA OFFICE
              </h3>
              <p className="text-sm mb-1">
                203-100 James street, Sault ste marie,
              </p>
              <p className="text-sm mb-1">ON P6A6B8</p>
              <p className="text-sm mb-1">705-975-3540</p>
              <p className="text-sm">reachout@cruxcreativesolutions.com</p>
            </div>
          </div>
          <h3 className="text-lg text-gradient font-bold mb-4">SUBSCRIPTION</h3>
          <div className="relative">
            <input
              type="email"
              className="p-2 pl-10 pr-12 w-full rounded-xl border-neutral-700 border-2 bg-black focus:ring-blue-500 focus:ring-2 focus:outline-none"
              placeholder="E-mail"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              aria-label="Submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6.63 6.63a1 1 0 010 1.414l-6.63 6.63a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between mt-9 flex-col lg:flex-row">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full">
                <a className="text-white">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
              <div className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full">
                <a className="text-white">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              <div className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full">
                <a className="text-white">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
              <div className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full">
                <a className="text-white">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
              <div className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full">
                <a className="text-white">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-xs text-center">© 2024 - Copyright</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
