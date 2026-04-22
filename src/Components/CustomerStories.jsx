export default function CustomerStoriesSection() {
  return (
    <section className="w-full bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        {/* Title */}
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-400 sm:text-sm">
          Customer Stories
        </p>

        <h2 className="mx-auto mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
          Don’t Take Our Word for It.
        </h2>

        {/* Quote Cards Section */}
        <div className="mt-12 flex flex-wrap gap-8 justify-center">
          {/* First Quote Card */}
          <div className="max-w-xs bg-[#3D0A45] p-8 rounded-xl shadow-lg opacity-0 animate-[fadeInUp_0.7s_ease-out_forwards] hover:scale-105 transition-all duration-300">
            <p className="text-xl italic text-white/75">
              “Having D3 allows us to get the noise out of the way, automate level I and II analysis,
              and focus on what is important.”
            </p>
            <p className="mt-6 text-sm font-semibold text-white">
              — SOC Director, Global Financial Institution
            </p>
          </div>

          {/* Second Quote Card */}
          <div className="max-w-xs bg-[#3D0A45] p-8 rounded-xl shadow-lg opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards] hover:scale-105 transition-all duration-300">
            <p className="text-xl italic text-white/75">
              “Response times were usually 30 to 60 minutes in the past. Now it’s anywhere from 30 seconds to 3 minutes on automated alerts. That’s not an improvement — it’s a different operation.”
            </p>
            <p className="mt-6 text-sm font-semibold text-white">
              — VP, Security Operations, Fortune 500 Enterprise
            </p>
          </div>

          {/* Third Quote Card */}
          <div className="max-w-xs bg-[#3D0A45] p-8 rounded-xl shadow-lg opacity-0 animate-[fadeInUp_0.9s_ease-out_forwards] hover:scale-105 transition-all duration-300">
            <p className="text-xl italic text-white/75">
              “We can also do a lot of proactive automated tasks like vulnerability scanning and threat hunting to make sure we’re keeping our risk low. Things we never had bandwidth for before.”
            </p>
            <p className="mt-6 text-sm font-semibold text-white">
              — SOC Lead, Critical Infrastructure Operator
            </p>
          </div>
        </div>
      </div>

      {/* Keyframes for sliding animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
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