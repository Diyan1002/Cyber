import React from "react";
import icon1 from "../assets/doa.png"; // replace with your actual icons
import icon2 from "../assets/speed.png";
import icon3 from "../assets/box.png";

export default function MissionSection() {
  return (
    <section className="w-full bg-black text-white py-20 px-6">

      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our Mission:
        </h2>

        <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Help Security Pros Spend <br />
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            More Time On Real Threats
          </span>
        </h3>

        {/* Description */}
        <p className="text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          The best security professionals are spending their days triaging noise
          and rubber-stamping alerts that were never worth their time. 70% leave
          the profession within three years — not because AI replaced them, but
          because the grind drove them out. Morpheus eliminates that workload so
          your team can focus on what actually matters.
        </p>

        {/* Cards */}
        <div className="space-y-4">

          {/* Card 1 */}
          <div className="flex items-center gap-5 p-5 rounded-xl border border-purple-500/30 bg-gradient-to-r from-[#0f0f1a] to-[#2a1747]">
            <img src={icon1} alt="icon" className="w-10 h-10" />
            <div className="text-left">
              <h4 className="text-lg font-semibold mb-1">More Coverage</h4>
              <p className="text-gray-300 text-sm">
                100% alert coverage, 24/7. No sampling, no queues. Every alert gets a
                full L2-depth investigation before an analyst touches it.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-5 p-5 rounded-xl border border-purple-500/30 bg-gradient-to-r from-[#0f0f1a] to-[#2a1747]">
            <img src={icon2} alt="icon" className="w-10 h-10" />
            <div className="text-left">
              <h4 className="text-lg font-semibold mb-1">More Speed</h4>
              <p className="text-gray-300 text-sm">
                95% of alerts triaged in under two minutes. Attack path mapped.
                Playbook ready. Case closed.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-5 p-5 rounded-xl border border-purple-500/30 bg-gradient-to-r from-[#0f0f1a] to-[#2a1747]">
            <img src={icon3} alt="icon" className="w-10 h-10" />
            <div className="text-left">
              <h4 className="text-lg font-semibold mb-1">More Clarity</h4>
              <p className="text-gray-300 text-sm">
                Structured investigation reports with step-by-step reasoning. Your
                analysts review conclusions — not raw data, not noise, not queues.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}