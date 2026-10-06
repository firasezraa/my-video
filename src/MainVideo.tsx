import React from "react";
import { useVideoConfig } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { HookScene } from "./scenes/HookScene";
import { CatalogScene } from "./scenes/CatalogScene";
import { FeaturesScene } from "./scenes/FeaturesScene";
import { PaymentsScene } from "./scenes/PaymentsScene";
import { CtaScene } from "./scenes/CtaScene";

export const MAIN_VIDEO_DURATION_IN_FRAMES = 1800; // 30 seconds @ 60 FPS

export const MainVideo: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <TransitionSeries>
      {/* 0s - 3.75s: Hook Scene (Detik 0-3 High-Energy Problem & Solution Hook) */}
      <TransitionSeries.Sequence
        name="Hook"
        durationInFrames={225}
        premountFor={fps}
      >
        <HookScene />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={linearTiming({ durationInFrames: 18 })}
      />

      {/* 3.5s - 9.5s: Game Catalog Showcase */}
      <TransitionSeries.Sequence
        name="Catalog"
        durationInFrames={375}
        premountFor={fps}
      >
        <CatalogScene />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 20 })}
      />

      {/* 9.5s - 17.5s: 3 Key Feature Pillars */}
      <TransitionSeries.Sequence
        name="Features"
        durationInFrames={495}
        premountFor={fps}
      >
        <FeaturesScene />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={slide({ direction: "from-bottom" })}
        timing={linearTiming({ durationInFrames: 18 })}
      />

      {/* 17.5s - 23.5s: Complete Payment Methods */}
      <TransitionSeries.Sequence
        name="Payments"
        durationInFrames={375}
        premountFor={fps}
      >
        <PaymentsScene />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 19 })}
      />

      {/* 23.5s - 30.0s: Voucher Promo & High-Energy Call to Action */}
      <TransitionSeries.Sequence
        name="CallToAction"
        durationInFrames={405}
        premountFor={fps}
      >
        <CtaScene />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
