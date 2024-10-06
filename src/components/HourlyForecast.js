import { add } from "date-fns";

const HourlyForecast = ({ index, weather, unit, convertToFahrenheit }) => {
  // Ensure weather.hourly exists and is an array
  if (!weather || !weather.hourly || !Array.isArray(weather.hourly)) {
    return <div>No weather data available</div>;
  }

  const addHour = (hour) => {
    const date = add(new Date(), { hours: hour });
    // Ensure weather.timezone exists
    return new Intl.DateTimeFormat("en-US", {
      timeZone: weather.timezone || "UTC", // Default to UTC if no timezone
      hour: "2-digit",
    }).format(date);
  };

  const hourlyData = weather.hourly[index]; // Get the hourly data for the given index

  return (
    <div className="hour-forecast">
      <div>{addHour(index + 1)}</div>
      <div className="weather-icon-hour">
        <img
          alt="weather icon"
          src={`http://openweathermap.org/img/wn/${hourlyData.weather[0].icon}@2x.png`}
        />
      </div>
      <div>
        {unit
          ? convertToFahrenheit(Math.round(hourlyData.temp))
          : Math.round(hourlyData.temp)}
        °
      </div>
      <div className="pop">
        <div className="rain-icon">
          <img alt="rain icon" src="/drop.svg" />
        </div>
        <div>{Math.round(hourlyData.pop * 100)}%</div>
      </div>
    </div>
  );
};

export default HourlyForecast;
