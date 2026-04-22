import heroVisual from "../assets/funnel.svg";
import gridBg from "../assets/grid.png";

export default function HeroSection() {
  return (
    <section className="min-h-screen w-full bg-black text-white overflow-hidden">
      <div className="relative">

        {/* Background Grid */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-full lg:w-1/2 opacity-20"
          style={{
            backgroundImage: `url(${gridBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Glow Effects */}
        <div className="absolute right-10 top-20 h-[250px] w-[250px] rounded-full bg-violet-600/10 blur-[100px] sm:h-[320px] sm:w-[320px]" />

        {/* MAIN CONTAINER */}
        <div className="mx-auto grid min-h-screen max-w-[1400px] items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-12">

          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-2xl">

            <p className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.28em] text-fuchsia-400">
              D3 Morpheus — Autonomous AI SOC Platform
            </p>

            {/* RESPONSIVE HEADING */}
            <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-bold leading-tight tracking-tight">
              <span className="block">
                The AI SOC Platform
              </span>

              <span className="block">
                That Investigates
              </span>

              <span className="block">
                Every Security Alert
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-white/80">
              D3 Morpheus is an autonomous AI SOC platform that investigates and
              triages 100% of security alerts in under three minutes — not a sample,
              every one. Powered by a purpose-built cybersecurity triage LLM and
              attack path discovery engine, it delivers deep investigations across
              integrated security tools with no per-alert charges, no token fees,
              and full human oversight.
            </p>

            {/* FORM */}
            <div className="mt-8 sm:mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">

              {/* EMAIL */}
              <input
                type="email"
                placeholder="WORK EMAIL"
                className="h-[56px] sm:h-[64px] w-full rounded-full border border-white/10 bg-white/[0.04] px-5 sm:px-6 text-sm text-white placeholder:text-white/35 outline-none backdrop-blur-sm focus:border-fuchsia-500/50"
              />

              {/* SELECT */}
              <select
                className="h-[56px] sm:h-[64px] w-full sm:max-w-[220px] appearance-none rounded-full border border-white/10 bg-white/[0.04] px-5 sm:px-6 text-sm text-white/70 outline-none backdrop-blur-sm focus:border-fuchsia-500/50"
                defaultValue=""
              >
                <option value="" disabled className="text-black">
                  COMPANY TYPE
                </option>
                <option className="text-black">Startup</option>
                <option className="text-black">Enterprise</option>
                <option className="text-black">Agency</option>
                <option className="text-black">Other</option>
              </select>

              {/* BUTTON */}
              <button className="h-[56px] sm:h-[64px] w-full sm:w-auto rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-purple-600 px-10 sm:px-14 text-sm sm:text-base font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.35)] transition hover:scale-[1.03]">
                Get a Demo
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative z-10 flex items-center justify-center mt-10 lg:mt-0">

            <div className="w-full max-w-[420px] sm:max-w-[500px]">
              <img
                src={heroVisual}
                alt="AI SOC dashboard illustration"
                className="w-full object-contain"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}