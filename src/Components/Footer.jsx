import { FaLinkedin } from "react-icons/fa";
import footerImage1 from "../assets/MISA.png";
import footerImage2 from "../assets/Mitre.png";
import footerImage3 from "../assets/Soc.png";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-4 sm:px-6 lg:px-8 py-10 sm:py-12">

      <div className="mx-auto max-w-6xl">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* LOGOS */}
          <div className="flex flex-row lg:flex-col items-center lg:items-start justify-center lg:justify-start gap-6 sm:gap-8">

            <img
              src={footerImage1}
              alt="MISA Logo"
              className="h-16 sm:h-20 lg:h-24 object-contain rounded-lg shadow-md"
            />

            <img
              src={footerImage2}
              alt="Mitre Logo"
              className="h-16 sm:h-20 lg:h-24 object-contain rounded-lg shadow-md"
            />

            <img
              src={footerImage3}
              alt="SOC Logo"
              className="h-16 sm:h-20 lg:h-24 object-contain rounded-lg shadow-md"
            />

          </div>

          {/* LINKS GRID */}
          <div className="lg:col-span-3">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">

              {/* PRODUCT */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-purple-500">
                  PRODUCT
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {[
                    "Platform Overview",
                    "Attack Path Discovery",
                    "Cybersecurity Triage LLM",
                    "Response & Orchestration",
                    "Self-Healing Integrations",
                    "Use Cases",
                    "XDR Automation"
                  ].map((item, i) => (
                    <li key={i}>
                      <a className="hover:text-purple-400 transition">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* INTEGRATIONS */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-purple-500">
                  INTEGRATIONS
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {[
                    "Microsoft",
                    "CrowdStrike",
                    "SentinelOne",
                    "Splunk",
                    "LogRhythm",
                    "Fortinet",
                    "Zscaler"
                  ].map((item, i) => (
                    <li key={i}>
                      <a className="hover:text-purple-400 transition">
                        Morpheus for {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RESOURCES */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-purple-500">
                  RESOURCES
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {[
                    "Blog",
                    "Whitepapers",
                    "Upcoming Events",
                    "Let's SOC About It Podcast",
                    "What's an Autonomous SOC?"
                  ].map((item, i) => (
                    <li key={i}>
                      <a className="hover:text-purple-400 transition">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* COMPANY */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-purple-500">
                  COMPANY
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {[
                    "About Us",
                    "Tech Docs",
                    "Careers",
                    "Legacy SOAR Migration",
                    "Customer Success Program",
                    "Contact Us"
                  ].map((item, i) => (
                    <li key={i}>
                      <a className="hover:text-purple-400 transition">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* SOCIAL + LEGAL */}
        <div className="mt-12 text-center border-t border-white/10 pt-6">

          {/* SOCIAL */}
          <div className="flex justify-center gap-5">
            <a
              href="https://www.linkedin.com"
              className="text-white hover:text-purple-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* LEGAL */}
          <div className="mt-4 text-xs sm:text-sm text-white/60 space-y-1">
            <p>© Copyright 2026 D3 Security</p>
            <p className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3">
              <a href="#" className="hover:text-purple-400">
                Privacy Policy
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="hover:text-purple-400">
                Terms of Service
              </a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}