import React from "react";
import { styled } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import MDTypography from "components/MDTypography";

const DropdownContainer = styled(FormControl)({
  marginBottom: (theme) => theme.spacing(1),
});

const DropdownLabel = styled(InputLabel)({
  fontSize: "16px",
  marginBottom: (theme) => theme.spacing(1),
  color: "#333",
});

const DropdownSelect = styled(Select)({
  width: "30%",
});

const Dropdown = ({ onSelectChange }) => {
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState('');
  const token = localStorage.getItem("token");

  const fetchStores = async () => {
    try {
      // Make an API call to fetch notifications
      const response = await axios.get('http://localhost:8000/api/store/', {
        headers: {
          Authorization: `Token ${token}`,  // Replace with your authentication token
        },
      });
      console.log(response)

      // Check the response and update the state with the fetched notifications
      if (response && response.status === 200) {
        setStores(response.data);
      } else {
        console.error('Error:', response.data);
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };
  useEffect(() => {
    // Fetch notifications when the component mounts
    fetchStores();
  }, []); 

  const handleDropdownChange = event => {
    const selectedValue = event.target.value;
    setSelectedStore(selectedValue);
    onSelectChange(selectedValue); // Pass the selected value to the parent component
  };

  return (
    <DropdownContainer>
          <MDTypography variant="body2" color="text" ml={1} fontWeight="regular">
          店鋪
            </MDTypography>
      <DropdownSelect
        native
        value={selectedStore}
        onChange={handleDropdownChange}
        inputProps={{
          name: "store",
          id: "store-select",
        }}
      >
        <option value="">選擇商店</option>
         {stores.map(store => (
          <option value={store.id}>
            {store.shop_name}
          </option>
        ))}
      </DropdownSelect>
    </DropdownContainer>
  );
};

export default Dropdown;
