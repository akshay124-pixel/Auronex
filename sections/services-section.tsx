import { Container, GlowCard, SectionHeading } from "@/components/ui";
import { services } from "@/lib/content";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Core Services"
          title="Technology services built to remove bottlenecks and unlock growth."
          description="Each engagement is designed to improve speed, reduce operational drag, and create measurable business outcomes."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <GlowCard key={title} className="p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(0,229,255,0.12)] text-[var(--color-accent)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{description}</p>
            </GlowCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
