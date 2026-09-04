import React, { useState } from "react";
import { Check, ArrowRight, Building, Music, Star, GlassWater, Film, Utensils, Sparkles } from "lucide-react";
// Import our custom-generated romantic wedding arena asset
import weddingImg from "../assets/images/wedding_service_1780684798542.png";

interface ServicesProps {
  onNavigate: (sectionId: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<string | null>("mainstage");

  const services = [
    {
      id: "mainstage",
      title: "The Grand Mainstage",
      shortDesc: "Accommodates up to 1,500 standing / 600 seated guests.",
      extendedDesc:
        "The flagship hall of The Atrium. Engineered for massive concerts, monumental weddings, and high-profile galas. Features concert-grade audio-visual systems, expansive stage lighting rigs, elevated luxury VIP mezzanine seating, and private artist dressing suites.",
      icon: Music,
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1000&q=80",
      features: [
        "1,500 standing / 600 banquet seated capacity",
        "Concert-grade sound & dynamic stage lighting arrays",
        "Elevated luxury VIP mezzanine & balcony sections",
        "Private artist & bridal dressing rooms with private baths",
        "Direct access to loading docks and commercial kitchen",
      ],
      tag: "1,500 CAPACITY"
    },
    {
      id: "stage-b",
      title: "Stage B & Fashion Runway",
      shortDesc: "450 standing / 350 seated with dedicated fashion catwalk.",
      extendedDesc:
        "Designed specifically for high-impact fashion runway presentations, awards galas, and medium-scale corporate conventions. Equipped with dedicated runway staging, spotlight trusses, and seamless access to backstage styling areas.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
      features: [
        "450 standing / 350 banquet or theater seating",
        "Dedicated fashion show runway and elevated catwalks",
        "High-density lighting grids and projection screens",
        "Quick-change backstage styling suites with private vanity",
        "Acoustically insulated from neighboring halls",
      ],
      tag: "RUNWAY READY"
    },
    {
      id: "studio-a",
      title: "Studio A & Private Lounge",
      shortDesc: "200 standing / 150 seated for intimate celebrations.",
      extendedDesc:
        "An exclusive, upscale space for intimate wedding receptions, milestone birthdays, VIP album listening sessions, and private executive gatherings. Features warm ambient lighting and dedicated bar service.",
      icon: GlassWater,
      image: weddingImg,
      features: [
        "200 standing / 150 banquet seated capacity",
        "Custom ambient lighting and cozy lounge arrangements",
        "Dedicated built-in cocktail bar with premium drafts",
        "Independent climate and sound volume controls",
        "Ideal for anniversaries, private banquets, and VIP mixers",
      ],
      tag: "INTIMATE"
    },
    {
      id: "atrium-lobby",
      title: "Central Lobby Bar & Lounge",
      shortDesc: "Dual-event connector with full-service cocktail bar.",
      extendedDesc:
        "The Atrium's central architectural masterpiece. Connects both primary event spaces while allowing simultaneous events without sound bleed. Functions as an elegant guest reception area or a standalone cocktail lounge and restaurant.",
      icon: Building,
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=80",
      features: [
        "Connects two large halls allowing simultaneous events",
        "Full-service granite cocktail bar and lounge seating",
        "Operates as a standalone restaurant/lounge space",
        "Welcoming reception desk and guest check-in lobby",
        "Multiple satellite satellite bar service stations",
      ],
      tag: "CENTRAL HUB"
    },
    {
      id: "film-production",
      title: "Film, TV & Video Production",
      shortDesc: "Professional sound stages with private baths & load-in.",
      extendedDesc:
        "Over 30 years of hosting major film crews, television productions, and music video shoots in Stone Mountain / DeKalb County. High ceilings, 3-phase power distribution, drive-in loading bays, and private star dressing suites.",
      icon: Film,
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80",
      features: [
        "Certified sound stage space for film and television",
        "Drive-in loading bay doors for equipment & grip trucks",
        "Production dressing rooms with private full bathrooms",
        "Heavy-duty power distribution and rigging points",
        "Secure on-site production parking for crew and trailers",
      ],
      tag: "SOUNDSTAGE"
    },
    {
      id: "culinary-kitchen",
      title: "Commercial Kitchen & Catering",
      shortDesc: "Full-service commercial culinary facility on-site.",
      extendedDesc:
        "The Atrium features a fully equipped commercial kitchen capable of serving large banquets of 600+ seated guests. Accommodates both in-house culinary teams and approved external catering partners for cultural and custom menus.",
      icon: Utensils,
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80",
      features: [
        "Full-service commercial-grade cooking & prep kitchen",
        "High-capacity warming ovens, walk-in coolers, and dish stations",
        "Support for external caterers and cultural traditions",
        "Multiple permanent bars staffed by licensed mixologists",
        "Banquet service equipment for plated or buffet dining",
      ],
      tag: "COMMERCIAL KITCHEN"
    },
  ];

  const activeServiceData = services.find((s) => s.id === selectedService) || services[0];

  return (
    <section id="services" className="py-24 bg-space-900 relative overflow-hidden">
      {/* Visual background atmospheric elements */}
      <div className="absolute top-[30%] right-0 w-[350px] h-[350px] rounded-full bg-gold-600/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[300px] h-[300px] rounded-full bg-gold-400/5 filter blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-500/10 border border-gold-500/20 text-[#C5A059] text-xs uppercase tracking-[0.4em] font-bold italic mb-5">
            <Star className="w-3.5 h-3.5 text-[#C5A059]" />
            Spaces & Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-wider uppercase">
            Venues & <span className="italic font-light text-gold-500">Event Spaces</span>
          </h2>
          <p className="mt-4 text-sm text-white/50 leading-relaxed font-sans font-light">
            Explore the multi-venue layout of The Atrium (booktheatrium.com). From 1,500-guest concert mainstages to intimate VIP lounges and film soundstages.
          </p>
        </div>

        {/* Dynamic Interactive Bento Segment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12">
          {/* Left Selection Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {services.map((svc) => {
              const IconComp = svc.icon;
              const isSelected = selectedService === svc.id;
              return (
                <button
                  key={svc.id}
                  id={`svc-btn-${svc.id}`}
                  onClick={() => setSelectedService(svc.id)}
                  className={`group text-left p-6 transition-all duration-550 flex items-start gap-5 border outline-none cursor-pointer rounded-none ${
                    isSelected
                      ? "bg-[#0c0c0c] border-[#C5A059] transform translate-x-1 shadow-2xl"
                      : "bg-[#050505] border-white/5 hover:border-white/10"
                  }`}
                >
                  <div
                    className={`p-3.5 border transition-all ${
                      isSelected
                        ? "bg-[#C5A059] border-[#C5A059] text-black"
                        : "bg-white/5 border-white/10 text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black group-hover:border-[#C5A059]"
                    }`}
                  >
                    <IconComp className="w-5 h-5 animate-none" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] font-semibold tracking-widest text-[#C5A059]/85 mb-1 uppercase">
                        {svc.tag}
                      </span>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 bg-[#C5A059]" />
                      )}
                    </div>
                    <h3
                      className={`font-serif text-lg tracking-wide transition-colors ${
                        isSelected ? "text-white" : "text-white/70 group-hover:text-white"
                      }`}
                    >
                      {svc.title}
                    </h3>
                    <p className="text-white/40 text-xs sm:text-xs mt-1 mb-2 font-sans font-light line-clamp-1">
                      {svc.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Panel View */}
          <div id="service-detailed-panel" className="lg:col-span-7">
            <div className="glass-panel rounded-none overflow-hidden h-full flex flex-col justify-between border-white/10 shadow-2xl relative">
              
              {/* Cover Image with gradient overlay */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={activeServiceData.image}
                  alt={activeServiceData.title}
                  className="w-full h-full object-cover transform duration-700 hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/30 to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-space-950/90 border border-white/10 text-gold-500 font-mono text-[9px] tracking-widest uppercase rounded-none">
                  Featured Curation
                </div>
              </div>

              {/* Specs & description content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col gap-6 justify-between bg-[#0c0c0c]">
                <div className="flex flex-col gap-4 text-left">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white leading-tight uppercase tracking-wider">
                    {activeServiceData.title}
                  </h3>
                  <p className="text-white/60 font-sans font-light leading-relaxed text-sm sm:text-base">
                    {activeServiceData.extendedDesc}
                  </p>

                  <div className="border-t border-white/10 pt-4">
                    <span className="text-xs font-mono font-medium text-[#C5A059] uppercase tracking-[0.22em] block mb-4">
                      Luxury Suite Inclusions
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeServiceData.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-white/50 font-light">
                          <div className="mt-1 w-2 h-2 bg-[#C5A059] flex items-center justify-center shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6 mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-left">
                  <div>
                    <h4 className="text-xs font-serif font-medium text-white tracking-widest uppercase">
                      Packages available
                    </h4>
                    <p className="text-[10px] text-white/30 font-mono mt-0.5">
                      Starting booking slots for 2026/2027 season
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate("contact")}
                    className="px-6 py-3 border border-[#C5A059] text-[#C5A059] font-medium text-xs tracking-widest uppercase flex items-center gap-2 group hover:bg-[#C5A059] hover:text-black transition-all duration-300 w-full sm:w-auto justify-center cursor-pointer rounded-none"
                  >
                    Inquire Availability
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
