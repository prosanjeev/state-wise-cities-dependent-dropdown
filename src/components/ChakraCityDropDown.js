import React, { useState, useEffect } from "react";
import { Container, FormControl, FormLabel, Select, Stack } from "@chakra-ui/react";
import data from "./data";

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
    console.log("Selected State:", newState);
  }

  function handleCityChange(event) {
    const newCity = event.target.value;
    setSelectedCity(newCity);
    console.log("Selected City:", newCity);
  }

  return (
    <Container mt={10}>
        <Stack spacing={4}>
      <FormControl id="stateDropdown">
        <FormLabel>Select State:</FormLabel>
        <Select
          value={selectedState}
          onChange={handleStateChange}
          placeholder="Select State"
        >
          {data.states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl id="cityDropdown">
        <FormLabel>Select City:</FormLabel>
        <Select
          value={selectedCity}
          onChange={handleCityChange}
          placeholder="Select City"
          isDisabled={cities.length === 0}
        >
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </Select>
      </FormControl>
    </Stack>
    </Container>
  );
};

export default CityDropdown;
