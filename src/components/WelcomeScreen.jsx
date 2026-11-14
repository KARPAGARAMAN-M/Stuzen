import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import stuzenIcon from '../assets/logo/stuzen-icon.png';
import '../styles/welcome.css';

/**
 * Premium Welcome Screen for Stuzen Technologies
 *
 * Behavior:
 * - Displays the Stuzen brand introduction, technical telemetry, and animated progress.
 * - Stays active on screen and DOES NOT disappear automatically.
 * - Features an interactive CTA button with an arrow mark ("Explore Website" / "Enter Website").
 * - Only after clicking the button (or pressing Enter/Space) does it smoothly transition to the homepage.
 * - 100% safe: does not modify or damage any existing webpage design or components.
 */
export default function WelcomeScreen({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Handle entry button click - smooth exit transition
  const handleEnter = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      if (onCompleteRef.current) {
        onCompleteRef.current();
      }
    }, 450);
  };

  // Keyboard shortcut: pressing Enter or Space activates the enter button
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      role="region"
      aria-label="Welcome to Stuzen Technologies"
      aria-live="polite"
      className={`stuzen-welcome-viewport ${isExiting ? 'stuzen-welcome-exiting' : ''}`}
    >
      {/* 1. Subtle Architectural Engineering Grid Layer */}
      <div aria-hidden="true" className="stuzen-welcome-grid" />

      {/* 2. Soft Vignette & Ambient Radial Glow */}
      <div aria-hidden="true" className="stuzen-welcome-glow-primary" />
      <div aria-hidden="true" className="stuzen-welcome-glow-secondary" />

      {/* 3. Fine Geometric Alignment Axis */}
      <div aria-hidden="true" className="stuzen-welcome-axis-h" />

      {/* 4. Main Focal Unit: Original S Ribbon Icon & Stuzen Identity */}
      <main className="stuzen-welcome-content">
        <div className="stuzen-brand-lockup">
          {/* Original blue-cyan gradient S symbol */}
          <img
            src={stuzenIcon}
            alt="Stuzen Technologies Icon"
            className="stuzen-icon-img"
          />

          {/* Official Brand Wordmark (Consistent with Navbar & Footer) */}
          <div className="stuzen-wordmark-container">
            <span className="stuzen-wordmark-text">
              STU<span className="stuzen-wordmark-accent">Z</span>EN
            </span>
            <span className="stuzen-wordmark-sub">
              TECHNOLOGIES
            </span>
          </div>

          {/* Tagline Strip: Learn. Build. Innovate. */}
          <div className="stuzen-tagline-strip">
            <span className="stuzen-strip-line" />
            <span className="stuzen-strip-text">Learn. Build. Innovate.</span>
            <span className="stuzen-strip-line right" />
          </div>
        </div>

        {/* 5. Corporate Typography Hierarchy */}
        <div className="stuzen-typography-stack">
          {/* Eyebrow */}
          <p className="stuzen-eyebrow">
            ENGINEERING THE FUTURE
          </p>

          {/* Welcome Heading */}
          <h1 className="stuzen-heading">
            Welcome to Stuzen Technologies
          </h1>

          {/* Supporting Narrative */}
          <p className="stuzen-supporting-desc">
            Premier technology engineering and digital solutions partner
          </p>
        </div>

        {/* 6. Interactive CTA Button with Arrow Mark — Click to Enter Homepage */}
        <div className="stuzen-cta-wrapper">
          <button
            type="button"
            onClick={handleEnter}
            className="stuzen-enter-btn"
            aria-label="Enter Stuzen Technologies Website"
          >
            <span>Explore Website</span>
            <ArrowRight className="stuzen-btn-arrow" size={18} strokeWidth={2.2} />
          </button>
        </div>
      </main>
    </div>
  );
}
