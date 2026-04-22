import React from "react";
import Trustedlogo from "../Components/Trustedlogo";
import Footer from "../Components/Footer";

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-4">

      {/* ================= FORM SECTION ================= */}
      <div className="w-full max-w-5xl mt-20 bg-gradient-to-b from-[#0a0a0a] to-[#050505] rounded-2xl p-10 relative shadow-2xl">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-60 h-20 border-t border-purple-500 rounded-t-full"></div>

        <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-10">
          Contact Us
        </h1>

        <div className="flex justify-center mb-8 space-x-2">
          <div className="w-1 h-10 bg-purple-500 rounded-full"></div>
          <div className="w-1 h-10 bg-pink-500 rounded-full"></div>
          <div className="w-1 h-10 bg-blue-500 rounded-full"></div>
          <div className="w-1 h-10 bg-green-500 rounded-full"></div>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">

          <div>
            <label className="text-sm text-gray-400">First Name*</label>
            <input type="text" className="inputStyle" />
          </div>

          <div>
            <label className="text-sm text-gray-400">Last Name*</label>
            <input type="text" className="inputStyle" />
          </div>

          <div>
            <label className="text-sm text-gray-400">Business Email Address*</label>
            <input type="email" className="inputStyle" />
          </div>

          <div>
            <label className="text-sm text-gray-400">Job Title*</label>
            <input type="text" className="inputStyle" />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm text-gray-400">Company Name*</label>
            <input type="text" className="inputStyle" />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm text-gray-400">Company Country*</label>
            <select className="inputStyle">
              <option className="bg-black">Select Country</option>
              <option className="bg-black">Pakistan</option>
              <option className="bg-black">USA</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="text-sm text-gray-400">Organization Type*</label>
            <select className="inputStyle">
              <option className="bg-black">Select Type</option>
              <option className="bg-black">Startup</option>
              <option className="bg-black">Enterprise</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="text-sm text-gray-400">Phone Number (Optional)</label>
            <input type="text" className="inputStyle" />
          </div>

          <div className="md:col-span-2 flex justify-center mt-6">
            <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
              Contact us
            </button>
          </div>
        </form>
      </div>

      {/* ================= NEW CONTACT INFO SECTION ================= */}
      <div className="w-full max-w-6xl mt-20 mb-20 grid md:grid-cols-2 gap-8">

        {/* Left Card */}
        <div className="bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/20 rounded-2xl p-8 backdrop-blur-md hover:scale-[1.02] transition">

          <h2 className="text-2xl font-semibold text-purple-400 mb-4">
            📞 Let's Talk
          </h2>

          <p className="text-gray-300 mb-2">
            Sales: <span className="text-white font-medium">800-608-0081</span>
          </p>
          <p className="text-gray-300 mb-2">
            Admin: <span className="text-white font-medium">800-608-0081</span>
          </p>
          <p className="text-gray-300">
            Support: <span className="text-white font-medium">800-608-0081</span>
          </p>

          {/* Glow line */}
          <div className="mt-6 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-transparent"></div>
        </div>

        {/* Right Card */}
        <div className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/20 rounded-2xl p-8 backdrop-blur-md hover:scale-[1.02] transition">

          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            📍 Our Office
          </h2>

          <p className="text-gray-300 leading-relaxed">
            300 - 1075 W Georgia St <br />
            Vancouver, BC V6E 3C9 <br />
            Canada
          </p>

          {/* Glow line */}
          <div className="mt-6 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-transparent"></div>
        </div>

      </div>

      {/* Reusable Input Style */}
      <style jsx>{`
        .inputStyle {
          width: 100%;
          background: transparent;
          border-bottom: 1px solid #4b5563;
          outline: none;
          padding: 8px 0;
          color: white;
          transition: 0.3s;
        }
        .inputStyle:focus {
          border-color: #a855f7;
        }
      `}</style>
      <Trustedlogo />
      <Footer />
    </div>
  );
};

export default ContactForm;