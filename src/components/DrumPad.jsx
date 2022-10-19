const DrumPad = ({ clipSrc, clipName, children, displayName }) => {
  const playDrum = (e) => {
    displayName(e);
    e.target.children[0].play();
  };

  return (
    <button className="drum-pad" id={children} name={clipName} onClick={playDrum}>
      <audio src={clipSrc} className="clip" id={children}></audio>
      {children}
    </button>
  );
};

export default DrumPad;
