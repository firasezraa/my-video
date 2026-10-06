import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

type CyberBackgroundProps = {
  accentColor?: string; // primary neon e.g. #00f3ff
  secondaryColor?: string; // secondary neon e.g. #ff007f
  gridSpeed?: number;
};

export const CyberBackground: React.FC<CyberBackgroundProps> = ({
  accentColor = "#00f3ff",
  secondaryColor = "#ff007f",
  gridSpeed = 2.5,
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Grid scrolling offset
  const gridOffsetY = (frame * gridSpeed) % 60;

  // Pulsing glow factor
  const pulse1 = 0.55 + 0.35 * Math.sin(frame * 0.09);
  const pulse2 = 0.5 + 0.3 * Math.cos(frame * 0.07);

  // Floating particles
  const particles = [
    { x: 200, yBase: 700, speed: 1.2, size: 6, color: accentColor },
    { x: 450, yBase: 800, speed: 1.6, size: 4, color: secondaryColor },
    { x: 750, yBase: 900, speed: 1.1, size: 8, color: "#ffe600" },
    { x: 1100, yBase: 750, speed: 1.5, size: 5, color: accentColor },
    { x: 1400, yBase: 850, speed: 1.3, size: 7, color: secondaryColor },
    { x: 1700, yBase: 650, speed: 1.8, size: 4, color: "#ffffff" },
    { x: 300, yBase: 600, speed: 0.9, size: 5, color: "#00ffcc" },
    { x: 950, yBase: 620, speed: 1.4, size: 6, color: accentColor },
    { x: 1600, yBase: 780, speed: 1.0, size: 5, color: secondaryColor },
  ];

  return (
    <div
      style={{
        position: "absolute",
        width,
        height,
        backgroundColor: "#050711",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Deep Radial Glow Base */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: `radial-gradient(circle at 50% 35%, #0e152e 0%, #060914 70%, #020308 100%)`,
        }}
      />

      {/* Pulsing Neon Orb 1 (Cyan / Left) */}
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          left: -200,
          top: -200,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accentColor}33 0%, ${accentColor}00 70%)`,
          filter: "blur(60px)",
          opacity: pulse1,
          scale: 1 + 0.1 * Math.sin(frame * 0.05),
        }}
      />

      {/* Pulsing Neon Orb 2 (Magenta / Right) */}
      <div
        style={{
          position: "absolute",
          width: 1000,
          height: 1000,
          right: -250,
          bottom: -200,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${secondaryColor}33 0%, ${secondaryColor}00 70%)`,
          filter: "blur(70px)",
          opacity: pulse2,
          scale: 1 + 0.12 * Math.cos(frame * 0.06),
        }}
      />

      {/* Center Dynamic Ambient Pulse */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 500,
          left: (width - 800) / 2,
          top: 250,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, #1c2b5c44 0%, transparent 70%)`,
          filter: "blur(50px)",
          opacity: 0.6 + 0.2 * Math.sin(frame * 0.08),
        }}
      />

      {/* 3D Cyber Perspective Grid Floor */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "55%",
          bottom: 0,
          perspective: 380,
          perspectiveOrigin: "50% 0%",
          overflow: "hidden",
        }}
      >
        {/* Horizon Glow Line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 3,
            background: `linear-gradient(90deg, transparent 0%, ${accentColor} 30%, #ffffff 50%, ${secondaryColor} 70%, transparent 100%)`,
            boxShadow: `0 0 25px ${accentColor}, 0 0 50px ${secondaryColor}`,
            opacity: 0.85 + 0.15 * Math.sin(frame * 0.12),
          }}
        />

        {/* Tilted Grid Plane */}
        <div
          style={{
            position: "absolute",
            width: "200%",
            left: "-50%",
            height: "140%",
            top: 0,
            transformOrigin: "50% 0%",
            transform: "rotateX(72deg)",
            backgroundImage: `
              linear-gradient(to right, ${accentColor}38 1px, transparent 1px),
              linear-gradient(to bottom, ${accentColor}38 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            backgroundPosition: `0px ${gridOffsetY}px`,
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      {/* Cyber Hex / Tech Corner Accents */}
      <div
        style={{
          position: "absolute",
          top: 35,
          left: 45,
          display: "flex",
          alignItems: "center",
          gap: 12,
          opacity: 0.6,
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            backgroundColor: accentColor,
            boxShadow: `0 0 10px ${accentColor}`,
          }}
        />
        <div
          style={{
            fontSize: 14,
            fontFamily: "monospace",
            color: accentColor,
            letterSpacing: 3,
          }}
        >
          SYSTEM.STATUS: ONLINE // 60FPS_HDR
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 35,
          right: 45,
          display: "flex",
          alignItems: "center",
          gap: 8,
          opacity: 0.6,
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontFamily: "monospace",
            color: secondaryColor,
            letterSpacing: 2,
          }}
        >
          SECURE_TOPUP_GATEWAY_V4
        </div>
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#00ff88",
            boxShadow: "0 0 8px #00ff88",
          }}
        />
      </div>

      {/* Floating Cyber Dust / Sparks */}
      {particles.map((p, i) => {
        const floatProgress = (frame * p.speed + i * 40) % height;
        const currentY = height - floatProgress;
        const driftX = p.x + Math.sin(frame * 0.05 + i) * 25;
        const alpha = interpolate(
          currentY,
          [0, height * 0.3, height * 0.7, height],
          [0, 0.8, 0.8, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: driftX,
              top: currentY,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              backgroundColor: p.color,
              boxShadow: `0 0 10px ${p.color}, 0 0 20px ${p.color}`,
              opacity: alpha,
            }}
          />
        );
      })}

      {/* Cyber Vignette Overlay */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          boxShadow: "inset 0 0 140px rgba(0, 0, 0, 0.85)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
