/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import { Link } from 'react-router-dom';

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import axios from 'axios';
import { useState, useEffect, useContext } from "react";

export default function data() {

  
  const [stores, setStores] = useState([]);
  const token = localStorage.getItem("token");
  const apiBaseUrl = process.env.REACT_APP_STORE_BASE_URL;

  const fetchStores = async () => {
    try {
      // Make an API call to fetch notifications
      const response = await axios.get(apiBaseUrl+'/api/store/', {
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


  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      {/* <MDAvatar src={image} name={name} size="sm" /> */}
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "店鋪", accessor: "author", width: "35%", align: "left" },
      { Header: "地址", accessor: "function", align: "left" },
      { Header: "業主姓名", accessor: "owner_name", align: "center" },
      { Header: "品牌", accessor: "grade", align: "center" },
      { Header: "頻道", accessor: "channel", align: "center" },
      // { Header: "action", accessor: "action", align: "center" },
    ],

    rows:  stores.map((store, index) => ({
        author: (
          <Link to={`/store-management/store-profile/${store.id}`}>
            <Author component="a" href="/store-profile" image={team2} name={store.shop_name} email={store.email}/>
          </Link>
        ),
        function: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {store.address}
          </MDTypography>
        ),
        
        owner_name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {store.owner_name}
          </MDTypography>
        ),
        grade: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {store.brands}
          </MDTypography>
        ),
        channel: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {store.channel}
          </MDTypography>
        ),
        // action: (
        //   <MDBox ml="auto" lineHeight={0} color= "dark">
        //   <Tooltip title="Edit Card" placement="top">
        //     <Icon sx={{ cursor: "pointer" }} fontSize="small">
        //       edit
        //     </Icon>
        //   </Tooltip>
        // </MDBox>
        // ),
      }))
  };
}
