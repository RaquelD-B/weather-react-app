import { useState } from "react";
import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  let fahrenheitTemp = Math.round((props.celsius * 9) / 5 + 32);
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("Celsius");
  }

  if (unit === "Fahrenheit") {
    return (
      <span>
        <span className="temp">{fahrenheitTemp}</span>{" "}
        <span className="tempUnit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temp">{props.celsius} </span>{" "}
        <span className="tempUnit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  }
}
