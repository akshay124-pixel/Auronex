"use client";

import Link from "next/link";
import { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
}) {
  const isHashLink = href.startsWith("#");

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    props.onClick?.(event);

    if (event.defaultPrevented || !isHashLink) {
      return;
    }

    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    event.preventDefault();

    const headerOffset = 104;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.history.pushState(null, "", href);
    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: "smooth",
    });
  }

  const sharedClassName = cn(
    "interactive-smooth group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
    variant === "primary" &&
      "bg-[var(--color-accent)] text-slate-950 shadow-[0_16px_40px_rgba(0,229,255,0.18)] hover:-translate-y-[1px] hover:shadow-[0_24px_56px_rgba(0,229,255,0.24)]",
    variant === "secondary" &&
      "border border-[rgba(0,229,255,0.35)] bg-white/[0.02] text-white backdrop-blur hover:-translate-y-[1px] hover:border-[var(--color-accent)] hover:bg-[rgba(0,229,255,0.08)] hover:shadow-[0_18px_44px_rgba(2,6,23,0.18)]",
    className,
  );

  const innerContent = (
    <>
      <span className="pointer-events-none absolute inset-0 -translate-x-[135%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] opacity-0 transition duration-[1400ms] ease-[var(--ease-premium)] group-hover:translate-x-[135%] group-hover:opacity-100" />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (isHashLink) {
    return (
      <a href={href} className={sharedClassName} onClick={handleClick} {...props}>
        {innerContent}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={sharedClassName}
      onClick={handleClick}
      {...props}
    >
      {innerContent}
    </Link>
  );
}
