import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full border-b border-blue-500/20 fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? "bg-white text-black shadow-md" : "bg-black text-white"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 lg:px-16">

        {/* LOGO */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-auto object-contain lg:h-20"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium">

          <Link className="hover:text-cyan-400" to="/">Product</Link>
          <Link className="hover:text-cyan-400" to="/">Use Cases</Link>
          <Link className="hover:text-cyan-400" to="/">Integrations</Link>
          <Link className="hover:text-cyan-400" to="/">Resources</Link>

          {/* COMPANY DROPDOWN */}
          <div className="relative group">
            <button className="hover:text-cyan-400">
              Company
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[460px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

              <div className="rounded-xl border border-purple-500/30 bg-gradient-to-br from-[#0f0f1a] to-[#1a0f2e] shadow-2xl overflow-hidden">

                <div className="grid grid-cols-2">

                  {/* LEFT */}
                  <div className="p-6 border-r border-purple-500/20">
                    <h3 className="text-white text-lg font-semibold mb-2">
                      Company
                    </h3>
                    <p className="text-sm text-white/70 mb-4">
                      Learn about our mission, team, and vision.
                    </p>
                    <Link to="/about" className="text-purple-400 text-sm font-medium hover:underline">
                      About Us →
                    </Link>
                  </div>

                  {/* RIGHT */}
                  <div className="p-6 space-y-3 text-sm">
                    <Link to="/careers" className="block text-white/80 hover:text-white">
                      Careers
                    </Link>
                    <Link to="/contact" className="block text-white/80 hover:text-white">
                      Contact Us
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <Link className="hover:text-cyan-400" to="/pricing">
            Pricing
          </Link>
        </div>

        {/* DESKTOP BUTTON */}
        <button
          className="hidden lg:block rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:scale-[1.03] transition"
          onClick={() => (window.location.href = "/demo")}
        >
          Get a Demo
        </button>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        } ${isScrolled ? "bg-white text-black" : "bg-black text-white"}`}
      >
        <div className="px-6 pb-6 pt-4 space-y-6 text-sm">

          {/* MENU SECTION */}
          <div>
            <h3 className="text-xs uppercase tracking-wider opacity-60 mb-3">
              Menu
            </h3>

            <div className="flex flex-col space-y-3 font-medium">

              <Link onClick={() => setMenuOpen(false)} className="hover:text-cyan-400" to="/">
                • Product
              </Link>

              <Link onClick={() => setMenuOpen(false)} className="hover:text-cyan-400" to="/">
                • Use Cases
              </Link>

              <Link onClick={() => setMenuOpen(false)} className="hover:text-cyan-400" to="/">
                • Integrations
              </Link>

              <Link onClick={() => setMenuOpen(false)} className="hover:text-cyan-400" to="/">
                • Resources
              </Link>

              <Link onClick={() => setMenuOpen(false)} className="hover:text-cyan-400" to="/pricing">
                • Pricing
              </Link>
            </div>
          </div>

          {/* COMPANY SECTION */}
          <div>
            <h3 className="text-xs uppercase tracking-wider opacity-60 mb-3">
              Company
            </h3>

            <div className="flex flex-col space-y-3 font-medium">

              <Link onClick={() => setMenuOpen(false)} className="hover:text-cyan-400" to="/about">
                • About Us
              </Link>

              <Link onClick={() => setMenuOpen(false)} className="hover:text-cyan-400" to="/careers">
                • Careers
              </Link>

              <Link onClick={() => setMenuOpen(false)} className="hover:text-cyan-400" to="/contact">
                • Contact Us
              </Link>
            </div>
          </div>

          {/* BUTTON */}
          <button
            className="w-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg active:scale-95 transition"
            onClick={() => (window.location.href = "/demo")}
          >
            Get a Demo
          </button><button
  className="hidden lg:block rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:scale-[1.03] transition"
  onClick={() => navigate("/demo")}
>
  Get a Demo
</button>

        </div>
      </div>
    </nav>
  );
}