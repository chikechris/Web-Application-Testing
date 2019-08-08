import React, { useState } from "react";

import Display from "./components/Display";
import DashBoard from "./components/DashBoard";

import {
  trackStrike,
  trackBall,
  trackHit,
  trackFoul
} from "./utility/TrackFunctions";
import "./App.css";

function App() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);

  return (
    <div className="App">
      <header className="header">
        <h2>Web Testing App (Dash-Board)</h2>
      </header>
      <Display strike={strike} ball={ball} />
      <DashBoard
        trackStrike={trackStrike}
        trackBall={trackBall}
        setStrike={setStrike}
        strike={strike}
        setBall={setBall}
        ball={ball}
        trackHit={trackHit}
      />
    </div>
  );
}

export default App;
