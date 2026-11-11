import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { footerLinks } from '../data/navigation';
import stuzenIcon from '../assets/logo/stuzen-icon.png';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-[#E5EAF0] pt-12 sm:pt-16 pb-10 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-10 sm:pb-14 border-b border-[#E5EAF0]">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 group select-none">
              <img
                alt="Stuzen Technologies Icon"
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                src={stuzenIcon}
              />
              <div className="flex flex-col justify-center">
                <span className="font-brand-logo text-[18px] font-black tracking-[0.08em] text-on-surface leading-none">
                  STU<span className="text-primary-container">Z</span>EN
                </span>
                <span className="font-brand-logo text-[9.5px] font-semibold text-outline uppercase tracking-[0.28em] leading-none mt-1.5">
                  TECHNOLOGIES
                </span>
              </div>
            </Link>
            <p className="font-body-small text-body-small text-on-surface-variant max-w-sm leading-relaxed">
              Premier technology engineering and digital solutions partner helping visionary businesses build, scale, and innovate with precision.
            </p>
            <div className="inline-flex items-center gap-2 pt-2">
              <span className="font-label-prominent text-label-prominent font-semibold text-primary">
                Learn. Build. Innovate.
              </span>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-label-prominent text-label-prominent uppercase tracking-wider font-semibold text-on-surface">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5 mt-1">
              {footerLinks.company.map((item) => (
                <li key={item.name} className="font-body-small text-body-small">
                  <Link to={item.path} className="text-on-surface-variant hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-label-prominent text-label-prominent uppercase tracking-wider font-semibold text-on-surface">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5 mt-1">
              {footerLinks.services.map((item) => (
                <li key={item.name} className="font-body-small text-body-small">
                  <Link to={item.path} className="text-on-surface-variant hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-label-prominent text-label-prominent uppercase tracking-wider font-semibold text-on-surface">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-3 mt-1 font-body-small text-body-small text-on-surface-variant">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href={`mailto:${footerLinks.contact.email}`} className="hover:text-primary transition-colors">
                  {footerLinks.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href="tel:+18004127889" className="hover:text-primary transition-colors">
                  {footerLinks.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{footerLinks.contact.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{footerLinks.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-body-small text-body-small text-outline">
          <p>© 2025 STUZEN TECHNOLOGIES INC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-on-surface transition-colors">
              Privacy Policy
            </Link>
            <span className="text-outline-variant">|</span>
            <Link to="/contact" className="hover:text-on-surface transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-outline-variant">|</span>
            <Link to="/contact" className="hover:text-on-surface transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

