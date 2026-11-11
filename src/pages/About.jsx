import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Clock,
  Users,
  Compass,
  CheckCircle2,
  Globe,
  Terminal,
  BrainCircuit,
  Lightbulb,
  CheckCircle,
  Eye,
  RefreshCw,
} from 'lucide-react';
import CTASection from '../components/CTASection';

export default function About() {
  const [activeTab, setActiveTab] = useState('web');

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <section className="relative w-full overflow-hidden bg-surface pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-8 sm:gap-10">
          <div className="max-w-4xl w-full flex flex-col gap-5 sm:gap-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-bold">
                ABOUT STUZEN TECHNOLOGIES
              </span>
            </div>

            <h1 className="font-hero-display text-[clamp(1.85rem,6vw,3.75rem)] leading-[1.18] lg:leading-[72px] font-extrabold text-on-surface tracking-tight break-words">
              Engineering Technological Distinction with Purpose and Precision.
            </h1>

            <p className="font-body-large text-body-large text-on-surface-variant max-w-3xl leading-relaxed">
              We bridge executive ambition and deterministic digital engineering. Founded on foundational principles of craftsmanship, Stuzen exists to build software that stands up to enterprise scale and market scrutiny.
            </p>
          </div>

          {/* Dynamic Meta Indicator Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#E5EAF0]">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-label-prominent text-label-prominent text-on-surface">100% On-Time Sprint Cadence</h4>
                <p className="font-body-small text-body-small text-outline mt-0.5">Reliable milestone delivery metrics</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-label-prominent text-label-prominent text-on-surface">Zero Architecture Debt Guarantee</h4>
                <p className="font-body-small text-body-small text-outline mt-0.5">Maintainable, strictly typed codebases</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-label-prominent text-label-prominent text-on-surface">Senior Engineering Guild Model</h4>
                <p className="font-body-small text-body-small text-outline mt-0.5">No junior delegation, only proven architects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COMPANY STORY */}
      <section className="w-full py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E5EAF0] relative h-96">
                <img
                  className="w-full h-full object-cover"
                  alt="Modern high-precision software architecture laboratory"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQi__kbylEk4c8uuutmS7e0oKdav0H1p27kY-0vVpU1-lP61a-7bL8t2e-a1XvLg_z5o12aA-7gY1q72bE0w1bVwI15wR64bJ-7aXhIe5s-q6c9w3k6q"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-5 rounded-xl bg-surface-container-lowest shadow-xl border border-[#E5EAF0] max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 text-primary font-bold font-headline-sub">
                  <span>4.9 / 5.0</span>
                </div>
                <p className="font-body-small text-body-small text-on-surface-variant mt-1">
                  Client Trust Index across 35+ enterprise digital transformations.
                </p>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
                  FOUNDATIONAL MISSION
                </span>
              </div>
              <h2 className="font-headline-section text-headline-section text-on-surface">
                Rejecting Digital Vanity. Embracing Deterministic Engineering.
              </h2>
              <div className="flex flex-col gap-4 font-body-large text-body-large text-on-surface-variant leading-relaxed">
                <p>
                  Stuzen Technologies was founded on a simple, counter-industry observation: modern digital agencies often prioritize surface-level aesthetics over long-term software durability, leaving clients with bloated frameworks, unscalable databases, and fragile technical debt.
                </p>
                <p>
                  We built Stuzen as a corrective antidote. We operate as an elite engineering force of senior practitioners dedicated to technological discipline, architectural clarity, and verifiable business value. Every product we deploy is built to withstand peak traffic surges, regulatory scrutiny, and rapid operational scaling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION & VISION */}
      <section className="w-full py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              STRATEGIC ANCHORS
            </span>
            <h2 className="font-headline-section text-headline-section text-on-surface">
              Our Core Purpose and North Star
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 lg:p-10 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-5">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Our Mission</h3>
              <p className="font-body-large text-body-large text-on-surface-variant leading-relaxed">
                To empower ambitious organizations with mission-critical web platforms, custom enterprise systems, and intelligent automation pipelines that accelerate market velocity while eliminating structural technical debt.
              </p>
            </div>

            <div className="p-8 lg:p-10 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-5">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Our Vision</h3>
              <p className="font-body-large text-body-large text-on-surface-variant leading-relaxed">
                To become the global benchmark for deterministic software engineering—recognized internationally as the technology partner that consistently turns complex enterprise friction into seamless competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FOUR GUIDING PILLARS */}
      <section className="w-full py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              CORE VALUES
            </span>
            <h2 className="font-headline-section text-headline-section text-on-surface">
              Our Four Guiding Pillars
            </h2>
            <p className="font-body-default text-body-default text-on-surface-variant">
              The operational principles that govern every engineering decision and sprint commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-4 border border-[#E5EAF0]">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="font-headline-sub text-body-large font-bold text-on-surface">Innovation with Purpose</h3>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                We reject novelty for novelty's sake. Every architectural choice, library selection, and algorithmic pipeline must directly serve a verified business outcome.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-4 border border-[#E5EAF0]">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="font-headline-sub text-body-large font-bold text-on-surface">Uncompromising Quality</h3>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Code review is not a formality at Stuzen; it is our primary craft discipline. We enforce static type-checking, comprehensive test coverage, and strict zero-regression standards.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-4 border border-[#E5EAF0]">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-headline-sub text-body-large font-bold text-on-surface">Transparent Collaboration</h3>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                No black boxes, no opaque timelines. Clients maintain direct access to repositories, staging telemetry, and daily asynchronous engineering logs.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-4 border border-[#E5EAF0]">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="font-headline-sub text-body-large font-bold text-on-surface">Continuous Improvement</h3>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Technology shifts relentlessly. Our guild dedicates 15% of weekly cycles to R&D, evaluating emergent frameworks, security paradigms, and AI architectures before recommending them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CORE EXPERTISE (Interactive Breakdown) */}
      <section className="w-full py-24 bg-surface" id="expertise-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-bold">
              CAPABILITY MATRIX
            </span>
            <h2 className="font-headline-section text-headline-section text-on-surface mt-2 tracking-tight">
              Our Core Practice Disciplines
            </h2>
            <p className="font-body-default text-body-default text-on-surface-variant mt-4">
              Specialized technical competencies structured to solve foundational business challenges. Select a discipline below to inspect our operational breakdown.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <button
              className={`px-5 py-3 rounded-lg font-label-prominent text-label-prominent transition-all duration-150 ${
                activeTab === 'web'
                  ? 'bg-primary-container text-on-primary shadow-sm'
                  : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
              }`}
              onClick={() => setActiveTab('web')}
              type="button"
            >
              Web Engineering & Interactive Platforms
            </button>
            <button
              className={`px-5 py-3 rounded-lg font-label-prominent text-label-prominent transition-all duration-150 ${
                activeTab === 'software'
                  ? 'bg-primary-container text-on-primary shadow-sm'
                  : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
              }`}
              onClick={() => setActiveTab('software')}
              type="button"
            >
              Custom Enterprise Software
            </button>
            <button
              className={`px-5 py-3 rounded-lg font-label-prominent text-label-prominent transition-all duration-150 ${
                activeTab === 'ai'
                  ? 'bg-primary-container text-on-primary shadow-sm'
                  : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
              }`}
              onClick={() => setActiveTab('ai')}
              type="button"
            >
              Practical AI & Automation
            </button>
          </div>

          {/* Practice Content 1: Web Engineering */}
          {activeTab === 'web' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 lg:p-12 rounded-2xl bg-surface-container-lowest shadow-md border border-[#E5EAF0]">
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="inline-flex items-center gap-2">
                  <Globe className="w-6 h-6 text-primary" />
                  <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
                    PRACTICE AREA 01
                  </span>
                </div>
                <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">
                  High-Speed, Brand-Defining Web Architectures
                </h3>
                <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                  We design and construct digital storefronts, client portals, and corporate web platforms that blend immersive aesthetics with sub-second page loads. Every build features accessibility compliance (WCAG 2.1 AA), responsive fluidity, and rigorous SEO metadata engineering.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-lg bg-surface-container-low border border-[#E5EAF0]/60">
                    <span className="font-label-prominent text-label-prominent font-semibold text-on-surface block mb-1">Core Tech Stack</span>
                    <span className="font-body-small text-body-small text-on-surface-variant">Next.js, TypeScript, Tailwind CSS, Edge Networks</span>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-container-low border border-[#E5EAF0]/60">
                    <span className="font-label-prominent text-label-prominent font-semibold text-on-surface block mb-1">Typical Outcomes</span>
                    <span className="font-body-small text-body-small text-on-surface-variant">98+ Google Lighthouse scores, &gt;45% conversion uplift</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <img
                  className="w-full h-80 object-cover rounded-xl shadow-sm border border-[#E5EAF0]"
                  alt="Clean minimal high-contrast web dashboard interface showing real-time website performance telemetry"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQCKV_QncN0hqbXlMQ9r9AF8146SyqgaQkiCFvxwf-hVKJberbRhR1YCzQIKuLhP2aIY-iU4RYPnmMIsgEDmkYkJxBQ80GWyKQ9ke2sIq5hsG01KNZnGdqEJ_0O8ALwWcfAo_KMmnSTpTYYn1zxymr_oIbqegqJe0C8NY-ZWCbDCArcUxIAzDAHWEQZbIS3X1S0HURgnjip1M2jTahPbJg8IzC7zlPfSOOqsaVmQ"
                />
              </div>
            </div>
          )}

          {/* Practice Content 2: Enterprise Software */}
          {activeTab === 'software' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 lg:p-12 rounded-2xl bg-surface-container-lowest shadow-md border border-[#E5EAF0]">
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="inline-flex items-center gap-2">
                  <Terminal className="w-6 h-6 text-primary" />
                  <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
                    PRACTICE AREA 02
                  </span>
                </div>
                <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">
                  Scalable Microservices & Bespoke Software
                </h3>
                <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                  Replacing unwieldy off-the-shelf software with tailored business systems. We architect secure REST and gRPC API ecosystems, multitenant SaaS engines, and enterprise database infrastructures engineered for horizontal scaling without lock-in.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-lg bg-surface-container-low border border-[#E5EAF0]/60">
                    <span className="font-label-prominent text-label-prominent font-semibold text-on-surface block mb-1">Core Tech Stack</span>
                    <span className="font-body-small text-body-small text-on-surface-variant">Go, Node.js, Python, PostgreSQL, Kubernetes</span>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-container-low border border-[#E5EAF0]/60">
                    <span className="font-label-prominent text-label-prominent font-semibold text-on-surface block mb-1">Typical Outcomes</span>
                    <span className="font-body-small text-body-small text-on-surface-variant">99.99% system availability, resilient data integrity</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <img
                  className="w-full h-80 object-cover rounded-xl shadow-sm border border-[#E5EAF0]"
                  alt="Complex enterprise backend system architecture diagram displayed on an elegant screen"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg_vtY4AHBZRfvdRrJx-DivTyCay1bnqHjzGPxEg0ZgdkXt8NAcY9J-2ZgQBj4RtF9GHFekAXxD3vHqQUJg8RxbQ5qCZrXiCTx-hT2cTh_9sCYAsjQz7XUpCK_hwPIzvlarLHqDnMIoQ3sz1YQVRE7ltQOpHeT7eSb_Mfs80vY0v8PM8WUj62-31ZtZtlDcRMZcBJ4-TnLWaslo7-rwYJj3WeFWdgFrXWWJli76w"
                />
              </div>
            </div>
          )}

          {/* Practice Content 3: Practical AI */}
          {activeTab === 'ai' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 lg:p-12 rounded-2xl bg-surface-container-lowest shadow-md border border-[#E5EAF0]">
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="inline-flex items-center gap-2">
                  <BrainCircuit className="w-6 h-6 text-primary" />
                  <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
                    PRACTICE AREA 03
                  </span>
                </div>
                <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">
                  Operational AI Pipelines & Autonomous Workflows
                </h3>
                <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                  Moving beyond generative novelty into production-grade business leverage. We implement localized LLM fine-tuning, deterministic RAG knowledge retrieval systems, and predictive workflow automation to eliminate repetitive operational overhead.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-lg bg-surface-container-low border border-[#E5EAF0]/60">
                    <span className="font-label-prominent text-label-prominent font-semibold text-on-surface block mb-1">Core Tech Stack</span>
                    <span className="font-body-small text-body-small text-on-surface-variant">LangChain, PyTorch, Vector DBs, Claude & OpenAI APIs</span>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-container-low border border-[#E5EAF0]/60">
                    <span className="font-label-prominent text-label-prominent font-semibold text-on-surface block mb-1">Typical Outcomes</span>
                    <span className="font-body-small text-body-small text-on-surface-variant">60% reduction in manual data processing time</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <img
                  className="w-full h-80 object-cover rounded-xl shadow-sm border border-[#E5EAF0]"
                  alt="Futuristic high-precision vector database semantic graph visualization with clean interconnected nodes"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsbytQlNWbid7cvKFsQ-ozCzwYNyIfYJWQyYCotgkh_OjfMwmNKSMuo_SzSds-CGu-phuRb_bX4nHqn4d4oXWtkGtxyoNhaNwk0KA4HMcb-7MgOCZfqKKukEvKSD6g3YNXqHGoWS_GdIwqNGNR8auhshtxi2hT-kJTBmQy_p9NBDFY6m7tzqopVyLuNt1MRiwR6FYtKWUCMSGCgSQodhe6MG5O-04sYeR8eWt3rQ"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 6: WORKING PHILOSOPHY */}
      <section className="w-full py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              THE TRIAD
            </span>
            <h2 className="font-headline-section text-headline-section text-on-surface">
              Our Working Philosophy
            </h2>
            <p className="font-body-default text-body-default text-on-surface-variant">
              The continuous feedback loop that drives engineering superiority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code uppercase text-primary font-bold">01 // PHASE</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">LEARN</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Before code comes comprehension. We dissect business models, legacy dependencies, regulatory barriers, and stakeholder constraints to model the exact software solution needed.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code uppercase text-primary font-bold">02 // PHASE</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">BUILD</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Craftsmanship in execution. Senior developers write modular, self-documenting code with comprehensive unit testing, continuous integration, and transparent staging builds.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code uppercase text-primary font-bold">03 // PHASE</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">INNOVATE</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Deployment is day zero. We monitor telemetry, optimize runtime throughput, and iteratively layer autonomous enhancements that multiply organizational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CULTURE & MASTERY */}
      <section className="w-full py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
                ENGINEERING GUILD
              </span>
              <h2 className="font-headline-section text-headline-section text-on-surface">
                An Engineering Culture Rooted in Mastery and Mentorship.
              </h2>
              <p className="font-body-large text-body-large text-on-surface-variant leading-relaxed">
                At Stuzen, we deliberately capped company expansion to maintain our senior-first talent density. Every member of our team is an active contributor with over a decade of production software architecture experience.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-body-default text-body-default text-on-surface">10+ Average Years Senior Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-body-default text-body-default text-on-surface">99.8% Code Review Acceptance Rate</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-body-default text-body-default text-on-surface">100% Dedicated Architect Allocation per Client</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-sm h-64 border border-[#E5EAF0]">
                <img
                  className="w-full h-full object-cover"
                  alt="Senior software architect reviewing technical designs"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm28P-_9u4ANFRduhAxUH7GdejgI"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm h-64 border border-[#E5EAF0]">
                <img
                  className="w-full h-full object-cover"
                  alt="Engineering team collaborating in tech office"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBESAIHmgTdJ4IqPS0bPOb1b27ua"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CONTACT CTA */}
      <CTASection
        tag="START A CONVERSATION"
        title="Ready to collaborate with a dedicated technology team?"
        description="Let's discuss how our senior engineers can solve your technical challenges and accelerate your roadmap."
        buttonText="Schedule an Architectural Review"
        buttonLink="/contact"
      />
    </div>
  );
}

