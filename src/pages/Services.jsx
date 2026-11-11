import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Terminal,
  BrainCircuit,
  Zap,
  Shield,
  Layers,
  Search,
  Compass,
  Code,
  Rocket,
  Activity,
  Check,
} from 'lucide-react';
import CTASection from '../components/CTASection';

export default function Services() {
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
                END-TO-END TECHNICAL CAPABILITIES
              </span>
            </div>

            <h1 className="font-hero-display text-hero-display text-on-surface tracking-tight leading-none text-balance">
              Technology Solutions That Move Businesses Forward.
            </h1>

            <p className="font-body-large text-body-large text-on-surface-variant max-w-3xl leading-relaxed">
              We architect, engineer, and deploy high-speed web platforms, enterprise software, and cognitive automation systems that eliminate technical bottlenecks and deliver sustainable market leadership.
            </p>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#E5EAF0]">
            <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <span className="font-label-code text-label-code text-outline uppercase">Speed Benchmark</span>
              <div className="font-headline-sub text-headline-sub text-on-surface mt-1">&lt; 0.8s Avg Load</div>
              <span className="font-body-small text-body-small text-secondary flex items-center gap-1 mt-1">
                <Zap className="w-3.5 h-3.5" /> 99+ Core Web Vitals
              </span>
            </div>
            <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <span className="font-label-code text-label-code text-outline uppercase">Reliability Baseline</span>
              <div className="font-headline-sub text-headline-sub text-on-surface mt-1">99.99% Uptime</div>
              <span className="font-body-small text-body-small text-primary flex items-center gap-1 mt-1">
                <Shield className="w-3.5 h-3.5" /> Mission-critical SLA
              </span>
            </div>
            <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <span className="font-label-code text-label-code text-outline uppercase">Delivery Discipline</span>
              <div className="font-headline-sub text-headline-sub text-on-surface mt-1">100% In-House</div>
              <span className="font-body-small text-body-small text-outline flex items-center gap-1 mt-1">
                <Layers className="w-3.5 h-3.5" /> Zero outsourced risk
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 3 DEEP DIVE SERVICE BLOCKS */}
      <section className="w-full py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-20">
          {/* BLOCK 1: Website Development */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-lowest rounded-2xl p-8 lg:p-12 shadow-sm border border-[#E5EAF0]">
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary-fixed text-on-secondary-fixed mb-5 font-label-code text-label-code">
                <Globe className="w-4 h-4 text-secondary" />
                WEB & CLOUD EXPERTISE
              </div>
              <h2 className="font-headline-section text-headline-section text-on-surface mb-4 leading-tight">
                High-Performance Web Architecture & Scalable Portals
              </h2>
              <p className="font-body-default text-body-default text-on-surface-variant mb-6 leading-relaxed">
                High-impact corporate websites, responsive web apps, and performance-tuned customer portals engineered for lightning-quick execution, rock-solid security, and pristine accessibility standards.
              </p>
              <div className="w-full flex flex-col gap-2.5 mb-8">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-label-prominent text-label-prominent text-on-surface">Responsive UI/UX Architecture</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-label-prominent text-label-prominent text-on-surface">Custom Web Portals & Dashboards</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-label-prominent text-label-prominent text-on-surface">Headless CMS & Micro-frontend Integration</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-label-prominent text-label-prominent text-on-surface">Technical SEO & Full WCAG 2.1 AA Compliance</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-label-prominent text-label-prominent text-on-surface">Sub-second Performance & Edge Optimization</span>
                </div>
              </div>
              <Link
                to="/services/website-development"
                className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary hover:text-primary-container transition-all group"
              >
                <span>Explore Website Development Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="relative w-full rounded-xl overflow-hidden shadow-md bg-surface-container border border-[#E5EAF0]">
                <img
                  className="w-full h-80 object-cover"
                  alt="Modern software engineering studio showing responsive web interfaces"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC74qETZjak9e4rIekYkOMMC9ftSXnshkaUf24nmttTr-w9YYRbaQmfLWO3w5Ugzb1p6v5YUYfLSWQDxAhi4Ioto1xWzvF7hRNQiY-gF9swqhP5MkPxd2gg55k22apOT9jK7lb8pBcRNcmJ4GzQVeN4xjCkKhT4RRxUv7O0ecmLBpzqunI2VrvAyMZPN_WcMKVdLk4IWCnzrgBNrI_CiHYPxkdWv4eDekN3Xg6Q1g"
                />
                <div className="p-4 bg-surface-container-lowest border-t border-[#E5EAF0] flex items-center justify-between">
                  <span className="font-label-code text-label-code text-outline">CORE WEB VITALS: OPTIMAL</span>
                  <span className="font-label-code text-label-code text-primary font-bold">100/100 Lighthouse</span>
                </div>
              </div>
            </div>
          </div>

          {/* BLOCK 2: Custom Software Development */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-lowest rounded-2xl p-8 lg:p-12 shadow-sm border border-[#E5EAF0]">
            <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col gap-4">
              <div className="relative w-full rounded-xl overflow-hidden shadow-md bg-surface-container border border-[#E5EAF0]">
                <img
                  className="w-full h-80 object-cover"
                  alt="Architectural software blueprint and database relationships"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5jaXNghOfBlkM1cBSRGDgvb19Q8RfqF6P75_i93-K377xW5gH1lKx0iF2Y7yX_Jk4_zU-8fX-l2b7k7"
                />
                <div className="p-4 bg-surface-container-lowest border-t border-[#E5EAF0] flex items-center justify-between">
                  <span className="font-label-code text-label-code text-outline">DISTRIBUTED CLUSTERS</span>
                  <span className="font-label-code text-primary font-bold">Zero-Downtime Pipeline</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary-fixed text-on-primary-fixed mb-5 font-label-code text-label-code">
                <Terminal className="w-4 h-4 text-primary" />
                ENTERPRISE INFRASTRUCTURE
              </div>
              <h2 className="font-headline-section text-headline-section text-on-surface mb-4 leading-tight">
                Tailor-Made Software Engineered to Operational Perfection
              </h2>
              <p className="font-body-default text-body-default text-on-surface-variant mb-6 leading-relaxed">
                When generic software hits its ceiling, Stuzen builds custom platforms, API microservices, and databases calibrated exactly for your high-concurrency enterprise operational realities.
              </p>
              <div className="w-full flex flex-col gap-2.5 mb-8">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-label-prominent text-label-prominent text-on-surface">Bespoke Enterprise Platforms & Workflow Engines</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-label-prominent text-label-prominent text-on-surface">Microservices, Scalable APIs & Event Buses</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-label-prominent text-label-prominent text-on-surface">Cloud-Native Infrastructure & DevOps Pipelines</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-label-prominent text-label-prominent text-on-surface">Legacy Modernization & Zero-Downtime Migration</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-label-prominent text-label-prominent text-on-surface">High-Security Compliance Architecture (SOC-2/HIPAA)</span>
                </div>
              </div>
              <Link
                to="/services/custom-software"
                className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary hover:text-primary-container transition-all group"
              >
                <span>Explore Custom Software Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* BLOCK 3: AI & Automation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-lowest rounded-2xl p-8 lg:p-12 shadow-sm border border-[#E5EAF0]">
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary-fixed text-on-secondary-fixed mb-5 font-label-code text-label-code">
                <BrainCircuit className="w-4 h-4 text-secondary" />
                COGNITIVE SYSTEMS & RPA
              </div>
              <h2 className="font-headline-section text-headline-section text-on-surface mb-4 leading-tight">
                Intelligent Automation Engines & Custom AI Solutions
              </h2>
              <p className="font-body-default text-body-default text-on-surface-variant mb-6 leading-relaxed">
                Unlock immediate leverage with targeted machine learning systems, automated document triage, and enterprise agent workflows that turn static databases into active intelligence.
              </p>
              <div className="w-full flex flex-col gap-2.5 mb-8">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-label-prominent text-label-prominent text-on-surface">Custom LLM & Private Model Fine-Tuning</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-label-prominent text-label-prominent text-on-surface">Autonomous Document & Invoice Extraction (IDP)</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-label-prominent text-label-prominent text-on-surface">Robotic Process Automation (RPA) & ERP Sync</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-label-prominent text-label-prominent text-on-surface">Intelligent Chatbots & Conversational Agents</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-label-prominent text-label-prominent text-on-surface">Real-Time Predictive Telemetry & Data Modeling</span>
                </div>
              </div>
              <Link
                to="/services/ai-automation"
                className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary hover:text-primary-container transition-all group"
              >
                <span>Explore AI & Automation Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="relative w-full rounded-xl overflow-hidden shadow-md bg-surface-container border border-[#E5EAF0]">
                <img
                  className="w-full h-80 object-cover"
                  alt="Neural network visualization and automated business intelligence"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWpjIlQQJiiWh1iDprtpRM_CJCth3mG70YnC_4iZ8qJ4_m49pX-8q-g0k7y6v-x3dF"
                />
                <div className="p-4 bg-surface-container-lowest border-t border-[#E5EAF0] flex items-center justify-between">
                  <span className="font-label-code text-label-code text-outline">AUTOMATION PIPELINES</span>
                  <span className="font-label-code text-primary font-bold">99.4% Extraction Precision</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 4-PHASE ENGAGEMENT MODEL */}
      <section className="w-full py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              DELIVERY LIFECYCLE
            </span>
            <h2 className="font-headline-section text-headline-section text-on-surface">
              How We Deliver Exceptional Software
            </h2>
            <p className="font-body-default text-body-default text-on-surface-variant">
              A transparent, outcome-oriented delivery protocol designed to eliminate scope creep and protect investment velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary font-bold">
                01
              </div>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Understand Needs</h3>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Stakeholder workshops, technical discovery, legacy auditing, and strategic KPI definition to frame the project boundary.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary font-bold">
                02
              </div>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Define the Solution</h3>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                System architecture blueprints, wireframing, API endpoint definitions, and sprint milestones signed off prior to execution.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary font-bold">
                03
              </div>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Design & Develop</h3>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Agile two-week sprints with transparent commits, peer reviews, CI/CD automated staging deployments, and client demos.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary font-bold">
                04
              </div>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Test, Deploy & Scale</h3>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Security penetration testing, stress benchmarks, seamless production rollout, documentation handoff, and SLA monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ENGAGEMENT MODELS TABLE */}
      <section className="w-full py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              PARTNERSHIP OPTIONS
            </span>
            <h2 className="font-headline-section text-headline-section text-on-surface">
              Transparent Engagement Models
            </h2>
            <p className="font-body-default text-body-default text-on-surface-variant">
              Tailored collaboration structures built to match your operational maturity and product roadmap.
            </p>
          </div>

          <div className="w-full overflow-x-auto rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] p-6 lg:p-8">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-surface-container-low rounded-lg">
                  <th className="p-4 font-headline-sub text-body-large text-on-surface font-bold rounded-l-lg">Feature & Metric</th>
                  <th className="p-4 font-headline-sub text-body-large text-primary font-bold">Dedicated Engineering Teams</th>
                  <th className="p-4 font-headline-sub text-body-large text-on-surface font-bold">Project-Based Delivery</th>
                  <th className="p-4 font-headline-sub text-body-large text-on-surface font-bold rounded-r-lg">Advisory & Consulting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5EAF0] font-body-small text-body-small">
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="p-4 font-label-prominent text-on-surface">Primary Purpose</td>
                  <td className="p-4 text-on-surface-variant">Long-term team extension & continuous feature development</td>
                  <td className="p-4 text-on-surface-variant">Fixed-scope deliverables with clearly defined deadlines</td>
                  <td className="p-4 text-on-surface-variant">High-level architectural audits & strategic guidance</td>
                </tr>
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="p-4 font-label-prominent text-on-surface">Team Composition</td>
                  <td className="p-4 text-on-surface-variant">Full-stack squad (Lead Architect, Frontend, Backend, QA, PM)</td>
                  <td className="p-4 text-on-surface-variant">Specialized cross-functional project unit</td>
                  <td className="p-4 text-on-surface-variant">Principal Enterprise Architect or AI Strategist</td>
                </tr>
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="p-4 font-label-prominent text-on-surface">Deliverables</td>
                  <td className="p-4 text-on-surface-variant">Continuous PR merges, bi-weekly release trains, full IP ownership</td>
                  <td className="p-4 text-on-surface-variant">Complete production system, source code, and handover manuals</td>
                  <td className="p-4 text-on-surface-variant">System audits, technical blueprints, and actionable reports</td>
                </tr>
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="p-4 font-label-prominent text-on-surface">Communication Rhythm</td>
                  <td className="p-4 text-on-surface-variant">Daily Slack syncs, daily standups, weekly sprint demos</td>
                  <td className="p-4 text-on-surface-variant">Milestone checkpoints & scheduled weekly progress demos</td>
                  <td className="p-4 text-on-surface-variant">Bi-weekly executive workshops & ad-hoc advisory calls</td>
                </tr>
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="p-4 font-label-prominent text-on-surface">Best Suited For</td>
                  <td className="p-4 font-medium text-primary">Fast-scaling startups & product companies needing sustained velocity</td>
                  <td className="p-4 font-medium text-on-surface">Established companies launching discrete digital initiatives</td>
                  <td className="p-4 font-medium text-on-surface">CTOs and tech leadership evaluating modernization or AI</td>
                </tr>
                <tr>
                  <td className="p-4 font-label-prominent text-on-surface">Typical Duration</td>
                  <td className="p-4 text-on-surface-variant">6 to 24+ months ongoing</td>
                  <td className="p-4 text-on-surface-variant">2 to 6 months per phase</td>
                  <td className="p-4 text-on-surface-variant">4 to 12 weeks strategic engagement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <CTASection
        tag="CONSULTATIVE REVIEW"
        title="Have a Specific Technology Challenge?"
        description="Share your requirements with our lead technical architects and receive an honest feasibility analysis and timeline within 24 hours."
        buttonText="Discuss Your Architecture"
        buttonLink="/contact"
      />
    </div>
  );
}

