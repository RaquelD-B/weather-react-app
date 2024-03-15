import React from "react";
import "./WeatherForecast.css";
import axios from "axios";
import { useState } from "react";
import DailyForecast from "./DailyForecast";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setForecast({
      day: response.data.daily[0].time,
      maxTemp: response.data.daily[0].temperature.maximum,
      minTemp: response.data.daily[0].temperature.minimum,
      icon: response.data.daily[0].condition.icon,
    });
  }
  if (forecast) {
    return (
      <div className="WeatherForecast">
        <DailyForecast data={forecast} />
      </div>
    );
  } else {
    let city = { city };
    let apiKey = "adf0eeed55ed6d4256b9b3ft0e49cc9o";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
