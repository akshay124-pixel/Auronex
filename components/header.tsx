import Image from "next/image";

import { Button } from "@/components/button";
import { Container } from "@/components/ui";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#case-studies" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[linear-gradient(180deg,rgba(2,6,23,0.82),rgba(2,6,23,0.68))] backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" className="text-white" aria-label="Auronex home">
          <Image
            src="/logo.png"
            alt="Auronex logo"
            width={176}
            height={96}
            className="h-auto w-[156px] sm:w-[176px]"
            priority
          />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-[var(--color-muted)] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link-smooth hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button href="#contact" className="hidden sm:inline-flex">
          Book a Strategy Call
        </Button>
      </Container>
    </header>
  );
}
