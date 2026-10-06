import { loadFont as loadOrbitron } from "@remotion/google-fonts/Orbitron";
import { loadFont as loadMontserrat } from "@remotion/google-fonts/Montserrat";

const orbitronFont = loadOrbitron("normal", {
  weights: ["400", "700", "900"],
  subsets: ["latin"],
});

const montserratFont = loadMontserrat("normal", {
  weights: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

export const FONT_CYBER = orbitronFont.fontFamily;
export const FONT_BODY = montserratFont.fontFamily;
