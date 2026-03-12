import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { BenefitsSection } from "@/sections/benefits-section";
import { CaseStudiesSection } from "@/sections/case-studies-section";
import { CtaSection } from "@/sections/cta-section";
import { FaqSection } from "@/sections/faq-section";
import { HeroSection } from "@/sections/hero-section";
import { PainPointsSection } from "@/sections/pain-points-section";
import { ProcessSection } from "@/sections/process-section";
import { ServicesSection } from "@/sections/services-section";
import { SocialProofSection } from "@/sections/social-proof-section";
import { SolutionSection } from "@/sections/solution-section";
import { TestimonialsSection } from "@/sections/testimonials-section";

export default function Home() {
  return (
    <div className="premium-shell relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(0,229,255,0.18),_transparent_52%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-[-12rem] w-[28rem] bg-[radial-gradient(circle,_rgba(14,165,233,0.18),_transparent_60%)] blur-3xl" />
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection />
        <SolutionSection />
        <ServicesSection />
        <SocialProofSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <ProcessSection />
        <BenefitsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
