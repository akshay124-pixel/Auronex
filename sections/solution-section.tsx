import { CheckCircle2 } from "lucide-react";
import { Container, GlowCard, SectionHeading } from "@/components/ui";
import { solutions } from "@/lib/content";

export function SolutionSection() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading
            eyebrow="How We Solve It"
            title="A senior engineering partner focused on performance, scale, and operational clarity."
            description="We design modern systems that simplify complexity, accelerate teams, and give leadership a clearer path to growth."
          />
          <GlowCard className="grid gap-5 p-8 sm:p-10">
            {solutions.map((item) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-white/8 bg-black/10 p-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-[var(--color-accent)]" />
                <p className="text-sm leading-7 text-[var(--color-muted)] sm:text-base">{item}</p>
              </div>
            ))}
          </GlowCard>
        </div>
      </Container>
    </section>
  );
}
