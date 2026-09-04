import React from "react";
import { Sparkles, Award, Shield, Users, Compass, Clock, MapPin } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Mainstage Capacity", val: "1,500+" },
    { label: "Industry Legacy", val: "30+ Yrs" },
    { label: "Event Spaces", val: "3 Halls" },
    { label: "On-Site Free Parking", val: "500+ Cars" },
  ];

  const values = [
    {
      icon: Award,
      title: "30+ Years of Entertainment Heritage",
      desc: "An iconic fixture on Memorial Drive in Stone Mountain, DeKalb County, hosting legendary concerts, celebrity galas, and milestone gatherings.",
    },
    {
      icon: Shield,
      title: "Dual-Hall Sound-Isolated Architecture",
      desc: "Two grand spaces separated by a central lobby bar allow simultaneous multi-client events without audio bleed.",
    },
    {
      icon: Users,
      title: "Turnkey Event & Production Services",
      desc: "Full-service commercial kitchen, multiple bars, dedicated fashion runway, and private dressing suites with full baths.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-space-900 relative overflow-hidden">
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-gold-600/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[250px] h-[250px] rounded-full bg-gold-500/5 filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content info panel layout (Left) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-500/10 border border-gold-500/20 text-[#C5A059] text-xs uppercase tracking-[0.4em] font-bold italic w-fit">
              <Compass className="w-3.5 h-3.5 text-gold-500" />
              Over 30 Years of Excellence
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-wider uppercase">
              Stone Mountain's <br className="hidden sm:inline" />
              <span className="italic font-light text-gold-500">Premier Performing Arts</span> & Event Center
            </h2>

            <div className="space-y-4 text-white/70 font-sans font-light leading-relaxed text-sm sm:text-base">
              <p>
                Located at <span className="text-[#C5A059] font-medium">5479 Memorial Drive in Stone Mountain, Georgia</span>, The Atrium has served as a cultural cornerstone and premier entertainment venue for more than three decades.
              </p>
              <p>
                Spearheaded by <span className="text-[#C5A059] font-medium">Terry Brantley</span> and Brantland Developments, The Atrium was purposefully engineered to accommodate diverse event formats — from 1,500-attendee live concerts and television broadcasts to high-couture fashion runway shows and romantic wedding banquets.
              </p>
              <p>
                Our architectural layout features two large event spaces connected by a central lobby bar, enabling simultaneous events with complete acoustic isolation. Backed by a full-service commercial kitchen, multiple cocktail bars, artist dressing rooms with private baths, and generous free on-site parking, The Atrium delivers turnkey hospitality for every occasion.
              </p>
            </div>

            {/* Quick Metrics Columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 border-t border-b border-white/10 py-6">
              {stats.map((st, i) => (
                <div key={i}>
                  <p className="text-2xl sm:text-3xl font-serif text-gold-500 font-bold uppercase">{st.val}</p>
                  <p className="text-[9px] text-white/40 font-mono uppercase tracking-[0.2em] mt-1 leading-snug">
                    {st.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values grid layout cards (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="glass-panel p-6 sm:p-8 rounded-none flex flex-col gap-6 relative shadow-2xl border-white/10 bg-[#0c0c0c]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-bl-full pointer-events-none filter blur-md" />
              
              <h3 className="font-serif text-lg text-white uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-500" />
                The Atrium Core Pillars
              </h3>

              <div className="flex flex-col gap-5">
                {values.map((v, i) => {
                  const IconComp = v.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="p-2.5 bg-gold-500/10 border border-gold-500/20 text-gold-500 self-start">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-serif text-sm text-gold-300 uppercase tracking-wide">
                          {v.title}
                        </h4>
                        <p className="text-xs text-white/50 mt-1 leading-relaxed font-sans font-light">
                          {v.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Operating Info */}
              <div className="border-t border-white/10 pt-4 flex flex-col gap-2.5 text-xs text-stone-400 text-left font-mono">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold-500" />
                  <span>Viewing Desk: Mon - Sun (9:00 AM - 10:00 PM)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-500" />
                  <span>5479 Memorial Drive • Stone Mountain, GA 30083</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
