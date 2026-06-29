"use client";

import React from "react";

interface LogoProps {
  height?: number | string;
  className?: string;
  isScrolled?: boolean;
  theme?: "light" | "dark" | "adaptive";
}

export default function Logo({
  height = 50,
  className = "",
  isScrolled = false,
  theme = "adaptive",
}: LogoProps) {
  // Determine if we should use dark theme colors (white/light text on dark backgrounds)
  // or light theme colors (dark text on light/white backgrounds)
  const isDarkTheme =
    theme === "dark" || (theme === "adaptive" && !isScrolled);

  // Dynamic colors for the wordmark text based on the theme
  const bmcColor = isDarkTheme ? "#ffffff" : "#0f172a";
  const safetyNetsColor = isDarkTheme ? "#38bdf8" : "#2563eb"; // Sky-blue on dark, Royal-blue on light
  const dividerColor = isDarkTheme ? "rgba(255,255,255,0.15)" : "#e2e8f0";

  // Calculate dimensions (5:1 Aspect Ratio)
  const parsedHeight = typeof height === "number" ? height : parseInt(height) || 50;
  const width = parsedHeight * 5;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={parsedHeight}
      viewBox="0 0 280 56"
      fill="none"
      className={`select-none transition-all duration-300 ${className}`}
      style={{ aspectRatio: "5 / 1" }}
    >
      <defs>
        <linearGradient id="logo-blue-grad" x1="3" y1="3" x2="53" y2="53" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        
        <linearGradient id="logo-blue-grad-light" x1="10" y1="10" x2="46" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>

        <linearGradient id="logo-pigeon-grad" x1="22" y1="14" x2="45" y2="43" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        
        <filter id="logo-premium-shadow" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse">
          <feDropShadow dx={0} dy={2} stdDeviation={2} floodColor="#1d4ed8" floodOpacity={0.2} />
        </filter>
      </defs>

      <g filter="url(#logo-premium-shadow)">
        <circle cx="28" cy="28" r="25" stroke="url(#logo-blue-grad)" strokeWidth="2.5" fill="#0f172a" />
        
        <path
          d="
            M 10 10 L 46 46 
            M 10 17 L 39 46 
            M 10 25 L 31 46 
            M 10 33 L 23 46 
            M 17 10 L 46 39 
            M 25 10 L 46 31 
            M 33 10 L 46 23 
            M 46 10 L 10 46 
            M 46 17 L 17 46 
            M 46 25 L 25 46 
            M 46 33 L 33 46 
            M 39 10 L 10 39 
            M 31 10 L 10 31 
            M 23 10 L 10 23
          "
          stroke="url(#logo-blue-grad-light)"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity={0.4}
        />

        <g transform="translate(28, 28) scale(1.22) translate(-28, -28)">
          <path
            d="
              M 23 24 
              C 21.8 24.3, 20.8 23.8, 20 23.2 
              C 20.8 22.5, 21.8 22.1, 22.8 22.2 
              C 24 22.3, 25 23.2, 25.8 24 
              C 27 25.2, 28 26.8, 29.2 28 
              C 30 28.8, 31 29.5, 32 29 
              C 33.5 28.2, 34.8 26.2, 36 24 
              C 37.5 21.2, 39 18, 41 15 
              C 41.5 14.2, 42 14.5, 41.8 15.2 
              C 41 18.2, 39.5 22, 38 25.2 
              C 36.8 27.8, 35.2 30.5, 34.2 33 
              C 33.8 34, 34.2 34.8, 35 35.2 
              C 36.5 36, 38 37, 39.5 38.2 
              C 40.8 39.2, 42 40.5, 43 42 
              C 43.2 42.5, 42.8 43, 42 43 
              C 40 43, 38 42.5, 36 41.5 
              C 34 40.5, 32 39, 30.5 37.5 
              C 29 36, 27.5 34.2, 26 32 
              C 25 30.5, 24 28.8, 23 27.2 
              L 23 24 Z
            "
            fill="url(#logo-pigeon-grad)"
          />
        </g>
      </g>

      <g className="transition-colors duration-300">
        <text
          x="65"
          y="27"
          fontFamily="var(--font-display), 'Outfit', 'Inter', system-ui, -apple-system, sans-serif"
          fontSize="24"
          fontWeight="900"
          fill={bmcColor}
          letterSpacing="1"
          className="transition-colors duration-300"
        >
          BMC
        </text>

        <text
          x="65"
          y="43"
          fontFamily="var(--font-display), 'Outfit', 'Inter', system-ui, -apple-system, sans-serif"
          fontSize="11.5"
          fontWeight="700"
          fill={safetyNetsColor}
          letterSpacing="4.8"
          className="transition-colors duration-300"
        >
          SAFETY NETS
        </text>

        <line
          x1="58"
          y1="10"
          x2="58"
          y2="46"
          stroke={dividerColor}
          strokeWidth="1.2"
          className="transition-colors duration-300"
        />
      </g>
    </svg>
  );
}
