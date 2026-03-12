import { ArrowUpRight } from "lucide-react";
import { Container, GlowCard, SectionHeading } from "@/components/ui";
import { benefits } from "@/lib/content";

export function BenefitsSection() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Outcomes"
            title="The value is not just better software. It is better business performance."
            description="We focus on outcomes leadership can measure across speed, cost, reliability, and customer experience."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <GlowCard key={benefit} className="min-h-44 p-7">
                <ArrowUpRight className="h-6 w-6 text-[var(--color-accent)]" />
                <p className="mt-8 text-lg leading-8 text-white">{benefit}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
