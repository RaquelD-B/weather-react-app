import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  console.log(props.data);
  let date = new Date(props.data.time * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Tue", "Fri", "Sat"];
  let day = days[date.getDay()];
  let maxTemp = Math.round(props.data.temperature.maximum);
  let minTemp = Math.round(props.data.temperature.minimum);

  return (
    <div className="DailyForecast">
      <div className="forecast-day">{day}</div>
      <div className="forecast-icon">
        <WeatherIcon code={props.data.condition.icon} />
      </div>
      <div>
        {" "}
        <span className="forecast-max-temp">{maxTemp}° </span>{" "}
        <span className="forecast-min-temp">{minTemp}° </span>
      </div>
    </div>
  );
}
