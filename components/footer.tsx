import Image from "next/image";

import { Container } from "@/components/ui";

const footerLinks = {
  Company: ["About", "Process", "Case Studies", "Contact"],
  Services: ["Custom Software", "Cloud Solutions", "AI Automation", "DevOps"],
  Resources: ["Insights", "Security", "FAQ", "Privacy"],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.14),transparent_70%)]" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,0.8fr)]">
          <div>
            <Image
              src="/logo.png"
              alt="Auronex logo"
              width={180}
              height={98}
              className="h-auto w-[160px] sm:w-[180px] drop-shadow-[0_0_24px_rgba(0,229,255,0.12)]"
            />
            <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--color-muted)]">
              Modern IT services for companies upgrading critical systems, accelerating product
              delivery, and building scalable digital operations.
            </p>
            <div className="mt-6 space-y-2 text-sm text-[var(--color-muted)]">
              <p>auronexit@gmail.com</p>
              <p>+91 87553 80144</p>
              <p>Chandigarh</p>
            </div>
          </div>
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
                {group}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-[var(--color-muted)]">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-link-smooth hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Auronex. All rights reserved.</p>
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/akshay-pratap-singh-dev/"
              target="_blank"
              rel="noreferrer"
              className="text-link-smooth hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="mailto:auronexit@gmail.com"
              className="text-link-smooth hover:text-white"
            >
              Email
            </a>
            <a
              href="https://github.com/akshay124-pixel"
              target="_blank"
              rel="noreferrer"
              className="text-link-smooth hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
