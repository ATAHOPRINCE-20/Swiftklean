import { Link } from "react-router";
import { ArrowLeft, Home, Compass } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background blur objects */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-[#BFEAF0]/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-[#1F9EB6]/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-md w-full text-center bg-white border border-slate-100 shadow-2xl rounded-3xl p-8 md:p-10 relative z-10">
        {/* Animated 404 Badge */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-[#BFEAF0] rounded-full mb-8 animate-bounce">
          <span className="text-4xl font-extrabold text-[#178A9F]">404</span>
        </div>

        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-4">
          Page Not Found
        </h1>
        
        <p className="text-slate-500 text-base md:text-lg mb-8 leading-relaxed">
          Oops! The page you are looking for doesn't exist, has been moved, or is temporarily unavailable. Let's get you back on track.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-[#1F9EB6] text-white px-6 py-3.5 rounded-xl font-bold hover:bg-[#178A9F] hover:scale-102 active:scale-98 transition shadow-lg shadow-[#1F9EB6]/20"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3.5 rounded-xl font-bold transition"
          >
            <Compass className="w-4 h-4" />
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
