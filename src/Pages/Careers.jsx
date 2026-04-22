import React from "react";
import lineImg from "../assets/line.png";
import Footer from "../Components/Footer";

const HeroSection = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${lineImg})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/70 to-black/80"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 sm:px-12 max-w-4xl">

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Always Looking for <br />

            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              the Best
            </span>{" "}
            and <br />

            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Brightest
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg sm:text-xl text-gray-300">
            Join a team that values innovation, creativity, and growth.
          </p>

          {/* Button */}
          <a href="#jobs">
            <button className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition shadow-lg">
              View Open Positions
            </button>
          </a>
        </div>
      </div>

      {/* ================= JOBS SECTION ================= */}
      <div
        id="jobs"
        className="bg-gradient-to-b from-purple-600 to-purple-800 text-white py-16 px-6 sm:px-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Open Positions
        </h2>

        <div className="max-w-4xl mx-auto space-y-10">

          {/* Job Sections */}
          {[
            {
              title: "Marketing",
              jobs: [
                "Sales Development Representative (Canada - Remote)",
              ],
            },
            {
              title: "R&D Development",
              jobs: [
                "AI Engineer",
                "Senior AI Engineer / Architect",
                "Senior Software Engineer (SDET, QA Engineer, QA Analyst)",
              ],
            },
            {
              title: "Service",
              jobs: [
                "Cyber Security Engineer",
                "Technical Project Manager",
              ],
            },
          ].map((section, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-[1.02] transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-center border-b border-white/30 pb-2">
                {section.title}
              </h3>

              <ul className="space-y-3 text-center">
                {section.jobs.map((job, i) => (
                  <li
                    key={i}
                    className="hover:text-purple-300 cursor-pointer transition"
                  >
                    {job}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HeroSection;