import React from "react";
import bgLines from "../assets/line.png";
import Trustedlogo from "../Components/Trustedlogo";
import AboutMission from "../Components/AboutMission";
import AboutStory from "../Components/AboutStory";
import AboutLeadershipTeam from "../Components/AboutLeadershipTeam";
import Footer from "../Components/Footer";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen mt-8 bg-black text-white  overflow-hidden">

      {/* Background */}
      <img
        src={bgLines}
        alt="background"
        className="absolute inset-0 w-100 h-full object-cover opacity-40"
      />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-[85vh] max-w-5xl mx-auto">

        {/* Small Heading */}
        <p className="text-purple-400 tracking-widest text-sm mb-4">
          ABOUT US
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          We’re the AI SOC <br />
          Company Fueled By Its <br />
          Own Customers
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-3xl">
          CYBER-HAT followed its customers, not a roadmap. The most demanding security
          teams in the world kept asking for technology that could handle more,
          investigate deeper, and break less often. We kept building it. That’s
          how CYBER-HAT earned its way to the top of the cybersecurity industry — and
          how Morpheus was born.
        </p>

        {/* Sub Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Powering the World’s Best SecOps Teams
        </h2>

        {/* Sub Text */}
        <p className="text-gray-400 mb-10">
          Tested and trusted by the largest and most targeted enterprises,
          governments, and MSSPs
        </p>
      </div>

      {/* Logos Section (Bottom) */}
      <div className="relative z-10 pb-10">
        <Trustedlogo />
      </div>
    <AboutMission />
    <AboutStory />
    <AboutLeadershipTeam />
    <Footer />
    </div>
  );
}