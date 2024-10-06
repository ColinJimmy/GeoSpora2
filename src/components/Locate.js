const Locate = ({ panToLocation, getWeather, getLocation }) => {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            panToLocation({ lat, lng });
            getWeather({ lat, lng });
            getLocation("Your Location");
          },
          () => null
        );
      }}
    >
      <img src="/compass.svg" alt="compass" />
    </button>
  );
};

export default Locate;
