import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, User } from 'lucide-react';
import { navLinks } from '../data/navigation';
import stuzenIcon from '../assets/logo/stuzen-icon.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl border-b border-[#E5EAF0] shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <div className="flex items-center gap-4 shrink-0">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              alt="Stuzen Technologies Icon"
              className="h-9 w-auto object-contain"
              src={stuzenIcon}
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-headline-sub text-body-default font-bold tracking-tight text-on-surface leading-none group-hover:text-primary transition-colors">
                STUZEN
              </span>
              <span className="font-label-code text-label-code text-outline uppercase tracking-wider leading-none mt-1">
                Technologies
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              const serviceActive = isActive('/services');
              return (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 font-body-small text-body-small transition-colors py-2 focus:outline-none ${
                      serviceActive
                        ? 'text-primary font-semibold'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  >
                    <span>Services</span>
                    <ChevronDown className="w-4 h-4 text-outline group-hover:rotate-180 transition-transform duration-200" />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-0 top-full pt-2 transition-all duration-200 ease-out z-50 ${
                      servicesDropdownOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="w-64 bg-surface-container-lowest border border-[#E5EAF0] rounded-xl shadow-[0_10px_15px_-3px_rgba(16,24,39,0.05),0_4px_6px_-2px_rgba(16,24,39,0.02)] p-2 flex flex-col gap-1">
                      {link.children.map((child) => {
                        const childActive = location.pathname === child.path;
                        return (
                          <Link
                            key={child.name}
                            to={child.path}
                            className={`px-3 py-2.5 rounded-lg text-body-small font-body-small transition-colors flex items-center justify-between ${
                              childActive
                                ? 'bg-surface-container text-primary font-semibold'
                                : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                            }`}
                          >
                            <span>{child.name}</span>
                            {child.isOverview && <ArrowRight className="w-3.5 h-3.5 text-outline" />}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            const active = isActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors py-2 ${
                  active
                    ? 'text-primary font-semibold'
                    : 'font-body-small text-body-small text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center h-10 px-5 rounded-lg bg-primary-container text-on-primary font-label-prominent text-label-prominent shadow-sm hover:bg-primary transition-all duration-150 transform hover:-translate-y-0.5"
          >
            Let's Talk
          </Link>
          
          <div className="hidden sm:flex w-8 h-8 rounded-full bg-primary items-center justify-center shrink-0 text-on-primary">
            <User className="w-4 h-4" />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-[#E5EAF0] px-6 py-4 shadow-xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="flex flex-col border-b border-[#E5EAF0]/60 pb-2">
                    <button
                      type="button"
                      className="flex items-center justify-between py-2 text-on-surface font-medium text-left"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 flex flex-col gap-1.5 py-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className={`py-2 text-body-small ${
                              location.pathname === child.path
                                ? 'text-primary font-semibold'
                                : 'text-on-surface-variant'
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-2 border-b border-[#E5EAF0]/60 text-body-default ${
                    active ? 'text-primary font-semibold' : 'text-on-surface'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center h-12 rounded-lg bg-primary-container text-on-primary font-label-prominent text-label-prominent shadow-sm hover:bg-primary transition-colors text-center"
              >
                Let's Talk
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

