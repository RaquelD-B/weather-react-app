import "./WeatherData.css";
import React from "react";
import FormattedDay from "./FormattedDay";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
          <WeatherIcon code={props.data.icon} />{" "}
          <WeatherTemperature celsius={props.data.temperature} />
          <div className="weather-details">
            <div className="text-capitalize">{props.data.description}</div>
            <div className="humidityDetails">
              Humidity: {props.data.humidity}%
            </div>
            <div className="windDetails">Wind: {props.data.wind} km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}
