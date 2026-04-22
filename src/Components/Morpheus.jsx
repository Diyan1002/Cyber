export default function MorpheusSecuritySection() {
  const cards = [
    {
      icon: "🔍",
      title: "Fully Automate L1 & L2 SOC Ops",
      description:
        "Morpheus runs L2-depth Attack Path Discovery on every alert — lateral movement, privilege escalation, blast radius, attacker intent — in under two minutes.",
      link: "How Attack Path Discovery works →",
    },
    {
      icon: "🧠",
      title: "Autonomous SOC Night Shift",
      description:
        "Morpheus doesn’t clock out. Every alert at 2 AM gets the same L2-depth investigation as 2 PM. Full coverage. No fatigue.",
      link: "About the cybersecurity LLM →",
    },
    {
      icon: "🔗",
      title: "Eliminate SOC Engineering Burden",
      description:
        "Every integration is monitored continuously. Morpheus detects issues and generates corrective code automatically.",
      link: "Self-healing Integrations →",
    },
    {
      icon: "⚙️",
      title: "Building In-House SOC Capability",
      description:
        "Bring security operations in-house without extra headcount. Focus only on high-confidence incidents.",
      link: "Explore response orchestration →",
    },
  ];

  return (
    <section className="w-full bg-black px-4 py-14 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-2 animate-[fadeUp_0.6s_ease-out] text-xs font-semibold uppercase tracking-[0.25em] text-fuchsia-400">
            What You Can Do Now
          </p>

          <h2 className="mx-auto max-w-3xl animate-[fadeUp_0.8s_ease-out] text-2xl font-bold text-white sm:text-4xl">
            Security Operations That Weren’t Possible
            <br className="hidden sm:block" />
            Before Morpheus
          </h2>

          <p className="mx-auto mt-3 max-w-2xl animate-[fadeUp_1s_ease-out] text-sm text-white/60">
            Unlock use cases that were previously out of reach for security teams.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-white/10 bg-[#08080a] p-2 shadow-[0_0_25px_rgba(168,85,247,0.06)] transition-all duration-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.10)]">
          <div className="grid grid-cols-1 overflow-hidden rounded-lg border border-white/10 bg-[#09090b] md:grid-cols-2">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`group p-5 opacity-0 translate-y-6 animate-[fadeCard_0.7s_ease-out_forwards] ${
                  index % 2 === 0 ? "md:border-r border-white/10" : ""
                } ${index < 2 ? "border-b border-white/10" : ""}`}
                style={{
                  animationDelay: `${index * 0.15 + 0.2}s`,
                }}
              >
                <h3 className="flex items-start gap-2 text-base font-semibold sm:text-lg">
                  <span className="inline-block transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6">
                    {card.icon}
                  </span>
                  <span className="transition-colors duration-300 group-hover:text-fuchsia-300">
                    {card.title}
                  </span>
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/60 transition-colors duration-300 group-hover:text-white/75 sm:text-sm">
                  {card.description}
                </p>

                <a
                  href="#"
                  className="mt-3 inline-block text-xs font-medium text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-fuchsia-400"
                >
                  {card.link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeCard {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}