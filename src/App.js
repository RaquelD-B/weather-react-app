import "./App.css";

export default function App() {
  let wheatherData = {
    city: "Paris",
    temperature: 20,
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    humidity: 80,
    wind: 30,
    date: "Thu, Feb 15, 2024",
    time: "8:10",
  };
  return (
    <div className="App">
      <div className="weatherApp">
        <header>
          <form className="citySearch">
            <input
              type="text"
              placeholder="Type a city..."
              className="cityInput"
              id="searchedCity"
            />
            <input type="submit" value="Search" className="searchButton" />
          </form>
        </header>
        <div className="today-details">
          <h2>
            <img src={wheatherData.iconUrl} className="icon" alt="" />{" "}
            {wheatherData.temperature}° <a href="/">C</a> |<a href="/">F</a>
          </h2>
          <div className="humidityDetails">
            Humidity: {wheatherData.humidity}%
          </div>
          <div className="windDetails">Wind: {wheatherData.wind} km/h</div>
        </div>
        <div className="weatherForecastMainSection">
          <h1>{wheatherData.city}</h1>
          <div className="h2Subtitle">Weather for today</div>
          <div>{wheatherData.date}</div>
          <div>{wheatherData.time}</div>
        </div>
        <div className="container" id="extended-forecast">
          <h4 className="text-center">Extended Weather Forecast</h4>
          <div className="row">
            <div className="col">
              {" "}
              <div> Mon</div>🌧️
              <div> 9°</div>
            </div>
            <div className="col">
              {" "}
              <div> Mon</div>🌧️
              <div> 9°</div>
            </div>
            <div className="col">
              {" "}
              <div> Mon</div>🌧️
              <div> 9°</div>
            </div>
            <div className="col">
              {" "}
              <div> Mon</div>🌧️
              <div> 9°</div>
            </div>
            <div className="col">
              {" "}
              <div> Mon</div>🌧️
              <div> 9°</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
