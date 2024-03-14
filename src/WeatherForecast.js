import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <h5>Extended Forecast</h5>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="forecast-day">Monday</div>
            <div className="forecast-icon">
              <WeatherIcon code="01d" />
            </div>
            <div>
              {" "}
              <span className="forecast-max-temp">19° </span>{" "}
              <span className="forecast-min-temp">10°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
