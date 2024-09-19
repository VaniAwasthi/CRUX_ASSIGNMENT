import React, { useState } from "react";
import vector from "../../Assests/Vector 18.png";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    organization: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.phone) formErrors.phone = "Phone number is required";
    if (!formData.email) formErrors.email = "Email address is required";
    if (!formData.organization)
      formErrors.organization = "Organization is required";
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted:", formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="relative h-screen flex flex-col mb-[9rem]">
      <img
        src={vector}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 " />

      <div className="relative flex flex-col lg:flex-row items-center justify-center p-8 lg:p-16  lg:mt-3 mb-24">
        <div className="lg:w-2/3  ">
          <h1 className="text-2xl lg:text-7xl font-bold mb-6">
            Best Digital Marketing Company in Gurgaon
          </h1>
          <p className="text-lg mb-6">
            Attain a top brand position with strategic & best digital marketing
            services in India from industry leaders.
          </p>
          <div className="flex flex-wrap gap-4 mb-3">
            {[
              "SEO",
              "PPC",
              "SMO",
              "ORM",
              "Email Marketing",
              "Google Analytics",
            ].map((service) => (
              <span
                key={service}
                className="border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
        <div className="relative lg:w-1/3 bg-neutral-900 p-8 rounded-lg shadow-lg text-white z-10">
          <h2 className="text-xl text-neutral-600 mb-4">
            Seeking personalized support?
            <span className="text-white">Contact Us</span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full p-3 bg-neutral-800 rounded-md text-gray-100 border-white ${
                  errors.name ? "border border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className={`w-full p-3 bg-neutral-800 rounded-md text-gray-100 ${
                  errors.phone ? "border border-red-500" : ""
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={`w-full p-3 bg-neutral-800 rounded-md text-gray-100 ${
                  errors.email ? "border border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Organization/Institution"
                className={`w-full p-3 bg-neutral-800 rounded-md text-gray-100 ${
                  errors.organization ? "border border-red-500" : ""
                }`}
              />
              {errors.organization && (
                <p className="text-red-500 text-sm">{errors.organization}</p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className={`w-full p-3 bg-neutral-800 rounded-md text-gray-100 h-24 ${
                  errors.message ? "border border-red-500" : ""
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white w-[200px] p-3 rounded-3xl hover:bg-orange-600"
            >
              Send a request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
