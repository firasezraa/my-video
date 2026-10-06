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

type PayMethod = {
  name: string;
  category: string;
  color: string;
  badge: string;
  icon: string;
};

const PAYMENT_METHODS: PayMethod[] = [
  { name: "QRIS INSTANT", category: "Semua Bank & E-Wallet", color: "#ff007f", badge: "POPULAR", icon: "📱" },
  { name: "GoPay", category: "E-Wallet Auto Pay", color: "#00aed6", badge: "INSTANT", icon: "🟢" },
  { name: "DANA", category: "E-Wallet Cashback", color: "#118eea", badge: "NO FEE", icon: "🔵" },
  { name: "OVO", category: "OVO Cash & Points", color: "#4c3494", badge: "AUTO", icon: "🟣" },
  { name: "ShopeePay", category: "SPay & SPayLater", color: "#ee4d2d", badge: "CASHBACK", icon: "🟠" },
  { name: "Virtual Account", category: "BCA / Mandiri / BRI / BNI", color: "#ffe600", badge: "24 JAM", icon: "🏦" },
  { name: "Indomaret & Alfamart", category: "Bayar Tunai di Kasir", color: "#00ff88", badge: "OFFLINE", icon: "🏪" },
  { name: "Pulsa Provider", category: "Telkomsel / XL / Tri / Axis", color: "#f97316", badge: "PULSA", icon: "📶" },
];

export const PaymentsScene: React.FC = () => {
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
        accentColor="#00aed6"
        secondaryColor="#ff007f"
        gridSpeed={2.5}
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
          padding: "55px 80px",
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
            backgroundColor: "rgba(0, 174, 214, 0.15)",
            border: "1.5px solid #00aed6",
            boxShadow: "0 0 20px rgba(0, 174, 214, 0.35)",
            marginBottom: 16,
            scale: spring({
              frame,
              fps,
              config: { damping: 14 },
            }),
          }}
        >
          <span style={{ fontSize: 18 }}>💳</span>
          <span
            style={{
              fontFamily: FONT_CYBER,
              fontSize: 18,
              fontWeight: 800,
              color: "#38bdf8",
              letterSpacing: 3,
            }}
          >
            PAYMENT GATEWAY // PRAKTIS & AMAN
          </span>
        </div>

        {/* Headline */}
        <GlitchText
          text="METODE PEMBAYARAN TERLENGKAP"
          delayFrames={5}
          fontSize={64}
          color="#ffffff"
          glowColor="#00aed6"
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
          Bisa Bayar Pakai Apa Aja Sesuai Kenyamanan Kamu!
        </div>

        {/* 8 Payment Cards Grid */}
        <div
          style={{
            marginTop: 44,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px 28px",
            width: "100%",
            maxWidth: 1620,
          }}
        >
          {PAYMENT_METHODS.map((method, index) => {
            const cardSpring = spring({
              frame: Math.max(0, frame - (15 + index * 5)),
              fps,
              config: { damping: 11, mass: 0.5, stiffness: 200 },
            });

            const cardFloat = Math.sin(frame * 0.09 + index) * 5;

            return (
              <div
                key={method.name}
                style={{
                  position: "relative",
                  borderRadius: 20,
                  backgroundColor: "rgba(11, 18, 38, 0.88)",
                  backdropFilter: "blur(14px)",
                  border: `2px solid ${method.color}55`,
                  boxShadow: `0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px ${method.color}22`,
                  padding: "24px 22px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 140,
                  scale: cardSpring,
                  translate: `0px ${cardFloat}px`,
                  overflow: "hidden",
                }}
              >
                {/* Glow border line top */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    backgroundColor: method.color,
                    boxShadow: `0 0 15px ${method.color}`,
                  }}
                />

                {/* Header inside card */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 14,
                  }}
                >
                  <span style={{ fontSize: 32 }}>{method.icon}</span>
                  <span
                    style={{
                      fontFamily: FONT_CYBER,
                      fontSize: 12,
                      fontWeight: 900,
                      color: method.color,
                      backgroundColor: `${method.color}22`,
                      border: `1px solid ${method.color}`,
                      padding: "3px 10px",
                      borderRadius: 20,
                      letterSpacing: 1.5,
                    }}
                  >
                    {method.badge}
                  </span>
                </div>

                {/* Method Name */}
                <div>
                  <div
                    style={{
                      fontFamily: FONT_CYBER,
                      fontSize: 22,
                      fontWeight: 900,
                      color: "#ffffff",
                      letterSpacing: 0.5,
                    }}
                  >
                    {method.name}
                  </div>
                  <div
                    style={{
                      fontFamily: FONT_BODY,
                      fontSize: 16,
                      fontWeight: 600,
                      color: "#94a3b8",
                      marginTop: 4,
                    }}
                  >
                    {method.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security & Instant Guarantee Footer */}
        <div
          style={{
            marginTop: 44,
            display: "flex",
            alignItems: "center",
            gap: 36,
            opacity: interpolate(frame, [60, 75], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 28px",
              borderRadius: 30,
              backgroundColor: "rgba(0, 255, 136, 0.1)",
              border: "1px solid #00ff88",
            }}
          >
            <span style={{ fontSize: 24 }}>🔒</span>
            <span
              style={{
                fontFamily: FONT_BODY,
                fontSize: 20,
                fontWeight: 700,
                color: "#00ff88",
              }}
            >
              100% Transaksi Aman & Terenkripsi
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 28px",
              borderRadius: 30,
              backgroundColor: "rgba(0, 243, 255, 0.1)",
              border: "1px solid #00f3ff",
            }}
          >
            <span style={{ fontSize: 24 }}>⚡</span>
            <span
              style={{
                fontFamily: FONT_BODY,
                fontSize: 20,
                fontWeight: 700,
                color: "#00f3ff",
              }}
            >
              Verifikasi Otomatis Tanpa Upload Bukti
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
