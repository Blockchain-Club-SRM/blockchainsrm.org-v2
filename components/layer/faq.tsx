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
    {
      question: "What if i don't have a team or an idea?",
      answer:
        "Many of our hackers don't have a team coming in, and find them at the event! Once your admission is confirmed, we open up a team-matching platform for you to find other teammates. We also have a ton of team-forming activities to help you find teammates and idea brainstorming sessions for all our tracks.",
    },
    {
      question: "What can i build?",
      answer:
        "Anything your heart desires! Web, mobile, gaming you name it, we'll support it. We have multiple tracks that will have all the extra resources required to inspire you. Check out our Devfolio for examples of what participants built in the past!!",
    },
    {
      question: "What do I get for participating at Layer",
      answer:
        "Layer 2.0 has a goal to extend your Web3 and Blockchain knowledge and give you experience by giving you opportunity to learn from experts and network with other individuals interested in Web3. Last but not least, you'll have a shot at winning some cool Web3 swag items.",
    },
  ];

  return (
    <div id="faqs" className="md:h-full h-full bg-center md:bg-top bg-[url(/faqbg.png)]">
      <div className="flex justify-center pt-5 md:py-10">
        <div className="text-center w-full text-5xl mt-4 md:mt-0 md:py-0 md:text-7xl">
          <span className="bg-clip-text pl-2 md:pl-0 bg-gradient-to-t from-cyan-700 to-slate-50 text-center text-transparent font-black uppercase font-['Impact']">
            FAQs
          </span>
        </div>
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
                  className="flex items-center justify-between rounded-xl w-full p-5 font-medium rtl:text-right text-gray-500 border border-b border-[#80DCFF] gap-3"
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
