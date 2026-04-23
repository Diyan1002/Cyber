import React, { useState } from "react";
import DemoTesnomial from "../Components/DemoTesnomial";
import PricingTrustedlogos from "../Components/PricingTrustedlogos";

const DemoPage = () => {
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demo requested successfully!");
  };

  return (
    <section className="relative w-full bg-black text-white py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(#9333ea_1px,transparent_1px),linear-gradient(to_right,#9333ea_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="max-w-[1200px] mx-auto mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">

        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">

          <p className="text-[10px] sm:text-xs tracking-[0.25em] text-fuchsia-500 mb-3">
            REQUEST A DEMO
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Autonomous SecOps Platform
            </span>
            <br />
            <span className="text-white">
              For SOCs & MSSPs
            </span>
          </h1>

          {/* STATS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10">

            <div className="flex-1 bg-gradient-to-b from-[#2a0f4a] to-[#140a25] p-4 rounded-xl border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.25)] text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">24-7</h3>
              <p className="text-white/70 mt-1 text-xs">
                Coverage from AI SOC Analysts
              </p>
            </div>

            <div className="flex-1 bg-gradient-to-b from-[#2a0f4a] to-[#140a25] p-4 rounded-xl border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.25)] text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">95%</h3>
              <p className="text-white/70 mt-1 text-xs">
                Of Alerts Triaged &lt;2 Min.
              </p>
            </div>

            <div className="flex-1 bg-gradient-to-b from-[#2a0f4a] to-[#140a25] p-4 rounded-xl border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.25)] text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">FTEs</h3>
              <p className="text-white/70 mt-1 text-xs">
                Add +10 to +100 Analyst Equivalents
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative mt-6 lg:mt-0">

          {/* GOOGLE RATING */}
          <div className="flex items-center gap-2 mb-3 justify-center lg:justify-end text-white/80 text-sm">
            <span className="bg-white text-black px-2 py-[2px] rounded-full text-xs font-bold">
              G
            </span>
            ⭐⭐⭐⭐⭐
            <span className="font-semibold">4.7</span>
          </div>

          {/* FORM */}
          <div className="bg-[#0c0c0c] border border-purple-500/40 rounded-2xl p-5 sm:p-7 shadow-[0_0_30px_rgba(168,85,247,0.2)]">

            <h3 className="text-xl sm:text-2xl font-bold text-center mb-5 sm:mb-6">
              See CYBER-HAT533 INC. Morpheus <br /> in Action
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="email"
                placeholder="Business Email Address*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-[45px] sm:h-[50px] px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-purple-500 outline-none"
              />

              <input
                type="text"
                placeholder="Job Title*"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                required
                className="w-full h-[45px] sm:h-[50px] px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-purple-500 outline-none"
              />

              <button
                type="submit"
                className="w-full h-[45px] sm:h-[50px] rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white text-sm font-semibold shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-[1.02] transition"
              >
                Request Demo
              </button>

            </form>
          </div>
        </div>
      </div>

      {/* FOOTER TEXT */}
      <p className="text-center text-white/60 mt-10 sm:mt-14 text-xs sm:text-sm px-4">
        Predictable pricing. No token meters. Purpose-built for SOC teams.
      </p>

      <DemoTesnomial />
      <PricingTrustedlogos />
    </section>
  );
};

export default DemoPage;