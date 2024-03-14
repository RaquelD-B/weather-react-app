import "./WeatherData.css";
import React from "react";
import FormattedDay from "./FormattedDay";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="row">
        <div className="col-6">
          <h1 className="title">{props.data.city}</h1>
          <div className="weather-general-details">
            <div>Weather for today</div>
            <div>
              <FormattedDay date={props.data.date} />
            </div>
          </div>
        </div>

        <div className="col-6">
          <span className="title-2">
            <WeatherIcon code={props.data.icon} className="main-icon" />{" "}
            <WeatherTemperature celsius={props.data.temperature} />
          </span>

          <div className="weather-general-details-2">
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
