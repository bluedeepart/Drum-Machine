import { useState } from "react";
import DrumKeys from "./components/DrumKeys";

function App() {
  const [displayValue, setDisplayValue] = useState("");

  const displayNameHandler = (e) => {
    setDisplayValue(e.target.name);
  };

  return (
    <div className="container">
      <h1 className="text-4xl text-center mb-6">Drum Machine</h1>
      <div id="display" className="display text-center">
        {displayValue ?
          displayValue
          :
          <p className="italic">Press suggested key</p>
        }
      </div>
      <div id="drum-machine" className="drum-machine">
        <DrumKeys displayNameHandler={displayNameHandler} />
      </div>
      <p className="text-center py-2">by <a href="http://deepart.in" target="_blank" rel="noopener noreferrer" className="font-bold italic">Deepart</a></p>
    </div>
  );
}

export default App;
