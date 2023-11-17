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

  return {
    columns: [
      { Header: "project", accessor: "project", width: "45%", align: "left" },
      { Header: "type", accessor: "type", align: "left" },
      { Header: "main project", accessor: "main_project", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "created date", accessor: "created_date", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        project: (
          <Link to="/project-management/project-profile">
            <Author component="a" href="/project-profile" image={team2} name="Euro Store" email="john@creative-tim.com" />
          </Link>
        ),
        type: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           sub-project
          </MDTypography>
        ),
        main_project: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           project 1
          </MDTypography>
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
          <MDBox ml="auto" lineHeight={0} color= "dark">
          <Tooltip title="Edit Card" placement="top">
            <Icon sx={{ cursor: "pointer" }} fontSize="small">
              edit
            </Icon>
          </Tooltip>
        </MDBox>
        ),
      },
      {
        project: (
          <Link to="/project-management/project-profile">
            <Author component="a" href="/project-profile" image={team2} name="Euro Store" email="john@creative-tim.com" />
          </Link>
        ),
        type: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           sub-project
          </MDTypography>
        ),
        main_project: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           project 1
          </MDTypography>
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
          <MDBox ml="auto" lineHeight={0} color= "dark">
          <Tooltip title="Edit Card" placement="top">
            <Icon sx={{ cursor: "pointer" }} fontSize="small">
              edit
            </Icon>
          </Tooltip>
        </MDBox>
        ),
      },
      {
        project: (
          <Link to="/project-management/project-profile">
            <Author component="a" href="/project-profile" image={team2} name="Euro Store" email="john@creative-tim.com" />
          </Link>
        ),
        type: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           sub-project
          </MDTypography>
        ),
        main_project: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           project 1
          </MDTypography>
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
          <MDBox ml="auto" lineHeight={0} color= "dark">
          <Tooltip title="Edit Card" placement="top">
            <Icon sx={{ cursor: "pointer" }} fontSize="small">
              edit
            </Icon>
          </Tooltip>
        </MDBox>
        ),
      },
      {
        project: (
          <Link to="/project-management/project-profile">
            <Author component="a" href="/project-profile" image={team2} name="Euro Store" email="john@creative-tim.com" />
          </Link>
        ),
        type: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           sub-project
          </MDTypography>
        ),
        main_project: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           project 1
          </MDTypography>
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
          <MDBox ml="auto" lineHeight={0} color= "dark">
          <Tooltip title="Edit Card" placement="top">
            <Icon sx={{ cursor: "pointer" }} fontSize="small">
              edit
            </Icon>
          </Tooltip>
        </MDBox>
        ),
      },
    ],
  };
}
