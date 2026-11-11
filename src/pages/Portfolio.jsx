import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Layers,
  CheckCircle,
  ExternalLink,
  Code,
  Activity,
  Zap,
  Globe,
  Terminal,
  BrainCircuit,
  Lock,
  AlertTriangle,
  Building2,
} from 'lucide-react';
import { projectsData } from '../data/projects';
import CTASection from '../components/CTASection';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <section className="relative w-full overflow-hidden bg-surface pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
          <div className="max-w-4xl flex flex-col gap-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-bold">
                PORTFOLIO & CASE STUDIES
              </span>
            </div>

            <h1 className="font-hero-display text-hero-display text-on-surface tracking-tight leading-none text-balance">
              Ideas Into Reality.
            </h1>

            <p className="font-body-large text-body-large text-on-surface-variant max-w-3xl leading-relaxed">
              Explore how Stuzen Technologies architects resilient web flagships, deterministic custom enterprise systems, and autonomous cognitive pipelines that scale effortlessly under high enterprise demands.
            </p>
          </div>

          {/* Metric Callout Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#E5EAF0]">
            <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <span className="font-label-code text-label-code text-outline uppercase">Aggregate Impact</span>
              <div className="font-headline-sub text-headline-sub text-on-surface mt-1">$1.4B+ Volume</div>
              <span className="font-body-small text-body-small text-secondary flex items-center gap-1 mt-1">
                <Activity className="w-3.5 h-3.5" /> High-frequency transaction pipelines
              </span>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <span className="font-label-code text-label-code text-outline uppercase">Availability Record</span>
              <div className="font-headline-sub text-headline-sub text-on-surface mt-1">99.99% Uptime</div>
              <span className="font-body-small text-body-small text-primary flex items-center gap-1 mt-1">
                <Shield className="w-3.5 h-3.5" /> Zero unplanned outages
              </span>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <span className="font-label-code text-label-code text-outline uppercase">Active Endpoints</span>
              <div className="font-headline-sub text-headline-sub text-on-surface mt-1">45,000+ Units</div>
              <span className="font-body-small text-body-small text-outline flex items-center gap-1 mt-1">
                <Zap className="w-3.5 h-3.5" /> Real-time telematics mesh
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SHOWCASE GRID WITH FILTER TABS */}
      <section className="w-full py-16 lg:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
          {/* Filter Tabs Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E5EAF0]">
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'web', label: 'Web Platforms' },
                { id: 'software', label: 'Custom Software' },
                { id: 'ai', label: 'AI & Automation' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  type="button"
                  className={`px-5 py-2.5 rounded-lg font-label-prominent text-label-prominent transition-all duration-150 ${
                    filter === tab.id
                      ? 'bg-primary-container text-on-primary shadow-sm'
                      : 'bg-surface-container-lowest text-on-surface-variant hover:text-on-surface border border-[#E5EAF0]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <span className="font-label-code text-label-code text-outline">
              Showing {filteredProjects.length} Verified Case Studies
            </span>
          </div>

          {/* Showcase Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="h-60 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md font-label-code text-label-code text-on-surface font-semibold shadow-sm">
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-3">
                    <div className="flex items-center justify-between text-outline font-label-code text-label-code">
                      <span>{project.industry}</span>
                      <span className="text-primary font-semibold">{project.highlightMetric}</span>
                    </div>
                    <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">
                      {project.title}
                    </h3>
                    <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#E5EAF0]/60 mt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.stack.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[11px] text-on-surface-variant"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#deep-dive"
                    className="inline-flex items-center gap-1 font-label-prominent text-label-prominent text-primary group-hover:text-primary-container transition-colors pt-3"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: ARCHITECTURAL DEEP-DIVE (Featured Case Study) */}
      <section id="deep-dive" className="w-full bg-surface py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-label-code text-label-code text-primary uppercase tracking-widest block mb-2 font-bold">
                ARCHITECTURAL DEEP-DIVE
              </span>
              <h2 className="font-headline-section text-headline-section text-on-surface tracking-tight">
                Case Study: Apex Financial Core
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-surface-container font-label-code text-label-code text-on-surface-variant shadow-sm">
                Flagship Migration
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-primary-container text-on-primary font-label-code text-label-code shadow-sm">
                Grade 100/100 CWV
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Context, Challenge, Solution */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* Overview Card */}
              <div className="p-8 lg:p-10 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary font-bold">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">
                    Project Overview
                  </h3>
                </div>
                <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                  Re-engineering a legacy institutional web presence into a responsive, highly-secure flagship. Apex Financial caters to private family offices, venture funds, and high-net-worth individuals requiring immediate real-time reporting alongside bank-grade data security guarantees.
                </p>
              </div>

              {/* Challenge & Solution Split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-error mb-4">
                      <AlertTriangle className="w-5 h-5 text-error" />
                      <span className="font-label-prominent text-label-prominent font-bold uppercase tracking-wider">
                        The Challenge
                      </span>
                    </div>
                    <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                      Legacy monolithic architecture caused 5.8-second load latencies, fragmented mobile layouts, and complex content update cycles that delayed market disclosure notices by up to 48 hours.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#E5EAF0]/60 text-outline font-label-code text-label-code">
                    <span>Core bottleneck: Monolith DB locks</span>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="font-label-prominent text-label-prominent font-bold uppercase tracking-wider">
                        The Solution
                      </span>
                    </div>
                    <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                      Decoupled into an edge-cached Next.js frontend with GraphQL middleware and headless CMS integration, compressing load times to 0.4s and ensuring instant real-time portfolio refreshes.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#E5EAF0]/60 text-primary font-label-code text-label-code">
                    <span>Result: Sub-500ms Edge Delivery</span>
                  </div>
                </div>
              </div>

              {/* Key Features List */}
              <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
                <h4 className="font-headline-sub text-body-large text-on-surface font-bold mb-4">
                  Key Engineered Features
                </h4>
                <ul className="flex flex-col gap-3 font-body-default text-body-default text-on-surface-variant">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Real-time WebSocket streaming for 200,000+ active tickers and fund benchmarks</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Zero-trust biometric authenticated portal with cryptographic audit logging</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Multi-region AWS CloudFront edge routing with 100% Core Web Vitals score</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Self-service investor onboarding pipeline compliant with FINRA & SEC regulations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Visual Mockup & Stack Specs */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E5EAF0] bg-surface-container-lowest">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCywmIIbKpUKOIUzCEKECh3nDOY6c"
                  alt="Apex Financial Core screen telemetry"
                  className="w-full h-72 object-cover"
                />
                <div className="p-6 bg-surface-container-lowest flex items-center justify-between border-t border-[#E5EAF0]">
                  <span className="font-label-code text-label-code text-outline">TELEMETRY BENCHMARK</span>
                  <span className="font-label-code text-label-code text-primary font-bold">1.4B Annual Vol</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
                <h4 className="font-label-prominent text-label-prominent text-on-surface uppercase tracking-wider font-bold">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Rust Engine', 'GraphQL', 'PostgreSQL', 'Redis', 'AWS Edge'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-on-surface"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CONFIDENTIALITY CALLOUT */}
      <section className="w-full py-12 bg-surface-container-low border-y border-[#E5EAF0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-3xl">
            <h3 className="font-headline-sub text-headline-sub text-on-surface font-semibold">
              Strict Enterprise Confidentiality
            </h3>
            <p className="font-body-small text-body-small text-on-surface-variant mt-1.5 leading-relaxed">
              Stuzen Technologies operates under rigid Non-Disclosure Agreements (NDAs) with Fortune 500 partners, defense sub-contractors, and proprietary fintech funds. The works exhibited above showcase sanitized architectures and non-classified implementations.
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-code text-label-code shadow-sm border border-[#E5EAF0]">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span>NDA Certified Engineering</span>
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <CTASection
        tag="START YOUR ENTERPRISE BUILD"
        title="Have a Project You Would Like to Bring to Life?"
        description="Schedule an architectural discovery session. We will evaluate technical feasibility, provide preliminary scope models, and discuss delivery timelines."
        buttonText="Schedule Discovery Session"
        buttonLink="/contact"
      />
    </div>
  );
}

