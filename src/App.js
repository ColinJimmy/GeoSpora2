import { useCallback, useRef, useState } from "react";
import MapButton from "./components/MapButton";
import Search from "./components/Search";
import Locate from "./components/Locate";
import ShowWeather from "./components/ShowWeather";
import TopButtons from "./components/TopButtons"; // Import the new TopButtons component
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import FloatingHydroponics from './pages/FloatingHydroponics'; // Your hydroponics component
import About from './pages/About';
import HelpPage from "./pages/HelpPage";

const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",  // Adjusted for buttons
  width: "100%",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeId: 'hybrid'
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
  const [markers, setMarkers] = useState([]);
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("");
  const [unit, setUnit] = useState(false);
  const [mapVisible, setMapVisible] = useState(true);

  const mapRef = useRef();

  const toggleUnit = () => setUnit(!unit);
  const toggleMap = () => setMapVisible(!mapVisible);

  const panToLocation = useCallback(({ lat, lng }) => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(14);
      setMarkers([{ lat, lng }]);
    }
  }, []);

  const getWeather = useCallback(({ lat, lng }) => {
    // Construct the Weatherstack API URL
    const weatherURL = `http://api.weatherstack.com/current?access_key=d57c8f2a9f5b53f458717fd3d71b7a2e&query=${lat},${lng}`;

    fetch(weatherURL)
        .then((res) => res.json())
        .then((data) => {
            if (data.success !== false) {
                // Extract relevant data from the response
                const weatherData = {
                    location: data.location.name,
                    temperature: data.current.temperature,
                    windSpeed: data.current.wind_speed,
                    humidity: data.current.humidity,
                    pressure: data.current.pressure,
                    observationTime: data.current.observation_time,
                    weatherDescription: data.current.weather_descriptions[0],
                    weatherIcon: data.current.weather_icons[0],
                    localTime: data.location.localtime,
                };

                setWeather(weatherData);
            } else {
                console.error("Weather not found:", data.error.info); // Handle errors
            }
        })
        .catch((error) => console.error("Error fetching weather:", error));
}, []);


  const onMapClick = useCallback((e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setMarkers([{ lat, lng }]);
    getWeather({ lat, lng });
  }, [getWeather]);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const [showHydroponics, setShowHydroponics] = useState(false);
  const [showAbout, setShowAbout]= useState(false);
  const [showHelp, setShowHelp]= useState(false);

  // const onFloodClick = () => {
  //   setShowHydroponics(true); // Show the FloatingHydroponics component
  // };


  const handleHomeClick = () => {
    window.location.href = '/'; // This reloads the page and navigates to the map
  };
  



// Button click handlers
const handleAboutClick = () => {
  console.log("About button clicked");
  setShowAbout(true);
  // Add your logic for About here
};

  // Button click handlers
  const handleFloodClick = () => {
    console.log("Flood button clicked");
    setShowHydroponics(true);
    // Add your logic for flood here
  };

  const handleDroughtClick = () => {
    console.log("Drought button clicked");
    // Add your logic for drought here
  };

  const handleHelpClick = () => {
    console.log("Help button clicked");
    setShowHelp(true);
    // Add your logic for help here
  };

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps...";

  return (
    <>
      {/* Top buttons for flood, drought, and help */}
      <TopButtons
        onHomeClick={handleHomeClick}
        onAboutClick={handleAboutClick}
        onFloodClick={handleFloodClick}
        onDroughtClick={handleDroughtClick}
        onHelpClick={handleHelpClick}
      />
      {showHydroponics && <FloatingHydroponics />}
      {showAbout && <About />}
      {showHelp && <HelpPage/>}

      {/* Map and weather components */}
      <MapButton toggleMap={toggleMap} />

      <Search
        getWeather={getWeather}
        setLocation={setLocation}
        panToLocation={panToLocation}
      />

      <Locate
        getLocation={setLocation}
        getWeather={getWeather}
        panToLocation={panToLocation}
      />

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
          mapTypeId="hybrid"
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
    </>
  );
};

export default App;

