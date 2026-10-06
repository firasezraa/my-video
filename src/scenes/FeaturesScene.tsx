import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CyberBackground } from "../components/CyberBackground";
import { GlitchText } from "../components/GlitchText";
import { FONT_CYBER, FONT_BODY } from "../fonts";

export const FeaturesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const features = [
    {
      delay: 15,
      icon: "⚡",
      badge: "ULTRA FAST",
      badgeColor: "#ffe600",
      title: "PROSES KILAT 1-3 DETIK",
      subtitle: "Sistem Otomatis API 24/7",
      description:
        "Tanpa antre, tanpa admin! Item langsung masuk ke inbox akun game kamu secara instan detik itu juga.",
      highlight: "Rata-rata: 1.8 Detik!",
      accent: "#ffe600",
    },
    {
      delay: 35,
      icon: "💎",
      badge: "BEST VALUE",
      badgeColor: "#00f3ff",
      title: "HARGA TERMURAH // DISKON 50%",
      subtitle: "Garansi Harga Paling Bersahabat",
      description:
        "Bandingkan dengan tempat lain! Nikmati promo flash sale diamond & cashback melimpah setiap hari.",
      highlight: "Hemat s/d Rp 50.000 / Top-Up",
      accent: "#00f3ff",
    },
    {
      delay: 55,
      icon: "🛡️",
      badge: "100% LEGAL",
      badgeColor: "#00ff88",
      title: "BERGARANSI AMAN & ANTI-BAN",
      subtitle: "Jalur Resmi Publisher",
      description:
        "Hanya perlu User ID & Zone ID, tanpa password! Akun kamu 100% aman terlindungi garansi resmi.",
      highlight: "Tanpa Login Akun!",
      accent: "#00ff88",
    },
  ];

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
        accentColor="#00ff88"
        secondaryColor="#00f3ff"
        gridSpeed={3.0}
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
          padding: "60px 80px",
          boxSizing: "border-box",
        }}
      >
        {/* Eyebrow Tag */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 26px",
            borderRadius: 30,
            backgroundColor: "rgba(0, 255, 136, 0.15)",
            border: "1.5px solid #00ff88",
            boxShadow: "0 0 20px rgba(0, 255, 136, 0.35)",
            marginBottom: 16,
            scale: spring({
              frame,
              fps,
              config: { damping: 14 },
            }),
          }}
        >
          <span style={{ fontSize: 18 }}>⭐</span>
          <span
            style={{
              fontFamily: FONT_CYBER,
              fontSize: 18,
              fontWeight: 800,
              color: "#6ee7b7",
              letterSpacing: 3,
            }}
          >
            TRUSTED BY 500,000+ INDONESIAN GAMERS
          </span>
        </div>

        {/* Headline */}
        <GlitchText
          text="KENAPA HARUS TOP-UP DI SINI?"
          delayFrames={5}
          fontSize={66}
          color="#ffffff"
          glowColor="#00ff88"
          glitchIntensity={0.6}
        />

        <div
          style={{
            marginTop: 10,
            fontFamily: FONT_BODY,
            fontSize: 26,
            fontWeight: 600,
            color: "#94a3b8",
            letterSpacing: 1.5,
            opacity: interpolate(frame, [10, 25], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          3 Alasan Kenapa Gamers Selalu Balik Lagi ke Kita
        </div>

        {/* 3 Large Column Feature Cards */}
        <div
          style={{
            marginTop: 50,
            display: "flex",
            gap: 36,
            width: "100%",
            maxWidth: 1620,
            justifyContent: "center",
          }}
        >
          {features.map((feat, i) => {
            const cardSpring = spring({
              frame: Math.max(0, frame - feat.delay),
              fps,
              config: { damping: 11, mass: 0.55, stiffness: 180 },
            });

            const pulseGlow = 0.6 + 0.4 * Math.sin(frame * 0.1 + i);

            return (
              <div
                key={feat.title}
                style={{
                  flex: 1,
                  borderRadius: 24,
                  backgroundColor: "rgba(10, 17, 36, 0.9)",
                  backdropFilter: "blur(16px)",
                  border: `2px solid ${feat.accent}66`,
                  boxShadow: `0 20px 40px rgba(0,0,0,0.7), 0 0 ${Math.round(35 * pulseGlow)}px ${feat.accent}33`,
                  padding: "44px 36px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  position: "relative",
                  scale: cardSpring,
                  overflow: "hidden",
                }}
              >
                {/* Glowing Top Border Accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 5,
                    backgroundColor: feat.accent,
                    boxShadow: `0 0 20px ${feat.accent}`,
                  }}
                />

                {/* Header: Icon & Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: 26,
                  }}
                >
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 20,
                      backgroundColor: "rgba(6, 11, 24, 0.95)",
                      border: `2px solid ${feat.accent}`,
                      boxShadow: `0 0 25px ${feat.accent}66`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 40,
                    }}
                  >
                    {feat.icon}
                  </div>

                  <div
                    style={{
                      padding: "6px 16px",
                      borderRadius: 20,
                      backgroundColor: `${feat.badgeColor}22`,
                      border: `1px solid ${feat.badgeColor}`,
                      fontFamily: FONT_CYBER,
                      fontSize: 14,
                      fontWeight: 900,
                      color: feat.badgeColor,
                      letterSpacing: 2,
                    }}
                  >
                    {feat.badge}
                  </div>
                </div>

                {/* Title */}
                <div
                  style={{
                    fontFamily: FONT_CYBER,
                    fontSize: 28,
                    fontWeight: 900,
                    color: "#ffffff",
                    letterSpacing: 1,
                    lineHeight: 1.25,
                    minHeight: 70,
                  }}
                >
                  {feat.title}
                </div>

                {/* Subtitle */}
                <div
                  style={{
                    fontFamily: FONT_BODY,
                    fontSize: 20,
                    fontWeight: 700,
                    color: feat.accent,
                    marginTop: 8,
                    marginBottom: 16,
                  }}
                >
                  {feat.subtitle}
                </div>

                {/* Description */}
                <div
                  style={{
                    fontFamily: FONT_BODY,
                    fontSize: 20,
                    lineHeight: 1.6,
                    color: "#94a3b8",
                    marginBottom: 30,
                    flex: 1,
                  }}
                >
                  {feat.description}
                </div>

                {/* Highlight Capsule */}
                <div
                  style={{
                    width: "100%",
                    padding: "14px 20px",
                    borderRadius: 14,
                    backgroundColor: "rgba(4, 9, 20, 0.9)",
                    border: `1px solid ${feat.accent}55`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    boxSizing: "border-box",
                  }}
                >
                  <span style={{ fontSize: 20 }}>✅</span>
                  <span
                    style={{
                      fontFamily: FONT_CYBER,
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#ffffff",
                      letterSpacing: 1,
                    }}
                  >
                    {feat.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
