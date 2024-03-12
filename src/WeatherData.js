import "./WeatherData.css";
import React from "react";
import FormattedDay from "./FormattedDay";
import WeatherIcon from "./WeatherIcon";

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
          <h2>
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
