import React from "react";
import "./WeatherForecast.css";
import axios from "axios";
import { useState, useEffect } from "react";
import DailyForecast from "./DailyForecast";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
  }, [props.city]);

  function handleResponse(response) {
    setReady(true);
    setForecast(response.data.daily);
  }
  if (ready) {
    return (
      <div className="WeatherForecast">
        <h5 className="mb-3">Extended Weather Forecast</h5>
        <div className="row">
          {forecast?.map(function (dailyforecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  {" "}
                  <DailyForecast data={dailyforecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "adf0eeed55ed6d4256b9b3ft0e49cc9o";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading extended forecast...";
  }
}
