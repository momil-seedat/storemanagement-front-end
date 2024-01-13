import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect, useContext } from "react";
// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const [projects, setProjects] = useState([]);
  const [store, setStore] = useState([]);
  const token = localStorage.getItem("token");
  const userId=localStorage.getItem("user")
  const apiBaseUrl = process.env.REACT_APP_STORE_BASE_URL;

  const fetchProjects = async () => {
  
      let projectData ={
        user_id: userId
      };
    try {
      // Make an API call to fetch notifications
      const response = await axios.post(apiBaseUrl+'/assign/permission', projectData,{
        headers: {
          Authorization: `Token ${token}`,  // Replace with your authentication token
        },
      });
      console.log(response)

      // Check the response and update the state with the fetched notifications
      if (response && response.status === 200) {
        setProjects(response.data.assigned_projects);
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
    fetchProjects();
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
      { Header: "項目序號", accessor: "project", width: "45%", align: "left" },
      { Header: "店鋪", accessor: "store", align: "left" },
      { Header: "由...製作", accessor: "created_by", align: "left" },
      { Header: "標題", accessor: "title", align: "left" },
   
      { Header: "建立日期", accessor: "created_date", align: "center" },
      // { Header: "action", accessor: "action", align: "center" },
    ],

    rows :  projects.map((project, index) => ({
      project: (
        <Link to={`/project-management/project-profile/${project.project_id}`} key={index}>
          <Author component="a" href="/project-profile" name= {project.project_serial_no}  />            
        </Link>
      ),
      store: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" key={index}>
      {project.store}
        </MDTypography>
      ),
      
      created_by: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" key={index}>
      {project.created_by}
        </MDTypography>
      ),
      title: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" key={index}>
          {project.title}
        </MDTypography>
      ),
    
      created_date: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" key={index}>
          {project.created_at}
        </MDTypography>
      ),
      // action: (
      //   <MDBox ml="auto" lineHeight={0} color="dark" key={index}>
      //     <Tooltip title="Edit Card" placement="top">
      //       <Icon sx={{ cursor: "pointer" }} fontSize="small">
      //         edit
      //       </Icon>
      //     </Tooltip>
      //   </MDBox>
      // ),
    }))

    
    // 'rows' is now an array of objects that can be used within your application.
    
  }
}