import React from "react";

type DiamondIconProps = {
  size?: number;
  glowColor?: string;
};

export const DiamondIcon: React.FC<DiamondIconProps> = ({
  size = 140,
  glowColor = "#00f3ff",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: `drop-shadow(0 0 25px ${glowColor}) drop-shadow(0 0 50px ${glowColor}88)`,
      }}
    >
      {/* Facet Top-Left */}
      <polygon points="25,30 50,12 38,30" fill="#a5f3fc" />
      {/* Facet Top-Center */}
      <polygon points="38,30 50,12 62,30" fill="#e0f2fe" />
      {/* Facet Top-Right */}
      <polygon points="62,30 50,12 75,30" fill="#a5f3fc" />
      {/* Facet Top Outer Left */}
      <polygon points="12,30 25,30 38,30" fill="#67e8f9" />
      <polygon points="12,30 50,12 25,30" fill="#38bdf8" />
      {/* Facet Top Outer Right */}
      <polygon points="75,30 88,30 50,12" fill="#38bdf8" />
      <polygon points="62,30 75,30 88,30" fill="#67e8f9" />

      {/* Facet Lower-Left */}
      <polygon points="12,30 38,30 50,88" fill="#0284c7" />
      {/* Facet Lower-Center */}
      <polygon points="38,30 62,30 50,88" fill="#38bdf8" />
      {/* Facet Lower-Right */}
      <polygon points="62,30 88,30 50,88" fill="#0369a1" />

      {/* Brilliant Outline */}
      <polygon
        points="12,30 50,12 88,30 50,88"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};
