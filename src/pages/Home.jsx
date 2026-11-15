import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  CheckCircle,
  Layers,
  Search,
  Compass,
  Code,
  Rocket,
  Activity,
  Globe,
  Terminal,
  BrainCircuit,
  MessageSquare,
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
              Smart Digital Solutions for a <span className="text-primary-container">Growing Business.</span>
            </h1>

            {/* Subhead */}
            <p className="font-body-large text-body-large text-on-surface-variant max-w-3xl leading-relaxed">
              Stuzen Technologies helps businesses build a stronger digital presence through modern websites, custom software, AI-powered automation and connected business solutions. We focus on clear design, reliable development and practical technology that supports your goals.
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
                Discuss Your Project
              </Link>
            </div>
          </div>

          {/* Core Technology Capabilities & Engineering Practice */}
          <div className="relative w-full rounded-2xl bg-surface-container-lowest p-6 sm:p-8 lg:p-10 shadow-xl border border-[#E5EAF0] overflow-hidden">
            {/* Card Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#E5EAF0] gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                <div>
                  <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold block">
                    Core Capabilities & Engineering Practice
                  </span>
                  <h2 className="font-headline-sub text-headline-sub text-on-surface mt-0.5">
                    Purpose-Built Software, Modern Web & Automation
                  </h2>
                </div>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container font-label-code text-label-code text-on-surface-variant font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary" /> Full-Cycle Engineering
                </span>
              </div>
            </div>

            {/* Core Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Pillar 1: Website Development */}
              <div className="flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-surface-container-low border border-[#E5EAF0]/80 hover:border-primary/40 transition-colors">
                <div>
                  <div className="w-11 h-11 rounded-lg bg-surface-container-lowest border border-[#E5EAF0] flex items-center justify-center text-primary mb-4 shadow-sm">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h3 className="font-headline-sub text-[17px] sm:text-[18px] font-bold text-on-surface">
                    Website Development
                  </h3>
                  <p className="font-body-small text-body-small text-on-surface-variant mt-2 leading-relaxed">
                    Modern, responsive and user-friendly websites designed to present your business professionally and work smoothly across mobile, tablet and desktop.
                  </p>
                </div>
                <div className="pt-4 mt-5 border-t border-[#E5EAF0]/70">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="px-2.5 py-1 rounded-md text-[11.5px] font-medium bg-surface-container-lowest text-on-surface-variant border border-[#E5EAF0]">Responsive Web</span>
                    <span className="px-2.5 py-1 rounded-md text-[11.5px] font-medium bg-surface-container-lowest text-on-surface-variant border border-[#E5EAF0]">Corporate Portals</span>
                    <span className="px-2.5 py-1 rounded-md text-[11.5px] font-medium bg-surface-container-lowest text-on-surface-variant border border-[#E5EAF0]">Clean UI/UX</span>
                  </div>
                  <Link
                    to="/services/website-development"
                    className="inline-flex items-center gap-1.5 text-primary font-label-prominent text-label-prominent hover:text-primary-container transition-colors group"
                  >
                    <span>Explore Web Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Pillar 2: Custom Software Development */}
              <div className="flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-surface-container-low border border-[#E5EAF0]/80 hover:border-primary/40 transition-colors">
                <div>
                  <div className="w-11 h-11 rounded-lg bg-surface-container-lowest border border-[#E5EAF0] flex items-center justify-center text-primary mb-4 shadow-sm">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <h3 className="font-headline-sub text-[17px] sm:text-[18px] font-bold text-on-surface">
                    Custom Software Development
                  </h3>
                  <p className="font-body-small text-body-small text-on-surface-variant mt-2 leading-relaxed">
                    Business-focused software built around your workflow, helping simplify operations, organize information and improve productivity.
                  </p>
                </div>
                <div className="pt-4 mt-5 border-t border-[#E5EAF0]/70">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="px-2.5 py-1 rounded-md text-[11.5px] font-medium bg-surface-container-lowest text-on-surface-variant border border-[#E5EAF0]">Business Logic</span>
                    <span className="px-2.5 py-1 rounded-md text-[11.5px] font-medium bg-surface-container-lowest text-on-surface-variant border border-[#E5EAF0]">Workflow Tools</span>
                    <span className="px-2.5 py-1 rounded-md text-[11.5px] font-medium bg-surface-container-lowest text-on-surface-variant border border-[#E5EAF0]">Secure Backend</span>
                  </div>
                  <Link
                    to="/services/custom-software"
                    className="inline-flex items-center gap-1.5 text-primary font-label-prominent text-label-prominent hover:text-primary-container transition-colors group"
                  >
                    <span>Explore Custom Software</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Pillar 3: AI Automation */}
              <div className="flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-surface-container-low border border-[#E5EAF0]/80 hover:border-primary/40 transition-colors">
                <div>
                  <div className="w-11 h-11 rounded-lg bg-surface-container-lowest border border-[#E5EAF0] flex items-center justify-center text-primary mb-4 shadow-sm">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <h3 className="font-headline-sub text-[17px] sm:text-[18px] font-bold text-on-surface">
                    AI Automation
                  </h3>
                  <p className="font-body-small text-body-small text-on-surface-variant mt-2 leading-relaxed">
                    Practical AI-powered workflows that reduce repetitive tasks, support faster responses and help teams work more efficiently.
                  </p>
                </div>
                <div className="pt-4 mt-5 border-t border-[#E5EAF0]/70">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="px-2.5 py-1 rounded-md text-[11.5px] font-medium bg-surface-container-lowest text-on-surface-variant border border-[#E5EAF0]">Smart Workflows</span>
                    <span className="px-2.5 py-1 rounded-md text-[11.5px] font-medium bg-surface-container-lowest text-on-surface-variant border border-[#E5EAF0]">Task Automation</span>
                    <span className="px-2.5 py-1 rounded-md text-[11.5px] font-medium bg-surface-container-lowest text-on-surface-variant border border-[#E5EAF0]">Fast Response</span>
                  </div>
                  <Link
                    to="/services/ai-automation"
                    className="inline-flex items-center gap-1.5 text-primary font-label-prominent text-label-prominent hover:text-primary-container transition-colors group"
                  >
                    <span>Explore AI Automation</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Development Approach Lifecycle */}
            <div className="mt-8 pt-6 border-t border-[#E5EAF0] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0 mt-0.5 text-primary">
                  <Search className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-label-prominent text-label-prominent text-on-surface">1. Discovery & Clarity</h4>
                  <p className="font-body-small text-[13px] text-outline mt-0.5 leading-normal">
                    In-depth technical consultation and requirement definition before coding begins.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0 mt-0.5 text-primary">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-label-prominent text-label-prominent text-on-surface">2. Clean Architecture</h4>
                  <p className="font-body-small text-[13px] text-outline mt-0.5 leading-normal">
                    Modern, modular software architecture planned for long-term maintainability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0 mt-0.5 text-primary">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-label-prominent text-label-prominent text-on-surface">3. Agile Delivery</h4>
                  <p className="font-body-small text-[13px] text-outline mt-0.5 leading-normal">
                    Iterative sprint progress, milestone demonstrations, and transparent communication.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0 mt-0.5 text-primary">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-label-prominent text-label-prominent text-on-surface">4. Quality & Support</h4>
                  <p className="font-body-small text-[13px] text-outline mt-0.5 leading-normal">
                    Disciplined quality assurance, smooth production handoff, and ongoing support.
                  </p>
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
                  ABOUT US
                </span>
              </div>
              <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
                Who We Are & How We Build
              </h2>
              <div className="flex flex-col gap-4 font-body-large text-body-large text-on-surface-variant leading-relaxed">
                <p>
                  Stuzen Technologies is an IT solutions company delivering website development, custom software, AI automation and digital services for businesses. We bring thoughtful design and dependable technology together to create solutions that are easy to use, efficient to manage and ready to grow with your business.
                </p>
                <p>
                  We begin by understanding your requirements, then plan, design, develop and refine the solution around your business needs. Our focus is on useful features, clean user experiences, structured development and ongoing support where required.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary hover:text-primary-container transition-colors group"
                >
                  <span>Learn More About Us</span>
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
                OUR SERVICES
              </span>
              <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
                Practical Technology That Supports Your Goals
              </h2>
              <p className="font-body-default text-body-default text-on-surface-variant">
                We deliver modern website development, custom software, AI automation and connected business solutions built around your workflow.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 font-label-prominent text-label-prominent text-primary hover:text-primary-container transition-colors shrink-0"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Services Grid (6 Cards from PDF) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Website Development */}
            <div className="group relative rounded-xl bg-surface-container-lowest p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 border border-[#E5EAF0]">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-sub text-[18px] sm:text-[20px] text-on-surface font-bold">Website Development</h3>
                  <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                    Modern, responsive and user-friendly websites designed to present your business professionally and work smoothly across mobile, tablet and desktop.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-4 border-t border-[#E5EAF0]/70">
                <Link
                  to="/services/website-development"
                  className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary group-hover:text-primary-container transition-colors"
                >
                  <span>Explore Website Development</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 2: Custom Software Development */}
            <div className="group relative rounded-xl bg-surface-container-lowest p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 border border-[#E5EAF0]">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <Terminal className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-sub text-[18px] sm:text-[20px] text-on-surface font-bold">Custom Software Development</h3>
                  <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                    Business-focused software built around your workflow, helping simplify operations, organize information and improve productivity.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-4 border-t border-[#E5EAF0]/70">
                <Link
                  to="/services/custom-software"
                  className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary group-hover:text-primary-container transition-colors"
                >
                  <span>Explore Custom Software</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 3: AI Automation */}
            <div className="group relative rounded-xl bg-surface-container-lowest p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 border border-[#E5EAF0]">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-sub text-[18px] sm:text-[20px] text-on-surface font-bold">AI Automation</h3>
                  <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                    Practical AI-powered workflows that reduce repetitive tasks, support faster responses and help teams work more efficiently.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-4 border-t border-[#E5EAF0]/70">
                <Link
                  to="/services/ai-automation"
                  className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary group-hover:text-primary-container transition-colors"
                >
                  <span>Explore AI Automation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 4: WhatsApp Automation */}
            <div className="group relative rounded-xl bg-surface-container-lowest p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 border border-[#E5EAF0]">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-sub text-[18px] sm:text-[20px] text-on-surface font-bold">WhatsApp Automation</h3>
                  <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                    Automated WhatsApp communication for customer enquiries, instant replies, lead follow-ups, notifications and business messaging workflows.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-4 border-t border-[#E5EAF0]/70">
                <a
                  href="https://wa.me/917418672022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary group-hover:text-primary-container transition-colors"
                >
                  <span>Connect on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Card 5: Web Application Development */}
            <div className="group relative rounded-xl bg-surface-container-lowest p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 border border-[#E5EAF0]">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-sub text-[18px] sm:text-[20px] text-on-surface font-bold">Web Application Development</h3>
                  <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                    Feature-rich web applications with intuitive frontends, structured backends and database integration to support your requirements.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-4 border-t border-[#E5EAF0]/70">
                <Link
                  to="/services/website-development"
                  className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary group-hover:text-primary-container transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 6: Business Digital Solutions */}
            <div className="group relative rounded-xl bg-surface-container-lowest p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 border border-[#E5EAF0]">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <Code className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-sub text-[18px] sm:text-[20px] text-on-surface font-bold">Business Digital Solutions</h3>
                  <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                    Connected digital tools and tailored technology solutions that help streamline day-to-day business activities.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-4 border-t border-[#E5EAF0]/70">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary group-hover:text-primary-container transition-colors"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHATSAPP AUTOMATION */}
      <section className="w-full py-14 sm:py-20 lg:py-28 bg-surface-container-low border-y border-[#E5EAF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-8 sm:gap-12">
          <div className="max-w-3xl flex flex-col gap-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
                WHATSAPP AUTOMATION
              </span>
            </div>
            <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
              Make Every Customer Conversation More Efficient.
            </h2>
            <p className="font-body-large text-body-large text-on-surface-variant leading-relaxed">
              Connect with customers through structured WhatsApp workflows. From enquiry acknowledgement to follow-up messages and important notifications, WhatsApp automation can help your business respond consistently and manage conversations more efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex items-start gap-3.5">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-label-prominent text-label-prominent text-on-surface">Automated welcome and enquiry replies</h4>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex items-start gap-3.5">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-label-prominent text-label-prominent text-on-surface">Customer follow-up message workflows</h4>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex items-start gap-3.5">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-label-prominent text-label-prominent text-on-surface">Appointment and order notifications</h4>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex items-start gap-3.5">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-label-prominent text-label-prominent text-on-surface">Lead capture and enquiry organization</h4>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex items-start gap-3.5">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-label-prominent text-label-prominent text-on-surface">Frequently asked question responses</h4>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex items-start gap-3.5">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-label-prominent text-label-prominent text-on-surface">Business updates and approved message campaigns</h4>
              </div>
            </div>
          </div>

          <p className="font-body-small text-[13px] text-outline italic">
            Feature availability depends on the selected WhatsApp platform, provider and applicable messaging policies.
          </p>
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE STUZEN */}
      <section className="w-full py-14 sm:py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-10 sm:gap-14">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              WHY CHOOSE STUZEN
            </span>
            <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
              Why Choose Stuzen
            </h2>
            <p className="font-body-default text-body-default text-on-surface-variant">
              We bring thoughtful design and dependable technology together to create solutions that are easy to use, efficient to manage and ready to grow with your business.
            </p>
          </div>

          {/* 5 Differentiators from PDF */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-3 border border-[#E5EAF0]">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary font-bold font-headline-sub">
                01
              </div>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Business-focused</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Solutions shaped around your actual requirements.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-3 border border-[#E5EAF0]">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary font-bold font-headline-sub">
                02
              </div>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Clean user experience</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Simple, clear and responsive interfaces.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-3 border border-[#E5EAF0]">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary font-bold font-headline-sub">
                03
              </div>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Thoughtful development</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Organized frontend, backend and database implementation.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-3 border border-[#E5EAF0]">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary font-bold font-headline-sub">
                04
              </div>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Practical automation</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Technology that helps reduce repetitive work.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-3 border border-[#E5EAF0] sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary font-bold font-headline-sub">
                05
              </div>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Scalable approach</h4>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                Solutions planned to support future improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR PROCESS */}
      <section className="w-full py-16 sm:py-24 lg:py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-12 sm:gap-16">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              OUR PROCESS
            </span>
            <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
              Our Process
            </h2>
            <p className="font-body-default text-body-default text-on-surface-variant">
              A clear, structured development lifecycle to deliver dependable technology solutions.
            </p>
          </div>

          {/* 5 Milestones from PDF */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            <div className="flex flex-col gap-3 p-5 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <span className="font-label-code text-label-code text-primary font-bold px-2 py-1 bg-surface-container rounded w-fit">
                01 — Discover
              </span>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed mt-1">
                We understand your business, goals and project requirements.
              </p>
            </div>

            <div className="flex flex-col gap-3 p-5 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <span className="font-label-code text-label-code text-primary font-bold px-2 py-1 bg-surface-container rounded w-fit">
                02 — Plan
              </span>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed mt-1">
                We define the scope, key features, structure and development approach.
              </p>
            </div>

            <div className="flex flex-col gap-3 p-5 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <span className="font-label-code text-label-code text-primary font-bold px-2 py-1 bg-surface-container rounded w-fit">
                03 — Design
              </span>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed mt-1">
                We create a clear and user-friendly experience for your audience.
              </p>
            </div>

            <div className="flex flex-col gap-3 p-5 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0]">
              <span className="font-label-code text-label-code text-primary font-bold px-2 py-1 bg-surface-container rounded w-fit">
                04 — Develop
              </span>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed mt-1">
                We build and integrate the required frontend, backend and services.
              </p>
            </div>

            <div className="flex flex-col gap-3 p-5 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] sm:col-span-2 lg:col-span-1">
              <span className="font-label-code text-label-code text-primary font-bold px-2 py-1 bg-surface-container rounded w-fit">
                05 — Test & Deliver
              </span>
              <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed mt-1">
                We review functionality, resolve issues and prepare the solution for launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR CAPABILITIES */}
      <section className="w-full py-14 sm:py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-12 sm:gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl flex flex-col gap-3">
              <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
                OUR CAPABILITIES
              </span>
              <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
                Digital Solutions We Engineer
              </h2>
              <p className="font-body-default text-body-default text-on-surface-variant">
                Explore the types of modern web platforms, custom software, and intelligent workflow automations Stuzen Technologies develops for growing businesses.
              </p>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 font-label-prominent text-label-prominent text-primary hover:text-primary-container transition-colors shrink-0"
            >
              <span>Explore All Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Capability 1: Web Platforms */}
            <div className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-300 border border-[#E5EAF0]">
              <div>
                <div className="h-60 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Modern web platform dashboard interface"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuZcWj8079rhvrLURNJ0ATcqh9S7bNsJiTIEtd7ZiyvB-VbNRY3lQFJhCbGndp4lG54dDrhMdA-jP238KfdjRlqOuFFfPF1F1qHmFu-GEitxTtGC71oiwjUJ9MtWKGI7Jtyuzjfa2J-Jbhl0m8-iF_x3bKSbrTX-0-9voAeT4TinOzxfmI6ckaNNKMGhK24OYKBzq4QRIKlracSkBeBmO8niGwjwlZn_nQqUUYVQ"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md font-label-code text-label-code text-on-surface font-semibold shadow-sm">
                      Web & Digital Platforms
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-outline font-label-code text-label-code">
                    <span>WEB DEVELOPMENT</span>
                    <span>RESPONSIVE ARCHITECTURE</span>
                  </div>
                  <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Modern Web Applications & Portals</h3>
                  <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                    Fast, responsive web applications, interactive customer portals, and corporate digital presences built with clean frontend engineering.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary group-hover:text-primary-container transition-colors"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Capability 2: Custom Software */}
            <div className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-300 border border-[#E5EAF0]">
              <div>
                <div className="h-60 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Custom business software architecture interface"
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
                    <span>SOFTWARE SYSTEMS</span>
                    <span>SCALABLE BACKEND</span>
                  </div>
                  <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Custom Software & Business Tools</h3>
                  <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                    Bespoke operational tools, database architectures, and secure RESTful APIs engineered to solve specific operational bottlenecks.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary group-hover:text-primary-container transition-colors"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Capability 3: AI & Automation */}
            <div className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-300 border border-[#E5EAF0]">
              <div>
                <div className="h-60 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Intelligent workflow automation interface"
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
                    <span>WORKFLOW AUTOMATION</span>
                    <span>INTELLIGENT SYSTEMS</span>
                  </div>
                  <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">Intelligent Workflow Automation</h3>
                  <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                    Targeted automation pipelines, data extraction workflows, and smart integrations that eliminate repetitive manual business tasks.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 font-label-prominent text-label-prominent text-primary group-hover:text-primary-container transition-colors"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CONVERSION CTA */}
      <CTASection
        tag="Start Your Project"
        title="Have a Project in Mind?"
        description="Tell us what you want to build. Let’s discuss a digital solution that fits your business."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </div>
  );
}

