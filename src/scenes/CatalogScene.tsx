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

type GameItem = {
  name: string;
  tag: string;
  promo: string;
  color: string;
  iconText: string;
  startingPrice: string;
};

const GAMES: GameItem[] = [
  {
    name: "Mobile Legends",
    tag: "MLBB Diamonds & WDP",
    promo: "FLASH SALE",
    color: "#00f3ff",
    iconText: "⚔️ MLBB",
    startingPrice: "Rp 1.400",
  },
  {
    name: "Free Fire",
    tag: "Diamond & Member",
    promo: "BEST SELLER",
    color: "#ff007f",
    iconText: "🔥 FF",
    startingPrice: "Rp 1.000",
  },
  {
    name: "PUBG Mobile",
    tag: "UC Instant Delivery",
    promo: "DISCOUNT 25%",
    color: "#ffe600",
    iconText: "🎯 PUBGM",
    startingPrice: "Rp 9.500",
  },
  {
    name: "Genshin Impact",
    tag: "Genesis Crystals & Welkin",
    promo: "100% LEGAL",
    color: "#38bdf8",
    iconText: "✨ GENSHIN",
    startingPrice: "Rp 14.000",
  },
  {
    name: "Valorant",
    tag: "Riot Points (VP)",
    promo: "AUTO INSTANT",
    color: "#ff4655",
    iconText: "🏹 VALO",
    startingPrice: "Rp 13.500",
  },
  {
    name: "Honor of Kings",
    tag: "Tokens & Battle Pass",
    promo: "HOT PROMO",
    color: "#a855f7",
    iconText: "👑 HOK",
    startingPrice: "Rp 2.000",
  },
];

export const CatalogScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();


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
        accentColor="#a855f7"
        secondaryColor="#00f3ff"
        gridSpeed={2.8}
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
        {/* Top Eyebrow Tag */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 24px",
            borderRadius: 30,
            backgroundColor: "rgba(168, 85, 247, 0.2)",
            border: "1.5px solid #a855f7",
            boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
            marginBottom: 16,
            scale: spring({
              frame,
              fps,
              config: { damping: 14 },
            }),
          }}
        >
          <span style={{ fontSize: 18 }}>🎮</span>
          <span
            style={{
              fontFamily: FONT_CYBER,
              fontSize: 18,
              fontWeight: 800,
              color: "#d8b4fe",
              letterSpacing: 3,
            }}
          >
            GAME CATALOG // 100% RESMI & LENGKAP
          </span>
        </div>

        {/* Headline */}
        <GlitchText
          text="SUPPORT SEMUA GAME POPULER"
          delayFrames={5}
          fontSize={64}
          color="#ffffff"
          glowColor="#00f3ff"
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
          Top Up Kapan Saja, 24 Jam Nonstop Tanpa Antre!
        </div>

        {/* 6 Grid Game Cards */}
        <div
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px 32px",
            width: "100%",
            maxWidth: 1600,
          }}
        >
          {GAMES.map((game, index) => {
            const cardDelay = 18 + index * 7;
            const cardSpring = spring({
              frame: Math.max(0, frame - cardDelay),
              fps,
              config: { damping: 11, mass: 0.5, stiffness: 190 },
            });

            const cardFloat = Math.sin(frame * 0.1 + index) * 6;

            return (
              <div
                key={game.name}
                style={{
                  position: "relative",
                  borderRadius: 20,
                  backgroundColor: "rgba(13, 20, 39, 0.85)",
                  backdropFilter: "blur(12px)",
                  border: `2px solid ${game.color}55`,
                  boxShadow: `0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px ${game.color}22`,
                  padding: "26px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  scale: cardSpring,
                  translate: `0px ${cardFloat}px`,
                  overflow: "hidden",
                }}
              >
                {/* Glowing Side Indicator */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 6,
                    backgroundColor: game.color,
                    boxShadow: `0 0 15px ${game.color}`,
                  }}
                />

                {/* Left Side: Game Info */}
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  {/* Game Icon Box */}
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 16,
                      backgroundColor: "rgba(7, 10, 20, 0.9)",
                      border: `2px solid ${game.color}`,
                      boxShadow: `0 0 15px ${game.color}66`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: FONT_CYBER,
                      fontSize: 16,
                      fontWeight: 900,
                      color: game.color,
                      textAlign: "center",
                      padding: 4,
                    }}
                  >
                    {game.iconText}
                  </div>

                  <div>
                    <div
                      style={{
                        fontFamily: FONT_CYBER,
                        fontSize: 26,
                        fontWeight: 900,
                        color: "#ffffff",
                        letterSpacing: 1,
                      }}
                    >
                      {game.name}
                    </div>
                    <div
                      style={{
                        fontFamily: FONT_BODY,
                        fontSize: 18,
                        fontWeight: 600,
                        color: "#94a3b8",
                        marginTop: 4,
                      }}
                    >
                      {game.tag}
                    </div>
                  </div>
                </div>

                {/* Right Side: Price & Promo */}
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "4px 12px",
                      borderRadius: 20,
                      backgroundColor: `${game.color}22`,
                      border: `1px solid ${game.color}`,
                      fontFamily: FONT_CYBER,
                      fontSize: 12,
                      fontWeight: 800,
                      color: game.color,
                      letterSpacing: 1,
                      marginBottom: 8,
                    }}
                  >
                    {game.promo}
                  </div>
                  <div
                    style={{
                      fontFamily: FONT_BODY,
                      fontSize: 14,
                      color: "#64748b",
                      fontWeight: 600,
                    }}
                  >
                    Mulai dari
                  </div>
                  <div
                    style={{
                      fontFamily: FONT_CYBER,
                      fontSize: 24,
                      fontWeight: 900,
                      color: "#ffe600",
                      textShadow: "0 0 12px rgba(255, 230, 0, 0.5)",
                    }}
                  >
                    {game.startingPrice}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div
          style={{
            marginTop: 44,
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "14px 36px",
            borderRadius: 40,
            backgroundColor: "rgba(0, 243, 255, 0.08)",
            border: "1px dashed rgba(0, 243, 255, 0.5)",
            scale: spring({
              frame: Math.max(0, frame - 65),
              fps,
              config: { damping: 13 },
            }),
          }}
        >
          <span style={{ fontSize: 26 }}>⚡</span>
          <span
            style={{
              fontFamily: FONT_BODY,
              fontSize: 22,
              fontWeight: 800,
              color: "#00f3ff",
              letterSpacing: 1,
            }}
          >
            Dan masih banyak lagi 100+ game mobile & PC lainnya!
          </span>
          <span style={{ fontSize: 26 }}>⚡</span>
        </div>
      </div>
    </div>
  );
};
