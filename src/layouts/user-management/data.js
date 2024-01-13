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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect} from "react";
export default function data() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");
  const userGroup = localStorage.getItem("user_group");
  const apiBaseUrl = process.env.REACT_APP_STORE_BASE_URL;
  
  function convertUTCDateToLocalDate(utcDate) {
    const dateObj = new Date(utcDate);
  
    const day = dateObj.getUTCDate().toString().padStart(2, '0');
    const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const year = dateObj.getUTCFullYear();
  
    return `${day}-${month}-${year}`;
  }

  const fetchUsers = async () => {
    try {
        // Make an API call to fetch users
        const response = await axios.get(apiBaseUrl+'/users/', {
            headers: {
                Authorization: `Token ${token}`,  // Replace with your authentication token
            },
        });
        console.log(response)

        // Check the response and update the state with the fetched notifications
        if (response && response.status === 200) {
            setUsers(response.data);
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
    fetchUsers();
}, []);

  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
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
     
      { Header: "使用者名稱", accessor: "username", align: "left" },
      { Header: "電子郵件", accessor: "email", align: "left" },
      { Header: "名", accessor: "firstname", align: "left" },
      { Header: "姓", accessor: "lastname", align: "left" },
      { Header: "角色", accessor: "role", align: "left" },
      { Header: "建立日期", accessor: "creationdate", align: "center" },
      { Header: "行動", accessor: "action", align: "center" },
    ],

    rows:  users.map((user, index) => (
      {
        
        username: (
       
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {user.username}
          </MDTypography>
          
        ),
        email: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
             {user.email}
          </MDTypography>
        ),
        firstname: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
             {user.first_name}
          </MDTypography>
        ),
        lastname: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
             {user.last_name}
          </MDTypography>
        ),
        role: (
          <div>
          {user.groups && (  // Check if user.groups exists
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              {user.groups.name}
            </MDTypography>
          )}
        </div>
        ),
        creationdate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          { convertUTCDateToLocalDate(user.date_joined)}
          </MDTypography>
        ),
        action: (
          <div>
          {userGroup === "ADMIN" && (
            <MDBox>
              
               <Link to={`/user-management/update-profile/${user.id}`}>
                <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" mr={2}>
                Edit
                </MDTypography>
                </Link>
                {/* <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                Delete
                </MDTypography> */}
            </MDBox>
          )}
          </div>
        ),
      }
    ),
  )
}}
