
// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import Card from "@mui/material/Card";

import MDTypography from "components/MDTypography";
import Icon from "@mui/material/Icon";
// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import ProjectTasks from "./project-tasks";
// Billing page components

import { useMaterialUIController } from "context";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";


import {


    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,

} from '@mui/material';


function ProjectProfile() {

    const [project, setProject] = useState([]);
    const [store, setStore] = useState([]);
    const [createdby, setCreatedby] = useState([]);
    const token = localStorage.getItem("token");
    const [controller] = useMaterialUIController();
    const { darkMode } = controller;
    const userGroup = localStorage.getItem("user_group");
    let { project_id } = useParams();
    const apiBaseUrl = process.env.REACT_APP_STORE_BASE_URL;

    const fetchProject = async () => {

        try {

            const url = apiBaseUrl+`/api/projects/${project_id}`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            // Make an API call to fetch notifications

            console.log(response)

            // Check the response and update the state with the fetched notifications
            if (response && response.status === 200) {

                setProject(response.data)
                setStore(response.data.store)
                setCreatedby(response.data.created_by)

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
        fetchProject();
    }, []);

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox mt={8} width="80%">



                <MDBox pt={3} px={2} bgColor={darkMode ? "transparent" : "grey-100"}>
                    <MDTypography variant="h6" fontWeight="medium">
                        {/* Project Information */}
                        專案資訊
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
                                            {/* Title */}
                                            標題
                                        </TableCell>
                                        <TableCell align="left" >
                                            {project.title}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left" variant="head" >
                                            {/* Project Serial No */}
                                            項目編號
                                        </TableCell>
                                        <TableCell align="left" >
                                            {project.project_serial_no}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left" variant="head" >
                                            {/* Store */}
                                            店鋪
                                        </TableCell>
                                        <TableCell align="left" >
                                            <Link to={`/store-management/store-profile/${store.id}`}>
                                            <MDTypography component="a" href="#" variant="gradient" color="primary" fontWeight="medium">
                                                {store.shop_name}
                                                </MDTypography>
                                            </Link>

                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left" variant="head" >
                                            {/* Created Date: */}
                                            建立日期：
                                        </TableCell>
                                        <TableCell align="left" >
                                            {project.created_at}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left" variant="head" >
                                            {/* Created By */}
                                            由...製作
                                        </TableCell>
                                        <TableCell align="left" >
                                            {createdby.username}
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell align="left" variant="head">
                                            {/* Description: */}
                                            描述：
                                        </TableCell>
                                        <TableCell align="left" >
                                            {project.description}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>



                        </MDBox>
                    </MDBox>
                </MDBox>
                <br />

                {userGroup != "WORKER" && (
                    <div>
                        <MDTypography variant="h5" fontWeight="medium">
                            {/* Tasks Information */}
                            任務訊息
                        </MDTypography>
                        <ProjectTasks />
                    </div>
                )}




            </MDBox>



        
        </DashboardLayout>
    );
}

export default ProjectProfile;
