import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  CheckCircle,
  Copy,
  Check,
  Send,
  Lock,
  Shield,
  UserCheck,
  Calendar,
  AlertCircle,
  Building,
  User,
} from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phoneNumber: '',
    serviceFocus: 'web',
    timeline: 'standard',
    budget: '50k-100k',
    projectScope: '',
    ndaCheck: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@stuzen.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Organization Name is required';
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please provide a valid email address';
    }
    if (!formData.projectScope.trim()) {
      newErrors.projectScope = 'Please provide a brief description of your project';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const faqs = [
    {
      question: 'What happens after I submit this inquiry form?',
      answer:
        'Your brief is reviewed within 4 hours by a Senior Solutions Architect. We prepare an initial technical assessment and respond via email within 24 business hours to schedule a 30-minute discovery consultation.',
    },
    {
      question: 'Do you sign Non-Disclosure Agreements (NDAs) before discussion?',
      answer:
        'Yes. If you check the NDA request box on the form, we will automatically countersign and return a mutual NDA prior to our scheduled discovery conversation.',
    },
    {
      question: 'What is the typical minimum engagement size?',
      answer:
        'Our custom engineering and architecture projects typically begin at $25,000 for focused implementations, while larger enterprise transformations and dedicated team sprints scale accordingly.',
    },
    {
      question: 'Can we meet the engineering team in person?',
      answer:
        'Yes. We welcome technical workshops and executive sessions at our Silicon Valley campus or can deploy lead architects to your corporate headquarters for intensive discovery sprints.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO HEADER */}
      <section className="relative w-full overflow-hidden bg-surface pt-12 pb-14 sm:pb-16 lg:pt-16 lg:pb-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-8">
          <div className="max-w-3xl flex flex-col gap-4">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-bold">
                INITIATE ENGAGEMENT
              </span>
            </div>

            <h1 className="font-hero-display text-[clamp(1.85rem,6vw,3.75rem)] leading-[1.1] font-extrabold text-on-surface tracking-tight break-words">
              Let's Talk About Your Next Project.
            </h1>

            <p className="font-body-large text-body-large text-on-surface-variant max-w-2xl leading-relaxed">
              Whether you are planning a mission-critical web platform, replacing restrictive legacy software, or automating enterprise operations, our senior architects are ready to collaborate.
            </p>
          </div>

          {/* Quick Action Trio Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-[#E5EAF0]">
            <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-label-prominent text-label-prominent text-on-surface">Confidentiality First</h4>
                <p className="font-body-small text-body-small text-outline mt-0.5">Automated mutual NDA execution</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                <UserCheck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-label-prominent text-label-prominent text-on-surface">Technical Feasibility</h4>
                <p className="font-body-small text-body-small text-outline mt-0.5">Direct senior architect review</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-label-prominent text-label-prominent text-on-surface">Rapid SLA Response</h4>
                <p className="font-body-small text-body-small text-outline mt-0.5">Guaranteed feedback within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: TWO-COLUMN INTERACTION SECTION */}
      <section className="w-full pb-16 sm:pb-24" id="inquiry-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Direct Coordinates */}
            <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-col gap-3">
                <span className="font-label-code text-label-code uppercase tracking-wider text-outline">
                  Direct Channels
                </span>
                <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
                  Global Inquiries & Engineering HQ
                </h2>
                <p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
                  Connect directly with our solutions engineering team. We prioritize technical transparency, strict NDAs, and production velocity.
                </p>
              </div>

              {/* Channel List */}
              <div className="flex flex-col gap-4">
                {/* Email Item */}
                <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-code text-label-code uppercase text-outline">Official Business Email</span>
                      <a href="mailto:hello@stuzen.com" className="font-label-prominent text-body-small sm:text-label-prominent text-on-surface hover:text-primary transition-colors">
                        hello@stuzen.com
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 sm:p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant transition-colors relative"
                    title="Copy to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    {copiedEmail && (
                      <span className="absolute -top-8 right-0 bg-inverse-surface text-inverse-on-surface font-label-code text-label-code px-2 py-0.5 rounded shadow">
                        Copied!
                      </span>
                    )}
                  </button>
                </div>

                {/* Phone Line Item */}
                <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-code text-label-code uppercase text-outline">Corporate Direct Lines</span>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <a href="tel:+18004127889" className="font-label-prominent text-body-small sm:text-label-prominent text-on-surface hover:text-primary transition-colors">
                        +1 (800) 412-STUZEN
                      </a>
                      <span className="text-outline-variant text-[12px] hidden sm:inline">•</span>
                      <a href="tel:+18004127889" className="font-body-small text-body-small text-on-surface-variant hover:text-primary transition-colors">
                        +1 (800) 412-7889
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Item */}
                <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant shrink-0">
                      <MessageSquare className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-code text-label-code uppercase text-outline">Instant Technical Chat</span>
                      <a href="https://wa.me/18004127889" target="_blank" rel="noopener noreferrer" className="font-label-prominent text-body-small sm:text-label-prominent text-on-surface hover:text-primary transition-colors">
                        WhatsApp Business
                      </a>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-surface-container text-secondary font-label-code text-[11px] font-bold">
                    Active
                  </span>
                </div>

                {/* Operating Campus */}
                <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-code text-label-code uppercase text-outline">Operating Campus</span>
                    <span className="font-label-prominent text-body-small sm:text-label-prominent text-on-surface mt-0.5">
                      HQ Technology Campus, Silicon Valley
                    </span>
                    <span className="font-body-small text-body-small text-on-surface-variant mt-0.5">
                      440 Innovation Boulevard, Palo Alto, CA 94304
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-[#E5EAF0] flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-code text-label-code uppercase text-outline">Operating Hours</span>
                    <span className="font-label-prominent text-body-small sm:text-label-prominent text-on-surface">
                      Monday – Friday: 9:00 AM – 6:00 PM EST
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Enterprise Project Inquiry Form */}
            <div className="lg:col-span-7 w-full">
              <div className="rounded-3xl bg-surface-container-lowest shadow-xl p-5 sm:p-8 lg:p-12 relative border border-[#E5EAF0]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed/20 rounded-full blur-2xl pointer-events-none -mr-12 -mt-12" />

                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-semibold">
                        Discovery Brief
                      </span>
                      <span className="font-label-code text-label-code text-outline">
                        Est. 2 min completion
                      </span>
                    </div>
                    <h3 className="font-headline-sub text-headline-sub text-on-surface font-bold">
                      Start Your Project Inquiry
                    </h3>
                    <p className="font-body-small text-body-small text-on-surface-variant">
                      Tell us about your objectives. A Principal Architect will review your specifications before our first discussion.
                    </p>
                  </div>

                  {/* Success State Banner */}
                  {submitted ? (
                    <div className="p-6 rounded-2xl bg-secondary-fixed text-on-secondary-fixed flex items-start gap-4 border border-secondary/20 animate-in fade-in">
                      <CheckCircle className="w-7 h-7 text-secondary shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-1">
                        <span className="font-label-prominent text-label-prominent font-bold text-on-surface">
                          Enquiry Received Successfully
                        </span>
                        <p className="font-body-small text-body-small text-on-surface-variant leading-relaxed">
                          Thank you, <strong>{formData.fullName}</strong>. Your project brief has been assigned to our Senior Solutions Architect. Expect a direct response at <strong>{formData.workEmail}</strong> within 24 business hours.
                        </p>
                        <p className="font-label-code text-[11px] text-outline mt-2">
                          (Note: Frontend simulation. No actual email was transmitted.)
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({
                              fullName: '',
                              companyName: '',
                              workEmail: '',
                              phoneNumber: '',
                              serviceFocus: 'web',
                              timeline: 'standard',
                              budget: '50k-100k',
                              projectScope: '',
                              ndaCheck: false,
                            });
                          }}
                          className="mt-3 px-4 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-prominent text-body-small border border-[#E5EAF0] self-start hover:bg-surface-container transition-colors"
                        >
                          Submit Another Brief
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      {/* Name & Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="font-label-prominent text-label-prominent text-on-surface flex items-center justify-between" htmlFor="fullName">
                            <span>Full Name <span className="text-error">*</span></span>
                          </label>
                          <div className="relative">
                            <input
                              id="fullName"
                              type="text"
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              placeholder="Dr. Elena Vance"
                              className={`w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline text-body-default focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-sm transition-all border ${
                                errors.fullName ? 'border-error ring-1 ring-error' : 'border-[#E5EAF0]'
                              }`}
                            />
                            <User className="w-4 h-4 absolute right-3.5 top-4 text-outline" />
                          </div>
                          {errors.fullName && <span className="font-label-code text-[11px] text-error">{errors.fullName}</span>}
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="font-label-prominent text-label-prominent text-on-surface flex items-center justify-between" htmlFor="companyName">
                            <span>Organization Name <span className="text-error">*</span></span>
                          </label>
                          <div className="relative">
                            <input
                              id="companyName"
                              type="text"
                              value={formData.companyName}
                              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                              placeholder="Acme Global Logistics"
                              className={`w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline text-body-default focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-sm transition-all border ${
                                errors.companyName ? 'border-error ring-1 ring-error' : 'border-[#E5EAF0]'
                              }`}
                            />
                            <Building className="w-4 h-4 absolute right-3.5 top-4 text-outline" />
                          </div>
                          {errors.companyName && <span className="font-label-code text-[11px] text-error">{errors.companyName}</span>}
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="font-label-prominent text-label-prominent text-on-surface flex items-center justify-between" htmlFor="workEmail">
                            <span>Work Email Address <span className="text-error">*</span></span>
                          </label>
                          <div className="relative">
                            <input
                              id="workEmail"
                              type="email"
                              value={formData.workEmail}
                              onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                              placeholder="elena@acme.com"
                              className={`w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline text-body-default focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-sm transition-all border ${
                                errors.workEmail ? 'border-error ring-1 ring-error' : 'border-[#E5EAF0]'
                              }`}
                            />
                            <Mail className="w-4 h-4 absolute right-3.5 top-4 text-outline" />
                          </div>
                          {errors.workEmail && <span className="font-label-code text-[11px] text-error">{errors.workEmail}</span>}
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="font-label-prominent text-label-prominent text-on-surface flex items-center justify-between" htmlFor="phoneNumber">
                            <span>Phone Number</span>
                            <span className="font-label-code text-label-code text-outline">Optional</span>
                          </label>
                          <div className="relative">
                            <input
                              id="phoneNumber"
                              type="tel"
                              value={formData.phoneNumber}
                              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                              placeholder="+1 (555) 019-2834"
                              className="w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline text-body-default focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-sm transition-all border border-[#E5EAF0]"
                            />
                            <Phone className="w-4 h-4 absolute right-3.5 top-4 text-outline" />
                          </div>
                        </div>
                      </div>

                      {/* Service Required Pills */}
                      <div className="flex flex-col gap-2">
                        <label className="font-label-prominent text-label-prominent text-on-surface">
                          Primary Service Focus <span className="text-error">*</span>
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {[
                            { id: 'web', label: 'Website Dev' },
                            { id: 'software', label: 'Custom Software' },
                            { id: 'ai', label: 'AI & Automation' },
                            { id: 'enterprise', label: 'Full Enterprise' },
                          ].map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, serviceFocus: item.id })}
                              className={`p-3 rounded-xl font-label-code text-label-code text-center font-medium transition-all border ${
                                formData.serviceFocus === item.id
                                  ? 'bg-primary-container text-on-primary border-primary shadow-sm'
                                  : 'bg-surface-container-low text-on-surface border-[#E5EAF0] hover:bg-surface-container'
                              }`}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Timeline & Budget */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="font-label-prominent text-label-prominent text-on-surface" htmlFor="timeline">
                            Target Delivery Timeline
                          </label>
                          <select
                            id="timeline"
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface text-body-default focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-sm transition-all border border-[#E5EAF0] cursor-pointer"
                          >
                            <option value="immediate">Urgent (&lt; 1 month)</option>
                            <option value="standard">1 – 3 Months</option>
                            <option value="medium">3 – 6 Months</option>
                            <option value="long">Long-term / Multi-phase</option>
                          </select>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="font-label-prominent text-label-prominent text-on-surface" htmlFor="budget">
                            Estimated Budget Range
                          </label>
                          <select
                            id="budget"
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface text-body-default focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-sm transition-all border border-[#E5EAF0] cursor-pointer"
                          >
                            <option value="25k-50k">$25,000 – $50,000</option>
                            <option value="50k-100k">$50,000 – $100,000</option>
                            <option value="100k-250k">$100,000 – $250,000</option>
                            <option value="250k+">$250,000+ (Enterprise Architecture)</option>
                          </select>
                        </div>
                      </div>

                      {/* Project Description */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-prominent text-label-prominent text-on-surface flex items-center justify-between" htmlFor="projectScope">
                          <span>Project Description & Technical Requirements <span className="text-error">*</span></span>
                        </label>
                        <textarea
                          id="projectScope"
                          rows="4"
                          value={formData.projectScope}
                          onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                          placeholder="Please outline your project goals, current technology architecture, target release deadlines, and any specific engineering requirements..."
                          className={`w-full p-4 rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline text-body-default focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-sm transition-all border ${
                            errors.projectScope ? 'border-error ring-1 ring-error' : 'border-[#E5EAF0]'
                          }`}
                        />
                        {errors.projectScope && <span className="font-label-code text-[11px] text-error">{errors.projectScope}</span>}
                      </div>

                      {/* NDA Checkbox */}
                      <label className="flex items-start gap-3 p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer select-none border border-[#E5EAF0]">
                        <input
                          id="ndaCheck"
                          type="checkbox"
                          checked={formData.ndaCheck}
                          onChange={(e) => setFormData({ ...formData, ndaCheck: e.target.checked })}
                          className="w-5 h-5 rounded mt-0.5 accent-primary cursor-pointer"
                        />
                        <div className="flex flex-col">
                          <span className="font-label-prominent text-label-prominent text-on-surface font-semibold">
                            Request a Mutual Non-Disclosure Agreement (NDA)
                          </span>
                          <span className="font-body-small text-body-small text-on-surface-variant mt-0.5">
                            Our legal counsel will execute our standardized corporate NDA prior to scheduling the technical discovery call.
                          </span>
                        </div>
                      </label>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full h-14 rounded-xl bg-primary-container text-on-primary font-headline-sub text-body-default font-bold shadow-md hover:bg-primary transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-2"
                      >
                        <span>Submit Project Enquiry</span>
                        <Send className="w-4 h-4" />
                      </button>

                      {/* Privacy Disclaimer */}
                      <div className="flex items-center justify-center gap-2 text-center text-outline pt-2">
                        <Lock className="w-4 h-4 text-outline" />
                        <p className="font-body-small text-body-small">
                          We respect your privacy. Your information is protected under our strict confidentiality policy.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HIGH-TRUST REASSURANCES */}
      <section className="w-full py-12 sm:py-16 bg-surface-container-low border-y border-[#E5EAF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm border border-[#E5EAF0]">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">100% Confidentiality Guaranteed</h4>
              <p className="font-body-small text-body-small text-on-surface-variant mt-1 leading-relaxed">
                We protect proprietary intellectual property under ironclad bilateral NDAs prior to any architectural review.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm border border-[#E5EAF0]">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">Dedicated Architect Assigned</h4>
              <p className="font-body-small text-body-small text-on-surface-variant mt-1 leading-relaxed">
                You work directly with principal engineers who have designed systems for high-scale enterprise platforms.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm border border-[#E5EAF0]">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-headline-sub text-body-large font-bold text-on-surface">No Obligation Discovery Call</h4>
              <p className="font-body-small text-body-small text-on-surface-variant mt-1 leading-relaxed">
                Receive actionable technical insights, feasibility assessments, and architecture roadmap estimates upfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQS BEFORE REACHING OUT */}
      <section className="w-full py-14 sm:py-20 lg:py-28 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-10 sm:gap-12">
          <div className="text-center flex flex-col items-center gap-3">
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-bold">
              ENGAGEMENT FAQ
            </span>
            <h2 className="font-headline-section text-[clamp(1.5rem,5vw,2.375rem)] leading-[1.2] text-on-surface">
              Frequently Asked Questions Before Reaching Out
            </h2>
          </div>

          <FAQAccordion items={faqs} defaultOpenIndex={0} />
        </div>
      </section>

      {/* SECTION 6: FINAL CONVERSION BANNER */}
      <CTASection
        tag="CONNECT DIRECTLY"
        title="Ready to architect something remarkable?"
        description="Schedule a technical consultation with our engineering leadership to review your requirements."
        buttonText="Book Discovery Call"
        buttonLink="#inquiry-form"
      />
    </div>
  );
}

