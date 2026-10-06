import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CyberBackground } from "../components/CyberBackground";
import { GlitchText } from "../components/GlitchText";
import { GamepadIcon } from "../components/GamepadIcon";
import { LightningIcon } from "../components/LightningIcon";
import { DiamondIcon } from "../components/DiamondIcon";
import { FONT_CYBER, FONT_BODY } from "../fonts";

export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Phase switch: Phase 1 (0 to 105 frames): Problem Hook ("Lagi Seru-Serunya... Diamond Habis?!")
  // Phase 2 (105 to 225 frames): Solution Hook ("Cari Top-Up Game Murah & Cepat?")
  const isPhase1 = frame < 105;

  // Phase 1 exit fade / scale
  const phase1Opacity = interpolate(frame, [98, 105], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Phase 2 entrance spring
  const phase2Spring = spring({
    frame: Math.max(0, frame - 105),
    fps,
    config: { damping: 12, mass: 0.45, stiffness: 220 },
  });

  // Gamepad entrance spring (starts at frame 15)
  const gamepadSpring = spring({
    frame: Math.max(0, frame - 15),
    fps,
    config: {
      damping: 10,
      mass: 0.6,
      stiffness: 160,
    },
  });

  // Floating bouncy oscillation for Gamepad
  const gamepadBounceY = Math.sin(frame * 0.12) * 22;
  const gamepadRotate = -12 + Math.sin(frame * 0.09) * 8;

  // Lightning entrance spring (starts at frame 110)
  const lightningSpring = spring({
    frame: Math.max(0, frame - 110),
    fps,
    config: {
      damping: 9,
      mass: 0.5,
      stiffness: 190,
    },
  });

  // Floating bouncy oscillation for Lightning
  const lightningBounceY = Math.cos(frame * 0.14) * 24;
  const lightningRotate = 14 + Math.cos(frame * 0.1) * 7;

  // Diamond entrance spring (starts at frame 40)
  const diamondSpring = spring({
    frame: Math.max(0, frame - 40),
    fps,
    config: { damping: 11, mass: 0.5, stiffness: 180 },
  });
  const diamondBounceY = Math.sin(frame * 0.15 + 1) * 18;

  // Clean screen flash on impact
  const getFlash = (f: number, start: number, duration: number, peak: number) => {
    if (f < start || f > start + duration) {
      return 0;
    }
    return interpolate(f, [start, start + duration], [peak, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  };

  const flashOpacity =
    getFlash(frame, 0, 8, 0.65) +
    getFlash(frame, 45, 9, 0.7) +
    getFlash(frame, 105, 9, 0.65);

  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        backgroundColor: "#050711",
        overflow: "hidden",
      }}
    >
      <CyberBackground
        accentColor="#00f3ff"
        secondaryColor="#ff007f"
        gridSpeed={3.5}
      />

      {/* Screen Impact Flash */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          opacity: Math.min(1, flashOpacity),
          pointerEvents: "none",
          zIndex: 40,
        }}
      />

      {/* PHASE 1: "Lagi Seru-Serunya Main, Diamond / Item Habis?!" */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: phase1Opacity,
          pointerEvents: isPhase1 ? "auto" : "none",
        }}
      >
        {/* Warning Tag */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 28px",
            borderRadius: 50,
            backgroundColor: "rgba(255, 0, 85, 0.15)",
            border: "2px solid #ff0055",
            boxShadow: "0 0 20px rgba(255, 0, 85, 0.4)",
            marginBottom: 28,
            scale: spring({
              frame: Math.max(0, frame - 5),
              fps,
              config: { damping: 12 },
            }),
          }}
        >
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              backgroundColor: "#ff0055",
              boxShadow: "0 0 12px #ff0055",
            }}
          />
          <span
            style={{
              fontFamily: FONT_CYBER,
              fontSize: 22,
              fontWeight: 900,
              color: "#ff3377",
              letterSpacing: 4,
            }}
          >
            WARNING // CRITICAL MOMENT
          </span>
        </div>

        {/* Text Line 1: Lagi Seru-Serunya Main... */}
        <GlitchText
          text="LAGI SERU-SERUNYA MAIN..."
          delayFrames={8}
          fontSize={58}
          color="#e2e8f0"
          glowColor="#00f3ff"
          glitchIntensity={0.8}
          shakeDuration={20}
        />

        {/* Text Line 2: DIAMOND / ITEM HABIS?! */}
        <div style={{ marginTop: 20 }}>
          <GlitchText
            text="DIAMOND / ITEM HABIS?!"
            delayFrames={45}
            fontSize={82}
            color="#ff0055"
            glowColor="#ff0055"
            glitchIntensity={1.4}
            shakeDuration={35}
            style={{
              textShadow:
                "0 0 20px #ff0055, 0 0 40px #ff0055, 0 0 80px #ff0033",
            }}
          />
        </div>

        {/* Subtext prompt */}
        <div
          style={{
            marginTop: 36,
            fontFamily: FONT_BODY,
            fontSize: 30,
            fontWeight: 700,
            color: "#94a3b8",
            letterSpacing: 2,
            opacity: interpolate(frame, [55, 70], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          Masa lagi push rank harus stop gara-gara item zonk?! 😭
        </div>
      </div>

      {/* PHASE 2: "Cari Top-Up Game Murah & Cepat?" */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: 1 - phase1Opacity,
          scale: phase2Spring,
          pointerEvents: !isPhase1 ? "auto" : "none",
        }}
      >
        {/* Solution Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 32px",
            borderRadius: 50,
            backgroundColor: "rgba(0, 243, 255, 0.15)",
            border: "2px solid #00f3ff",
            boxShadow: "0 0 25px rgba(0, 243, 255, 0.5)",
            marginBottom: 24,
          }}
        >
          <span style={{ fontSize: 24 }}>⚡</span>
          <span
            style={{
              fontFamily: FONT_CYBER,
              fontSize: 24,
              fontWeight: 900,
              color: "#00f3ff",
              letterSpacing: 3,
            }}
          >
            SOLUSI INSTAN GAMERS SEJATI
          </span>
          <span style={{ fontSize: 24 }}>⚡</span>
        </div>

        {/* Text Line: CARI TOP-UP GAME */}
        <GlitchText
          text="CARI TOP-UP GAME"
          delayFrames={105}
          fontSize={68}
          color="#ffffff"
          glowColor="#00f3ff"
          glitchIntensity={0.9}
          shakeDuration={20}
        />

        {/* Text Line: MURAH & CEPAT? */}
        <div style={{ marginTop: 14 }}>
          <GlitchText
            text="MURAH & CEPAT?!"
            delayFrames={120}
            fontSize={90}
            color="#ffe600"
            glowColor="#ffaa00"
            glitchIntensity={1.3}
            shakeDuration={30}
            style={{
              textShadow:
                "0 0 25px #ffe600, 0 0 50px #ff9900, 0 0 80px #ff6600",
            }}
          />
        </div>

        {/* Benefit Pillars in Hook */}
        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 24,
            opacity: interpolate(frame, [130, 150], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          {[
            { icon: "⚡", label: "Hitungan Detik" },
            { icon: "💰", label: "Harga Termurah" },
            { icon: "🛡️", label: "100% Legal & Aman" },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 26px",
                borderRadius: 16,
                backgroundColor: "rgba(15, 23, 42, 0.8)",
                border: "1px solid rgba(0, 243, 255, 0.4)",
                boxShadow: "0 0 15px rgba(0, 243, 255, 0.2)",
              }}
            >
              <span style={{ fontSize: 26 }}>{item.icon}</span>
              <span
                style={{
                  fontFamily: FONT_BODY,
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#ffffff",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* FLOATING BOUNCY GAMER STIK (Gamepad) */}
      <div
        style={{
          position: "absolute",
          left: 90,
          top: "42%",
          scale: gamepadSpring,
          translate: `0px ${gamepadBounceY}px`,
          rotate: `${gamepadRotate}deg`,
          zIndex: 30,
          filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.8))",
        }}
      >
        <GamepadIcon size={210} glowColor="#00f3ff" accentColor="#ff007f" />
      </div>

      {/* FLOATING BOUNCY PETIR (Lightning Icon) */}
      <div
        style={{
          position: "absolute",
          right: 90,
          top: "40%",
          scale: lightningSpring,
          translate: `0px ${lightningBounceY}px`,
          rotate: `${lightningRotate}deg`,
          zIndex: 30,
          filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.8))",
        }}
      >
        <LightningIcon size={200} color="#ffe600" glowColor="#ff6600" />
      </div>

      {/* FLOATING BOUNCY DIAMOND */}
      <div
        style={{
          position: "absolute",
          right: 320,
          top: "16%",
          scale: diamondSpring,
          translate: `0px ${diamondBounceY}px`,
          rotate: `${15 + Math.sin(frame * 0.1) * 10}deg`,
          zIndex: 25,
          opacity: 0.9,
        }}
      >
        <DiamondIcon size={130} glowColor="#00f3ff" />
      </div>

      {/* Floating Small Diamond Left Top */}
      <div
        style={{
          position: "absolute",
          left: 280,
          top: "18%",
          scale: diamondSpring,
          translate: `0px ${-diamondBounceY}px`,
          rotate: `${-20 + Math.cos(frame * 0.12) * 12}deg`,
          zIndex: 25,
          opacity: 0.85,
        }}
      >
        <DiamondIcon size={100} glowColor="#ff007f" />
      </div>
    </div>
  );
};
