import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BrainCircuit,
  Zap,
  Shield,
  Layers,
  Cpu,
  CheckCircle,
  Activity,
  Bot,
  FileCheck,
  TrendingUp,
  Workflow,
  Sparkles,
  Lock,
  Search,
} from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

export default function AIAutomation() {
  const faqs = [
    {
      question: 'How do you guarantee the security and privacy of our proprietary business data?',
      answer:
        'All AI and workflow pipelines engineered by STUZEN operate under strict zero-retention enterprise agreements or within dedicated private Virtual Private Clouds (VPCs). Your proprietary data is never logged, persisted outside encrypted buffers, or utilized to fine-tune external multi-tenant foundation models. Systems strictly adhere to SOC2 Type II, HIPAA, and GDPR standards with immutable transaction audit trails.',
    },
    {
      question: 'What is the typical timeline for deploying an enterprise automation pipeline?',
      answer:
        'A targeted intelligent automation pipeline (such as an invoice extractor or document triage system) typically reaches production deployment in 4 to 8 weeks. Larger multi-agent decision engines or cross-departmental ERP integrations generally span 8 to 14 weeks from technical audit through end-to-end user acceptance testing.',
    },
    {
      question: 'Can your AI solutions integrate with our existing legacy ERP, CRM, and databases?',
      answer:
        'Yes. We build non-invasive middleware layers. Whether your organization relies on modern SaaS APIs or on-premise legacy relational databases, we deploy secure API webhooks, SFTP file watchers, and message buses that ingest raw data and commit validated structured outputs directly into your system of record without requiring platform migration.',
    },
    {
      question: 'How do you handle edge cases and maintain deterministic accuracy?',
      answer:
        'We combine generative models with deterministic rule validation engines and confidence scoring heuristics. Whenever an extraction or automated decision falls below your customized confidence threshold (e.g., 98.5%), the item is automatically routed into a human-in-the-loop review queue with highlighted diffs, preventing hallucinations and silent errors.',
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
            <span className="text-primary font-semibold">AI & Automation</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high w-fit shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-bold">
                  COGNITIVE ARCHITECTURE & AUTOMATION
                </span>
              </div>

              <h1 className="font-hero-display text-hero-display text-on-surface tracking-tight leading-none text-balance">
                Smarter Workflows. Better Possibilities.
              </h1>

              <p className="font-body-large text-body-large text-on-surface-variant max-w-2xl leading-relaxed">
                We engineer deterministic AI workflows, automated document processing systems, and intelligent multi-agent swarms that turn unstructured operational complexity into automated business momentum.
              </p>

              {/* Confidence Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-lg bg-surface-container-low border border-[#E5EAF0]">
                  <div className="font-headline-sub text-headline-sub text-primary font-bold">99.4%</div>
                  <span className="font-label-code text-label-code text-outline uppercase">Extraction Precision</span>
                </div>
                <div className="p-3.5 rounded-lg bg-surface-container-low border border-[#E5EAF0]">
                  <div className="font-headline-sub text-headline-sub text-primary font-bold">85%</div>
                  <span className="font-label-code text-label-code text-outline uppercase">Cycle Time Reduction</span>
                </div>
                <div className="p-3.5 rounded-lg bg-surface-container-low border border-[#E5EAF0]">
                  <div className="font-headline-sub text-headline-sub text-primary font-bold">Zero</div>
                  <span className="font-label-code text-label-code text-outline uppercase">Model Data Retention</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-lg bg-primary-container text-on-primary font-label-prominent text-label-prominent shadow-md hover:bg-primary transition-all duration-200 transform hover:-translate-y-0.5 gap-2 group"
                >
                  <span>Automate Your Workflows</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-lg bg-surface-container-lowest text-on-surface font-label-prominent text-label-prominent shadow-sm border border-[#E5EAF0] hover:bg-surface-container transition-all duration-200"
                >
                  Explore AI Portfolio
                </Link>
              </div>
            </div>

            {/* Right: Engineered Pipeline Flowchart Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl p-6 bg-surface-container-lowest shadow-2xl border border-[#E5EAF0] flex flex-col gap-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5EAF0]">
                  <span className="font-label-prominent text-label-prominent text-on-surface flex items-center gap-2">
                    <BrainCircuit className="w-4 h-4 text-primary" /> Autonomous Execution Pipeline
                  </span>
                  <span className="font-label-code text-label-code text-secondary font-semibold">Running</span>
                </div>

                <div className="flex flex-col gap-3 font-body-small text-body-small">
                  <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-primary" /> 01 // Ingestion & OCR Normalization
                    </span>
                    <span className="font-label-code text-label-code text-secondary">Verified</span>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-primary" /> 02 // Neural Entity Extraction (LLM)
                    </span>
                    <span className="font-label-code text-label-code text-secondary">99.4% Conf</span>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" /> 03 // Deterministic Rule Audit Gate
                    </span>
                    <span className="font-label-code text-label-code text-secondary">Passed</span>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" /> 04 // Enterprise Database & ERP Sync
                    </span>
                    <span className="font-label-code text-label-code text-primary font-semibold">Committed</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-surface-container flex items-center justify-between font-label-code text-label-code">
                  <span className="text-on-surface font-semibold">Pipeline Throughput</span>
                  <span className="text-primary font-bold">14,200 records / hr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PHILOSOPHY */}
      <section className="w-full py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
                PRAGMATIC AI DOCTRINE
              </span>
              <h2 className="font-headline-section text-headline-section text-on-surface">
                Pragmatic Engineering Over Experimental Novelty.
              </h2>
              <div className="flex flex-col gap-4 font-body-large text-body-large text-on-surface-variant leading-relaxed">
                <p>
                  Most enterprise AI initiatives stall because they focus on flashy consumer demos rather than disciplined operational integration. At Stuzen, we treat artificial intelligence not as a marketing novelty, but as a high-precision backend component.
                </p>
                <p>
                  We architect deterministic RAG systems with strict source grounding, multi-agent swarms with verifiable audit trails, and automated error-handling fallbacks that eliminate hallucinations.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-lg border border-[#E5EAF0] h-80">
              <img
                className="w-full h-full object-cover"
                alt="Software engineers deploying cognitive AI pipeline"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxaeDpai97ZIqwrcZ99elnQjyzGtx-o0l1y234"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 5 STRUCTURED PRACTICE AREAS */}
      <section className="w-full py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              AI CAPABILITIES
            </span>
            <h2 className="font-headline-section text-headline-section text-on-surface">
              Engineered AI Capabilities Tailored for Industry Scale.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code text-primary font-bold">01 // SPECIALTY</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">AI-Powered Business Solutions</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Domain-specific predictive algorithms, natural language query engines, and automated summary generators embedded into operational tools.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code text-primary font-bold">02 // SPECIALTY</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Business Workflow Automation</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                End-to-end event-driven automations handling invoice reconciliation, vendor onboarding, and customer support ticket routing.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code text-primary font-bold">03 // SPECIALTY</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Process Automation & RPA</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Software robots that bridge disparate desktop tools, web portals, and legacy mainframes to eliminate manual copy-paste errors.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code text-primary font-bold">04 // SPECIALTY</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Intelligent Business Tools</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Internal knowledge base search assistants with semantic vector indexing, answering employee queries from company policies instantly.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <span className="font-label-code text-label-code text-primary font-bold">05 // SPECIALTY</span>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Secure AI Integration & APIs</h3>
              <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                Dedicated LLM gateways providing rate-limiting, PII sanitization, cost telemetry, and token usage optimization for enterprise teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CONCRETE BUSINESS BENEFITS */}
      <section className="w-full py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              QUANTIFIABLE METRICS
            </span>
            <h2 className="font-headline-section text-headline-section text-on-surface">
              Measurable Return on Investment.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Drastic Error Reduction</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Eliminate human fatigue in data transcription with automated double-entry verification loops that hit 99.4% validated accuracy.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Operational Velocity</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Compress multi-day document review lifecycles into milliseconds, unlocking immediate responsiveness for enterprise clients.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Team Empowerment</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Free your senior specialists from soul-crushing manual data entry so they can focus on high-value strategic decision-making.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Non-Linear Scalability</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Multiply processed volume by 10x without proportional increases in operational payroll or administrative overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: IMPLEMENTATION ROADMAP */}
      <section className="w-full py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              DELIVERY PROTOCOL
            </span>
            <h2 className="font-headline-section text-headline-section text-on-surface">
              A Disciplined, Risk-Mitigated Delivery Roadmap.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-3">
              <span className="font-label-code text-label-code text-primary font-bold">PHASE 01</span>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Workflow Audit & Feasibility</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Mapping exact data touchpoints, error rates, and ROI baseline metrics.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-3">
              <span className="font-label-code text-label-code text-primary font-bold">PHASE 02</span>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Architecture & Data Security</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Provisioning private VPC endpoints, PII redaction filters, and access scopes.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-3">
              <span className="font-label-code text-label-code text-primary font-bold">PHASE 03</span>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Model Tuning & Benchmark</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Prompt engineering, vector index training, and testing against 1,000+ edge samples.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col gap-3">
              <span className="font-label-code text-label-code text-primary font-bold">PHASE 04</span>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Phased Rollout & Onboarding</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Pilot team launch, human-in-the-loop review monitoring, and full deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PROVEN DEPLOYMENTS */}
      <section className="w-full py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl flex flex-col gap-3">
              <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
                PROVEN RESULTS
              </span>
              <h2 className="font-headline-section text-headline-section text-on-surface">
                Proven Industrial Deployments.
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 font-label-prominent text-label-prominent text-primary hover:text-primary-container transition-colors shrink-0"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover"
                  alt="Synthra Intelligence"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoPDeM-W5c39PHYAQ0v0B5UJkagR_q60f1y23"
                />
              </div>
              <div className="p-8 flex flex-col gap-4">
                <span className="font-label-code text-label-code text-outline uppercase">ENTERPRISE NLP / ML</span>
                <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Synthra Intelligence</h3>
                <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                  Automated business document processing pipeline parsing complex multi-language contracts and regulatory submissions with 99.4% precision.
                </p>
                <div className="pt-2">
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary hover:text-primary-container transition-colors"
                  >
                    <span>Read Implementation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover"
                  alt="FlowSync Autonomous Agent"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5LZrZuAb1PBqksmn6RxLtHG-wZb"
                />
              </div>
              <div className="p-8 flex flex-col gap-4">
                <span className="font-label-code text-label-code text-outline uppercase">AUTONOMOUS AGENTS</span>
                <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">FlowSync Agent</h3>
                <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                  Intelligent multi-agent orchestration engine performing automated load reconciliation, dispatch routing, and exception resolution with zero human intervention.
                </p>
                <div className="pt-2">
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary hover:text-primary-container transition-colors"
                  >
                    <span>Read Implementation</span>
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
              SECURITY & OPERATIONS
            </span>
            <h2 className="font-headline-section text-headline-section text-on-surface">
              Frequently Asked Questions.
            </h2>
            <p className="font-body-large text-body-large text-on-surface-variant">
              Practical answers regarding security architecture, implementation speed, legacy compatibility, and error tolerance.
            </p>
          </div>

          <FAQAccordion items={faqs} defaultOpenIndex={0} />
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <CTASection
        tag="INTELLIGENT SCALING"
        title="Transform Your Business Operations with Intelligent Automation."
        description="Book a technical discovery session with our machine learning architects to assess your automation opportunities."
        buttonText="Schedule an Automation Consultation"
        buttonLink="/contact"
      />
    </div>
  );
}

