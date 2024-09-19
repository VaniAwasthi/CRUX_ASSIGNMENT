import React, { useState } from "react";

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const questions = [
    {
      question: "What is the design process for branding?",
      answer:
        "Branding includes everything from brand conception, naming, logo design, to the color and font selection...",
    },
    {
      question: "How much does logo design services cost?",
      answer:
        "Logo design services can cost anywhere from $100 to $10,000 or more",
    },
    {
      question:
        "What are the benefits of using a creative agency over a freelance designer?",
      answer:
        "Logo design services can cost anywhere from $100 to $10,000 or more",
    },
    // Add more questions and answers here
  ];

  return (
    <div className="bg-white p-8 m-9">
      <h2 className="text-2xl lg:text-7xl font-bold mb-4">FAQs</h2>
      <div className="border-b border-orange py-4"></div>
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={index} className="py-4 border-b">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <p className="text-lg font-medium">{question.question}</p>
              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div
              className={`mt-2 text-base text-gray-600 transition-all duration-300 overflow-hidden ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              {question.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
