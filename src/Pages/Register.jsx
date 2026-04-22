import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    company: "",
    country: "",
    companyType: "Enterprise",
  });

  const [verified, setVerified] = useState(false);
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleVerify = () => {
    // simple human check (you can replace with CAPTCHA later)
    setVerified(true);
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!verified) {
      alert("Please complete human verification");
      return;
    }

    alert("Account created successfully!");
    navigate("/"); // go home after register
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_60%)]" />

      {/* CARD */}
      <div className="relative w-full max-w-lg">

        {/* LOGO (click → home) */}
        <div
          onClick={() => navigate("/")}
          className="flex justify-center mb-6 cursor-pointer"
        >
          <img src={logo} alt="Logo" className="h-18 object-contain" />
        </div>

        <div className="bg-[#0c0c0c] border border-purple-500/30 rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.2)] p-8">

          <h2 className="text-2xl font-bold text-center mb-6">
            Create Your Account
          </h2>

          {/* FORM */}
          {step === 1 && (
            <form className="space-y-4">

              <div className="grid grid-cols-2 gap-3">

                <input
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  className="h-[48px] px-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 outline-none"
                />

                <input
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  className="h-[48px] px-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 outline-none"
                />

              </div>

              <input
                name="jobTitle"
                placeholder="Job Title"
                onChange={handleChange}
                className="w-full h-[48px] px-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 outline-none"
              />

              <input
                name="email"
                placeholder="Business Email Address"
                onChange={handleChange}
                className="w-full h-[48px] px-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 outline-none"
              />

              <input
                name="company"
                placeholder="Company"
                onChange={handleChange}
                className="w-full h-[48px] px-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 outline-none"
              />

              <input
                name="country"
                placeholder="Company HQ Country"
                onChange={handleChange}
                className="w-full h-[48px] px-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 outline-none"
              />

              {/* COMPANY TYPE */}
              <select
                name="companyType"
                onChange={handleChange}
                className="w-full h-[48px] px-3 rounded-lg bg-black border border-white/10 focus:border-purple-500 outline-none"
              >
                <option>Enterprise</option>
                <option>MSSP</option>
                <option>Public Sector</option>
                <option>Other</option>
              </select>

              {/* NEXT STEP */}
              <button
                type="button"
                onClick={handleVerify}
                className="w-full h-[48px] rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 font-semibold"
              >
                Continue
              </button>
            </form>
          )}

          {/* HUMAN VERIFICATION */}
          {step === 2 && (
            <div className="text-center space-y-4">

              <p className="text-white/70 text-sm">
                Human Verification Required
              </p>

              <button
                onClick={handleVerify}
                className="w-full h-[48px] rounded-lg bg-white/10 border border-white/20 hover:border-purple-500 transition"
              >
                I am not a robot ✔
              </button>

              <button
                onClick={handleSubmit}
                className="w-full h-[48px] rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 font-semibold"
              >
                Submit Registration
              </button>

            </div>
          )}

          {/* LOGIN */}
          <p
            onClick={() => navigate("/")}
            className="text-center text-xs text-purple-400 mt-6 cursor-pointer hover:underline"
          >
            Already have an account? Login
          </p>

        </div>
      </div>
    </div>
  );
}