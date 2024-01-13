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
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import { Link } from 'react-router-dom';
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/project-management/data/projectTableData";

function Projects() {
  const { columns, rows } = authorsTableData();
  const userGroup=localStorage.getItem("user_group");
  
 
  return (
    <DashboardLayout>
      <DashboardNavbar />
    
      <div>
      {userGroup != "WORKER" && userGroup != "CLIENT" && (
        <MDButton component={Link} to="/project-management/add-project" variant="gradient" color="dark">
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;建立新項目
        </MDButton>
      )}
      </div>
    
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          
          <Grid item xs={12}>
            <Card>
          
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
       
        </Grid>
      </MDBox>
      
    </DashboardLayout>
  );
}

export default Projects;
