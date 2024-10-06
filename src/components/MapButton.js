const MapButton = ({ toggleMap }) => {
  return (
    <button className="map-button" onClick={toggleMap}>
      Toggle Map/Weather
    </button>
  );
};

export default MapButton;
