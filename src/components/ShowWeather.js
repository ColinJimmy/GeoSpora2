const ShowWeather = ({ weather, location, unit, toggleUnit }) => {
  const tempUnit = unit ? "°F" : "°C";
  const temperature = unit
    ? (weather.main.temp * 9) / 5 + 32
    : weather.main.temp;

  return (
    <div className="weather-window">
      <h2>{location}</h2>
      <h3>{weather.weather[0].description}</h3>
      <h4>
        Temperature: {Math.round(temperature)} {tempUnit}
      </h4>
      <h5>Humidity: {weather.main.humidity}%</h5>
      <button onClick={toggleUnit}>
        Toggle to {unit ? "°C" : "°F"}
      </button>
    </div>
  );
};

export default ShowWeather;
