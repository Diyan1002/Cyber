import { Link } from "react-router-dom";

export default function ThreatSection() {
  return (
    <section className="w-full bg-gradient-to-b from-purple-600 to-orange-500 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Container for the black box with gradient */}
        <div className="bg-[#121212] p-12 rounded-xl shadow-lg text-center">

          {/* Title */}
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Threats Don’t Wait. Neither Should You.
          </h2>

          {/* Description */}
          <p className="mt-4 text-lg leading-7 text-white/80 sm:text-xl">
            Every hour spent maintaining playbooks, babysitting integrations, and rubber-stamping alerts is an hour an attacker uses to move deeper into your environment.
          </p>

          {/* Button Section */}
          <div className="mt-8">
            <Link
  to="/demo"
  className="inline-block bg-purple-700 text-white font-semibold py-2 px-6 rounded-3xl shadow-lg transition-all duration-300 hover:bg-purple-600"
>
  Request a Live Demo
</Link>
          </div>
        </div>
      </div>
    </section>
  );
}