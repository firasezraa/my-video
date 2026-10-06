import React from "react";

type GamepadIconProps = {
  size?: number;
  glowColor?: string;
  accentColor?: string;
};

export const GamepadIcon: React.FC<GamepadIconProps> = ({
  size = 180,
  glowColor = "#00f3ff",
  accentColor = "#ff007f",
}) => {
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: `drop-shadow(0 0 25px ${glowColor}) drop-shadow(0 0 50px ${glowColor}66)`,
      }}
    >
      {/* Gamepad Body */}
      <path
        d="M45 25 C70 20 130 20 155 25 C175 29 195 55 190 95 C186 125 155 135 140 115 C130 102 118 96 100 96 C82 96 70 102 60 115 C45 135 14 125 10 95 C5 55 25 29 45 25 Z"
        fill="#0f1424"
        stroke={glowColor}
        strokeWidth="4"
      />

      {/* Grip highlights */}
      <path
        d="M25 50 C20 70 20 90 32 105"
        stroke={glowColor}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M175 50 C180 70 180 90 168 105"
        stroke={accentColor}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* D-Pad */}
      <g>
        <rect x="42" y="55" width="28" height="10" rx="3" fill="#1b2440" stroke={glowColor} strokeWidth="1.5" />
        <rect x="51" y="46" width="10" height="28" rx="3" fill="#1b2440" stroke={glowColor} strokeWidth="1.5" />
        <circle cx="56" cy="60" r="3" fill={glowColor} />
      </g>

      {/* Action Buttons (ABXY) */}
      <g>
        <circle cx="145" cy="50" r="6" fill="#1b2440" stroke={accentColor} strokeWidth="1.5" />
        <circle cx="155" cy="60" r="6" fill="#1b2440" stroke={glowColor} strokeWidth="1.5" />
        <circle cx="135" cy="60" r="6" fill="#1b2440" stroke="#ffe600" strokeWidth="1.5" />
        <circle cx="145" cy="70" r="6" fill="#1b2440" stroke="#00ff88" strokeWidth="1.5" />
        
        {/* Glow dots inside buttons */}
        <circle cx="145" cy="50" r="2.5" fill={accentColor} />
        <circle cx="155" cy="60" r="2.5" fill={glowColor} />
        <circle cx="135" cy="60" r="2.5" fill="#ffe600" />
        <circle cx="145" cy="70" r="2.5" fill="#00ff88" />
      </g>

      {/* Analog Thumbsticks */}
      <circle cx="78" cy="80" r="14" fill="#0a0e1a" stroke={glowColor} strokeWidth="2.5" />
      <circle cx="78" cy="80" r="7" fill="#1b2440" stroke={glowColor} strokeWidth="1" />
      <circle cx="78" cy="80" r="2.5" fill={glowColor} />

      <circle cx="122" cy="80" r="14" fill="#0a0e1a" stroke={accentColor} strokeWidth="2.5" />
      <circle cx="122" cy="80" r="7" fill="#1b2440" stroke={accentColor} strokeWidth="1" />
      <circle cx="122" cy="80" r="2.5" fill={accentColor} />

      {/* Center Cyber Brand Accent */}
      <path
        d="M93 50 L107 50 L104 57 L96 57 Z"
        fill={glowColor}
        opacity="0.9"
      />
      <circle cx="100" cy="68" r="4" fill="#151d33" stroke={glowColor} strokeWidth="1.5" />
    </svg>
  );
};
