import hoodDiagram from "../assets/visua.svg";  
import DotDiagram from "../assets/Dot.png";  
import newImage from "../assets/boxy.png";  // Import the new image

export default function AutonomousSecuritySection() {
  const points = [
    "Lateral movement mapping across your entire tool stack",
    "Privilege escalation and persistence detection",
    "Time-correlated signals from every connected source",
    "L2+ investigation depth on 100% of alerts, not a sample",
  ];

  return (
    <section className="w-full bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-400 sm:text-sm">
            Under the Hood
          </p>

          <h2 className="mx-auto text-left mr-16 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[36px]">
            Delivering Autonomous Security at Scale
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-left">
          <p className="text-sm font-medium text-white/80 sm:text-base">
            Attack Path Discovery
          </p>

          <h3 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-2xl">
            When Morpheus says it’s critical — it actually is.
          </h3>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/65 sm:text-base">
            Most tools surface alerts. Morpheus hunts them. Its cybersecurity
            LLM understands how attacks propagate, not just what they look like.
            Every investigation shows the full blast radius before your analyst
            touches it.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-white/80 sm:text-base">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/80" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="mt-6 inline-block text-sm font-semibold text-white transition hover:text-fuchsia-400"
          >
            How Attack Path Discovery Works →
          </a>

          <div className="mt-8 overflow-hidden rounded-xl ">
            <img
              src={hoodDiagram}
              alt="Attack path discovery diagram"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Additional Section for Self-Healing Integrations */}
      <section className="w-full bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-400 sm:text-sm">
              Self-Healing Integrations
            </p>

            <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              Your integrations fix themselves. At 2 AM, too.
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-3xl text-left">
            <p className="text-sm font-medium text-white/80 sm:text-base">
              The average SOC spends 30% of engineering time fixing broken
              integrations. Every API change is a potential blind spot. Morpheus
              monitors every connection continuously — detecting drift,
              generating corrective code, and restoring connectivity before
              anyone files a ticket.
            </p>

            {/* Bullet points */}
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                Continuous monitoring across all 800+ integration points
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                Automatic detection of API changes, schema updates, rotated
                credentials
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                Autonomous corrective code generation — no engineer required
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                Mitigate alert blind spots from integration failures
              </li>
            </ul>

            <a
              href="#"
              className="mt-6 inline-block text-sm font-semibold text-white transition hover:text-fuchsia-400"
            >
              How self-healing works →
            </a>

            {/* Image Section for Self-Healing */}
            <div className="mt-10 overflow-hidden">
              <img
                src={DotDiagram}
                alt="Self healing integrations diagram"
                className="w-full object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Section for Transparency */}
      <section className="w-full bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-400 sm:text-sm">
              Transparency & Governance
            </p>

            <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              AI Isn’t Perfect. But Transparency Is.
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-3xl text-left">
            <p className="text-sm font-medium text-white/80 sm:text-base">
              Morpheus shows its work on every alert. What it analyzed. What
              reasoning it applied. What it concluded. What it recommends.
            </p>

            <h3 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-2xl">
              Your analysts approve, modify, or reject every remediation.
            </h3>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/65 sm:text-base">
              No black boxes. No trust-me AI. Every action produces a
              complete, structured audit trail — from ingestion to case closure
              — ready for your analyst, your CISO, your auditor, or your
              regulator.
            </p>

            <a
              href="#"
              className="mt-6 inline-block text-sm font-semibold text-white transition hover:text-fuchsia-400"
            >
              Explore transparency controls →
            </a>

            {/* New Image Section */}
            <div className="mt-10 overflow-hidden">
              <img
                src={newImage}  // Using the newly uploaded image
                alt="Transparency diagram"
                className="w-full object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}