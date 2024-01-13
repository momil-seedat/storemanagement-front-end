




// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,

  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,

} from '@mui/material';


function TaskProfile() {
  const [task, setTask] = useState([]);
  const [project, setProject] = useState([]);
  const [assignee, setAssignee] = useState([]);
  const [taskAssignedTo, setTaskAssignedTo] = useState([]);
  const token = localStorage.getItem("token");
  const apiBaseUrl = process.env.REACT_APP_STORE_BASE_URL;
  let { task_id } = useParams();


  const fetchTasks = async () => {

    try {

      const url = apiBaseUrl+`/api/tasks/${task_id}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      // Make an API call to fetch notifications

      console.log(response)

      // Check the response and update the state with the fetched notifications
      if (response && response.status === 200) {
        setTask(response.data);
        setProject(response.data.project)
        setAssignee(response.data.assignee)
        setTaskAssignedTo(response.data.task_assigned_to)
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
    fetchTasks();
  }, []);

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


  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* DashboardNavbar component */}
      {/* Other components... */}
      <Box p={2} style={{ width: '60%' }}>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h4" fontWeight="bold">
              {task.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {task.task_serial_no}
            </Typography>
          </Box>
          <MDButton variant="text" color="dark">
            <Icon>edit</Icon>&nbsp;edit
          </MDButton>
        </Box>
        <Divider />
        <TableContainer style={{ width: '100%' }} sx={{ border: 'none' }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="left" variant="head" >
                  {/* Created By: */}
                  由...製作：
                </TableCell>
                <TableCell align="left" >
                  {assignee.username}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" variant="head" >
                  {/* Assigned To: */}
                  分配給：
                </TableCell>
                <TableCell align="left" >
                  {taskAssignedTo.username}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" variant="head" >
                  {/* Assigned Project Serial No: */}
                  分配的項目序號：
                </TableCell>
                <TableCell align="left" >
                  <Link to={`/project-management/project-profile/${project.id}`} color="red">
                  <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
                    {project.project_serial_no}
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
                  {formatDate(task.start_date)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" variant="head" >
                  {/* Status: */}
                  地位：
                </TableCell>
                <TableCell align="left" >
                  {task.status}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" variant="head" >
                  {/* Submission: */}
                  提交：
                </TableCell>
                <TableCell align="left" >
                  <Link to={`/task-submission/view-submission/${task_id}`}>
                    <MDTypography component="a" href="#" variant="caption" color="success" fontWeight="medium">
                      {/* View Submission */}
                      查看提交內容
                    </MDTypography>
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" variant="head">
                  {/* Description: */}
                  描述：
                </TableCell>
                <TableCell align="left" >
                  {task.description}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        {/* Description */}


      </Box>
      {/* Footer component */}
    </DashboardLayout>
  );
}

export default TaskProfile;