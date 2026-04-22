import icon from "../assets/logo.svg";

export default function WebinarBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-violet-700 via-fuchsia-600 to-orange-500">
      <div className="mx-auto flex min-h-[35px] max-w-[1366px] items-center justify-center gap-3 px-4 text-white">
        
        {/* Image from assets */}
        <img 
          src={icon} 
          alt="icon" 
          className="h-6 w-6 object-contain"
        />

        {/* Text */}
        <p className="text-sm">
          <span className="font-bold">Webinar:</span>{" "}
          Leaving SOAR? Here’s What Comes Next.
        </p>

        {/* Button */}
        <a href="#" className="font-bold hover:opacity-80">
          Register Now →
        </a>

      </div>
    </div>
  );
}