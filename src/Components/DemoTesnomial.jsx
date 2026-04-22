import dashboardImg from "../assets/dash.png";
import userImg from "../assets/man.jpeg";

export default function TestimonialSection() {
  return (
    <section className="w-full bg-black py-20 px-6 lg:px-16">
      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center">
          <div className="relative rounded-xl border border-violet-500/30 p-2 shadow-[0_0_40px_rgba(139,92,246,0.4)]">
            <img
              src={dashboardImg}
              alt="Morpheus Dashboard"
              className="rounded-lg w-full object-cover"
            />
          </div>

          <p className="absolute -bottom-8 text-white/60 text-sm">
            Pictured: Morpheus Analyst Workspace
          </p>
        </div>

        {/* RIGHT TESTIMONIAL */}
        <div className="relative">
          
          {/* Profile Image */}
         <div className="absolute -top-12 -left-7 z-20">
  <img
    src={userImg}
    alt="User"
    className="w-20 h-20 rounded-full border-4 border-black shadow-lg"
  />
</div>

          {/* Speech Bubble */}
          <div className="relative bg-gradient-to-r from-[#1a0b2e] to-[#2a0f4a] border border-violet-500/40 rounded-2xl p-8 pt-12 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
            
            <p className="text-white text-xl leading-relaxed">
              “We went from feeling swamped to being able to focus on the right
              areas & critical alerts.”
            </p>

            {/* Triangle Tail */}
            <div className="absolute bottom-[-12px] right-16 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-[#2a0f4a]" />
          </div>

          {/* Name */}
          <div className="mt-6 text-right">
            <h3 className="text-white font-semibold text-lg">
              Andrew Kirsch. Mr. Kirsch
            </h3>
            <p className="text-white/60 text-sm">
              founder of Kirsch Consulting
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}