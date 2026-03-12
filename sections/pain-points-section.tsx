import { Container, GlowCard, SectionHeading } from "@/components/ui";
import { painPoints } from "@/lib/content";

export function PainPointsSection() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The Cost of Delay"
          title="Outdated systems create friction everywhere in the business."
          description="When technology lags behind growth, teams move slower, customer experiences degrade, and operating costs climb."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {painPoints.map(({ icon: Icon, title, description }) => (
            <GlowCard key={title}>
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
