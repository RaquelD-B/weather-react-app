import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App defaultCity="Asuncion" />
    <p className="text-center">
      {" "}
      This project was coded by Raquel Diaz, is open-sourced on{" "}
      <a href="https://github.com/RaquelD-B/weather-react-app">Github</a> and
      hosted on{" "}
      <a href="https://react-weatherapp-by-raquel.netlify.app/">Netlify</a>
    </p>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
