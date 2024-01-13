import { useState, useEffect } from "react";
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDAlert from "components/MDAlert";
import axios from 'axios';
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ProjectDropDown from "examples/DropDowns/ProjectDropDown";

import UsersDropDown from "examples/DropDowns/UsersDropDown";
// Overview page components
import Header from "layouts/project-management/Header";
import { useNavigate } from "react-router-dom";



const AssignPermission = () => {

    const [notification, setNotification] = useState(false);
    const [selectedProject, setSelectedProject] = useState('');
    const [selectedUser, setSelectedUsers] = useState('');
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user")
    const apiBaseUrl = process.env.REACT_APP_STORE_BASE_URL;
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();



    const handleDropDownSelect = selectedValue => {
        setErrorMessage("");
        setSelectedProject(selectedValue);
    };

    const handleUserDropDownSelect = selectedValue => {
        setErrorMessage("");
        setSelectedUsers(selectedValue);
    };

    const [errors, setErrors] = useState({
        nameError: false,



    });


    const resetForm = () => {
        setSelectedStore("");
        setProject({
            name: "",
            description: "",
        });
        setErrors({
            nameError: false,
        });
        setSuccessMessage('');
        setErrorMessage('');
    };


    useEffect(() => {
        if (notification === true) {
            setTimeout(() => {
                setNotification(false);
               // navigate('/task-management')

            }, 5000);

        }
    }, [notification]);


    const submitHandler = async (e) => {
        console.log("hi");
        console.log(selectedProject);
        console.log(selectedUser);
        console.log(userId)

        setErrorMessage("");
        e.preventDefault();

        if (!selectedUser) {
            setErrorMessage('Please select a user.'); // Set error if user hasn't been selected
        }
        else if (!selectedProject) {
            setErrorMessage('Please select a project.'); // Set error if user hasn't been selected
        }

        else {
            try {

                let assignData = {
                    project: selectedProject,
                    user: selectedUser,
                    assignee: userId,

                };
                console.log(assignData);

                const response = await axios.post(apiBaseUrl+'/api/assign/permission/', assignData, {
                    headers: {
                        Authorization: `Token ${token}`,  // Replace with your authentication token
                    },
                });
                // call api for update

                console.log('Task submitted successfully:', response.data);

                if (response && response.status === 200) {
                    setSuccessMessage('權限分配成功'); // Permissions assigned successfully
                    resetForm(); // Reset form values upon successful submission
                } else {
                    setErrorMessage('分配權限失敗'); // Failed to assign permission . Display error
                }

            } catch (error) {
                setErrorMessage('分配權限失敗');
                // Handle error submitting project
            }

        }
        // call api for update
        // const response = await AuthService.updateProfile(JSON.stringify(projectData));

        // reset errors
        setErrors({
            nameError: false,

        });

        setNotification(true);
    };

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox mb={2} />
            <Header name="permission">
                {notification && successMessage &&(
                    <MDAlert color="success" mt="20px">
                        <MDTypography variant="body2" color="white">
                        哇哦！您的權限已新增成功
                          { /* Woho! Your Permission has been added Successfully */}
                        </MDTypography>
                    </MDAlert>
                )}
                {errorMessage && (
                    <MDAlert color="error" mt="20px">
                        <MDTypography variant="body2" color="red">
                            {errorMessage}
                        </MDTypography>
                    </MDAlert>
                )}

                <MDBox height="100%" mt={1.5}  mb={2} lineHeight={1.5}>
                    <MDTypography variant="h4" fontWeight="medium">
                    分配權限 {/* add new permission */}
                    </MDTypography>
                </MDBox>

                <MDBox
                    component="form"
                    role="form"
                    onSubmit={submitHandler}
                    display="flex"
                    flexDirection="column"
                >
                    <ProjectDropDown onSelectChange={handleDropDownSelect} ></ProjectDropDown>
                    <br />

                    <UsersDropDown onSelectChange={handleUserDropDownSelect}></UsersDropDown>

                    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                        <MDTypography variant="body2" color="text" ml={2} fontWeight="regular">

                        </MDTypography>

                    </div>


                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <MDButton variant="gradient" color="info" type="submit">
                        保存更改 
                        </MDButton>
                        {/* assign permission */}
                    </div>
                </MDBox>

            </Header>

        </DashboardLayout>
    );
};

export default AssignPermission;
