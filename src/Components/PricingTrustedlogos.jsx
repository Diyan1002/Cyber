import lineImg from "../assets/lines.png";
import Trustedlogo from "./Trustedlogo";

export default function TrustedSection() {
  return (
    <section className="relative w-full bg-black text-white py-20 px-6 overflow-hidden">

      {/* BACKGROUND LINES IMAGE */}
      <img
        src={lineImg}
        alt="lines"
        className="absolute top-0 left-0 w-full opacity-40 pointer-events-none"
      />

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* TOP BOX */}
        <div className="relative border border-purple-500/30 rounded-2xl py-10 px-6 text-center mb-16 shadow-[0_0_40px_rgba(168,85,247,0.15)]">

          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            Trusted by security teams worldwide
          </h2>

          {/* YOUR LOGOS COMPONENT */}
          <Trustedlogo />

        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="bg-gradient-to-b from-purple-700/40 to-black p-6 rounded-xl border border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.2)]">
            <h3 className="text-lg font-semibold mb-3">
              The Autonomous SOC blew away everyone at my company.
            </h3>
            <p className="text-sm text-white/70">
              I'm getting messages everyday about what tool we used and how we built our SOC. It's made work exciting again.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-gradient-to-b from-purple-700/40 to-black p-6 rounded-xl border border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.2)] mt-10">
            <h3 className="text-lg font-semibold mb-3">
              Awesome incident response and automation platform.
            </h3>
            <p className="text-sm text-white/70">
              Great Product. The ease of use, remediations and integrations make it powerful.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-gradient-to-b from-purple-700/40 to-black p-6 rounded-xl border border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.2)]">
            <h3 className="text-lg font-semibold mb-3">
              880+ Integrations = AI SOC for any stack
            </h3>
            <p className="text-sm text-white/70">
              We ran the top tools and D3 came out on top for multiple reasons.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}