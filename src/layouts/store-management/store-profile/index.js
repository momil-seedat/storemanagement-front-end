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

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/store-management/Header";
import Icon from "@mui/material/Icon";

// Billing page components

import { useMaterialUIController } from "context";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



import {


  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,

} from '@mui/material';


// Images

function StoreProfile() {
  const token = localStorage.getItem("token");
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [projects, setProjects] = useState([]);
  const [store, setStore] = useState([]);
  const userGroup = localStorage.getItem("user_group");
  let { store_id } = useParams();
  const apiBaseUrl = process.env.REACT_APP_STORE_BASE_URL;
  const fetchStore = async () => {

    try {

      const url = apiBaseUrl+`/api/store/${store_id}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      // Make an API call to fetch notifications

      console.log(response)

      // Check the response and update the state with the fetched notifications
      if (response && response.status === 200) {


        setStore(response.data)


      } else {
        console.error('Error:', response.data);
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };


  const fetchProject = async () => {

    try {

      const url = apiBaseUrl+`/api/projects/store/${store_id}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      // Make an API call to fetch notifications

      console.log(response)

      // Check the response and update the state with the fetched notifications
      if (response && response.status === 200) {


        setProjects(response.data.projects)


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
    fetchStore();
    fetchProject();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>



        <MDBox mt={5} mb={3}>


          <MDBox pt={3} px={2} bgColor={darkMode ? "transparent" : "grey-100"}>
            <MDTypography variant="h6" fontWeight="medium">
              Store Information
            </MDTypography>
          </MDBox>
          <MDBox pt={1} pb={2} px={2} bgColor={darkMode ? "transparent" : "grey-100"}>
            <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>

              <MDBox width="100%" display="flex" flexDirection="column">
                <MDBox
                  display="flex"
                  justifyContent="space-between"
                  alignItems={{ xs: "flex-start", sm: "center" }}
                  flexDirection={{ xs: "column", sm: "row" }}
                  mb={2}
                >
                  <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
                    {name}
                  </MDTypography>

                  <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
                    <MDBox mr={1}>
                      {/* <MDButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;delete
              </MDButton> */}
                    </MDBox>
                    <MDButton variant="text" color={darkMode ? "white" : "dark"}>
                      <Icon>edit</Icon>&nbsp;edit
                    </MDButton>
                  </MDBox>
                </MDBox>

                <Table >
                  <TableBody sx={{ border: 'none' }}>
                    <TableRow>
                      <TableCell align="left" variant="head" >
                        {/* Name */}
                        店家名稱
                      </TableCell>
                      <TableCell align="left" >
                        {store.shop_name}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" variant="head" >
                        {/* Address */}
                        地址
                      </TableCell>
                      <TableCell align="left" >
                        {store.address}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" variant="head" >
                        {/* Brands */}
                        品牌
                      </TableCell>
                      <TableCell align="left" >

                        {store.brands}


                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" variant="head" >
                        {/* Owner */}
                        擁有者
                      </TableCell>
                      <TableCell align="left" >
                        {store.owner_name}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" variant="head" >
                        {/* Purchase Data */}
                        購買數據
                      </TableCell>
                      <TableCell align="left" >
                        {store.purchase_data}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="left" variant="head">
                        {/* Sales */}
                        銷售量
                      </TableCell>
                      <TableCell align="left" >
                        {store.sales}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" variant="head">
                        {/* Email */}
                        電子郵件
                      </TableCell>
                      <TableCell align="left" >
                        {store.email}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </MDBox>
            </MDBox>
          </MDBox>
        </MDBox>
      
        {userGroup != "WORKER" && (
          <div>
            <MDBox pt={2} px={2} lineHeight={1.25}>
            <MDTypography variant="h6" fontWeight="medium">
              {/* Projects */}
              專案
            </MDTypography>
            <MDBox mb={1}>
              <MDTypography variant="button" color="text">
                 {/* designs */}
                 設計
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDBox p={2}>
            <Grid container spacing={6}>
              {projects.map((project, index) => (
                <Grid key={index} item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    label={`專案 #${index + 1}`}
                    title={project.project_serial_no} // Replace with the field from your project data for the title
                    description={project.title} // Replace with the field from your project data for the description
                    action={{
                      type: 'internal',
                      route: `/project-management/project-profile/${project.id}`,
                      color: 'info',
                      // label: 'View Project',
                      label: '查看項目',
                    }}
                  />
                </Grid>
              ))}
            </Grid>

          </MDBox>
          </div>
        )}

      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default StoreProfile;
