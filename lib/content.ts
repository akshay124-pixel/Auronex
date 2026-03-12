import {
  Activity,
  Bot,
  Cloud,
  Cog,
  Cpu,
  Gauge,
  Layers3,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";

export const painPoints = [
  {
    icon: Gauge,
    title: "Slow, fragile systems",
    description:
      "Legacy applications drag down delivery speed, frustrate teams, and create avoidable downtime.",
  },
  {
    icon: Layers3,
    title: "Disconnected tools",
    description:
      "Siloed platforms force manual work and reduce visibility across operations, sales, and service delivery.",
  },
  {
    icon: Activity,
    title: "Scaling bottlenecks",
    description:
      "Growth stalls when infrastructure, data pipelines, and workflows were not built for increased demand.",
  },
  {
    icon: ShieldCheck,
    title: "Operational risk",
    description:
      "Weak observability, security gaps, and manual processes leave critical systems exposed.",
  },
] as const;

export const solutions = [
  "Cloud-native platforms designed for resilience and cost control.",
  "Automation layers that eliminate repetitive work and accelerate response times.",
  "Performance tuning across frontend, backend, and infrastructure.",
  "Data-driven delivery with observability, SLAs, and measurable improvement plans.",
] as const;

export const services = [
  {
    icon: Cpu,
    title: "Custom Software Development",
    description:
      "Build internal platforms and client-facing products that move faster than off-the-shelf tools.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Migrate, modernize, and optimize workloads on scalable cloud infrastructure.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Deploy intelligent automations that reduce manual effort and improve decision speed.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Development",
    description:
      "Create polished digital experiences with fast interfaces and conversion-focused UX.",
  },
  {
    icon: Workflow,
    title: "DevOps & Infrastructure",
    description:
      "Streamline release cycles with secure CI/CD, observability, and infrastructure automation.",
  },
  {
    icon: Cog,
    title: "System Integration",
    description:
      "Connect core business systems so data, workflows, and customer operations work as one.",
  },
] as const;

export const caseStudies = [
  {
    company: "Finovo Capital",
    problem:
      "A fragmented customer onboarding stack caused delays, drop-offs, and manual compliance reviews.",
    solution:
      "Auronex rebuilt the onboarding flow with workflow automation, API integrations, and a real-time operations dashboard.",
    result: "62% faster onboarding, 38% lower ops cost, and a 24-point NPS increase.",
  },
  {
    company: "Northstar Health",
    problem:
      "Legacy infrastructure could not handle demand spikes across patient-facing applications.",
    solution:
      "We migrated services to a resilient cloud architecture with autoscaling, monitoring, and release safeguards.",
    result: "99.98% uptime, 47% faster releases, and 31% lower infrastructure waste.",
  },
  {
    company: "Vector Retail",
    problem:
      "Teams were losing revenue because data and ecommerce systems were not synchronized in real time.",
    solution:
      "Auronex introduced event-driven integrations and analytics pipelines for inventory, fulfillment, and CRM.",
    result: "18% lift in conversion, 72% fewer sync failures, and same-day reporting across teams.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Auronex brought senior-level technical strategy and execution discipline from day one. The delivery speed was exceptional.",
    name: "Maya Chen",
    role: "COO, Finovo Capital",
  },
  {
    quote:
      "Their team translated complex infrastructure problems into a clear roadmap, then executed without drama.",
    name: "Ethan Brooks",
    role: "VP Technology, Northstar Health",
  },
  {
    quote:
      "We saw measurable business impact within the first quarter. That is rare with consulting partners.",
    name: "Isabella Torres",
    role: "CEO, Vector Retail",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Audit systems, identify bottlenecks, and align priorities with commercial goals.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "Define architecture, delivery plan, KPIs, and risk controls before execution begins.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Ship in focused sprints with senior engineering oversight, transparent reporting, and QA rigor.",
  },
  {
    step: "04",
    title: "Launch & Scale",
    description:
      "Deploy confidently, monitor performance, and continuously optimize for growth.",
  },
] as const;

export const benefits = [
  "Faster systems that improve employee and customer experience.",
  "Scalable infrastructure ready for growth without rework.",
  "Lower operating cost through automation and better architecture.",
  "Reduced risk with stronger observability, security, and support processes.",
] as const;

export const faqs = [
  {
    question: "How do you price projects?",
    answer:
      "Most engagements start with a paid strategy sprint, followed by a fixed-scope delivery plan or a retained product engineering model depending on complexity.",
  },
  {
    question: "What timelines are typical?",
    answer:
      "Strategy and architecture engagements usually take two to four weeks. Full delivery timelines depend on scope, but most MVP and modernization projects run eight to sixteen weeks.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We build across modern JavaScript stacks, cloud platforms, APIs, data workflows, DevOps tooling, and AI-enabled automation systems.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We offer launch support, SLA-backed maintenance, observability setup, and ongoing optimization retainers for teams that need continuity.",
  },
] as const;
