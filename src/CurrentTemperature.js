import React from "react";
import Search from "./Search";
import "./CurrentTemperature.css";

export default function CurrentTemperature() {
  return (
    <div className="row current-temperature">
      <div className="col-6">
        <div className="clearfix weather-temperature">
          <img
            src="http://openweathermap.org/img/wn/04d@2x.png"
            alt="Clear"
            id="icon"
            className="float-left"
          />

          <strong id="temperature">13</strong>
          <span className="units"> °C</span>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>
            Humidity: <span id="humidity">75</span>%
          </li>
          <li>
            Wind: <span id="wind">5</span> km/h
          </li>
        </ul>
      </div>
      <Search />
    </div>
  );
}
