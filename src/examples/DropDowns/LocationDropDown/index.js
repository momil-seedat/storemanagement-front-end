import React, { useState } from "react";
import SubDropDown from "./SubDropDown"; // Import the SubDropDown component
import MDTypography from "components/MDTypography";
import { styled } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

const CascadingDropdown = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const cities = Object.keys(cityToDistrictMapping);

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setSelectedCity(selectedCity);

    // Reset the selected district when a new city is selected
    setSelectedDistrict("");
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const DropdownContainer = styled(FormControl)({
    display: "inline-block",
    marginRight: "16px",
   
  });
  const DropdownSelect = styled(Select)({
 
    width: "100%",
  });
  
  return (
    <div>
    <MDTypography variant="body2" color="text" ml={1} fontWeight="regular">
      Select City
    </MDTypography>
    <DropdownSelect
      native
      value={selectedCity}
      onChange={handleCityChange}
      style={{ width: '500px' }} // Set the desired width here
    >
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </DropdownSelect>
  
    {selectedCity && (
      <>
        <MDTypography variant="body2" color="text" ml={1} fontWeight="regular">
          Select District
        </MDTypography>
        <DropdownSelect
          native
          value={selectedDistrict}
          onChange={handleDistrictChange}
          style={{ width: '500px' }} // Set the desired width here
        >
          {cityToDistrictMapping[selectedCity].map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </DropdownSelect>
      </>
    )}
  </div>
  
  );
};

const cityToDistrictMapping = {
  beijing: ["ohd", "mika", "ching"],
  osaka: ["kdll", "dd", "ddd"],
};

export default CascadingDropdown;
