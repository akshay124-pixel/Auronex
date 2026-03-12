import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "section-reveal delay-1 max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)] shadow-[0_0_24px_rgba(0,229,255,0.08)] backdrop-blur">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export function GlowCard({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "interactive-card-smooth section-reveal delay-2 group relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur hover:-translate-y-[1px] hover:border-[rgba(0,229,255,0.3)] hover:bg-white/[0.046] hover:shadow-[0_16px_38px_rgba(0,0,0,0.2),0_0_20px_rgba(0,229,255,0.07)]",
        className,
      )}
      {...props}
    >
      <div className="interactive-card-smooth pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.12),transparent_65%)] opacity-75 group-hover:opacity-100" />
      <div className="interactive-card-smooth pointer-events-none absolute -right-12 top-8 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.16),transparent_68%)] blur-2xl group-hover:scale-[1.025]" />
      <div className="interactive-card-smooth pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.6)] to-transparent opacity-0 group-hover:opacity-100" />
      {children}
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="section-reveal delay-3 rounded-2xl border border-white/8 bg-white/[0.025] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <div className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{value}</div>
      <div className="mt-2 text-sm text-[var(--color-muted)]">{label}</div>
    </div>
  );
}

export function LogoCloudItem({ children }: { children: ReactNode }) {
  return (
    <div className="interactive-card-smooth section-reveal delay-2 flex h-16 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] px-6 text-sm font-semibold uppercase tracking-[0.24em] text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:-translate-y-[1px] hover:border-[rgba(0,229,255,0.18)] hover:text-white hover:shadow-[0_12px_28px_rgba(2,6,23,0.16)]">
      {children}
    </div>
  );
}
