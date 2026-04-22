import React from "react";

export default function InnovationStory() {
  const items = [
    "The Vision.",
    "Scaling Up.",
    "Event Pipeline™",
    "Smart SOAR™",
    "D3 Morpheus AI",
  ];

  return (
    <section className="bg-gray-100 py-8 px-4">
      
      {/* 🔥 Center Container */}
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
          Our{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
            Innovation
          </span>{" "}
          Story
        </h2>

        <div className="grid md:grid-cols-[200px_1fr] gap-3 items-start">
          
          {/* LEFT TIMELINE */}
          <div className="relative">
            
            <div className="absolute left-4 top-0 w-[2px] h-full bg-gray-300"></div>

            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center mb-4 relative group"
              >
                <div className="w-7 h-7 rounded-full border-2 border-purple-400 bg-white z-10 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                </div>

                <div className="ml-3 px-2.5 py-1 rounded-full shadow text-xs font-medium 
                                bg-gray-800 text-white
                                transition-all duration-300 
                                group-hover:bg-purple-500">
                  {item}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-lg">
            <p className="text-gray-700 leading-relaxed mb-3">
              In 2015, founder Gordon Benoit built the first incident response automation solution — because security teams needed it. Dynamic incident forms, alert grouping, and link analysis helped analysts respond faster. At RSA 2016, D3 demoed integrations with ArcSight, QRadar, and Splunk. Gartner would soon coin the term “SOAR” to describe D3 and the category it helped create.
            </p>

            <ul className="list-disc pl-4 space-y-1 text-gray-800">
              <li>Security automation pioneer</li>
              <li>SOAR before the term existed</li>
              <li>First SIEM and TIP integrations</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}