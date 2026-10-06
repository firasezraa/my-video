import React from "react";
import { Composition, Folder } from "remotion";
import { MainVideo, MAIN_VIDEO_DURATION_IN_FRAMES } from "./MainVideo";
import { HookScene } from "./scenes/HookScene";
import { CatalogScene } from "./scenes/CatalogScene";
import { FeaturesScene } from "./scenes/FeaturesScene";
import { PaymentsScene } from "./scenes/PaymentsScene";
import { CtaScene } from "./scenes/CtaScene";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Standalone Connected Compositions for Each Scene */}
      <Folder name="Scenes">
        <Composition
          id="Hook"
          component={HookScene}
          durationInFrames={225}
          fps={60}
          width={1920}
          height={1080}
        />
        <Composition
          id="Catalog"
          component={CatalogScene}
          durationInFrames={375}
          fps={60}
          width={1920}
          height={1080}
        />
        <Composition
          id="Features"
          component={FeaturesScene}
          durationInFrames={495}
          fps={60}
          width={1920}
          height={1080}
        />
        <Composition
          id="Payments"
          component={PaymentsScene}
          durationInFrames={375}
          fps={60}
          width={1920}
          height={1080}
        />
        <Composition
          id="CallToAction"
          component={CtaScene}
          durationInFrames={405}
          fps={60}
          width={1920}
          height={1080}
        />
      </Folder>

      {/* Complete 30-Second 60FPS Video */}
      <Composition
        id="TopUpGamePromo"
        component={MainVideo}
        durationInFrames={MAIN_VIDEO_DURATION_IN_FRAMES}
        fps={60}
        width={1920}
        height={1080}
      />
    </>
  );
};
