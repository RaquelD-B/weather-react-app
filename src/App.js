import "./App.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";

export default function App(props) {
  const [weather, setWeather] = useState({});
  const [details, setDetails] = useState(false);
  const [city, setCity] = useState(props.city);

  function handleCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "6643c7326a4c2a38838264a28531d97e";
    let unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(displayWeather);
  }
  function displayWeather(response) {
    setDetails(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }

  if (details) {
    return (
      <div className="App">
        <div className="weatherApp">
          <header>
            <form className="citySearch" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Type a city..."
                className="cityInput"
                id="searchedCity"
                onChange={handleCity}
              />
              <input type="submit" value="Search" className="searchButton" />
            </form>
          </header>

          <WeatherData data={weather} />

          <WeatherForecast />

          <p className="text-center">
            {" "}
            This project was coded by Raquel Diaz and is on{" "}
            <a href="https://github.com/RaquelD-B/weather-react-app">Github</a>
          </p>
        </div>
      </div>
    );
  } else {
    let apiKey = "6643c7326a4c2a38838264a28531d97e";
    let unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(displayWeather);
    return <p className="text-center">Loading</p>;
  }
}
