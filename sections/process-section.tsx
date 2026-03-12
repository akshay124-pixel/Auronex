import { Container, GlowCard, SectionHeading } from "@/components/ui";
import { processSteps } from "@/lib/content";

export function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="A four-step delivery model built for clarity and momentum."
          description="Projects stay on track when scope, risk, and outcomes are managed with discipline from the first week."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {processSteps.map((item) => (
            <GlowCard key={item.step} className="p-7">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {item.step}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
            </GlowCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
