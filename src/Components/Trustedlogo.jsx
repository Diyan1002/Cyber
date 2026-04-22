import microsoft from "../assets/microsoft.png";
import londonStockExchange from "../assets/london.png";
import scotiabank from "../assets/cu.png";
import spGlobal from "../assets/global.png";
import cummins from "../assets/Lateral.svg";

const logos = [
  { name: "Microsoft", src: microsoft },
  { name: "London Stock Exchange", src: londonStockExchange },
  { name: "Scotiabank", src: scotiabank },
  { name: "S&P Global", src: spGlobal },
  { name: "Cummins", src: cummins },
];

export default function TrustedLogos() {
  const loopLogos = [...logos, ...logos];

  return (
    <section className="w-full bg-black py-10 sm:py-14 text-white overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* TITLE */}
        <h2 className="mb-8 sm:mb-10 text-center text-base sm:text-xl lg:text-2xl font-semibold leading-snug text-white/90">
          Trusted by Fortune 500 enterprises and the world’s largest MSSPs
        </h2>

        {/* MARQUEE WRAPPER */}
        <div className="relative overflow-hidden">

          {/* LEFT FADE (smaller on mobile) */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 sm:w-20 bg-gradient-to-r from-black to-transparent" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 sm:w-20 bg-gradient-to-l from-black to-transparent" />

          {/* MARQUEE */}
          <div className="flex w-max animate-marquee items-center gap-10 sm:gap-14">

            {loopLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-6 sm:h-8 lg:h-9 w-auto object-contain"
                />
              </div>
            ))}

          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-8 sm:mt-10 h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent" />

      </div>
    </section>
  );
}