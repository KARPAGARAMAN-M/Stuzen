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
export default function WelcomeScreen({ onComplete, duration = 1800 }) {
  const [progress, setProgress] = useState(0);
  const [telemetryMsg, setTelemetryMsg] = useState('INITIALIZING ARCHITECTURE PROTOCOLS');
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let animFrameId;
    const startTime = performance.now();

    const checkpoints = [
      { at: 0, msg: 'INITIALIZING ARCHITECTURE PROTOCOLS' },
      { at: 30, msg: 'SYNTHESIZING DIGITAL WORKSPACE' },
      { at: 65, msg: 'CALIBRATING ENTERPRISE ENGINE' },
      { at: 90, msg: 'ESTABLISHING SECURE CONNECTION' },
      { at: 100, msg: 'SYSTEM READY // CLICK BELOW TO ENTER' }
    ];

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const linear = Math.min(1, Math.max(0, elapsed / duration));
      const eased = easeOutCubic(linear);
      const currentPct = Math.round(eased * 100);

      setProgress(currentPct);

      for (let i = checkpoints.length - 1; i >= 0; i--) {
        if (currentPct >= checkpoints[i].at) {
          setTelemetryMsg(checkpoints[i].msg);
          break;
        }
      }

      if (linear < 1) {
        animFrameId = requestAnimationFrame(updateProgress);
      } else {
        setIsReady(true);
      }
    };

    animFrameId = requestAnimationFrame(updateProgress);

    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, [duration]);

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

      {/* 4. Precision Technical Corner Overlays */}
      <div className="stuzen-corner-marker stuzen-corner-tl" aria-hidden="true">
        <svg className="w-3.5 h-3.5 text-[#087BEE]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 16 16">
          <path d="M8 2v12M2 8h12" />
        </svg>
        <span className="stuzen-marker-text">SYS.LOC // 28.6139° N, 77.2090° E</span>
      </div>

      <div className="stuzen-corner-marker stuzen-corner-tr" aria-hidden="true">
        <span className="stuzen-beacon-dot" />
        <span className="stuzen-marker-text">INITIALIZED : SECURE_CHANNEL_READY</span>
        <svg className="w-3.5 h-3.5 text-[#087BEE]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 16 16">
          <path d="M8 2v12M2 8h12" />
        </svg>
      </div>

      <div className="stuzen-corner-marker stuzen-corner-bl" aria-hidden="true">
        <svg className="w-3.5 h-3.5 text-[#087BEE]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 16 16">
          <path d="M8 2v12M2 8h12" />
        </svg>
        <span className="stuzen-marker-text">PRECISION PROTOCOL : ACTIVE [VER 3.4.12]</span>
      </div>

      <div className="stuzen-corner-marker stuzen-corner-br" aria-hidden="true">
        <span className="stuzen-marker-text">DIGITAL ARCHITECTURE PLATFORM</span>
        <svg className="w-3.5 h-3.5 text-[#087BEE]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 16 16">
          <path d="M8 2v12M2 8h12" />
        </svg>
      </div>

      {/* 5. Main Focal Unit: Original S Ribbon Icon & Stuzen Identity */}
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

        {/* 6. Corporate Typography Hierarchy */}
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

        {/* 7. Minimal Animated Progress Indicator */}
        <div className="stuzen-progress-container" aria-hidden="true">
          <div className="stuzen-progress-track">
            <div
              className="stuzen-progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="stuzen-status-telemetry">
            {telemetryMsg}
          </p>
        </div>

        {/* 8. Interactive CTA Button with Arrow Mark — Click to Enter Homepage */}
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
