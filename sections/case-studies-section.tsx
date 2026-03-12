import { ArrowRight } from "lucide-react";
import { Container, GlowCard, SectionHeading } from "@/components/ui";
import { caseStudies } from "@/lib/content";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Results"
          title="Recent engagements with measurable commercial impact."
          description="Each case study combines technical execution with a clear business outcome, not just a feature release."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <GlowCard key={study.company} className="flex h-full flex-col p-7">
              <div className="inline-flex w-fit rounded-full border border-[rgba(0,229,255,0.2)] bg-[rgba(0,229,255,0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {study.company}
              </div>
              <div className="mt-6 space-y-5 text-sm leading-7 text-[var(--color-muted)]">
                <p>
                  <span className="font-semibold text-white">Problem:</span> {study.problem}
                </p>
                <p>
                  <span className="font-semibold text-white">Solution:</span> {study.solution}
                </p>
                <p>
                  <span className="font-semibold text-white">Result:</span> {study.result}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
                Read the full case study
                <ArrowRight className="h-4 w-4" />
              </div>
            </GlowCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
