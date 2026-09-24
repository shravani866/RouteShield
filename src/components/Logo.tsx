import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-8 w-auto', size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="RouteShield Logo"
    >
      <defs>
        {/* Shield Border Gradient */}
        <linearGradient id="shieldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4cd7f6" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        {/* Shield Fill Gradient */}
        <linearGradient id="shieldFill" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#0f1a30" />
          <stop offset="100%" stopColor="#060c18" />
        </linearGradient>
        {/* Route Gradient */}
        <linearGradient id="routeGradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#4edea3" />
        </linearGradient>
        {/* Red Alert Glow */}
        <radialGradient id="alertGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#dc2626" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#991b1b" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer Shield Shell */}
      <path
        d="M50 8 L85 22 V52 C85 71 70 87 50 94 C30 87 15 71 15 52 V22 L50 8 Z"
        fill="url(#shieldFill)"
        stroke="url(#shieldBorder)"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* S-curve Reroute Path */}
      <path
        d="M 32 58 C 30 46, 42 42, 50 52 C 58 62, 68 40, 72 38"
        fill="none"
        stroke="url(#routeGradient)"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Disruption Alert Zone (Hormuz Bottleneck) */}
      <circle cx="44" cy="51" r="14" stroke="#ef4444" strokeWidth="3" opacity="0.4" />
      <circle cx="44" cy="51" r="9" stroke="#ef4444" strokeWidth="2.5" opacity="0.75" />
      <circle cx="44" cy="51" r="5.5" fill="#f87171" />

      {/* Safe Terminal Destination Node */}
      <circle cx="72" cy="38" r="4.5" fill="#4edea3" />
    </svg>
  );
};
