import React from "react";
import Clock from "./components/clock";
import AutoRefreshComponent from "./components/autoRefresh";
import BackgroundImage from "./assets/bg.png"

import './App.css';

function App() {
  return (
    <div className="clock-container">
      <img className="background-image" src={BackgroundImage} alt="" />
      <Clock />
      <AutoRefreshComponent />
    </div>
  )
}

export default App;