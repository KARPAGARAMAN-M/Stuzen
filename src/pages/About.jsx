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
      <section className="relative w-full overflow-hidden bg-surface pt-10 pb-10 sm:pb-12 lg:pt-14 lg:pb-14">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-6 sm:gap-8">
          <div className="max-w-4xl w-full flex flex-col gap-4 sm:gap-5">
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
              Stuzen Technologies is an IT solutions company delivering website development, custom software, AI automation and digital services for businesses. We bring thoughtful design and dependable technology together to create solutions that are easy to use, efficient to manage and ready to grow with your business.
            </p>
          </div>

          {/* Dynamic Meta Indicator Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-[#E5EAF0]">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-label-prominent text-label-prominent text-on-surface">Structured Sprint Cadence</h4>
                <p className="font-body-small text-body-small text-outline mt-0.5">Clear milestones and predictable project progress</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-label-prominent text-label-prominent text-on-surface">Clean Code Standards</h4>
                <p className="font-body-small text-body-small text-outline mt-0.5">Maintainable, modular and well-structured codebases</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-label-prominent text-label-prominent text-on-surface">Dedicated Engineering Focus</h4>
                <p className="font-body-small text-body-small text-outline mt-0.5">Direct collaboration with the developers building your solution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COMPANY STORY */}
      <section className="w-full py-10 sm:py-12 lg:py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E5EAF0] relative h-72 sm:h-96 bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  alt="Modern software engineering environment"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsd4d_BneZcusFkXg0YgzYNm3yKqAH33IanrS01HNdqn20W30qKSiCUcj91VZUEeGgwTXWegHhXBJS1-N9l9A0hZrATc4r2nQexPxaowCZsLz7IzZjQWeSma0k3eSTNg59jD-_Mj_AlkzZgs6T3EhGYANNDefjhso4Xk_RNIhGgAfh2hCuRjo8YMY7MhX00KPigUogea1b16uRNyoUH8g1wyRmQtKn5kDtgASAeQ"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-5 rounded-xl bg-surface-container-lowest shadow-xl border border-[#E5EAF0] max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 text-primary font-bold font-headline-sub">
                  <span>Excellence Driven</span>
                </div>
                <p className="font-body-small text-body-small text-on-surface-variant mt-1">
                  Disciplined engineering standards and client-first delivery focus.
                </p>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
                  OUR APPROACH
                </span>
              </div>
              <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
                Thoughtful Design & Dependable Technology
              </h2>
              <div className="flex flex-col gap-4 font-body-large text-body-large text-on-surface-variant leading-relaxed">
                <p>
                  Stuzen Technologies is an IT solutions company delivering website development, custom software, AI automation and digital services for businesses. We bring thoughtful design and dependable technology together to create solutions that are easy to use, efficient to manage and ready to grow with your business.
                </p>
                <p>
                  We begin by understanding your requirements, then plan, design, develop and refine the solution around your business needs. Our focus is on useful features, clean user experiences, structured development and ongoing support where required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION & VISION */}
      <section className="w-full py-10 sm:py-12 lg:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-8 sm:gap-10">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              STRATEGIC ANCHORS
            </span>
            <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
              Our Core Purpose and North Star
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-5">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Our Mission</h3>
              <p className="font-body-large text-body-large text-on-surface-variant leading-relaxed">
                To empower growing businesses with well-crafted websites, custom software, and practical automations that solve real problems, eliminate repetitive tasks, and support long-term growth.
              </p>
            </div>

            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-5">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Our Vision</h3>
              <p className="font-body-large text-body-large text-on-surface-variant leading-relaxed">
                To become a trusted technology partner known for dependable software development, thoughtful user experiences, and practical digital solutions that create real business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FOUR GUIDING PILLARS */}
      <section className="w-full py-10 sm:py-12 lg:py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-8 sm:gap-10">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              CORE VALUES
            </span>
            <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
              Our Four Guiding Pillars
            </h2>
            <p className="font-body-default text-body-default text-on-surface-variant">
              The operational principles that govern every engineering decision and sprint commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
      <section className="w-full py-10 sm:py-12 lg:py-16 bg-surface" id="expertise-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-bold">
              CAPABILITY MATRIX
            </span>
            <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface mt-2 tracking-tight">
              Our Core Practice Disciplines
            </h2>
            <p className="font-body-default text-body-default text-on-surface-variant mt-3">
              Specialized technical competencies structured to solve foundational business challenges. Select a discipline below to inspect our operational breakdown.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <button
              className={`px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-lg font-label-prominent text-xs sm:text-label-prominent transition-all duration-150 ${
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
              className={`px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-lg font-label-prominent text-xs sm:text-label-prominent transition-all duration-150 ${
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
              className={`px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-lg font-label-prominent text-xs sm:text-label-prominent transition-all duration-150 ${
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-12 rounded-2xl bg-surface-container-lowest shadow-md border border-[#E5EAF0]">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                  <div className="p-4 rounded-lg bg-surface-container-low border border-[#E5EAF0]/60">
                    <span className="font-label-prominent text-label-prominent font-semibold text-on-surface block mb-1">Core Tech Stack</span>
                    <span className="font-body-small text-body-small text-on-surface-variant">Next.js, TypeScript, Tailwind CSS, Edge Networks</span>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-container-low border border-[#E5EAF0]/60">
                    <span className="font-label-prominent text-label-prominent font-semibold text-on-surface block mb-1">Typical Outcomes</span>
                    <span className="font-body-small text-body-small text-on-surface-variant">Fast loading speeds and responsive layouts across all devices</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <img
                  className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-sm border border-[#E5EAF0]"
                  alt="Clean minimal high-contrast web dashboard interface showing real-time website performance telemetry"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQCKV_QncN0hqbXlMQ9r9AF8146SyqgaQkiCFvxwf-hVKJberbRhR1YCzQIKuLhP2aIY-iU4RYPnmMIsgEDmkYkJxBQ80GWyKQ9ke2sIq5hsG01KNZnGdqEJ_0O8ALwWcfAo_KMmnSTpTYYn1zxymr_oIbqegqJe0C8NY-ZWCbDCArcUxIAzDAHWEQZbIS3X1S0HURgnjip1M2jTahPbJg8IzC7zlPfSOOqsaVmQ"
                />
              </div>
            </div>
          )}

          {/* Practice Content 2: Enterprise Software */}
          {activeTab === 'software' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-12 rounded-2xl bg-surface-container-lowest shadow-md border border-[#E5EAF0]">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                  <div className="p-4 rounded-lg bg-surface-container-low border border-[#E5EAF0]/60">
                    <span className="font-label-prominent text-label-prominent font-semibold text-on-surface block mb-1">Core Tech Stack</span>
                    <span className="font-body-small text-body-small text-on-surface-variant">Go, Node.js, Python, PostgreSQL, Kubernetes</span>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-container-low border border-[#E5EAF0]/60">
                    <span className="font-label-prominent text-label-prominent font-semibold text-on-surface block mb-1">Typical Outcomes</span>
                    <span className="font-body-small text-body-small text-on-surface-variant">Structured database schemas and reliable API performance</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <img
                  className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-sm border border-[#E5EAF0]"
                  alt="Complex enterprise backend system architecture diagram displayed on an elegant screen"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg_vtY4AHBZRfvdRrJx-DivTyCay1bnqHjzGPxEg0ZgdkXt8NAcY9J-2ZgQBj4RtF9GHFekAXxD3vHqQUJg8RxbQ5qCZrXiCTx-hT2cTh_9sCYAsjQz7XUpCK_hwPIzvlarLHqDnMIoQ3sz1YQVRE7ltQOpHeT7eSb_Mfs80vY0v8PM8WUj62-31ZtZtlDcRMZcBJ4-TnLWaslo7-rwYJj3WeFWdgFrXWWJli76w"
                />
              </div>
            </div>
          )}

          {/* Practice Content 3: Practical AI */}
          {activeTab === 'ai' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-12 rounded-2xl bg-surface-container-lowest shadow-md border border-[#E5EAF0]">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                  <div className="p-4 rounded-lg bg-surface-container-low border border-[#E5EAF0]/60">
                    <span className="font-label-prominent text-label-prominent font-semibold text-on-surface block mb-1">Core Tech Stack</span>
                    <span className="font-body-small text-body-small text-on-surface-variant">LangChain, PyTorch, Vector DBs, Claude & OpenAI APIs</span>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-container-low border border-[#E5EAF0]/60">
                    <span className="font-label-prominent text-label-prominent font-semibold text-on-surface block mb-1">Typical Outcomes</span>
                    <span className="font-body-small text-body-small text-on-surface-variant">Automated business tasks and streamlined daily workflows</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <img
                  className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-sm border border-[#E5EAF0]"
                  alt="Futuristic high-precision vector database semantic graph visualization with clean interconnected nodes"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsbytQlNWbid7cvKFsQ-ozCzwYNyIfYJWQyYCotgkh_OjfMwmNKSMuo_SzSds-CGu-phuRb_bX4nHqn4d4oXWtkGtxyoNhaNwk0KA4HMcb-7MgOCZfqKKukEvKSD6g3YNXqHGoWS_GdIwqNGNR8auhshtxi2hT-kJTBmQy_p9NBDFY6m7tzqopVyLuNt1MRiwR6FYtKWUCMSGCgSQodhe6MG5O-04sYeR8eWt3rQ"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 6: WORKING PHILOSOPHY */}
      <section className="w-full py-10 sm:py-12 lg:py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-8 sm:gap-10">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              THE TRIAD
            </span>
            <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
              Our Working Philosophy
            </h2>
            <p className="font-body-default text-body-default text-on-surface-variant">
              The continuous feedback loop that drives engineering superiority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code uppercase text-primary font-bold">01 // PHASE</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">LEARN</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Before code comes comprehension. We dissect business models, legacy dependencies, regulatory barriers, and stakeholder constraints to model the exact software solution needed.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code uppercase text-primary font-bold">02 // PHASE</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">BUILD</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Craftsmanship in execution. Senior developers write modular, self-documenting code with comprehensive unit testing, continuous integration, and transparent staging builds.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
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
      <section className="w-full py-10 sm:py-12 lg:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6">
              <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
                ENGINEERING GUILD
              </span>
              <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
                An Engineering Culture Rooted in Mastery and Mentorship.
              </h2>
              <p className="font-body-large text-body-large text-on-surface-variant leading-relaxed">
                At Stuzen, we are focused on talent density and engineering depth. Every project is guided by experienced practitioners committed to architectural clarity, clean code, and reliable execution.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-body-default text-body-default text-on-surface">Extensive Full-Stack & Systems Engineering Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-body-default text-body-default text-on-surface">Rigorous Code Review & Automated Test Standards</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-body-default text-body-default text-on-surface">Direct Engineering Ownership on Every Engagement</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-sm h-52 sm:h-64 border border-[#E5EAF0] bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  alt="Software architecture and engineering discussion"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRB8HnNJ-sjt1xwOzAizWbN9d3t_7Z1c1Dz0cU9RLXTr9zgDp8GeCQVjvCIwIqLenoDAyDXQfoSj6uLVXFulISn8DB84XojvqHD9XUYmvoZBnLfXa69GgGoETjPgsR3RlZYzsJX2pXLw9vq9DdED-TD63fGiEAWpWnAgcC5mzj7k2JS-GOrrzIAZvni6yGp-SJ8RAc4IBX8GYtpCa2sw5qDYsP_IJR5NdekXJyNg"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm h-52 sm:h-64 border border-[#E5EAF0] bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  alt="Engineering team collaborating in tech office"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC74qETZjak9e4rIekYkOMMC9ftSXnshkaUf24nmttTr-w9YYRbaQmfLWO3w5Ugzb1p6v5YUYfLSWQDxAhi4Ioto1xWzvF7hRNQiY-gF9swqhP5MkPxd2gg55k22apOT9jK7lb8pBcRNcmJ4GzQVeN4xjCkKhT4RRxUv7O0ecmLBpzqunI2VrvAyMZPN_WcMKVdLk4IWCnzrgBNrI_CiHYPxkdWv4eDekN3Xg6Q1g"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CONTACT CTA */}
      <CTASection
        tag="Call to Action"
        title="Have a Project in Mind?"
        description="Tell us what you want to build. Let’s discuss a digital solution that fits your business."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </div>
  );
}

