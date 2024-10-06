import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

const Search = ({ getWeather, setLocation, panToLocation }) => {
  const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue("", false);
    clearSuggestions();

    try {
      // Get latitude and longitude for the selected location
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);

      // Pan the map to the selected location
      panToLocation({ lat, lng });

      // Set the location for display
      setLocation(`${results[0].formatted_address}`);

      // Fetch weather details for the selected location
      getWeather({ lat, lng });
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
};

export default Search;
