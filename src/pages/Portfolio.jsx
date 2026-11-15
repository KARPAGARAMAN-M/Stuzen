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
  Compass,
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
      <section className="relative w-full overflow-hidden bg-surface pt-10 pb-10 sm:pb-12 lg:pt-14 lg:pb-14">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-8 sm:gap-10">
          <div className="max-w-4xl flex flex-col gap-5 sm:gap-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-bold">
                OUR CAPABILITIES & SOLUTIONS
              </span>
            </div>

            <h1 className="font-hero-display text-[clamp(2rem,7vw,3.75rem)] leading-[1.1] font-extrabold text-on-surface tracking-tight break-words">
              Ideas Engineered Into Reliable Software.
            </h1>

            <p className="font-body-large text-body-large text-on-surface-variant max-w-3xl leading-relaxed">
              Explore the types of modern web applications, custom business systems, and intelligent workflow automations Stuzen Technologies is equipped to build for growing companies.
            </p>
          </div>

          {/* Metric Callout Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-[#E5EAF0]">
            <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <span className="font-label-code text-label-code text-outline uppercase">Frontend Engineering</span>
              <div className="font-headline-sub text-headline-sub text-on-surface mt-1">Modern UI & React</div>
              <span className="font-body-small text-body-small text-secondary flex items-center gap-1 mt-1">
                <Activity className="w-3.5 h-3.5" /> Clean, responsive user interfaces
              </span>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <span className="font-label-code text-label-code text-outline uppercase">Backend & APIs</span>
              <div className="font-headline-sub text-headline-sub text-on-surface mt-1">Structured & Scalable</div>
              <span className="font-body-small text-body-small text-primary flex items-center gap-1 mt-1">
                <Shield className="w-3.5 h-3.5" /> Reliable API & database architecture
              </span>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <span className="font-label-code text-label-code text-outline uppercase">Development Standards</span>
              <div className="font-headline-sub text-headline-sub text-on-surface mt-1">Clean Code</div>
              <span className="font-body-small text-body-small text-outline flex items-center gap-1 mt-1">
                <Zap className="w-3.5 h-3.5" /> Maintainable & extensible builds
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SHOWCASE GRID WITH FILTER TABS */}
      <section className="w-full py-10 sm:py-12 lg:py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-6 sm:gap-8">
          {/* Filter Tabs Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E5EAF0]">
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Capabilities' },
                { id: 'web', label: 'Web Platforms' },
                { id: 'software', label: 'Custom Software' },
                { id: 'ai', label: 'AI & Automation' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  type="button"
                  className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg font-label-prominent text-xs sm:text-label-prominent transition-all duration-150 ${
                    filter === tab.id
                      ? 'bg-primary-container text-on-primary shadow-sm'
                      : 'bg-surface-container-lowest text-on-surface-variant hover:text-on-surface border border-[#E5EAF0]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <span className="font-label-code text-label-code text-outline text-xs sm:text-label-code">
              Showing {filteredProjects.length} Technical Capabilities
            </span>
          </div>

          {/* Showcase Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
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

      {/* SECTION 3: ARCHITECTURAL BLUEPRINT */}
      <section id="deep-dive" className="w-full bg-surface py-10 sm:py-12 lg:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-8 sm:gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-label-code text-label-code text-primary uppercase tracking-widest block mb-2 font-bold">
                ENGINEERING ARCHITECTURE
              </span>
              <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface tracking-tight">
                How We Engineer Modern Web & Software Platforms
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-surface-container font-label-code text-label-code text-on-surface-variant shadow-sm text-xs">
                Clean Architecture
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-primary-container text-on-primary font-label-code text-label-code shadow-sm text-xs">
                Modern Tech Stack
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
            {/* Left Column: Context, Challenge, Solution */}
            <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
              {/* Overview Card */}
              <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary font-bold">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">
                    Our Development Approach
                  </h3>
                </div>
                <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                  When developing digital solutions, Stuzen Technologies emphasizes modular frontend components, clean API separation, and well-structured database schemas. This approach ensures your software remains easy to update, performant across all devices, and ready to scale as your business expands.
                </p>
              </div>

              {/* Challenge & Solution Split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <Compass className="w-5 h-5 text-primary" />
                      <span className="font-label-prominent text-label-prominent font-bold uppercase tracking-wider">
                        Key Focus Areas
                      </span>
                    </div>
                    <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                      Fluid responsive interfaces that adapt seamlessly to mobile, tablet, and desktop screens with intuitive navigation and accessible layout design.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#E5EAF0]/60 text-outline font-label-code text-label-code">
                    <span>Focus: Clean UX & Speed</span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="font-label-prominent text-label-prominent font-bold uppercase tracking-wider">
                        Maintainable Code
                      </span>
                    </div>
                    <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                      Structured folders, typed interfaces, and well-documented API connections that make future updates straightforward and minimize technical complexity.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#E5EAF0]/60 text-primary font-label-code text-label-code">
                    <span>Outcome: Extensible Codebase</span>
                  </div>
                </div>
              </div>

              {/* Key Features List */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
                <h4 className="font-headline-sub text-body-large text-on-surface font-bold mb-4">
                  Engineering Best Practices
                </h4>
                <ul className="flex flex-col gap-3 font-body-default text-body-default text-on-surface-variant">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Component-driven architecture for clean code reusability and fast page rendering</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Secure RESTful APIs with sanitized input handling and structured request validation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Cross-device optimization ensuring quick interaction times on mobile and desktop</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Organized database modeling to support accurate business reporting and data growth</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Visual Mockup & Stack Specs */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E5EAF0] bg-surface-container-lowest">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQCKV_QncN0hqbXlMQ9r9AF8146SyqgaQkiCFvxwf-hVKJberbRhR1YCzQIKuLhP2aIY-iU4RYPnmMIsgEDmkYkJxBQ80GWyKQ9ke2sIq5hsG01KNZnGdqEJ_0O8ALwWcfAo_KMmnSTpTYYn1zxymr_oIbqegqJe0C8NY-ZWCbDCArcUxIAzDAHWEQZbIS3X1S0HURgnjip1M2jTahPbJg8IzC7zlPfSOOqsaVmQ"
                  alt="Modern web platform interface and code structure"
                  className="w-full h-56 sm:h-72 object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="p-4 sm:p-6 bg-surface-container-lowest flex items-center justify-between border-t border-[#E5EAF0]">
                  <span className="font-label-code text-label-code text-outline">ENGINEERING DISCIPLINE</span>
                  <span className="font-label-code text-label-code text-primary font-bold">Clean Code Standards</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
                <h4 className="font-label-prominent text-label-prominent text-on-surface uppercase tracking-wider font-bold">
                  Technologies We Work With
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Tailwind CSS', 'REST APIs', 'Docker'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-xs sm:text-label-code text-on-surface"
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

      {/* SECTION 4: CONFIDENTIALITY & INTEGRITY */}
      <section className="w-full py-10 sm:py-12 bg-surface-container-low border-y border-[#E5EAF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-3xl">
            <h3 className="font-headline-sub text-headline-sub text-on-surface font-semibold">
              Client Confidentiality & Code Ownership
            </h3>
            <p className="font-body-small text-body-small text-on-surface-variant mt-1.5 leading-relaxed">
              Stuzen Technologies values client confidentiality and data security. All custom software, application logic, and repository commits engineered for your business belong 100% to you. We respect Non-Disclosure Agreements (NDAs) and uphold transparent development practices.
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-code text-label-code shadow-sm border border-[#E5EAF0]">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span>Full Code Ownership & Privacy</span>
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <CTASection
        tag="START YOUR PROJECT"
        title="Have a Project You Would Like to Bring to Life?"
        description="Tell us about what you want to build. We will evaluate technical requirements, discuss practical approaches, and provide clear timeline estimates."
        buttonText="Discuss Your Project"
        buttonLink="/contact"
      />
    </div>
  );
}
