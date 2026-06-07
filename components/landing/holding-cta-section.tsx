"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/app/providers";
import { translations } from "@/lib/translations";

export function HoldingCtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
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
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-black"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="relative">
          {/* Background elements */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-10 pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-10 pointer-events-none" />

          <div
            className={`relative text-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display leading-tight mb-6">
              {translations[language].cta.title}
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              {translations[language].cta.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-full px-8 h-12 text-base bg-foreground text-background hover:bg-foreground/90"
              >
                {translations[language].cta.button}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-12 text-base"
              >
                {language === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
