import Image from "next/image";
import { Button } from "@/components/button";
import { Container, Stat } from "@/components/ui";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="section-reveal relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,229,255,0.2)] bg-[rgba(0,229,255,0.08)] px-4 py-2 text-sm text-[var(--color-accent)] shadow-[0_0_30px_rgba(0,229,255,0.08)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_18px_rgba(0,229,255,0.8)]" />
              Trusted by product-led teams and enterprise operators
            </div>
            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
              Engineering digital solutions for modern businesses.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
              Auronex helps ambitious companies modernize platforms, automate operations, and
              launch scalable technology systems that drive measurable growth.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact">Start Your Project</Button>
              <Button href="#case-studies" variant="secondary">
                View Results
              </Button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-6">
              <Stat value="120+" label="Projects delivered" />
              <Stat value="99.98%" label="Average uptime" />
              <Stat value="32%" label="Average efficiency gain" />
            </div>
          </div>
          <div className="section-reveal delay-2 relative lg:-mt-10">
            <div className="glass-orb right-[-1rem] top-10 h-20 w-20" />
            <div className="glass-orb bottom-6 left-[-1.5rem] h-28 w-28 [animation-delay:2s]" />
            <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(0,229,255,0.3),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(56,189,248,0.2),transparent_35%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[rgba(0,229,255,0.2)] bg-[linear-gradient(180deg,rgba(15,23,42,0.94),rgba(2,6,23,0.98))] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
              <div className="ambient-line top-5" />
              <div className="pointer-events-none absolute inset-x-6 top-4 h-10 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_72%)] blur-2xl" />
              <Image
                src="/hero-dashboard.svg"
                alt="Auronex dashboard interface showcasing technology performance metrics"
                width={960}
                height={880}
                priority
                className="relative z-10 h-auto w-full rounded-[1.75rem] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
