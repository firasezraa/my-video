import React from "react";

type LightningIconProps = {
  size?: number;
  color?: string;
  glowColor?: string;
};

export const LightningIcon: React.FC<LightningIconProps> = ({
  size = 160,
  color = "#ffe600",
  glowColor = "#ff9900",
}) => {
  return (
    <svg
      width={size * 0.75}
      height={size}
      viewBox="0 0 100 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: `drop-shadow(0 0 20px ${color}) drop-shadow(0 0 45px ${glowColor})`,
      }}
    >
      {/* Outer Bolt Outline */}
      <polygon
        points="58,6 16,74 48,74 38,134 84,60 52,60"
        fill={color}
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Inner highlight core */}
      <polygon
        points="56,18 28,70 50,70 44,116 74,66 52,66"
        fill="#ffffff"
        opacity="0.75"
      />

      {/* Sparks */}
      <circle cx="16" cy="40" r="3" fill="#ffffff" />
      <circle cx="82" cy="95" r="2.5" fill={color} />
      <circle cx="34" cy="125" r="2" fill="#ffffff" />
    </svg>
  );
};
