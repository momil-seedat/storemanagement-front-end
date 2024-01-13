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
import MDProgress from "components/MDProgress";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import { Link, useNavigate } from 'react-router-dom';

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import axios from 'axios';
import { useState, useEffect} from "react";
export default function data() {

  
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem("token");
  const userId=localStorage.getItem("user");
  const userGroup=localStorage.getItem("user_group");
  const apiBaseUrl = process.env.REACT_APP_STORE_BASE_URL;
  const fetchTasks = async () => {
    let taskData = {};

    if (userGroup === 'WORKER') {
      taskData = {
        ...taskData,
        assigned_to: userId,
      };
    } else {
      taskData = {
        ...taskData,
        assignee: userId,
       
      };
    }
    try {

      const response = await axios.post(apiBaseUrl+'/tasks/user/', taskData, {
        headers: {
          Authorization: `Token ${token}`,  // Replace with your authentication token
        },
      });
      // Make an API call to fetch notifications
     
      console.log(response)

      // Check the response and update the state with the fetched notifications
      if (response && response.status === 200) {
        setTasks(response.data.tasks);
      } else {
        console.error('Error:', response.data);
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  
  const fetchAdminTasks = async () => {
    

    
    try {

      const response = await axios.get(apiBaseUrl+'/api/tasks/', {
        headers: {
          Authorization: `Token ${token}`,  // Replace with your authentication token
        },
      });
      // Make an API call to fetch notifications
     
      console.log(response)

      // Check the response and update the state with the fetched notifications
      if (response && response.status === 200) {
        setTasks(response.data);
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
    if (userGroup === 'ADMIN'){
      fetchAdminTasks();
    }
    else{
    fetchTasks();
    }
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
  const navigate=useNavigate();
  const handleEditCard = () => {
    // Your logic for handling the edit card click event
    console.log("Edit card clicked");
    navigate('/task-mangement/view-submission')
    // Add your custom logic here
  };
  
  function formatDate(utcTimestamp) {
    const date = new Date(utcTimestamp);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Months are zero-based, so add 1
    const year = date.getUTCFullYear();

    const formattedDate = `${day.toString().padStart(2, '0')}-${month
      .toString()
      .padStart(2, '0')}-${year}`;

    return formattedDate;
  }
  
  return {
    columns: [
      { Header: "序號", accessor: "task_serial", align: "left" },
      { Header: "專案", accessor: "project", align: "left" },
      { Header: "分配給", accessor: "assigned_to", align: "left" },
     
      { Header: "地位", accessor: "status", align: "center" },
      { Header: "建立日期", accessor: "created_date", align: "center" },
      { Header: "行動", accessor: "action", align: "center" },
    ],

    rows:  tasks.map((task, index) => ({
      task_serial: (
        <Link to={`/task-mangement/task_profile/${task.task_id}`}>
        <Author component="a" name={userGroup === 'ADMIN' ?task.task_serial_no:task.task_serial} />
      </Link>
         
        ),
        project: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {userGroup === 'ADMIN' ? task.project.project_serial_no : task.project_serial_no}
          </MDTypography>
        ),
        assigned_to: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {userGroup === 'ADMIN' ?task.task_assigned_to.username:task.assigned_to}
          </MDTypography>
        ),
        
  
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {task.status}
       </MDTypography>
          // <MDBox ml={-1}>
          //   <MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />
          // </MDBox>
        ),
        created_date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
             {userGroup === 'ADMIN' ?formatDate(task.start_date):task.created_at}
          </MDTypography>
        ),
        action: (
//           <MDBox ml="auto" lineHeight={0} color="dark" onClick={handleEditCard}>
//   <Tooltip title="Edit Card" placement="top">
//     <Icon sx={{ cursor: "pointer" }} fontSize="small">
//       view
//     </Icon>
//   </Tooltip>
// </MDBox>
<div>
      {userGroup === 'WORKER' && task.status != "APPROVED" ? (
         <Link to={`/task-submission/add-task-submission/${task.task_id}`}>
         <MDTypography component="a" href="#" variant="caption" color="success" fontWeight="medium">
          {/* Add Submission */}
          添加提交
        </MDTypography>
      </Link>
      
      ) : (
        <Link to={`/task-submission/view-submission/${task.task_id}`}>
           <MDTypography component="a" href="#" variant="caption" color="success" fontWeight="medium">
            {/* View Submission */}
            查看提交內容
          </MDTypography>
        </Link>
      )}
    </div>

        ),
      }))
  };
}
