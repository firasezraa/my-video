import React from "react";
import {
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

export const CtaScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // CTA Button pulse
  const btnPulse = 1 + 0.04 * Math.sin(frame * 0.14);
  const btnGlowPulse = 0.7 + 0.3 * Math.sin(frame * 0.18);

  // Voucher entrance spring
  const voucherSpring = spring({
    frame: Math.max(0, frame - 15),
    fps,
    config: { damping: 11, mass: 0.5, stiffness: 200 },
  });

  // Big Button entrance spring
  const btnSpring = spring({
    frame: Math.max(0, frame - 30),
    fps,
    config: { damping: 10, mass: 0.6, stiffness: 180 },
  });

  // Floating icons
  const leftGamepadBounce = Math.sin(frame * 0.12) * 18;
  const rightLightningBounce = Math.cos(frame * 0.14) * 20;

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
        accentColor="#ff007f"
        secondaryColor="#00f3ff"
        gridSpeed={4.0}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 80px",
          boxSizing: "border-box",
        }}
      >
        {/* Eyebrow Urgency Banner */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 32px",
            borderRadius: 50,
            backgroundColor: "rgba(255, 0, 127, 0.2)",
            border: "2px solid #ff007f",
            boxShadow: "0 0 25px rgba(255, 0, 127, 0.5)",
            marginBottom: 20,
            scale: spring({
              frame,
              fps,
              config: { damping: 12 },
            }),
          }}
        >
          <span style={{ fontSize: 22 }}>⚡</span>
          <span
            style={{
              fontFamily: FONT_CYBER,
              fontSize: 20,
              fontWeight: 900,
              color: "#ff3399",
              letterSpacing: 4,
            }}
          >
            LIMITED OFFER // JANGAN SAMPAI KETINGGALAN!
          </span>
          <span style={{ fontSize: 22 }}>⚡</span>
        </div>

        {/* Main Headline */}
        <GlitchText
          text="TOP-UP SEKARANG JUGA!"
          delayFrames={5}
          fontSize={76}
          color="#ffffff"
          glowColor="#00f3ff"
          glitchIntensity={0.8}
        />

        <div style={{ marginTop: 10 }}>
          <GlitchText
            text="LEVEL UP RANK & GAYA LO!"
            delayFrames={18}
            fontSize={54}
            color="#ffe600"
            glowColor="#ff9900"
            glitchIntensity={0.6}
          />
        </div>

        {/* Cyber Voucher Box */}
        <div
          style={{
            marginTop: 36,
            scale: voucherSpring,
            borderRadius: 24,
            background:
              "linear-gradient(135deg, rgba(19, 29, 61, 0.9) 0%, rgba(10, 14, 30, 0.95) 100%)",
            border: "2px dashed #00f3ff",
            boxShadow: "0 0 35px rgba(0, 243, 255, 0.35)",
            padding: "20px 48px",
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
        >
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                fontFamily: FONT_BODY,
                fontSize: 18,
                fontWeight: 700,
                color: "#94a3b8",
                letterSpacing: 1,
              }}
            >
              KLAIM KODE VOUCHER SPESIAL:
            </div>
            <div
              style={{
                fontFamily: FONT_CYBER,
                fontSize: 36,
                fontWeight: 900,
                color: "#00f3ff",
                letterSpacing: 4,
                textShadow: "0 0 15px #00f3ff",
                marginTop: 4,
              }}
            >
              TOPUPHEMAT
            </div>
          </div>

          <div
            style={{
              width: 2,
              height: 50,
              backgroundColor: "rgba(0, 243, 255, 0.4)",
            }}
          />

          <div
            style={{
              padding: "10px 24px",
              borderRadius: 14,
              backgroundColor: "rgba(255, 230, 0, 0.15)",
              border: "1.5px solid #ffe600",
              fontFamily: FONT_BODY,
              fontSize: 22,
              fontWeight: 800,
              color: "#ffe600",
            }}
          >
            DISKON S/D RP 15.000!
          </div>
        </div>

        {/* Pulsing Glowing CTA Button */}
        <div
          style={{
            marginTop: 40,
            scale: btnSpring * btnPulse,
            padding: "24px 64px",
            borderRadius: 60,
            background:
              "linear-gradient(90deg, #ff007f 0%, #7928ca 50%, #00f3ff 100%)",
            boxShadow: `0 0 40px rgba(255, 0, 127, ${btnGlowPulse}), 0 0 80px rgba(0, 243, 255, 0.4)`,
            display: "flex",
            alignItems: "center",
            gap: 20,
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: 36 }}>👉</span>
          <span
            style={{
              fontFamily: FONT_CYBER,
              fontSize: 34,
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: 3,
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            KLIK LINK DI BIO / VISIT SITUS RESMI
          </span>
          <span style={{ fontSize: 36 }}>👈</span>
        </div>

        {/* Footer Subtext */}
        <div
          style={{
            marginTop: 28,
            fontFamily: FONT_BODY,
            fontSize: 22,
            fontWeight: 700,
            color: "#64748b",
            letterSpacing: 2,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span>🌐 www.topupgamers.id</span>
          <span>•</span>
          <span>⚡ Layanan Otomatis 24/7</span>
          <span>•</span>
          <span>💬 Customer Service Siaga</span>
        </div>
      </div>

      {/* Floating Left Gamepad */}
      <div
        style={{
          position: "absolute",
          left: 100,
          top: "42%",
          scale: 1.1,
          translate: `0px ${leftGamepadBounce}px`,
          rotate: `${-15 + Math.sin(frame * 0.08) * 6}deg`,
          zIndex: 20,
        }}
      >
        <GamepadIcon size={220} glowColor="#ff007f" accentColor="#00f3ff" />
      </div>

      {/* Floating Right Lightning */}
      <div
        style={{
          position: "absolute",
          right: 120,
          top: "38%",
          scale: 1.15,
          translate: `0px ${rightLightningBounce}px`,
          rotate: `${16 + Math.cos(frame * 0.1) * 8}deg`,
          zIndex: 20,
        }}
      >
        <LightningIcon size={220} color="#ffe600" glowColor="#ff007f" />
      </div>

      {/* Floating Diamonds */}
      <div
        style={{
          position: "absolute",
          left: 340,
          top: "16%",
          translate: `0px ${-leftGamepadBounce}px`,
          zIndex: 15,
        }}
      >
        <DiamondIcon size={110} glowColor="#00f3ff" />
      </div>
      <div
        style={{
          position: "absolute",
          right: 340,
          top: "16%",
          translate: `0px ${-rightLightningBounce}px`,
          zIndex: 15,
        }}
      >
        <DiamondIcon size={110} glowColor="#ff007f" />
      </div>
    </div>
  );
};
