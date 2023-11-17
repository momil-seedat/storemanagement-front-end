
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
import authorsTableData from "layouts/task-management/data/taskTableData";

function TaskProject() {
  const { columns, rows } = authorsTableData();
 
  return (
    
    <DashboardLayout>

      <DashboardNavbar />
    
      <MDButton  component={Link} to="/task-management/add-task" variant="gradient" color="dark">
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;add new task
        </MDButton>
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

export default TaskProject;
