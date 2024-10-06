import React from 'react';
import './ShowWeather.css'; // Import the CSS file

const ShowWeather = ({ weather, location, unit, toggleUnit }) => {
  // Determine temperature unit
  const tempUnit = unit ? "°F" : "°C";
  
  // Calculate temperature based on the selected unit
  const temperature = unit
    ? (weather.temperature * 9) / 5 + 32 // Convert Celsius to Fahrenheit
    : weather.temperature; // Use Celsius

  return (
    <div className="weather-window">
      <h2>{location}</h2>
      <h3>{weather.weatherDescription}</h3>
      <h4>
        Temperature: {Math.round(temperature)} {tempUnit}
      </h4>
      <h5>Humidity: {weather.humidity}%</h5>
      <h5>Wind Speed: {weather.windSpeed} km/h</h5>
      <h5>Pressure: {weather.pressure} hPa</h5>
      <h5>Observation Time: {weather.observationTime}</h5>
      <h5>Local Time: {weather.localTime}</h5>
      <img src={weather.weatherIcon} alt={weather.weatherDescription} />
      <button onClick={toggleUnit}>
        Toggle to {unit ? "°C" : "°F"}
      </button>
    </div>
  );
};

export default ShowWeather;
