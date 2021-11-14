import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "1510dfa5c43bdbc339577a5b29c2fc63";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);

    if (city.length > 0) {
      alert(city);
    } else {
      alert("Enter a city");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    let iconId = response.data.weather[0].icon;
    let icon = `http://openweathermap.org/img/wn/${iconId}@2x.png`;

    setWeather(
      <div>
        <ul>
          <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
          <li>Description: {response.data.weather[0].description}</li>
          <li>Humidity: {response.data.main.humidity}%</li>
          <li>Wind: {Math.round(response.data.wind.speed)} km/h</li>
          <li>
            <img src={icon} alt="icon" />
          </li>
        </ul>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} id="search-form" className="mb-3">
      <div className="row">
        <div className="col-7">
          <input
            type="search"
            onChange={updateCity}
            placeholder="Type a city..."
            className="form-control"
            id="city-input"
            autoFocus="on"
            autoComplete="off"
          />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="btn btn-dark w-100" />
        </div>
        <div className="col-2">
          <input
            type="submit"
            value="Current"
            className="btn btn-dark w-100"
            id="current"
          />
        </div>
      </div>
      {weather}
    </form>
  );
}
