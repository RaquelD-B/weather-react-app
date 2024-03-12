import "./WeatherData.css";
import React from "react";
import FormattedDay from "./FormattedDay";

export default function WeatherData(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <div className="h2Subtitle">Weather for today</div>
          <div>
            <FormattedDay date={props.data.date} />
          </div>
        </div>
        <div className="col-6">
          <h2>
            <img src={props.data.iconUrl} className="icon" alt="weather-icon" />{" "}
            {props.data.temperature}° <a href="/">C</a> |<a href="/">F</a>
          </h2>
          <div className="text-capitalize">{props.data.description}</div>
          <div className="humidityDetails">
            Humidity: {props.data.humidity}%
          </div>
          <div className="windDetails">Wind: {props.data.wind} km/h</div>
        </div>
      </div>
    </div>
  );
}
