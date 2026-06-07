import { Navigation } from "@/components/landing/navigation";
import { HoldingHeroSection } from "@/components/landing/holding-hero-section";
import { DivisionsSection } from "@/components/landing/divisions-section";
import { HoldingAboutSection } from "@/components/landing/holding-about-section";
import { HoldingCtaSection } from "@/components/landing/holding-cta-section";
import { FooterSection } from "@/components/landing/footer-section";
import { RTLWrapper } from "@/components/rtl-wrapper";

export default function Home() {
  return (
    <RTLWrapper>
      <main className="relative min-h-screen overflow-x-hidden">
        <Navigation />
        <HoldingHeroSection />
        <DivisionsSection />
        <HoldingAboutSection />
        <HoldingCtaSection />
        <FooterSection />
      </main>
    </RTLWrapper>
  );
}
