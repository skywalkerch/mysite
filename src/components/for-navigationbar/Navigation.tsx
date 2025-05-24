"use client";
import LeftLogo from "./LeftLogo";
import RightMenu from "./RightMenu";
import MusicVisualizer from "./MusicVisualizer";
import { MusicContext } from "./music-context";

export default function Navigation() {
  return (
    <MusicContext>
      <div id='Navigation'>
        <LeftLogo />
        <MusicVisualizer />
        <RightMenu />
      </div>
    </MusicContext>
  );
}






