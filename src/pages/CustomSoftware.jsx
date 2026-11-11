import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Terminal,
  Server,
  Database,
  Layers,
  Cpu,
  Shield,
  CheckCircle,
  Activity,
  Code,
  FileCode,
  Network,
  Lock,
  Workflow,
  Check,
  X,
} from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

export default function CustomSoftware() {
  const faqs = [
    {
      question: 'What technologies do you use for backend and frontend custom software?',
      answer:
        'We employ enterprise-grade, strongly typed stacks selected according to workload concurrency, data volume, and latency targets. Backend frameworks typically rely on Go, Node.js/TypeScript, Python, and C#/.NET Core, paired with PostgreSQL, Redis, and event message streaming via Kafka. Frontend applications are built using modern React, Next.js, and TypeScript, backed by comprehensive component design systems.',
    },
    {
      question: 'Who owns the intellectual property (IP) and source code upon completion?',
      answer:
        'You do—100%. Upon final sprint acceptance, all intellectual property, repository commits, architecture documentation, deployment configurations, and credentials are formally transferred to your enterprise. We retain zero proprietary licenses, eliminating vendor lock-in.',
    },
    {
      question: 'Can your custom software integrate seamlessly with our existing legacy systems?',
      answer:
        'Yes. We specialize in non-destructive legacy modernization. We engineer secure API middleware, database replication bridges, and bidirectional webhooks that allow new custom modules to communicate seamlessly with existing SAP, Oracle, AS400, or custom SQL legacy databases without disrupting live day-to-day operations.',
    },
    {
      question: 'How do you handle software scalability and database performance as user volume grows?',
      answer:
        'Every platform is architected with horizontal scalability from sprint one. We deploy containerized microservices orchestrated via Kubernetes, implement connection pooling, configure Redis distributed caching, and optimize database queries using automated EXPLAIN ANALYZE index profiling to maintain sub-50ms latency under 100x traffic spikes.',
    },
    {
      question: 'What does your post-launch warranty and engineering support SLA look like?',
      answer:
        'Every software delivery includes an initial 30-day comprehensive stabilization warranty covering proactive telemetry monitoring and bug resolution. Following handoff, clients can opt for structured monthly engineering SLAs guaranteeing 99.99% uptime, 15-minute critical incident response times, and ongoing feature iterations.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <section className="relative w-full overflow-hidden bg-surface pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 font-label-code text-label-code text-outline">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <span>/</span>
            <span className="text-primary font-semibold">Custom Software</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high w-fit shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-bold">
                  DETERMINISTIC SOFTWARE ENGINEERING
                </span>
              </div>

              <h1 className="font-hero-display text-hero-display text-on-surface tracking-tight leading-none text-balance">
                Software Solutions Designed Around Your Business.
              </h1>

              <p className="font-body-large text-body-large text-on-surface-variant max-w-2xl leading-relaxed">
                When generic software limits your growth or forces costly workarounds, Stuzen designs and constructs bespoke cloud backends, microservices, and databases calibrated precisely for your enterprise domain workflows.
              </p>

              {/* Specs Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-lg bg-surface-container-low border border-[#E5EAF0]">
                  <div className="font-headline-sub text-headline-sub text-primary font-bold">100%</div>
                  <span className="font-label-code text-label-code text-outline uppercase">Full IP Ownership</span>
                </div>
                <div className="p-3.5 rounded-lg bg-surface-container-low border border-[#E5EAF0]">
                  <div className="font-headline-sub text-headline-sub text-primary font-bold">99.99%</div>
                  <span className="font-label-code text-label-code text-outline uppercase">Uptime Architecture</span>
                </div>
                <div className="p-3.5 rounded-lg bg-surface-container-low border border-[#E5EAF0]">
                  <div className="font-headline-sub text-headline-sub text-primary font-bold">SOC-2</div>
                  <span className="font-label-code text-label-code text-outline uppercase">Security Baseline</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-lg bg-primary-container text-on-primary font-label-prominent text-label-prominent shadow-md hover:bg-primary transition-all duration-200 transform hover:-translate-y-0.5 gap-2 group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-lg bg-surface-container-lowest text-on-surface font-label-prominent text-label-prominent shadow-sm border border-[#E5EAF0] hover:bg-surface-container transition-all duration-200"
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* Right: Architecture Diagram Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl p-6 bg-surface-container-lowest shadow-2xl border border-[#E5EAF0] flex flex-col gap-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5EAF0]">
                  <span className="font-label-prominent text-label-prominent text-on-surface flex items-center gap-2">
                    <Server className="w-4 h-4 text-primary" /> Event Mesh Topology
                  </span>
                  <span className="font-label-code text-label-code text-secondary font-semibold">Active Pipeline</span>
                </div>

                <div className="flex flex-col gap-3 font-body-small text-body-small">
                  <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-primary" /> Ingestion Gateway API
                    </span>
                    <span className="font-label-code text-label-code text-outline">&lt; 8ms</span>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-secondary" /> Event Bus (Kafka / NATS)
                    </span>
                    <span className="font-label-code text-label-code text-outline">120k msg/s</span>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-primary" /> Clustered Shards (PostgreSQL)
                    </span>
                    <span className="font-label-code text-label-code text-outline">ACID Strict</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-surface-container flex items-center justify-between font-label-code text-label-code">
                  <span className="text-on-surface font-semibold">Zero Single Point of Failure</span>
                  <span className="text-primary font-bold">Multi-AZ Sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OFF-THE-SHELF VS CUSTOM SOFTWARE */}
      <section className="w-full py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
          <div className="max-w-3xl flex flex-col gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              THE STRATEGIC REALITY
            </span>
            <h2 className="font-headline-section text-headline-section text-on-surface">
              Off-the-shelf software forces compromise. We engineer competitive leverage.
            </h2>
            <p className="font-body-default text-body-default text-on-surface-variant">
              Commercial SaaS subscriptions lock you into generic workflows and per-seat fee inflation. Bespoke software turns your proprietary process into an unassailable asset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Off-the-shelf Downside Card */}
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-error/20 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Off-the-Shelf Packages</h3>
                <span className="px-3 py-1 rounded-full bg-error-container text-on-error-container font-label-code text-label-code font-bold">
                  Fragile Lock-In
                </span>
              </div>
              <ul className="flex flex-col gap-3 font-body-default text-body-default text-on-surface-variant">
                <li className="flex items-start gap-2.5">
                  <X className="w-5 h-5 text-error shrink-0 mt-0.5" />
                  <span>Escalating per-seat subscription licenses that penalize headcount growth</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-5 h-5 text-error shrink-0 mt-0.5" />
                  <span>Forces your internal operations to adapt to inflexible vendor limitations</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-5 h-5 text-error shrink-0 mt-0.5" />
                  <span>Zero intellectual property equity; your data lives in a proprietary walled garden</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-5 h-5 text-error shrink-0 mt-0.5" />
                  <span>Vulnerable to unexpected vendor price hikes, feature deprecations, or shutdowns</span>
                </li>
              </ul>
            </div>

            {/* Custom Advantage Card */}
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-md border border-primary/30 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Stuzen Custom Systems</h3>
                <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-code text-label-code font-bold">
                  Permanent Value
                </span>
              </div>
              <ul className="flex flex-col gap-3 font-body-default text-body-default text-on-surface">
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Zero perpetual per-seat license taxes; scale users and records infinitely</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Engineered around your exact competitive workflows and business domain rules</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>100% intellectual property ownership transferred to your enterprise balance sheet</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Complete control over security audits, data sovereignty, and deployment roadmap</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 6 SOLUTION CATEGORIES */}
      <section className="w-full py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              SOLUTIONS DIRECTORY
            </span>
            <h2 className="font-headline-section text-headline-section text-on-surface">
              Tailored Solution Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code text-primary font-bold">01 // DOMAIN</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Business Management Software</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Integrated enterprise resource management platforms synchronizing accounting, supply chain logistics, and multi-entity operations.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code text-primary font-bold">02 // DOMAIN</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Workflow Management Systems</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Automated multi-step approval pipelines, SLA milestone tracking, and task triage systems that eliminate human handoff bottlenecks.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code text-primary font-bold">03 // DOMAIN</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Custom Business Applications</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Bespoke transactional web apps, partner booking engines, and customer billing portals designed for high concurrency and compliance.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code text-primary font-bold">04 // DOMAIN</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Database-Driven Applications</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                High-performance transactional databases, real-time analytics query engines, and distributed caching topologies built on PostgreSQL and Redis.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code text-primary font-bold">05 // DOMAIN</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Internal Business Tools & Dashboards</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Custom administrative consoles, telemetry monitoring screens, and operational control rooms giving leadership instant visibility into live KPIs.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code text-primary font-bold">06 // DOMAIN</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Process-Oriented Software Solutions</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Specialized industry algorithms such as route optimization, capital allocation waterfalls, and automated regulatory compliance reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: IMPACT PILLARS */}
      <section className="w-full py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              OUTCOMES
            </span>
            <h2 className="font-headline-section text-headline-section text-on-surface">
              Tangible Business Impact Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <Workflow className="w-5 h-5" />
              </div>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Precision Functionality</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Zero bloat, zero unnecessary fields. Every button, input, and database table maps to an actual operational requirement.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Scalable Long-Term Architecture</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Microservice boundaries and clean abstractions that allow your engineering team to iterate features without fear of regressions.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <FileCode className="w-5 h-5" />
              </div>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Full IP Ownership</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Complete intellectual property assignment, git repos, CI/CD configs, and documentation transferred directly upon completion.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Enterprise Security & Compliance</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                SOC-2 Type II standards, AES-256 encryption at rest, TLS 1.3 in transit, and role-based access control (RBAC).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: 6 LIFECYCLE STAGES */}
      <section className="w-full py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              ENGINEERING RIGOR
            </span>
            <h2 className="font-headline-section text-headline-section text-on-surface">
              Our Software Engineering Lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-3">
              <span className="font-label-code text-label-code text-primary font-bold">STAGE 01</span>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Technical Discovery & Domain Modeling</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Deep-dive interviews, entity mapping, and business rule cataloging to eliminate architectural ambiguity.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-3">
              <span className="font-label-code text-label-code text-primary font-bold">STAGE 02</span>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Architecture & Schema Specification</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Drafting database ERDs, API contract specs, caching strategies, and security threat models.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-3">
              <span className="font-label-code text-label-code text-primary font-bold">STAGE 03</span>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Agile Sprints & Clean Code</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Modular backend engineering with strong typing, peer reviews, and automated staging CI builds.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-3">
              <span className="font-label-code text-label-code text-primary font-bold">STAGE 04</span>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Automated Testing & Review Gates</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Unit, integration, and load testing simulating peak enterprise transaction concurrency.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-3">
              <span className="font-label-code text-label-code text-primary font-bold">STAGE 05</span>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Secure Deployment & Cloud Provisioning</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Infrastructure as Code (Terraform) rolling out to multi-AZ clusters with automated failover.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-3">
              <span className="font-label-code text-label-code text-primary font-bold">STAGE 06</span>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Proactive Monitoring & Evolution</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Real-time telemetry, error tracking, database index tuning, and ongoing iteration support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FEATURED IMPLEMENTATIONS */}
      <section className="w-full py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl flex flex-col gap-3">
              <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
                ENTERPRISE WORK
              </span>
              <h2 className="font-headline-section text-headline-section text-on-surface">
                Featured Enterprise Implementations
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 font-label-prominent text-label-prominent text-primary hover:text-primary-container transition-colors shrink-0"
            >
              <span>View Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover"
                  alt="NovaLogix Fleet Ops platform"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWza0jc9rDMjPpx8tV0IkF3GWbAl"
                />
              </div>
              <div className="p-8 flex flex-col gap-4">
                <span className="font-label-code text-label-code text-outline uppercase">TELEMATICS & SUPPLY CHAIN</span>
                <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">
                  NovaLogix Fleet Ops: Cloud Dispatch & Real-Time Telemetry Engine
                </h3>
                <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                  High-scale workflow orchestration and fleet telematics platform managing over 45,000 active freight units across North America.
                </p>
                <div className="pt-2">
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary hover:text-primary-container transition-colors"
                  >
                    <span>Read Full Implementation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover"
                  alt="Omnia Core ERP"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkCD1e8TtkPI5f9khHL82CVUeacB"
                />
              </div>
              <div className="p-8 flex flex-col gap-4">
                <span className="font-label-code text-label-code text-outline uppercase">ERP & MULTI-CURRENCY LEDGER</span>
                <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">
                  Omnia Core ERP: Multi-Entity Inventory & Financial Reconciliation
                </h3>
                <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                  End-to-end investment banking ERP handling cross-border allocations, capital calls, and automated compliance auditing for 14 institutional funds.
                </p>
                <div className="pt-2">
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary hover:text-primary-container transition-colors"
                  >
                    <span>Read Full Implementation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQS */}
      <section className="w-full py-20 lg:py-28 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
          <div className="text-center flex flex-col items-center gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              GOT QUESTIONS?
            </span>
            <h2 className="font-headline-section text-headline-section text-on-surface">
              Frequently Asked Questions
            </h2>
            <p className="font-body-large text-body-large text-on-surface-variant">
              Clear, direct answers regarding technology selection, IP ownership, integration capabilities, and post-launch maintenance.
            </p>
          </div>

          <FAQAccordion items={faqs} defaultOpenIndex={0} />
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <CTASection
        tag="START YOUR SOFTWARE JOURNEY"
        title="Have an Ambitious Software Project in Mind?"
        description="Schedule a technical consultation with our lead software architects to review your technical requirements and receive an engineering roadmap."
        buttonText="Discuss Your Architecture"
        buttonLink="/contact"
      />
    </div>
  );
}

