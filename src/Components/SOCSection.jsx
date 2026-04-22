import socImage from "../assets/Diagram.png";

export default function SOCSection() {
  return (
    <section className="w-full bg-black py-24 text-white overflow-x-hidden">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 text-center">

        {/* TITLE */}
        <p className="animate-fade-up mb-4 text-[10px] sm:text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-400">
          AUTONOMOUS AI SOC OPERATIONS
        </p>

        <h2 className="animate-fade-up-delayed mx-auto max-w-[900px] text-xl sm:text-5xl lg:text-[40px] font-bold leading-tight">
          Morpheus Automates L1 and L2 So Your
          <br />
          Team Focuses on L3
        </h2>

        {/* IMAGE */}
        <div className="mt-10 sm:mt-16 flex justify-center">
          <img
            src={socImage}
            alt="SOC workflow diagram"
            className="animate-float w-full max-w-[1100px] object-contain"
          />
        </div>

        {/* TEXT SECTION (ONLY MOBILE FIX) */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 text-left font-bold text-white/80 gap-6">

          <p className="animate-fade-up-delayed-2 leading-6 sm:leading-7 text-sm sm:text-base">
            Morpheus ingests alerts across your security stack and{" "}
            <span className="text-white">
              autonomously handles L1 & L2 workload
            </span>{" "}
            — from deduplication to attack path investigation. Analysts focus on L3.
          </p>

          <p className="animate-fade-up-delayed-3 leading-6 sm:leading-7 text-sm sm:text-base">
            Unlike legacy SOAR platforms, Morpheus generates runtime logic dynamically,
            mapping attacks and adapting without static rules.{" "}
            <span className="text-white">
              Nothing left uninvestigated.
            </span>
          </p>

        </div>

        {/* ================= SOC TABLE (NO CHANGE DESKTOP) ================= */}
        <div className="relative mt-16 overflow-hidden rounded-[26px] border border-fuchsia-500/40 bg-[linear-gradient(135deg,rgba(73,37,108,0.95)_0%,rgba(35,16,57,0.95)_38%,rgba(9,5,18,1)_72%,rgba(0,0,0,1)_100%)] shadow-[0_0_40px_rgba(168,85,247,0.12)] animate-glow">

          {/* shimmer */}
          <div className="absolute left-0 top-0 h-[2px] w-full overflow-hidden">
            <div className="animate-shimmer h-full w-[30%] bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent" />
          </div>

          {/* HEADER (desktop only unchanged) */}
          <div className="hidden md:grid grid-cols-[1.1fr_1.1fr_2fr] px-10 py-8 border-b border-fuchsia-500/35 text-left">
            <div className="text-[17px] font-bold uppercase tracking-[0.14em] text-fuchsia-300">
              SOC TIER
            </div>
            <div className="text-[17px] font-bold uppercase tracking-[0.14em] text-fuchsia-300">
              HANDLED BY
            </div>
            <div className="text-[17px] font-bold uppercase tracking-[0.14em] text-fuchsia-300">
              KEY TASKS
            </div>
          </div>

          {/* ROW 1 */}
          <div className="px-5 md:px-10 py-6 md:py-8 hover:bg-white/[0.03] transition">
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.1fr_2fr] gap-3 md:gap-0 text-left">
              <div className="text-white font-semibold text-sm sm:text-[18px]">
                L1 — Alert Ingestion & Triage
              </div>
              <div className="text-white/90 text-sm sm:text-[18px]">
                Morpheus AI (Autonomous)
              </div>
              <div className="text-white/80 text-sm sm:text-[18px]">
                Ingest alerts, deduplicate, enrich entities, build attack graph
              </div>
            </div>
          </div>

          <div className="mx-4 h-px bg-white/[0.05]" />

          {/* ROW 2 */}
          <div className="px-5 md:px-10 py-6 md:py-8 hover:bg-white/[0.03] transition">
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.1fr_2fr] gap-3 md:gap-0 text-left">
              <div className="text-white font-semibold text-sm sm:text-[18px]">
                L2 — Investigation & Analysis
              </div>
              <div className="text-white/90 text-sm sm:text-[18px]">
                Morpheus AI (Autonomous)
              </div>
              <div className="text-white/80 text-sm sm:text-[18px]">
                Map attack paths, lateral movement, classify threats, generate playbooks
              </div>
            </div>
          </div>

          <div className="mx-4 h-px bg-white/[0.05]" />

          {/* ROW 3 */}
          <div className="px-5 md:px-10 py-6 md:py-8 hover:bg-white/[0.03] transition">
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.1fr_2fr] gap-3 md:gap-0 text-left">
              <div className="text-white font-semibold text-sm sm:text-[18px]">
                L3 — Incident Response
              </div>
              <div className="text-white/90 text-sm sm:text-[18px]">
                Human Analysts
              </div>
              <div className="text-white/80 text-sm sm:text-[18px]">
                Validate incidents, approve actions, generate audit reports
              </div>
            </div>
          </div>
        </div>

        {/* ================= PLATFORM SECTION ================= */}
        <div className="mt-24 sm:mt-28 text-center">

          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-fuchsia-400 mb-3">
            PLATFORM AT A GLANCE
          </p>

          <h2 className="text-2xl sm:text-4xl lg:text-[48px] font-bold leading-tight">
            What the D3 Morpheus Platform Ships
            <br />
            on Day One
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-white/70 max-w-[600px] mx-auto">
            Morpheus handles 800+ integrations with no per-alert fees or token costs.
          </p>

          {/* TABLE 2 (desktop same, mobile fixed) */}
          <div className="relative mt-10 overflow-hidden rounded-[26px] border border-fuchsia-500/40 bg-[linear-gradient(135deg,rgba(73,37,108,0.95)_0%,rgba(35,16,57,0.95)_38%,rgba(9,5,18,1)_72%,rgba(0,0,0,1)_100%)] shadow-[0_0_40px_rgba(168,85,247,0.12)] animate-glow">

            {/* HEADER */}
            <div className="hidden md:grid grid-cols-[1fr_2fr_1fr] px-10 py-8 border-b border-fuchsia-500/35 text-left">
              <div className="text-[17px] font-bold uppercase text-fuchsia-300">
                CAPABILITY
              </div>
              <div className="text-[17px] font-bold uppercase text-fuchsia-300">
                WHAT MORPHEUS DOES
              </div>
              <div className="text-[17px] font-bold uppercase text-fuchsia-300">
                KEY METRIC
              </div>
            </div>

            {[
              ["Alert Investigation", "Autonomous L2 analysis", "100% coverage"],
              ["AI Triage", "LLM classification", "95% under 2 min"],
              ["Response Orchestration", "Runtime playbooks", "Dynamic"],
              ["Integrations", "Self-healing connectors", "800+ tools"],
              ["Pricing", "No per-alert fees", "Flat subscription"]
            ].map((row, i) => (
              <div key={i} className="px-5 md:px-10 py-6 md:py-8 hover:bg-white/[0.03] transition">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-3 md:gap-0 text-left">

                  <div className="text-white font-semibold text-sm sm:text-[18px]">
                    {row[0]}
                  </div>

                  <div className="text-white/80 text-sm sm:text-[18px]">
                    {row[1]}
                  </div>

                  <div className="text-fuchsia-300 text-sm sm:text-[18px] font-medium">
                    {row[2]}
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}