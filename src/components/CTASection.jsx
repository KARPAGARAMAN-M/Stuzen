import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection({
  tag = 'Start Your Project',
  title = "Let's Build Something Great Together.",
  description = 'Ready to elevate your technology stack or build your next mission-critical platform? Schedule an initial technical consultation with our engineering team.',
  buttonText = 'Contact Us Today',
  buttonLink = '/contact',
}) {
  return (
    <section className="w-full pb-24 lg:pb-32 px-6 lg:px-12 bg-surface">
      <div className="max-w-7xl mx-auto rounded-2xl bg-surface-container-low p-8 lg:p-16 shadow-sm relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Decorative radial ambient blur */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-fixed/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl flex flex-col gap-4 relative z-10">
          <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
            {tag}
          </span>
          <h2 className="font-headline-section text-headline-section text-on-surface">
            {title}
          </h2>
          <p className="font-body-large text-body-large text-on-surface-variant leading-relaxed">
            {description}
          </p>
        </div>

        <div className="shrink-0 relative z-10">
          <Link
            to={buttonLink}
            className="inline-flex items-center justify-center h-14 px-8 rounded-lg bg-primary-container text-on-primary font-label-prominent text-label-prominent shadow-md hover:bg-primary transition-all duration-200 transform hover:-translate-y-0.5 gap-3 group"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

