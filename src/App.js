import "./App.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import FormattedDay from "./FormattedDay";

export default function App(props) {
  const [weather, setWeather] = useState({});
  const [details, setDetails] = useState(false);

  function displayWeather(response) {
    setDetails(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      date: new Date(response.data.dt * 1000),
    });
  }

  if (details) {
    return (
      <div className="App">
        <div className="weatherApp">
          <header>
            <form className="citySearch">
              <input
                type="text"
                placeholder="Type a city..."
                className="cityInput"
                id="searchedCity"
              />
              <input type="submit" value="Search" className="searchButton" />
            </form>
          </header>
          <div className="container main-section-container">
            <div className="row">
              <div className="col">
                <h1>Paris</h1>
                <div className="h2Subtitle">Weather for today</div>
                <div>
                  <FormattedDay date={weather.date} />
                </div>
              </div>
              <div className="col">
                <h2>
                  <img src={weather.iconUrl} className="icon" alt="" />{" "}
                  {weather.temperature}° <a href="/">C</a> |<a href="/">F</a>
                </h2>
                <div className="humidityDetails">
                  Humidity: {weather.humidity}%
                </div>
                <div className="windDetails">Wind: {weather.wind} km/h</div>
              </div>
            </div>
          </div>

          <div className="container" id="extended-forecast">
            <h4 className="text-center">Extended Weather Forecast</h4>
            <div className="row">
              <div className="col">
                {" "}
                <div> Mon</div>🌧️
                <div> 9°</div>
              </div>
              <div className="col">
                {" "}
                <div> Mon</div>🌧️
                <div> 9°</div>
              </div>
              <div className="col">
                {" "}
                <div> Mon</div>🌧️
                <div> 9°</div>
              </div>
              <div className="col">
                {" "}
                <div> Mon</div>🌧️
                <div> 9°</div>
              </div>
              <div className="col">
                {" "}
                <div> Mon</div>🌧️
                <div> 9°</div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center">
          {" "}
          This project was coded by Raquel Diaz and is on{" "}
          <a href="https://github.com/RaquelD-B/weather-react-app">Github</a>
        </p>
      </div>
    );
  } else {
    let apiKey = "6643c7326a4c2a38838264a28531d97e";
    let unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(displayWeather);
    return <p className="text-center">Loading</p>;
  }
}
