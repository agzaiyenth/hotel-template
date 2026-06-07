"use client";

import { useEffect, useRef, useState } from "react";

export function HoldingAboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Image */}
          <div 
            className={`lg:col-span-5 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-foreground/10">
              <img
                src="/hotel-hero.png"
                alt="Al Marina Holding Abu Dhabi headquarters"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7">
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px bg-foreground/30" />
                About Al Marina
              </span>

              <h2 className="text-5xl md:text-6xl font-display leading-tight mb-8">
                Shaping the future of the UAE
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Al Marina Holding is an integrated asset owner and investment manager based in Abu Dhabi, United Arab Emirates. The company focuses on spearheading long-term economic growth within the region by managing a diversified portfolio of robust businesses.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our primary objective is to contribute to the UAE&apos;s prosperity by enhancing the urban fabric of the capital city through strategic investments in key growth sectors including real estate, hospitality, retail, construction, and transportation.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-foreground/10">
                {[
                  {
                    title: "Vision",
                    description: "To be the leading integrated investment platform driving sustainable economic growth in the UAE"
                  },
                  {
                    title: "Mission",
                    description: "Creating long-term value through strategic investments and operational excellence across key sectors"
                  }
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="font-mono text-sm text-muted-foreground mb-3">{item.title}</h3>
                    <p className="text-base text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
