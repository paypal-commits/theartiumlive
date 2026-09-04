import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
// Import our custom generated asset reflecting luxury Georgia atrium style
import heroBg from "../assets/images/venue_hero_bg_1780684781429.png";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-16"
    >
      {/* Underlying high-res custom generated glass-atrium render backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="The Atrium Live Venue Space"
          className="w-full h-full object-cover scale-102 transform duration-[10s] ease-out select-none"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer linear and radial gradient shields for premium contrast and absolute readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-space-950/70 via-space-950/85 to-space-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-space-950 via-space-950/40 to-space-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,135,43,0.06)_0%,transparent_70%)]" />
      </div>

      {/* Atmospheric particles */}
      <div className="absolute top-[25%] left-[25%] w-[180px] h-[180px] rounded-full bg-gold-500/10 filter blur-[70px] mix-blend-screen pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[30%] right-[20%] w-[250px] h-[250px] rounded-full bg-gold-400/5 filter blur-[90px] mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-center">
        {/* Main Content Area */}
        <div className="max-w-4xl flex flex-col items-center gap-6 text-center">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs uppercase tracking-[0.3em] font-medium italic w-fit mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Stone Mountain, GA • 5479 Memorial Drive</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight tracking-tight uppercase">
            Where <span className="italic font-light text-gold-500">30+ Years</span> of <br className="hidden sm:inline" />
            iconic moments take <br className="hidden sm:inline" />
            center stage
          </h1>

          <p className="text-base sm:text-lg text-white/75 max-w-3xl mx-auto font-sans font-light leading-relaxed">
            Welcome to <span className="text-gold-200 font-medium">The Atrium</span> (booktheatrium.com) — Atlanta's premier performing arts and multi-venue entertainment center. Featuring dual grand event halls separated by a central sound-isolated lobby bar, a main concert stage accommodating up to 1,500 guests, a dedicated fashion runway, commercial kitchen, and film soundstages.
          </p>

          {/* Event metrics overlay */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-6 pb-6 my-2 border-t border-b border-white/10 w-full max-w-2xl mx-auto text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-serif text-gold-500 font-bold">1,500+</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-1">Mainstage Cap</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif text-gold-500 font-bold">30+ Yrs</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-1">Industry Legacy</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif text-gold-500 font-bold">3 Halls</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-1">Versatile Spaces</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif text-gold-500 font-bold">500+</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-1">Free Parking</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
            <button
              onClick={() => onNavigate("contact")}
              className="w-full sm:w-auto px-8 py-4 bg-gold-500 text-black text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold-600 active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Book The Atrium
              <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-1.5 transition-transform" />
            </button>
            
            <button
              onClick={() => onNavigate("services")}
              className="w-full sm:w-auto px-8 py-4 border border-white/20 bg-transparent text-white text-xs uppercase tracking-[0.2em] hover:bg-white/5 active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Explore Spaces
            </button>
          </div>
        </div>
      </div>

      {/* Decorative vertical bounds edge border and scroll hint and location indicator */}
      <div className="hidden sm:flex absolute bottom-4 sm:bottom-5 left-1/2 transform -translate-x-1/2 z-10 flex-col items-center gap-2 animate-bounce cursor-pointer" onClick={() => onNavigate("services")}>
        <span className="text-[9px] text-gold-400 font-mono uppercase tracking-widest">Explore Venue</span>
        <div className="w-1.5 h-8 bg-gradient-to-b from-gold-500 to-transparent rounded-full" />
      </div>
    </section>
  );
}
