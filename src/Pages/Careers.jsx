import React, { useState } from "react";
import lineImg from "../assets/line.png";
import Footer from "../Components/Footer";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    details: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !formData.email.includes("@"))
      newErrors.email = "Valid email required";
    if (!formData.phone || formData.phone.length < 10)
      newErrors.phone = "Valid phone required";
    if (!formData.position)
      newErrors.position = "Please select a position";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSuccess(true);

    // reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      details: "",
    });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${lineImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/70 to-black/80"></div>

        <div className="relative z-10 text-center px-6 sm:px-12 max-w-4xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white">
            Always Looking for <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              the Best
            </span>{" "}
            and <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Brightest
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300">
            Join a team that values innovation, creativity, and growth.
          </p>

          <a href="#jobs">
            <button className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white shadow-lg">
              View Open Positions
            </button>
          </a>

          <p className="mt-4 text-gray-300">
            careers@techgrc.org
          </p>
        </div>
      </div>

      {/* ================= JOBS ================= */}
      <div
        id="jobs"
        className="bg-gradient-to-b from-purple-600 to-purple-800 text-white py-16 px-6 sm:px-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Open Positions
        </h2>

        <div className="max-w-4xl mx-auto space-y-10">
          {[
            {
              title: "Marketing",
              jobs: ["Sales Development Representative"],
            },
            {
              title: "R&D Development",
              jobs: ["AI Engineer", "Senior Software Engineer"],
            },
            {
              title: "Service",
              jobs: ["Cyber Security Engineer"],
            },
          ].map((section, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-center border-b border-white/30 pb-2">
                {section.title}
              </h3>

              <ul className="text-center space-y-2">
                {section.jobs.map((job, i) => (
                  <li key={i} className="hover:text-purple-300 cursor-pointer">
                    {job}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ================= APPLY ================= */}
      <div className="bg-[#0f0f0f] text-white py-16 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
            Apply Now
          </h2>

          {/* SUCCESS */}
          {success && (
            <div className="mb-6 p-4 text-center bg-green-600/20 border border-green-500 text-green-400 rounded-lg">
              ✅ Application Submitted Successfully!
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-purple-900/40 to-black/40 p-6 sm:p-8 rounded-xl space-y-5 border border-white/10"
          >
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:border-purple-500 outline-none"
                />
                {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:border-purple-500 outline-none"
                />
                {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:border-purple-500 outline-none"
                />
                {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
              </div>

              <div>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white focus:border-purple-500 outline-none"
                >
                  <option value="">Select Position</option>
                  <option>AI Engineer</option>
                  <option>Software Engineer</option>
                  <option>Cyber Security Engineer</option>
                </select>
                {errors.position && <p className="text-red-400 text-sm">{errors.position}</p>}
              </div>
            </div>

            {/* Experience */}
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Years of Experience"
              className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:border-purple-500 outline-none"
            />

            {/* Details */}
            <textarea
              rows="4"
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Tell us about yourself..."
              className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:border-purple-500 outline-none"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg font-semibold hover:opacity-90"
            >
              Submit Application
            </button>
          </form>
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