import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  Shield,
  CheckCircle,
  Database,
  Cpu,
  Layers,
  Search,
  Compass,
  Code,
  Rocket,
  Star,
  Activity,
  Globe,
  Terminal,
  BrainCircuit,
} from 'lucide-react';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-surface pt-12 pb-16 sm:pb-24 lg:pt-16 lg:pb-32">
        {/* Ambient architectural glow background shapes */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-10 lg:gap-16">
          {/* Top Text Block */}
          <div className="max-w-4xl w-full flex flex-col gap-5 sm:gap-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high w-fit shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-bold">
                Engineering Digital Excellence
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-hero-display text-[clamp(2rem,7vw,3.75rem)] leading-[1.1] font-extrabold text-on-surface tracking-tight break-words">
              Turning Ideas Into <span className="text-primary-container">Digital Solutions.</span>
            </h1>

            {/* Subhead */}
            <p className="font-body-large text-body-large text-on-surface-variant max-w-3xl leading-relaxed">
              Stuzen Technologies partners with ambitious enterprises and forward-thinking businesses to design, architect, and deploy world-class digital platforms, enterprise software, and intelligent automation systems.
            </p>

            {/* CTA Action Cluster */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <Link
                to="/services"
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary-container text-on-primary font-label-prominent text-label-prominent shadow-md hover:bg-primary transition-all duration-200 transform hover:-translate-y-0.5 gap-2 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-12 px-7 rounded-lg bg-surface-container-lowest text-on-surface font-label-prominent text-label-prominent shadow-sm hover:bg-surface-container transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Technology Visual Canvas Mockup */}
          <div className="relative w-full rounded-xl bg-surface-container-lowest p-4 sm:p-6 lg:p-8 shadow-xl border border-[#E5EAF0] overflow-hidden">
            {/* Canvas Window Header */}
            <div className="flex items-center justify-between pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-[#E5EAF0]/60">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-error-container" />
                <span className="w-3 h-3 rounded-full bg-surface-container-highest" />
                <span className="w-3 h-3 rounded-full bg-primary-fixed" />
                <span className="ml-4 font-label-code text-label-code text-outline tracking-wider hidden sm:inline">
                  cluster-node-us-east // telemetry.live.stuzen.sys
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container font-label-code text-label-code text-primary font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> 99.998% Sync
                </span>
                <span className="font-label-code text-label-code text-outline hidden md:inline">
                  LATENCY: 14ms
                </span>
              </div>
            </div>

            {/* Canvas Body Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
              {/* Left: Code & Architecture Tree */}
              <div className="lg:col-span-4 bg-surface-container-low rounded-lg p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3">
                    <span className="font-label-prominent text-label-prominent text-on-surface flex items-center gap-2">
                      <Layers className="w-4 h-4 text-primary" />
                      Architecture Blueprint
                    </span>
                    <span className="font-label-code text-label-code text-outline">v4.18.2</span>
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <div className="flex items-center justify-between p-2 rounded bg-surface-container-lowest text-on-surface font-body-small text-body-small">
                      <span className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-primary" /> /gateway/api-core
                      </span>
                      <span className="font-label-code text-label-code text-secondary font-semibold">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-surface-container-lowest text-on-surface font-body-small text-body-small">
                      <span className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-secondary" /> /ml-worker/ingest
                      </span>
                      <span className="font-label-code text-label-code text-secondary font-semibold">Optimized</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-surface-container-lowest text-on-surface font-body-small text-body-small">
                      <span className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-primary" /> /db/distributed-shard
                      </span>
                      <span className="font-label-code text-label-code text-primary font-semibold">Healthy</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 bg-surface-container-lowest rounded p-3">
                  <span className="font-label-code text-label-code text-outline block mb-1">PIPELINE AUTOMATION</span>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                    <div className="bg-primary-container h-full w-[88%] rounded-full transition-all duration-500" />
                  </div>
                  <div className="flex justify-between items-center mt-2 font-label-code text-label-code text-on-surface-variant">
                    <span>Verification & Security Audits</span>
                    <span className="text-primary font-bold">88/88 Checks Passed</span>
                  </div>
                </div>
              </div>

              {/* Center/Right: Telemetry Metrics & Visual Network */}
              <div className="lg:col-span-8 flex flex-col gap-4">
                {/* Micro Stat Widgets */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
                    <span className="font-label-code text-label-code text-outline uppercase">Throughput Engine</span>
                    <div className="font-headline-sub text-headline-sub text-on-surface mt-1">4.2M req/s</div>
                    <span className="font-body-small text-body-small text-secondary flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3.5 h-3.5" /> +34% operational gain
                    </span>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
                    <span className="font-label-code text-label-code text-outline uppercase">Automated Pipeline</span>
                    <div className="font-headline-sub text-headline-sub text-on-surface mt-1">99.98%</div>
                    <span className="font-body-small text-body-small text-primary flex items-center gap-1 mt-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Zero-regression deploy
                    </span>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
                    <span className="font-label-code text-label-code text-outline uppercase">Security Baseline</span>
                    <div className="font-headline-sub text-headline-sub text-on-surface mt-1">SOC-2 Type II</div>
                    <span className="font-body-small text-body-small text-outline flex items-center gap-1 mt-1">
                      <Shield className="w-3.5 h-3.5" /> Real-time audit mesh
                    </span>
                  </div>
                </div>

                {/* Inline SVG Telemetry Data Visualization Chart */}
                <div className="p-5 rounded-lg bg-surface-container-low flex flex-col justify-between h-56">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-prominent text-label-prominent text-on-surface flex items-center gap-2">
                      <Activity className="w-4 h-4 text-primary" />
                      Global Node Execution Performance
                    </span>
                    <span className="font-label-code text-label-code text-outline">Real-Time Throughput</span>
                  </div>

                  {/* SVG Visual Graph */}
                  <svg className="w-full h-36" fill="none" preserveAspectRatio="none" viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="primaryGrad" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#0073e0" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#0073e0" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="cyanGrad" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#41defd" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#41defd" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <line stroke="#dbe2f8" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="600" y1="30" y2="30" />
                    <line stroke="#dbe2f8" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="600" y1="70" y2="70" />
                    <line stroke="#dbe2f8" strokeWidth="1" x1="0" x2="600" y1="110" y2="110" />
                    <path d="M0,85 C60,70 120,40 180,55 C240,70 300,30 360,45 C420,60 480,20 540,25 C570,28 600,20 600,20 L600,110 L0,110 Z" fill="url(#primaryGrad)" />
                    <path d="M0,95 C70,90 140,65 210,75 C280,85 350,50 420,55 C490,60 550,40 600,35 L600,110 L0,110 Z" fill="url(#cyanGrad)" />
                    <path d="M0,85 C60,70 120,40 180,55 C240,70 300,30 360,45 C420,60 480,20 540,25 C570,28 600,20 600,20" stroke="#0073e0" strokeLinecap="round" strokeWidth="2.5" />
                    <path d="M0,95 C70,90 140,65 210,75 C280,85 350,50 420,55 C490,60 550,40 600,35" stroke="#006879" strokeLinecap="round" strokeWidth="2" />
                    <circle className="animate-pulse" cx="360" cy="45" fill="#0073e0" r="4" />
                    <circle cx="540" cy="25" fill="#0073e0" r="4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-label-prominent text-label-prominent text-on-surface">100% Tailored Engineering</h4>
                <p className="font-body-small text-body-small text-outline mt-0.5">Bespoke codebases with zero off-the-shelf limits</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-label-prominent text-label-prominent text-on-surface">Enterprise Grade Security</h4>
                <p className="font-body-small text-body-small text-outline mt-0.5">Compliant architecture built for mission-critical scale</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-label-prominent text-label-prominent text-on-surface">Modern Agile Lifecycle</h4>
                <p className="font-body-small text-body-small text-outline mt-0.5">Rapid bi-weekly deployments with complete visibility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COMPANY INTRODUCTION */}
      <section className="w-full py-14 sm:py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Text Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
                  The Stuzen Philosophy
                </span>
              </div>
              <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
                Who We Are & How We Build
              </h2>
              <div className="flex flex-col gap-4 font-body-large text-body-large text-on-surface-variant leading-relaxed">
                <p>
                  At Stuzen Technologies, we reject ephemeral tech fads in favor of rigorous, durable architectural engineering. Our methodology is anchored on three simple principles:{' '}
                  <strong className="text-on-surface font-semibold">Learn</strong>,{' '}
                  <strong className="text-on-surface font-semibold">Build</strong>, and{' '}
                  <strong className="text-on-surface font-semibold">Innovate</strong>.
                </p>
                <p>
                  We dive deep into operational domain realities before writing a single line of production code. We then craft bespoke systems with meticulous precision—ensuring that every digital touchpoint, database interaction, and automation pipeline scales effortlessly without technical debt.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary hover:text-primary-container transition-colors group"
                >
                  <span>Read Our Full Story & Leadership Model</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Visual Mosaic Column */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="rounded-xl overflow-hidden shadow-sm bg-surface-container-lowest p-4 sm:p-6 flex flex-col justify-between h-44 sm:h-48 border border-[#E5EAF0]">
                  <span className="font-label-code text-label-code uppercase text-primary font-bold">01 / LEARN</span>
                  <p className="font-body-small text-body-small text-on-surface font-medium leading-normal">
                    Continuous domain research, architectural audits & feasibility modeling.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-sm h-52 sm:h-64 relative border border-[#E5EAF0]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Senior software engineering leads discussing digital enterprise system architecture"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsd4d_BneZcusFkXg0YgzYNm3yKqAH33IanrS01HNdqn20W30qKSiCUcj91VZUEeGgwTXWegHhXBJS1-N9l9A0hZrATc4r2nQexPxaowCZsLz7IzZjQWeSma0k3eSTNg59jD-_Mj_AlkzZgs6T3EhGYANNDefjhso4Xk_RNIhGgAfh2hCuRjo8YMY7MhX00KPigUogea1b16uRNyoUH8g1wyRmQtKn5kDtgASAeQ"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 mt-0 sm:-mt-6">
                <div className="rounded-xl overflow-hidden shadow-sm h-52 sm:h-64 relative border border-[#E5EAF0]">
                  <img
                    className="w-full h-full object-cover"
                    alt="High tech software interface display on modern ultra-wide monitors"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRB8HnNJ-sjt1xwOzAizWbN9d3t_7Z1c1Dz0cU9RLXTr9zgDp8GeCQVjvCIwIqLenoDAyDXQfoSj6uLVXFulISn8DB84XojvqHD9XUYmvoZBnLfXa69GgGoETjPgsR3RlZYzsJX2pXLw9vq9DdED-TD63fGiEAWpWnAgcC5mzj7k2JS-GOrrzIAZvni6yGp-SJ8RAc4IBX8GYtpCa2sw5qDYsP_IJR5NdekXJyNg"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-sm bg-primary text-on-primary p-4 sm:p-6 flex flex-col justify-between h-44 sm:h-48">
                  <span className="font-label-code text-label-code uppercase text-primary-fixed font-bold">02 / INNOVATE</span>
                  <p className="font-body-small text-body-small text-on-primary font-medium leading-normal">
                    Autonomous deployment systems that unlock sustainable enterprise growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES OVERVIEW */}
      <section className="w-full py-16 sm:py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-12 sm:gap-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl flex flex-col gap-3">
              <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
                Engineered Core Capabilities
              </span>
              <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
                Bespoke Services for the Modern Enterprise
              </h2>
              <p className="font-body-default text-body-default text-on-surface-variant">
                Full-lifecycle technical delivery spanning fast high-converting platforms, specialized software engines, and next-generation cognitive automation.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 font-label-prominent text-label-prominent text-primary hover:text-primary-container transition-colors shrink-0"
            >
              <span>View All Service Frameworks</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Services Grid (3 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Website Development */}
            <div className="group relative rounded-xl bg-surface-container-lowest p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 border border-[#E5EAF0]">
              <div className="flex flex-col gap-6">
                <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <Globe className="w-7 h-7" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Website Development</h3>
                  <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                    High-performance corporate portals, responsive bespoke web applications, and headless architectures with sub-second page delivery.
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5 pt-2">
                  <li className="flex items-center gap-2 font-body-small text-body-small text-on-surface">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    Headless CMS & Jamstack Architecture
                  </li>
                  <li className="flex items-center gap-2 font-body-small text-body-small text-on-surface">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    100/100 Core Web Vitals Optimization
                  </li>
                  <li className="flex items-center gap-2 font-body-small text-body-small text-on-surface">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    Global CDN Edge Distribution
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <Link
                  to="/services/website-development"
                  className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary group-hover:text-primary-container transition-colors"
                >
                  <span>Explore Website Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 2: Custom Software Development */}
            <div className="group relative rounded-xl bg-surface-container-lowest p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 border border-[#E5EAF0]">
              <div className="flex flex-col gap-6">
                <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <Terminal className="w-7 h-7" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Custom Software</h3>
                  <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                    Tailored enterprise platforms, bespoke operational engines, and mission-critical cloud backends designed to replace restrictive legacy tech.
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5 pt-2">
                  <li className="flex items-center gap-2 font-body-small text-body-small text-on-surface">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    Scalable Microservices & Event-Driven Core
                  </li>
                  <li className="flex items-center gap-2 font-body-small text-body-small text-on-surface">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    Enterprise API Integration & Middleware
                  </li>
                  <li className="flex items-center gap-2 font-body-small text-body-small text-on-surface">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    Zero-Downtime High-Concurrency Logic
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <Link
                  to="/services/custom-software"
                  className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary group-hover:text-primary-container transition-colors"
                >
                  <span>Explore Custom Software</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 3: AI & Automation */}
            <div className="group relative rounded-xl bg-surface-container-lowest p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 border border-[#E5EAF0]">
              <div className="flex flex-col gap-6">
                <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <BrainCircuit className="w-7 h-7" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">AI & Automation</h3>
                  <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                    Autonomous workflow engines, custom generative agent pipelines, and intelligent predictive algorithms that multiply team output.
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5 pt-2">
                  <li className="flex items-center gap-2 font-body-small text-body-small text-on-surface">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    Domain-Trained LLMs & RAG Pipelines
                  </li>
                  <li className="flex items-center gap-2 font-body-small text-body-small text-on-surface">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    Automated Document & Logic Processing
                  </li>
                  <li className="flex items-center gap-2 font-body-small text-body-small text-on-surface">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    Autonomous Agentic Decision Engines
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <Link
                  to="/services/ai-automation"
                  className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary group-hover:text-primary-container transition-colors"
                >
                  <span>Explore AI Systems</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE STUZEN */}
      <section className="w-full py-14 sm:py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-12 sm:gap-16">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              Competitive Edge
            </span>
            <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
              Why Demanding Teams Choose Stuzen
            </h2>
            <p className="font-body-default text-body-default text-on-surface-variant">
              We operate as an elite engineering force committed to technical transparency, rigorous architecture, and outcome accountability.
            </p>
          </div>

          {/* 4 Differentiators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-4 border border-[#E5EAF0]">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary font-bold font-headline-sub">
                01
              </div>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Architecture-First Approach</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                We avoid quick, brittle fixes. Every system is drawn with long-range scalabilities in mind, keeping maintenance overhead near zero as user counts scale.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-4 border border-[#E5EAF0]">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary font-bold font-headline-sub">
                02
              </div>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Transparent Sprints</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Direct access to source repos, daily telemetry syncs, and clear kanban views. No mysterious black boxes; you see exactly how every hour is invested.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-4 border border-[#E5EAF0]">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary font-bold font-headline-sub">
                03
              </div>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Senior Engineers Only</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Your project will never be delegated to junior trainees. You collaborate directly with proven technical architects with over a decade of production mastery.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-4 border border-[#E5EAF0]">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary font-bold font-headline-sub">
                04
              </div>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Uncompromising Security</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Automated SAST/DAST testing pipelines, WCAG accessibility benchmarks, and hardened cryptography protocols are baked into the core framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR WORKING PROCESS */}
      <section className="w-full py-16 sm:py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-12 sm:gap-16">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              Standardized Execution Flow
            </span>
            <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
              From Concept to Stable Production
            </h2>
            <p className="font-body-default text-body-default text-on-surface-variant">
              A systematic, four-milestone framework that eliminates risk, aligns technical vision, and ensures predictability.
            </p>
          </div>

          {/* 4 Milestones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex flex-col gap-4 p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <div className="flex items-center justify-between">
                <span className="font-label-code text-label-code text-primary font-bold px-2 py-1 bg-surface-container rounded">
                  MILESTONE 01
                </span>
                <Search className="w-5 h-5 text-outline" />
              </div>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold mt-2">Understand</h3>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Comprehensive discovery sessions, technical dependency reviews, business goal synthesis, and technical feasibility audits.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <div className="flex items-center justify-between">
                <span className="font-label-code text-label-code text-primary font-bold px-2 py-1 bg-surface-container rounded">
                  MILESTONE 02
                </span>
                <Compass className="w-5 h-5 text-outline" />
              </div>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold mt-2">Plan</h3>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                System architectural schematics, database entity diagrams, responsive UX wireframes, and fixed-schedule sprint milestones.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <div className="flex items-center justify-between">
                <span className="font-label-code text-label-code text-primary font-bold px-2 py-1 bg-surface-container rounded">
                  MILESTONE 03
                </span>
                <Code className="w-5 h-5 text-outline" />
              </div>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold mt-2">Build</h3>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Clean modular code written with strict typing, paired unit tests, continuous integration runners, and staging deployments.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <div className="flex items-center justify-between">
                <span className="font-label-code text-label-code text-primary font-bold px-2 py-1 bg-surface-container rounded">
                  MILESTONE 04
                </span>
                <Rocket className="w-5 h-5 text-outline" />
              </div>
              <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold mt-2">Deliver</h3>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Zero-downtime production cutover, load testing at maximum capacity, operational handoff docs, and proactive telemetry monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FEATURED PROJECTS */}
      <section className="w-full py-14 sm:py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-12 sm:gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl flex flex-col gap-3">
              <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
                Proven Case Studies
              </span>
              <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
                Featured Client Deployments
              </h2>
              <p className="font-body-default text-body-default text-on-surface-variant">
                Explore how we engineered scalable custom systems that solved complex enterprise operational challenges.
              </p>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 font-label-prominent text-label-prominent text-primary hover:text-primary-container transition-colors shrink-0"
            >
              <span>Explore Entire Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Project 1: Apex Financial */}
            <div className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-300 border border-[#E5EAF0]">
              <div>
                <div className="h-60 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Apex Financial Core platform dashboard interface"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuZcWj8079rhvrLURNJ0ATcqh9S7bNsJiTIEtd7ZiyvB-VbNRY3lQFJhCbGndp4lG54dDrhMdA-jP238KfdjRlqOuFFfPF1F1qHmFu-GEitxTtGC71oiwjUJ9MtWKGI7Jtyuzjfa2J-Jbhl0m8-iF_x3bKSbrTX-0-9voAeT4TinOzxfmI6ckaNNKMGhK24OYKBzq4QRIKlracSkBeBmO8niGwjwlZn_nQqUUYVQ"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md font-label-code text-label-code text-on-surface font-semibold shadow-sm">
                      Web & Cloud Platform
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-outline font-label-code text-label-code">
                    <span>FINTECH / WEALTH</span>
                    <span>SUB-5MS LATENCY</span>
                  </div>
                  <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Apex Financial Core</h3>
                  <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                    Enterprise wealth management and real-time transaction engine processing over $1.4B in annual transaction volume with zero downtime.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary group-hover:text-primary-container transition-colors"
                >
                  <span>View in Portfolio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Project 2: NovaLogix */}
            <div className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-300 border border-[#E5EAF0]">
              <div>
                <div className="h-60 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="NovaLogix Fleet Ops supply chain telematics interface"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiFgP_2AxLJHSSLlnlKDHJtHNGPu7YZN-tvPJFI4YMZvUFu8VFDoQbeYPMCbKLwNsd0rxG-9jMLsWYidxNYJ9cq9bhP5MFqqaDjxlojjZuc7thcDXlEzlfHK86U0zVlDvYAAKmJMSCzqK1zxh1zJ6Bq7s2mP613N6xZAiLhKq7X6Q0fiTsS2FQJjsjTm3X_1rs5hmOhUMmxFHtSrnpsZcjcq7CbtjfURjHwIfEiw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md font-label-code text-label-code text-on-surface font-semibold shadow-sm">
                      Custom Software
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-outline font-label-code text-label-code">
                    <span>SUPPLY CHAIN & IOT</span>
                    <span>45,000+ ASSETS</span>
                  </div>
                  <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">NovaLogix Fleet Ops</h3>
                  <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                    High-scale workflow orchestration and fleet telematics platform managing over 45,000 active freight units across North America.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary group-hover:text-primary-container transition-colors"
                >
                  <span>View in Portfolio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Project 3: Synthra Intelligence */}
            <div className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-300 border border-[#E5EAF0]">
              <div>
                <div className="h-60 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Synthra Intelligence automated document parsing interface"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd2QjfJkzufPoUqwbp81htGmQUdUuaqwcZOoADQrWzRRAK3lsRLdiXMBczr4f3ETFqb4orhkFJ7Ex7eQne62_6FhpPbt73n8Fg27P_Jhmn62ucXVCaAQeDFMH4Xbxa4OSSQNWUSQ6yHhehpIL0NOMOBzGafltjDdg4NwRULIGhhyHqOO38LlsIXjNwXB81pC-AE5zKkrFlUT2qvvpZD7MfU5yY2DzglcRoUsjzMA"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md font-label-code text-label-code text-on-surface font-semibold shadow-sm">
                      AI & Automation
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-outline font-label-code text-label-code">
                    <span>ENTERPRISE NLP / ML</span>
                    <span>85% COST REDUCTION</span>
                  </div>
                  <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Synthra Intelligence</h3>
                  <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                    Automated business document processing pipeline parsing complex multi-language contracts and regulatory submissions with 99.4% precision.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary group-hover:text-primary-container transition-colors"
                >
                  <span>View in Portfolio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CLIENT ENDORSEMENTS */}
      <section className="w-full py-16 sm:py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-12 sm:gap-16">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              Executive Feedback
            </span>
            <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
              Partnership Testimonials
            </h2>
            <p className="font-body-default text-body-default text-on-surface-variant">
              Hear how Stuzen's engineering discipline transforms enterprise product timelines and operational capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Testimonial 1 */}
            <div className="p-6 sm:p-8 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-6 border border-[#E5EAF0]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="font-body-large text-body-large text-on-surface italic leading-relaxed">
                  “Stuzen Technologies delivered what two previous dev agencies failed to execute: an immaculate architecture that scaled instantly under peak market loads. Their engineering team is unmatched in technical clarity and communicative rigor.”
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-surface-container">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center font-bold text-primary font-headline-sub">
                  MR
                </div>
                <div className="flex flex-col">
                  <span className="font-label-prominent text-label-prominent text-on-surface">Marcus R. Vance</span>
                  <span className="font-body-small text-body-small text-outline">Chief Technology Officer, Vantage FinTech Global</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 sm:p-8 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-6 border border-[#E5EAF0]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="font-body-large text-body-large text-on-surface italic leading-relaxed">
                  “The custom automation workflows engineered by Stuzen eliminated over 40 hours of manual data reconciliation per week across our logistics terminals. They didn't just build software—they fundamentally accelerated our entire business.”
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-surface-container">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center font-bold text-primary font-headline-sub">
                  EL
                </div>
                <div className="flex flex-col">
                  <span className="font-label-prominent text-label-prominent text-on-surface">Elena Lindqvist</span>
                  <span className="font-body-small text-body-small text-outline">VP of Operations, CargoSphere International</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CONVERSION CTA */}
      <CTASection
        tag="Start Your Project"
        title="Let's Build Something Great Together."
        description="Ready to elevate your technology stack or build your next mission-critical platform? Schedule an initial technical consultation with our engineering team."
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />
    </div>
  );
}

