import React from "react";
import Overview from "./Overview";
import CurrentTemperature from "./CurrentTemperature";
import Source from "./Source";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Overview />
            <CurrentTemperature />
            <hr />
            <Source />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
