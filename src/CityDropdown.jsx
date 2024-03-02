import React, { useState, useEffect } from "react";
import data from "./components/data";

const CityDropdown = () => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    setCities(data.cities[selectedState] || []);
    setSelectedCity("");
  }, [selectedState]);

  function handleStateChange(event) {
    const newState = event.target.value;
    setSelectedState(newState);
  }

  function handleCityChange(event) {
    const newCity = event.target.value;
    setSelectedCity(newCity);
  }

  return (
    <div >
      <label htmlFor="stateDropdown">Select State:</label>
      <select
        id="stateDropdown"
        value={selectedState}
        onChange={handleStateChange}
      >
        <option value="">Select State</option>
        {data.states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      <label htmlFor="cityDropdown">Select City:</label>
      <select
        id="cityDropdown"
        value={selectedCity}
        disabled={cities.length === 0}
        onChange={handleCityChange}
      >
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityDropdown;
