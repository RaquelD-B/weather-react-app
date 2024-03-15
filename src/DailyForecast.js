import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  let date = new Date(props.data.day * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Tue", "Fri", "Sat"];
  let day = days[date.getDay()];
  let maxTemp = Math.round(props.data.maxTemp);
  let minTemp = Math.round(props.data.minTemp);

  return (
    <div className="DailyForecast">
      <h5>Extended Forecast</h5>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="forecast-day">{day}</div>
            <div className="forecast-icon">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div>
              {" "}
              <span className="forecast-max-temp">{maxTemp}° </span>{" "}
              <span className="forecast-min-temp">{minTemp}° </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
