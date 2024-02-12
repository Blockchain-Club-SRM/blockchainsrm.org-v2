import Image from "next/image";
import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  const faqs = [
    {
      question: "Who can participate?",
      answer:
        "Layer applications are open to any enrolled college student(undergrad or grad) from all over the world.",
    },
    {
      question: "What does it cost?",
      answer:
        "Layer is free for all admitted hackers! It's our pleasure to bring our virtual workshops, swag, and prizes to our hackers without any cost on your end. We're committed to making Layer accessible!",
    },
  ];

  return (
    <div className="h-screen bg-center md:bg-top bg-[url(/faqbg.png)]">
      <div className="flex justify-center pt-5 md:py-10">
        <img alt="faqs" className="md:w-48 w-24" src={"/faq.svg"} />
      </div>
      <div className="faq-container p-10 md:p-0 flex flex-col items-center space-y-10">
        {faqs.map((faq, index) => (
          <>
            <div
              id="accordion-collapse"
              className="md:w-[90%]"
              data-accordion="collapse"
            >
              <h2>
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between rounded-xl w-full p-5 font-medium rtl:text-right text-gray-500 border border-b border-[#80DCFF] focus:ring-4 focus:ring-[#80DCFF] gap-3"
                  aria-expanded={activeIndex === index}
                  aria-controls="accordion-collapse-body-2"
                >
                  <span className="text-white">{faq.question}</span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-2"
                className={activeIndex === index ? "visible" : "hidden"}
                aria-labelledby="accordion-collapse-heading-2"
              >
                <div className="p-5 border border-b border-t-0 -mt-1 border-[#80DCFF]">
                  <p className="mb-2 text-white text-lg md:text-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Faq;
