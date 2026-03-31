import { useState } from "react";
import { Link } from "react-router-dom";
import { faqs } from "../../data";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white flex justify-center items-center py-10 md:py-16 xl:py-22.5">
      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[51%] max-w-360 flex flex-col justify-center items-center gap-8 sm:gap-10 lg:gap-15">
        {/* Header */}
        <div className="bg-primary rounded-2xl px-8 py-10 md:px-16 md:py-12 text-center w-full">
          <h2 className="font-gilroy font-extrabold text-h3 md:text-h2 capitalize text-black">
            Frequently Asked Questions
          </h2>
          <p className="font-[Inter] font-medium text-[16px] leading-normal text-black">
            You can find your answers to your problems here or simply search for
            the exact question, you have in your mind.
          </p>
        </div>
        {/* FAQ List */}
        <div className="flex flex-col w-full gap-4">
          {faqs?.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-300 overflow-hidden rounded-lg ${isOpen
                  ? "border border-primary bg-[#FFFEF4] shadow-sm"
                  : "bg-white border border-transparent shadow-[0_2px_15px_rgba(0,0,0,0.04)]"
                  }`}
              >
                {/* Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 md:py-6 text-left focus:outline-none cursor-pointer"
                >
                  <p className="font-gilroy font-bold text-[18px] text-black pr-8">
                    {faq.question}
                  </p>
                  <span className="text-2xl font-bold text-black shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {/* Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen
                    ? "max-h-40 opacity-100 pb-5 md:pb-6"
                    : "max-h-0 opacity-0 pb-0"
                    }`}
                >
                  <div className="px-6 text-body-text font-[Inter] font-medium text-[16px] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Footer */}
        <div className="text-center">
          <p className="font-[Inter] font-medium text-[16px] text-black">
            Didn't find what you are looking for?{" "}
            <Link
              to="/contact"
              className="underline font-semibold hover:text-primary transition-colors"
            >
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
