import { Container, GlowCard, SectionHeading } from "@/components/ui";
import { faqs } from "@/lib/content";

export function FaqSection() {
  return (
    <section id="faq" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions before teams engage."
          description="These are the topics most often raised by operators, founders, and technology leaders evaluating a delivery partner."
        />
        <div className="mt-12 grid gap-5">
          {faqs.map((faq) => (
            <GlowCard key={faq.question} className="p-7">
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-[var(--color-muted)]">
                {faq.answer}
              </p>
            </GlowCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
