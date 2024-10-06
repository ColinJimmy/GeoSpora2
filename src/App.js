import { useCallback, useRef, useState } from "react";
import MapButton from "./components/MapButton";
import Search from "./components/Search";
import Locate from "./components/Locate";
import ShowWeather from "./components/ShowWeather";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import Navbar from "./components/Navbar";

const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100%",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeId: "hybrid", // Change this to "hybrid" if you want satellite with labels

};
const center = {
  lat: 42.37703458185478,
  lng: -71.11662791545155,
};

const App = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const [markers, setMarkers] = useState([]); // Store marker coordinates
  const [weather, setWeather] = useState(null); // Store weather data
  const [location, setLocation] = useState(""); // Store location name
  const [unit, setUnit] = useState(false); // Unit toggle for weather (C/F)
  const [mapVisible, setMapVisible] = useState(true); // Toggle map visibility

  const mapRef = useRef();

  const toggleUnit = () => setUnit(!unit);

  // Toggle map visibility
  const toggleMap = () => setMapVisible(!mapVisible);

  // Pan and zoom map to the selected location
  const panToLocation = useCallback(({ lat, lng }) => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(14); // Zoom to the selected location
      setMarkers([{ lat, lng }]); // Set marker at selected location
    }
  }, []);

  // Fetch weather data from OpenWeather API
  const getWeather = ({ lat, lng }) => {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${OPENWEATHER_API_KEY}&units=metric`;

    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeather(data); // Set weather data if successful
        } else {
          console.error("Weather not found:", data.message); // Handle errors
        }
      })
      .catch((error) => console.error("Error fetching weather:", error));
  };

  // Handle map click to place marker and get weather
  const onMapClick = useCallback((e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setMarkers([{ lat, lng }]); // Set marker at clicked location
    getWeather({ lat, lng }); // Fetch weather for clicked location
  }, []);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps...";

  return (
      
    <>
      {/* Toggle map visibility */}
      <MapButton toggleMap={toggleMap} />
      
      {/* Search bar for location input */}
      <Search
        getWeather={getWeather}
        setLocation={setLocation}
        panToLocation={panToLocation} // Pass function to pan map
      />

      {/* Locate button for geolocation */}
      <Locate
        getLocation={setLocation}
        getWeather={getWeather}
        panToLocation={panToLocation}
      />

      {/* Display weather details or map */}
      {!mapVisible && weather ? (
        <ShowWeather
          weather={weather}
          location={location}
          unit={unit}
          toggleUnit={toggleUnit}
        />
      ) : (
        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={5}
          center={center}
          options={options}
          onClick={onMapClick}
          onLoad={onMapLoad}
        >
          {markers.map((marker) => (
            <Marker
              key={`${marker.lat}-${marker.lng}`}
              position={{ lat: marker.lat, lng: marker.lng }}
            />
          ))}
        </GoogleMap>
      )}
      {/* <Navbar/> */}
    </>
  );
};

export default App;
