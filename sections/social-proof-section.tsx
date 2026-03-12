import { Container, LogoCloudItem, SectionHeading, Stat } from "@/components/ui";

const logos = ["Nova", "Helix", "Quantive", "Pivota", "Kepler", "Vercis"];

export function SocialProofSection() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Proof & Trust"
          title="Chosen by teams that need execution quality, not generic delivery."
          description="Credibility comes from shipped systems, stable operations, and business impact that leadership teams can point to."
          align="center"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
          {logos.map((logo) => (
            <LogoCloudItem key={logo}>{logo}</LogoCloudItem>
          ))}
        </div>
        <div className="mt-14 grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:grid-cols-3">
          <Stat value="4.9/5" label="Client satisfaction score" />
          <Stat value="85%" label="Repeat or expanded engagements" />
          <Stat value="24/7" label="Monitoring and support coverage" />
        </div>
      </Container>
    </section>
  );
}
