import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_CYBER } from "../fonts";

type GlitchTextProps = {
  text: string;
  delayFrames?: number;
  fontSize?: number;
  color?: string;
  glowColor?: string;
  glitchIntensity?: number;
  shakeDuration?: number;
  fontFamily?: string;
  fontWeight?: number | string;
  letterSpacing?: number;
  style?: React.CSSProperties;
};

export const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  delayFrames = 0,
  fontSize = 72,
  color = "#ffffff",
  glowColor = "#00f3ff",
  glitchIntensity = 1,
  shakeDuration = 25,
  fontFamily = FONT_CYBER,
  fontWeight = 900,
  letterSpacing = 2,
  style = {},
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const relFrame = Math.max(0, frame - delayFrames);

  // Aggressive punchy spring entrance
  const entranceSpring = spring({
    frame: relFrame,
    fps,
    config: {
      damping: 12,
      mass: 0.4,
      stiffness: 240,
    },
  });

  const scale = relFrame === 0 ? 0 : entranceSpring;
  const opacity = interpolate(relFrame, [0, 4], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Camera / Impact shake decaying over shakeDuration
  const shakeProgress = interpolate(relFrame, [0, shakeDuration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const shakeX =
    relFrame < shakeDuration
      ? Math.sin(relFrame * 2.8) * 14 * shakeProgress * glitchIntensity
      : 0;
  const shakeY =
    relFrame < shakeDuration
      ? Math.cos(relFrame * 3.4) * 10 * shakeProgress * glitchIntensity
      : 0;

  // Occasional cyber glitch twitch every ~45 frames or during entrance
  const isEntranceGlitch = relFrame > 0 && relFrame < 18 && relFrame % 3 === 0;
  const isRandomGlitch =
    relFrame > 40 && (relFrame % 58 === 0 || relFrame % 59 === 0);
  const activeGlitch = (isEntranceGlitch || isRandomGlitch) && glitchIntensity > 0;

  const rgbOffset = activeGlitch ? 6 * glitchIntensity : 0;

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        textAlign: "center",
        opacity,
        scale,
        translate: `${shakeX}px ${shakeY}px`,
        ...style,
      }}
    >
      {/* Glitch RGB Shift Layer - Cyan (Left) */}
      {activeGlitch && (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            left: -rgbOffset,
            top: 0,
            width: "100%",
            fontFamily,
            fontSize,
            fontWeight,
            letterSpacing,
            color: "#00f3ff",
            opacity: 0.85,
            clipPath: "polygon(0 15%, 100% 15%, 100% 45%, 0 45%)",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {text}
        </span>
      )}

      {/* Glitch RGB Shift Layer - Magenta (Right) */}
      {activeGlitch && (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            left: rgbOffset,
            top: 0,
            width: "100%",
            fontFamily,
            fontSize,
            fontWeight,
            letterSpacing,
            color: "#ff007f",
            opacity: 0.85,
            clipPath: "polygon(0 55%, 100% 55%, 100% 85%, 0 85%)",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {text}
        </span>
      )}

      {/* Main Sharp Text */}
      <span
        style={{
          display: "inline-block",
          fontFamily,
          fontSize,
          fontWeight,
          letterSpacing,
          color,
          textShadow: `
            0 0 10px ${glowColor},
            0 0 25px ${glowColor}aa,
            0 0 50px ${glowColor}66
          `,
          lineHeight: 1.15,
        }}
      >
        {text}
      </span>
    </div>
  );
};
