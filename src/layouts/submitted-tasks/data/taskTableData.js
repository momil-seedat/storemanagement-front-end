import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDProgress from "components/MDProgress";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import { Link } from 'react-router-dom';

// Images
import team2 from "assets/images/team-2.jpg";

import MDButton from "components/MDButton";
import { useEffect, useState } from "react";
import { useMaterialUIController } from "context";
// import { setTaskSubmission } from "context";


// const GotoEditFormSubmission=(dispatch)=>{
//   setTaskSubmission(dispatch,true)
// }
// const GotoNewFormSubmission=(dispatch)=>{
//   setTaskSubmission(dispatch,false)
// }
export default function data() {
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
  // ...

const actionColumn = (row) => (
  <div>
    <MDButton onClick={() => handleDeleteRow(row)} ml="auto" lineHeight={0} color="error">
      <Tooltip title="Delete Row" placement="top">
        <Icon sx={{ cursor: "pointer" }}>delete</Icon>
      </Tooltip>
    </MDButton>
  
  </div>
);

// ...
const [controller, dispatch] = useMaterialUIController();

const [rows, setRows] = useState([]);
useEffect(() => {
  setRows( [
    {
      project: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
         project 1
        </MDTypography>
      ),
      assigned_to: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
         Richard Sen
        </MDTypography>
      ),
      name: (
        <Link to="/project-management/project-profile">
          <Author component="a" href="/project-profile" image={team2} name="Euro Store tables" />
        </Link>
      ),
      
      progress: (
        <MDBox width="8rem" textAlign="left">
          <MDProgress value={0} color="success" variant="gradient" label={false} />
        </MDBox>
      ),
      
      status: (
        <MDBox ml={-1}>
          <MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />
        </MDBox>
      ),
      created_date: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          23/04/18
        </MDTypography>
      ),
      action: (
        <MDButton  component={Link} to="/task-submission" ml="auto" lineHeight={0} color= "dark"  
        onClick={() => {
          GotoEditFormSubmission(dispatch)
        }}
        >
        <Tooltip title="Edit Card" placement="top">
          <Icon sx={{ cursor: "pointer" }} fontSize="small">
            edit
          </Icon>
        </Tooltip>
      </MDButton>
      ),
      delete: (
        <MDButton  component={Link} to="/task-submission" ml="auto" lineHeight={0} color= "info" 
        onClick={() => {
          GotoNewFormSubmission(dispatch)
        }}
        >
          <Tooltip title="Submit Task" placement="top">
            <Icon sx={{ cursor: "pointer" }}>send</Icon>
          </Tooltip>
        </MDButton>
      )
      
    },
    {
      project: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
         project 2
        </MDTypography>
      ),
      assigned_to: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
         Richard Ullu
        </MDTypography>
      ),
      name: (
        <Link to="/project-management/project-profile">
          <Author component="a" href="/project-profile" image={team2} name="Euro Store" />
        </Link>
      ),
      
      progress: (
        <MDBox width="8rem" textAlign="left">
          <MDProgress value={0} color="success" variant="gradient" label={false} />
        </MDBox>
      ),
      
      status: (
        <MDBox ml={-1}>
          <MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />
        </MDBox>
      ),
      created_date: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          23/04/18
        </MDTypography>
      ),
      action: (
        <MDButton  component={Link} to="/task-submission" ml="auto" lineHeight={0} color= "dark"  
        onClick={() => {
          GotoEditFormSubmission(dispatch)
        }}
        >
        <Tooltip title="Edit Card" placement="top">
          <Icon sx={{ cursor: "pointer" }} fontSize="small">
            edit
          </Icon>
        </Tooltip>
      </MDButton>
      ),
      
      delete: (
        <MDButton  component={Link} to="/task-submission" ml="auto" lineHeight={0} color= "info" 
        onClick={() => {
          GotoNewFormSubmission(dispatch)
        }}
        >
          <Tooltip title="Submit Task" placement="top">
            <Icon sx={{ cursor: "pointer" }}>send</Icon>
          </Tooltip>
        </MDButton>
      )
    },
    {
      project: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
         project 3
        </MDTypography>
      ),
      assigned_to: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
         Richard Changar
        </MDTypography>
      ),
      name: (
        <Link to="/project-management/project-profile">
          <Author component="a" href="/project-profile" image={team2} name="Saint Euro measurements" />
        </Link>
      ),
      
      progress: (
        <MDBox width="8rem" textAlign="left">
          <MDProgress value={90} color="success" variant="gradient" label={false} />
        </MDBox>
      ),
      
      status: (
        <MDBox ml={-1}>
          <MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />
        </MDBox>
      ),
      created_date: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          23/04/18
        </MDTypography>
      ),
      action: (
        <MDButton  component={Link} to="/task-submission" ml="auto" lineHeight={0} color= "dark"  
        onClick={() => {
          GotoEditFormSubmission(dispatch)
        }}
        >
        <Tooltip title="Edit Card" placement="top">
          <Icon sx={{ cursor: "pointer" }} fontSize="small">
            edit
          </Icon>
        </Tooltip>
      </MDButton>
      ),
      
      delete: (
        <MDButton  component={Link} to="/task-submission" ml="auto" lineHeight={0} color= "info" 
        onClick={() => {
          GotoNewFormSubmission(dispatch)
        }}
        >
          <Tooltip title="Submit Task" placement="top">
            <Icon sx={{ cursor: "pointer" }}>send</Icon>
          </Tooltip>
        </MDButton>
      )
    },
    {
      project: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
         project 4
        </MDTypography>
      ),
      assigned_to: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
         Richard Shoda
        </MDTypography>
      ),
      name: (
        <Link to="/project-management/project-profile">
          <Author component="a" href="/project-profile" image={team2} name="Euro Store shelves design"  />
        </Link>
      ),
      
      progress: (
        <MDBox width="8rem" textAlign="left">
          <MDProgress value={0} color="success" variant="gradient" label={false} />
        </MDBox>
      ),
      
      status: (
        <MDBox ml={-1}>
          <MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />
        </MDBox>
      ),
      created_date: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          23/04/18
        </MDTypography>
      ),
      action: (
        <MDButton  component={Link} to="/task-submission" ml="auto" lineHeight={0} color= "dark"  
        onClick={() => {
          GotoEditFormSubmission(dispatch)
        }}
        >
        <Tooltip title="Edit Card" placement="top">
          <Icon sx={{ cursor: "pointer" }} fontSize="small">
            edit
          </Icon>
        </Tooltip>
      </MDButton>
      ),
      delete: (
        <MDButton  component={Link} to="/task-submission" ml="auto" lineHeight={0} color= "info" 
        onClick={() => {
          GotoNewFormSubmission(dispatch)
        }}
        >
          <Tooltip title="Submit Task" placement="top">
            <Icon sx={{ cursor: "pointer" }}>send</Icon>
          </Tooltip>
        </MDButton>
      )
   
    },
  ],)
  // and it won't have any dependencies.
}, []); 

const handleDeleteRow = (rowToDelete) => {
  // Assuming that your table data is stored in a state variable called 'rows'
  const updatedRows = [];
  
  for (let i = 0; i < rows.length; i++) {
    console.log(rows[i].assigned_to.props.children)
    // Assuming that row.assigned_to.props.childrens contains a unique identifier
    if (rows[i].assigned_to.props.children !== rowToDelete) {
      updatedRows.push(rows[i]);
    }
  }

  console.log(updatedRows.length);
  setRows(updatedRows);
};





  return {
    columns: [
      { Header: "task", accessor: "name", align: "left" },
      { Header: "project", accessor: "project", align: "left" },
      { Header: "submitted by", accessor: "assigned_to", align: "left" },
      { Header: "progress", accessor: "progress", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "created date", accessor: "created_date", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
      { Header: "delete", accessor: "delete", align: "center" },

    ],

    rows
  };
}
