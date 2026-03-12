import { Container, GlowCard, SectionHeading } from "@/components/ui";
import { testimonials } from "@/lib/content";

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What leadership teams say after delivery."
          description="The strongest signal is what clients report once the systems are live and the metrics move."
          align="center"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <GlowCard key={testimonial.name} className="flex h-full flex-col justify-between p-7">
              <p className="text-base leading-8 text-white/90">“{testimonial.quote}”</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="mt-1 text-sm text-[var(--color-muted)]">{testimonial.role}</div>
              </div>
            </GlowCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
