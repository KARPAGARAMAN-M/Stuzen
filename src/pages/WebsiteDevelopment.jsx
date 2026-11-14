import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Globe,
  Zap,
  CheckCircle,
  Shield,
  Layers,
  Code,
  Laptop,
  Check,
  Activity,
  Sparkles,
  Search,
  ExternalLink,
} from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

export default function WebsiteDevelopment() {
  const faqs = [
    {
      question: 'How long does a typical custom website build take?',
      answer:
        'Timelines vary based on scope and architectural complexity. A high-performance corporate marketing website typically requires 6 to 9 weeks from discovery to deployment. Custom enterprise applications, complex portal integrations, or migrations with tens of thousands of dynamic records generally span 10 to 16 weeks. We work with strict milestone sprint deliveries so progress is continuously verifiable.',
    },
    {
      question: 'Will our website be fully responsive across mobile and tablet devices?',
      answer:
        'Yes, entirely. We build with a responsive-first fluid layout paradigm tested meticulously against over 25 device viewports—from 360px mobile viewports up to 4K ultrawide monitors. Touch targets, dynamic typography scaling, and asset resolutions adjust dynamically without performance bottlenecks or horizontal scroll errors.',
    },
    {
      question: 'Can our in-house team edit and publish content after launch?',
      answer:
        'Absolutely. We integrate modern headless content management systems (such as Sanity, Strapi, or Contentful) allowing non-technical marketing and editorial teams to update pages, publish blogs, edit case studies, and change banners effortlessly without needing developer intervention.',
    },
    {
      question: 'How do you achieve 95+ Core Web Vitals and sub-second load times?',
      answer:
        'We enforce strict performance budgets: static generation with edge caching, modular CSS zero-runtime bundles, automatic AVIF/WebP image compression, deferred third-party script loading, and tree-shaken JavaScript dependencies that eliminate render-blocking assets.',
    },
    {
      question: 'Do you provide post-launch maintenance, monitoring, and SLA support?',
      answer:
        'Yes. Every deployment includes an initial 30-day warranty period for zero-cost adjustments and telemetry monitoring. Afterward, we offer structured monthly SLA maintenance retainers covering uptime guarantees, dependency upgrades, security patching, and ongoing performance audits.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <section className="relative w-full overflow-hidden bg-surface pt-12 pb-16 sm:pb-20 lg:pt-16 lg:pb-28">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-8 sm:gap-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 font-label-code text-label-code text-outline">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <span>/</span>
            <span className="text-primary font-semibold">Website Development</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high w-fit shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-bold">
                  ENTERPRISE WEB ENGINEERING
                </span>
              </div>

              <h1 className="font-hero-display text-[clamp(1.85rem,6vw,3.75rem)] leading-[1.1] font-extrabold text-on-surface tracking-tight break-words">
                Websites Built for Your Business.
              </h1>

              <p className="font-body-large text-body-large text-on-surface-variant max-w-2xl leading-relaxed">
                From corporate platforms to custom web portals, we engineer high-converting, sub-second web solutions designed for brand prestige, accessibility, and high organic search performance.
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
                <div className="p-3.5 rounded-lg bg-surface-container-low border border-[#E5EAF0]">
                  <div className="font-headline-sub text-headline-sub text-primary font-bold">&lt; 0.6s</div>
                  <span className="font-label-code text-label-code text-outline uppercase">Time to Interactive</span>
                </div>
                <div className="p-3.5 rounded-lg bg-surface-container-low border border-[#E5EAF0]">
                  <div className="font-headline-sub text-headline-sub text-primary font-bold">99.8%</div>
                  <span className="font-label-code text-label-code text-outline uppercase">Core Web Vitals Pass</span>
                </div>
                <div className="p-3.5 rounded-lg bg-surface-container-low border border-[#E5EAF0]">
                  <div className="font-headline-sub text-headline-sub text-primary font-bold">100%</div>
                  <span className="font-label-code text-label-code text-outline uppercase">WCAG 2.1 AA Compliance</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-lg bg-primary-container text-on-primary font-label-prominent text-label-prominent shadow-md hover:bg-primary transition-all duration-200 transform hover:-translate-y-0.5 gap-2 group"
                >
                  <span>Build Your Website</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-lg bg-surface-container-lowest text-on-surface font-label-prominent text-label-prominent shadow-sm border border-[#E5EAF0] hover:bg-surface-container transition-all duration-200"
                >
                  View Web Portfolio
                </Link>
              </div>
            </div>

            {/* Right: Layered Browser Frame Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-surface-container-lowest border border-[#E5EAF0]">
                {/* Window Title Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-surface-container border-b border-[#E5EAF0]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-error-container" />
                    <span className="w-3 h-3 rounded-full bg-surface-container-highest" />
                    <span className="w-3 h-3 rounded-full bg-primary-fixed" />
                  </div>
                  <div className="px-3 py-1 rounded bg-surface-container-lowest text-outline font-label-code text-label-code text-[11px] truncate max-w-[200px]">
                    https://enterprise.stuzen.sys/platform/v2
                  </div>
                  <div className="w-4" />
                </div>
                <div className="relative h-72 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Corporate SaaS landing interface mockup"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaqFhmp2V5hRZ9hnpHBWVJFmN4TvJq234V8b2q9_m4Xf_r93K7yGk"
                  />
                  {/* Lighthouse Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-surface-container-lowest/95 backdrop-blur-md border border-[#E5EAF0] shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                      <span className="font-label-code text-label-code text-on-surface font-bold">Lighthouse Core</span>
                    </div>
                    <div className="flex items-center gap-3 font-label-code text-label-code">
                      <span className="text-green-600 font-bold">Perf: 100</span>
                      <span className="text-green-600 font-bold">A11y: 100</span>
                      <span className="text-green-600 font-bold">SEO: 100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 3 PILLARS */}
      <section className="w-full py-14 sm:py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-12 sm:gap-16">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              THE VALUE EQUATION
            </span>
            <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
              Why Modern Web Architecture Dictates Business Velocity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Sub-Second Execution</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Slow sites kill revenue. Every 100ms delay degrades user conversion rates by 7%. We build edge-cached Jamstack architectures that render in under a second worldwide.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Semantic Structural Integrity</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Search crawlers and assistive readers reward rigorous DOM semantics. We engineer valid schemas, clean microdata, and WCAG accessibility standards that maximize organic search ranking.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Conversion-Engineered UX</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Every layout is drafted to guide high-intent prospects logically from executive introduction to booking consultations, supported by low-friction interactive form design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 6 WEB SOLUTIONS GRID */}
      <section className="w-full py-14 sm:py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-12 sm:gap-16">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              SOLUTIONS SCOPE
            </span>
            <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
              Engineered Web Solutions for Every Organizational Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code text-primary font-bold">01 // SOLUTION</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Corporate & Enterprise Websites</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Authoritative brand flagships with structured multi-tier navigation, executive leadership profiles, and multi-region localization support.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code text-primary font-bold">02 // SOLUTION</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">High-Performance Business Sites</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Sales-optimized platforms built for professional service practices, consultancies, and B2B providers demanding high qualification lead intake.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code text-primary font-bold">03 // SOLUTION</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Custom Web Applications</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Interactive SaaS workspaces, customer billing portals, and analytics dashboards with reactive components and secure role-based access.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code text-primary font-bold">04 // SOLUTION</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Responsive UI/UX Development</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Translating Figma and Stitch design tokens into production-grade React interfaces with smooth transitions and zero visual displacement.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code text-primary font-bold">05 // SOLUTION</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Website Modernization & Migration</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Refactoring brittle WordPress and legacy monolithic CMS setups into lightweight headless architectures with zero loss of historical SEO URLs.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code text-primary font-bold">06 // SOLUTION</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Portfolio & Creative Showcases</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Media-rich interactive presentations showcasing high-resolution project case studies, client metrics, and engineering benchmarks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: 5 PROCESS STEPS */}
      <section className="w-full py-14 sm:py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-12 sm:gap-16">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              DELIVERY STEPS
            </span>
            <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
              From Information Architecture to Millisecond Deployments
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-3">
              <span className="font-label-code text-label-code text-primary font-bold">STEP 01</span>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Discovery & Sitemap</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Auditing user pathways, content hierarchies, and business milestones.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-3">
              <span className="font-label-code text-label-code text-primary font-bold">STEP 02</span>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Wireframes & Tokens</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Establishing the typography scale, colors, and layout foundations.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-3">
              <span className="font-label-code text-label-code text-primary font-bold">STEP 03</span>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Frontend Engineering</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Developing clean, reusable React components with zero bloat.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-3">
              <span className="font-label-code text-label-code text-primary font-bold">STEP 04</span>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">QA & Accessibility</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Rigorous testing on real devices, keyboard nav, and screen readers.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-3">
              <span className="font-label-code text-label-code text-primary font-bold">STEP 05</span>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Launch & Optimization</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Zero-downtime cutover with edge distribution and search indexation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TECH STACK BADGES */}
      <section className="w-full py-12 sm:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-8">
          <div className="max-w-xl">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              STANDARDS & TOOLING
            </span>
            <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface mt-1">
              Built on Battle-Tested Modern Standards
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {['React', 'Vite', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL', 'AWS Edge'].map((tech) => (
              <div
                key={tech}
                className="p-3.5 sm:p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] text-center font-label-prominent text-xs sm:text-label-prominent text-on-surface hover:border-primary/40 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: SELECTED CASE STUDIES */}
      <section className="w-full py-14 sm:py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-12 sm:gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl flex flex-col gap-3">
              <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
                PROVEN RESULTS
              </span>
              <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
                Selected Web Engineering Case Studies
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 font-label-prominent text-label-prominent text-primary hover:text-primary-container transition-colors shrink-0"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="rounded-2xl overflow-hidden bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col">
              <div className="h-56 sm:h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover"
                  alt="Apex Financial Platform"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuZcWj8079rhvrLURNJ0ATcqh9S7bNsJiTIEtd7ZiyvB-VbNRY3lQFJhCbGndp4lG54dDrhMdA-jP238KfdjRlqOuFFfPF1F1qHmFu-GEitxTtGC71oiwjUJ9MtWKGI7Jtyuzjfa2J-Jbhl0m8-iF_x3bKSbrTX-0-9voAeT4TinOzxfmI6ckaNNKMGhK24OYKBzq4QRIKlracSkBeBmO8niGwjwlZn_nQqUUYVQ"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col gap-4">
                <span className="font-label-code text-label-code text-outline uppercase">FINTECH & CAPITAL</span>
                <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Apex Financial Corporate Platform</h3>
                <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                  Enterprise wealth platform handling high-throughput transactional workflows with sub-second page delivery and 100% Lighthouse audit benchmarks.
                </p>
                <div className="pt-2">
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary hover:text-primary-container transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col">
              <div className="h-56 sm:h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover"
                  alt="Vantage Health Technology Portal"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKcQZQBMRerrnL1zbTm1CmDyJGe1c8g1_v3b4Xy-Nq0"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col gap-4">
                <span className="font-label-code text-label-code text-outline uppercase">HEALTHCARE & MEDTECH</span>
                <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Vantage Health Technology Portal</h3>
                <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                  HIPAA-compliant web platform serving 1.2M patients with WebRTC telehealth video integrations and WCAG 2.1 AAA accessible reading flows.
                </p>
                <div className="pt-2">
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary hover:text-primary-container transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQS */}
      <section className="w-full py-14 sm:py-20 lg:py-28 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-10 sm:gap-12">
          <div className="text-center flex flex-col items-center gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              CLEAR ANSWERS
            </span>
            <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
              Frequently Asked Questions
            </h2>
            <p className="font-body-large text-body-large text-on-surface-variant">
              Everything you need to know about our web development scope, timelines, maintenance, and technical execution.
            </p>
          </div>

          <FAQAccordion items={faqs} defaultOpenIndex={0} />
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <CTASection
        tag="START YOUR WEB PROJECT"
        title="Ready to Elevate Your Web Presence?"
        description="Let's build a fast, secure, and brand-defining website engineered to drive measurable enterprise outcomes."
        buttonText="Request an Architectural Quote"
        buttonLink="/contact"
      />
    </div>
  );
}

