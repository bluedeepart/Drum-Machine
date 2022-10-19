import { useEffect } from "react";
import DrumPad from "./DrumPad";
import header_1 from "../drum-audio/Header-1.mp3";
import header_2 from "../drum-audio/Header-2.mp3";
import header_3 from "../drum-audio/Header-3.mp3";
import header_4 from "../drum-audio/Header-4.mp3";
import clap from "../drum-audio/Clap.mp3";
import open_hh from "../drum-audio/Open-HH.mp3";
import kick_n_hat from "../drum-audio/Kick_n_Hat.mp3";
import kick from "../drum-audio/Kick.mp3";
import closed_hh from "../drum-audio/Closed-HH.mp3";

const DrumKeys = ({ displayNameHandler }) => {
  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("keydown", findPressedKey, true);
    }, 10);
  }, []);

  const findPressedKey = (e) => {
    const keyId = e.key.toUpperCase();
    if (document.getElementById(keyId)) {
      document.getElementById(keyId).classList.add("translate-y-1", "from-gray-900");
      document.getElementById(keyId).click();
      setTimeout(() => {
        document.getElementById(keyId).classList.remove("translate-y-1", "from-gray-900");
      }, 100);
    }
  };

  return (
    <div className="drum-keys">
      <DrumPad displayName={displayNameHandler} clipName="Header 1" clipSrc={header_1}>Q</DrumPad>
      <DrumPad displayName={displayNameHandler} clipName="Header 2" clipSrc={header_2}>W</DrumPad>
      <DrumPad displayName={displayNameHandler} clipName="Header 3" clipSrc={header_3}>E</DrumPad>
      <DrumPad displayName={displayNameHandler} clipName="Header 4" clipSrc={header_4}>A</DrumPad>
      <DrumPad displayName={displayNameHandler} clipName="Clap" clipSrc={clap}>S</DrumPad>
      <DrumPad displayName={displayNameHandler} clipName="Open-HH " clipSrc={open_hh}>D</DrumPad>
      <DrumPad displayName={displayNameHandler} clipName="Kick n' Hat " clipSrc={kick_n_hat}>Z</DrumPad>
      <DrumPad displayName={displayNameHandler} clipName="Kick " clipSrc={kick}>X</DrumPad>
      <DrumPad displayName={displayNameHandler} clipName="Closed-HH " clipSrc={closed_hh}>C</DrumPad>
    </div>
  );
};

export default DrumKeys;
