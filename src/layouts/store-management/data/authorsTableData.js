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
      { Header: "store", accessor: "author", width: "45%", align: "left" },
      { Header: "grade", accessor: "function", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "created date", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: (
          <Link to="/store-management/store-profile">
            <Author component="a" href="/store-profile" image={team2} name="Euro Store" email="john@creative-tim.com" />
          </Link>
        ),
        function: <Job  description="B" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
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
        author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        function: <Job  description="A" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
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
        author: <Author image={team4} name="Laurent Perrier store" email="laurent@creative-tim.com" />,
        function: <Job  description="B" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
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
        author: <Author image={team3} name="Michael Levi Store" email="michael@creative-tim.com" />,
        function: <Job  description="B" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08
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
        author: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
        function: <Job  description="C" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
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
        author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
        function: <Job  description="B" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
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
