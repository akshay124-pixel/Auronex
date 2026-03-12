"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/button";
import { Container } from "@/components/ui";

export function CtaSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    tone: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("Full Name") || "").trim(),
      email: String(formData.get("Work Email") || "").trim(),
      goals: String(formData.get("Project Goals") || "").trim(),
    };

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Submission failed. Please try again.");
      }

      form.reset();
      setStatus({
        tone: "success",
        message: "Thanks. Your details were sent successfully.",
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Submission failed. Please try again.";

      setStatus({
        tone: "error",
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(0,229,255,0.2)] bg-[linear-gradient(135deg,rgba(0,229,255,0.16),rgba(15,23,42,0.95)_40%,rgba(2,6,23,0.98))] px-6 py-10 shadow-[0_0_60px_rgba(0,229,255,0.12)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[rgba(0,229,255,0.18)] blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-[rgba(0,229,255,0.2)] bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                Final CTA
              </span>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready to build your next technology platform?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                Speak with Auronex to map the fastest path from technical friction to scalable
                systems, stronger delivery, and better business outcomes.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="mailto:akshaypratapsingh1244@gmail.com">Schedule a Consultation</Button>
                <Button href="https://wa.me/918755380144" variant="secondary" target="_blank" rel="noreferrer">
                  WhatsApp Us
                </Button>
              </div>
              <p className="mt-5 text-sm text-white/65">
                Trusted process. Senior engineers. Clear milestones. No bloated engagement model.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="rounded-[1.5rem] border border-white/10 bg-[rgba(2,6,23,0.8)] p-6 backdrop-blur"
            >
              <div className="grid gap-4">
                <label htmlFor="name" className="grid gap-2 text-sm text-white/80">
                  Name
                  <input
                    id="name"
                    name="Full Name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                    className="field-smooth rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 hover:border-white/20 hover:bg-white/[0.07] focus:border-[rgba(0,229,255,0.45)] focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgba(0,229,255,0.08)]"
                  />
                </label>
                <label htmlFor="email" className="grid gap-2 text-sm text-white/80">
                  Work Email
                  <input
                    id="email"
                    name="Work Email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    required
                    className="field-smooth rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 hover:border-white/20 hover:bg-white/[0.07] focus:border-[rgba(0,229,255,0.45)] focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgba(0,229,255,0.08)]"
                  />
                </label>
                <label htmlFor="goals" className="grid gap-2 text-sm text-white/80">
                  Project Goals
                  <textarea
                    id="goals"
                    name="Project Goals"
                    rows={4}
                    placeholder="What are you trying to improve or build?"
                    required
                    className="field-smooth rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 hover:border-white/20 hover:bg-white/[0.07] focus:border-[rgba(0,229,255,0.45)] focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgba(0,229,255,0.08)]"
                  />
                </label>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="interactive-smooth inline-flex w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(0,229,255,0.2)] hover:-translate-y-[1px] hover:shadow-[0_24px_56px_rgba(0,229,255,0.26)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Request Proposal"}
                </button>
                {status ? (
                  <p
                    className={
                      status.tone === "success"
                        ? "text-sm text-emerald-300"
                        : "text-sm text-rose-300"
                    }
                  >
                    {status.message}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
