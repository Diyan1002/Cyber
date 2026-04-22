import React, { useState } from 'react';
import Footer from './Footer';

const PricingFAQs = () => {
  // State to manage the active FAQ
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the active FAQ
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Close the open FAQ or open the clicked one
  };

  const faqs = [
    { question: "Is there any per-alert or per-investigation fee?", answer: "No, there are no per-alert or per-investigation fees. The pricing is based on platform subscription and user licenses." },
    { question: "Are there any AI token fees or compute charges?", answer: "No, there are no AI token fees or compute charges. The pricing model is straightforward with no hidden fees." },
    { question: "What happens to my bill during a major incident or breach attempt?", answer: "During a major incident or breach attempt, your pricing remains the same, as we don’t charge based on usage or incidents." },
    { question: "How does Morpheus pricing work for MSSPs?", answer: "Morpheus pricing for MSSPs is based on platform subscription and user licenses, similar to other models, with no additional charges for incidents." },
    { question: "What’s the contract structure?", answer: "The contract is structured around an annual subscription, with the flexibility to adjust based on your user count or platform needs." },
  ];

  return (
    <div className="bg-black text-white py-12 px-6 mt-12">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-semibold text-white text-center mb-8">Pricing FAQs</h2>
        <h3 className="text-xl text-gray-400 text-center mb-4">Common Questions</h3>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#1D1D1D] rounded-lg shadow-md">
              <div
                className="flex justify-between items-center p-6 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                <span className="text-purple-600">{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div className="p-6 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Add the final section with buttons */}
        <div className="bg-black text-center py-12 px-6 mt-12 rounded-lg">
      
          <h2 className="text-3xl font-semibold text-white mb-4">Get a Pricing Conversation</h2>
          <p className="text-xl text-gray-400 mb-6">
            We don’t publish a price list because we value 1:1 engagement with SOC leaders and CISOs. Reach out and you’ll have a clear picture of your expected annual cost.
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition duration-300">
              Request Pricing
            </button>
            <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition duration-300">
              Book a Demo
            </button>
          </div>
          <p className="text-gray-400 mt-6">
            Predictable pricing. No token meters. Purpose-built for SOC teams.
          </p>
                  <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent" />

        </div>
      </div>
      <Footer />
    </div>
    
    
  );
}

export default PricingFAQs;