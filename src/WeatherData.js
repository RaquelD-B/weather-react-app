import React from "react";
import FormattedDay from "./FormattedDay";

export default function WeatherData(props) {
  return (
    <div className="row">
      <div className="col">
        <h1>{props.data.city}</h1>
        <div className="h2Subtitle">Weather for today</div>
        <div>
          <FormattedDay date={props.data.date} />
        </div>
      </div>
      <div className="col">
        <h2>
          <img src={props.data.iconUrl} className="icon" alt="" />{" "}
          {props.data.temperature}° <a href="/">C</a> |<a href="/">F</a>
        </h2>
        <div className="humidityDetails">Humidity: {props.data.humidity}%</div>
        <div className="windDetails">Wind: {props.data.wind} km/h</div>
      </div>
    </div>
  );
}
