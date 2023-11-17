import { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; // Import the calendar icon
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material';

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDAlert from "components/MDAlert";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Dropdown from "examples/DropDowns";
import Icon from "@mui/material/Icon";

// Overview page components
import Header from "layouts/project-management/Header";



const AddProject = () => {
  const [isDemo, setIsDemo] = useState(false);
  const [notification, setNotification] = useState(false);
  const [project, setProject] = useState({
    name: "",
    type: "",
    main_project: "",
    description: "",


  });



  const [errors, setErrors] = useState({
    nameError: false,
    typeError: false,


  });

  const handleProjectTypeChange = (e) => {
    setProject({ ...project, projectType: e.target.value });
  };

  const changeTypeHandler = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'radio') {
      // Handle radio button change
      if (name === 'projectType') {
        // Update the store object with the selected project type
        setProject({ ...project, projectType: value });
      }
    } else {
      // Handle other input field changes
      setProject({ ...project, [name]: value });
    }
  };


  // const getprojectData = async () => {
  //   const response = await AuthService.getProfile();
  //   if (response.data.id == 1) {
  //     setIsDemo(process.env.REACT_APP_IS_DEMO === "true");
  //   }
  //   setproject((prevproject) => ({
  //     ...prevproject,
  //     ...response.data.attributes,

  //   }));
  // };



  // useEffect(() => {
  //   getprojectData();
  // }, []);

  useEffect(() => {
    if (notification === true) {
      setTimeout(() => {
        setNotification(false);
      }, 5000);
    }
  }, [notification]);

  const changeHandler = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // validation
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (project.name.trim().length === 0) {
      setErrors({ ...errors, nameError: true });
      return;
    }

    if (project.email.trim().length === 0 || !project.email.trim().match(mailFormat)) {
      setErrors({ ...errors, emailError: true });
      return;
    }



    let projectData = {
      data: {
        type: "profile",
        attributes: {
          name: project.name,
          type: project.type,
          main_project: project.main_project,
          description: project.description,

        },
      },
    };



    // call api for update
    // const response = await AuthService.updateProfile(JSON.stringify(projectData));

    // reset errors
    setErrors({
      nameError: false,
      emailError: false,
      ownerError: false,
    });

    setNotification(true);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header name={project.name}>
        {notification && (
          <MDAlert color="info" mt="20px">
            <MDTypography variant="body2" color="white">
              Your profile has been updated
            </MDTypography>
          </MDAlert>
        )}

        <MDBox height="100%" mt={1.5} lineHeight={1.5}>
          <MDTypography variant="h4" fontWeight="medium">
            Add New Project
          </MDTypography>
        </MDBox>

        <MDBox
          component="form"
          role="form"
          onSubmit={submitHandler}
          display="flex"
          flexDirection="column"
        >

          <MDBox
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            mr={2}
          >
            <MDTypography variant="body2" color="text" ml={1} fontWeight="regular">
              Name
            </MDTypography>
            <MDBox mb={2} width="50%">
              <MDInput
                type="name"
                fullWidth
                name="name"
                value={project.name}
                onChange={changeHandler}
                error={errors.nameError}
              />
              {errors.nameError && (
                <MDTypography variant="caption" color="error" fontWeight="light">
                  The name can not be null
                </MDTypography>
              )}
            </MDBox>

          </MDBox>
          <MDBox
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            mr={2}
          >
            <MDTypography variant="body2" color="text" ml={1} fontWeight="regular">
              Enter Description
            </MDTypography>
            <MDBox mb={2} width="50%">
              <MDInput
                type="text"
                fullWidth
                name="description"
                value={project.description}
                onChange={changeHandler}

              />

            </MDBox>
          </MDBox>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
            <MDTypography variant="body2" color="text" ml={2} fontWeight="regular">

            </MDTypography>

          </div>



          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <MDButton variant="gradient" color="info" type="submit">
              Save changes
            </MDButton>
          </div>
        </MDBox>

      </Header>

    </DashboardLayout>
  );
};

export default AddProject;
