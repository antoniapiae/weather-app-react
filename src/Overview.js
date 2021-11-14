import React from "react";
import "./Overview.css";

export default function Overview() {
  return (
    <div className="overview">
      <h1 id="city">Stockholm</h1>
      <ul>
        <li>
          Last updated: <span id="date"> Sunday, November 14</span>
        </li>
        <li id="condition">Cloudy</li>
      </ul>
    </div>
  );
}
