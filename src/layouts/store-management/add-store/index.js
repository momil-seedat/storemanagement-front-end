import { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; // Import the calendar icon

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDAlert from "components/MDAlert";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Dropdown from "examples/DropDowns/ProjectDropDown";
import Footer from "examples/Footer";
import axios from 'axios';
import Icon from "@mui/material/Icon";

// Overview page components
import Header from "layouts/store-management/Header";



const AddStore = () => {
  const [isDemo, setIsDemo] = useState(false);
  const [notification, setNotification] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showContacts, setShowContacts] = useState(false);
  const apiBaseUrl = process.env.REACT_APP_STORE_BASE_URL;
  const token = localStorage.getItem("token");
  const [store, setStore] = useState({
    name: "",
    email: "",
    owner_name: "",
    installation_time: "",
    grade: "",
    channel: "",
    description: "",
    address: ""

  });

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateTimeChange = (date) => {
    // Update the state with the selected datetime
    setSelectedDate(date);
  };

  const [errors, setErrors] = useState({
    nameError: false,
    emailError: false,
    ownerError: false,
    installation_time: false,

  });
  const resetForm = () => {

    setStore(null);
    setContacts(null);
    setErrors({
      titleError: false,
    });
    setSuccessMessage('');
    setErrorMessage('');
  };

  // const getStoreData = async () => {
  //   const response = await AuthService.getProfile();
  //   if (response.data.id == 1) {
  //     setIsDemo(process.env.REACT_APP_IS_DEMO === "true");
  //   }
  //   setStore((prevstore) => ({
  //     ...prevstore,
  //     ...response.data.attributes,

  //   }));
  // };

  const [contacts, setContacts] = useState([
    { name: '', email: '', phone: '' },
  ]);

  const handleAddContact = () => {
    const newContact = { name: '', email: '', phone: '' };
    setContacts([...contacts, newContact]);
    setShowContacts(true);

  };

  const handleRemoveContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  const handleContactChange = (index, field, value) => {
    const updatedContacts = [...contacts];
    updatedContacts[index][field] = value;
    setContacts(updatedContacts);
  };

  // useEffect(() => {
  //   getStoreData();
  // }, []);

  useEffect(() => {
    if (notification === true) {
      setTimeout(() => {
        setNotification(false);
      }, 5000);
    }
  }, [notification]);

  const changeHandler = (e) => {
    setStore({
      ...store,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // validation
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (store.name.trim().length === 0) {
      setErrors({ ...errors, nameError: true });
      return;
    }

    // if (store.email.trim().length === 0 || !store.email.trim().match(mailFormat)) {
    //   setErrors({ ...errors, emailError: true });
    //   return;
    // }



    let storeData = {

      shop_name: store.name,
      email: store.email,
      owner_name: store.owner_name,
      installation_time: store.installation_time,
      sales: store.sales,
      contacts: contacts,
      address: store.address,
      description: store.description

    }

    console.log(storeData);
    const response = await axios.post(apiBaseUrl + '/api/store/', storeData, {
      headers: {
        Authorization: `Token ${token}`,  // Replace with your authentication token
      },
    });
    // call api for update

    console.log('Store submitted successfully:', response.data);

    if (response && response.status === 200) {
      resetForm();
      setSuccessMessage('Store added successfully');
      // Reset form values upon successful submission
    } else {
      setErrorMessage('Failed to add store'); // Display error message if response status is not 200
    }

    // call api for update
    // const response = await AuthService.updateProfile(JSON.stringify(storeData));

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
      <Header name={store.name}>
        {notification && (
          <MDAlert color="info" mt="20px">
            <MDTypography variant="body2" color="white">
              {/* store has added*/}
              商店已新增
            </MDTypography>
          </MDAlert>
        )}

        <MDBox height="100%" mt={1.5} lineHeight={1.5}>
          <MDTypography variant="h4" fontWeight="medium">
            {/* Add New Store */}
            新增商店
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
              {/* Name */}
              店家名稱
            </MDTypography>
            <MDBox mb={2} width="50%">
              <MDInput
                type="name"
                fullWidth
                name="name"
                value={store.name}
                onChange={changeHandler}
                error={errors.nameError}
              />
              {errors.nameError && (
                <MDTypography variant="caption" color="error" fontWeight="light">
                  {/* The name can not be null */}

                  商店不能為空
                </MDTypography>
              )}
            </MDBox>

          </MDBox>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
            <MDTypography variant="body2" color="text" ml={2} fontWeight="regular">
              {/* Enter Sales */}
              輸入銷售額
            </MDTypography>
            <MDBox mb={2} width="50%">
              <MDInput
                type="name"
                name="sales"
                value={store.sales}
                onChange={changeHandler}

              />

            </MDBox>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
            <MDTypography variant="body2" color="text" ml={2} fontWeight="regular">
              {/* Channel */}

              頻道
            </MDTypography>
            <MDBox mb={2} width="50%">
              <MDInput
                type="name"
                fullWidth
                name="channel"
                value={store.channel}
                onChange={changeHandler}

              />

            </MDBox>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
            <MDTypography variant="body2" color="text" ml={2} fontWeight="regular">
              {/* Enter Grade */}
              輸入年級
            </MDTypography>
            <MDBox mb={2} width="50%">
              <MDInput
                type="name"
                fullWidth
                name="grade"
                value={store.grade}
                onChange={changeHandler}

              />

            </MDBox>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
            <MDTypography variant="body2" color="text" ml={2} fontWeight="regular">
              {/* Enter Address */}
              輸入地址
            </MDTypography>
            <MDBox mb={2} width="50%">
              <MDInput
                type="name"
                fullWidth
                name="address"
                value={store.address}
                onChange={changeHandler}

              />

            </MDBox>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
            <MDTypography variant="body2" color="text" ml={2} fontWeight="regular">
              {/* Enter Description */}
              輸入描述
            </MDTypography>
            <MDBox mb={2} width="50%">
              <MDInput
                type="name"
                fullWidth
                name="description"
                value={store.description}
                onChange={changeHandler}

              />

            </MDBox>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
            <MDTypography variant="body2" color="text" ml={2} fontWeight="regular">
              {/* Owner Name */}
              業主姓名
            </MDTypography>
            <MDBox mb={2} width="50%">
              <MDInput
                type="name"
                fullWidth
                name="owner_name"
                value={store.owner_name}
                onChange={changeHandler}
                error={errors.storeError}
              />
              {errors.nameError && (
                <MDTypography variant="caption" color="error" fontWeight="light">
                  {/* The Owner name can not be null */}
                  所有者名稱不能為空
                </MDTypography>
              )}
            </MDBox>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
            <MDTypography variant="body2" color="text" ml={2} fontWeight="regular">
              {/* Installation Date Time */}
              安裝日期時間
            </MDTypography>
            <MDBox mb={2} width="100%" style={{ display: 'flex' }}>
              <DatePicker
                selected={selectedDate} // Pass your selected date value here
                onChange={handleDateTimeChange} // Define a function to handle date changes
                dateFormat="yyyy-MM-dd HH:mm:ss" // Define the date format
                placeholderText="Select a Installation Time"
                fullWidth
              />
              <CalendarTodayIcon style={{ marginLeft: '8px', alignSelf: 'center', color: '#888' }} /> {/* Calendar Icon */}
            </MDBox>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
            <Dropdown selectedValue="store1" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
            <MDTypography variant="body2" color="text" ml={1} fontWeight="regular">
              {/* Email */}
              電子郵件
            </MDTypography>
            <MDBox mb={1} width="50%">
              <MDInput
                type="email"
                fullWidth
                name="email"
                value={store.email}
                onChange={changeHandler}
                error={errors.emailError}
                disabled={isDemo}
              />
              {errors.emailError && (
                <MDTypography variant="caption" color="error" fontWeight="light">
                  {/* The email must be valid */}
                  電子郵件必須有效
                </MDTypography>
              )}
            </MDBox>
           
          </div>

          <div>
            <h4>
              {/* Add Contacts */}
              新增聯絡人
              </h4>
            {showContacts && contacts.map((contact, index) => (
              <MDBox key={index} mb={3} display="flex">
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <MDTypography variant="body2" color="text" ml={1} fontWeight="regular">
                    {/* Contact Name */}
                    聯絡人姓名
                  </MDTypography>
                  <MDBox mb={2} width="100%">
                    <MDInput
                      id={`contactName${index}`}
                      type="text"
                      name="contact_name"
                      value={contact.name}
                      onChange={(e) => handleContactChange(index, 'name', e.target.value)}
                      error={errors.nameError}
                    />
                  </MDBox>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <MDTypography variant="body2" color="text" ml={1} fontWeight="regular">
                    {/* Email */}
                    電子郵件
                  </MDTypography>
                  <MDBox mb={2} width="100%">
                    <MDInput
                      id={`contactEmail${index}`}
                      type="email"
                      name="contact_email"
                      value={contact.email}
                      onChange={(e) => handleContactChange(index, 'email', e.target.value)}
                      error={errors.emailError}
                    />
                  </MDBox>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <MDTypography variant="body2" color="text" ml={1} fontWeight="regular">
                    {/* Phone */}
                    電話
                  </MDTypography>
                  <MDBox mb={2} width="100%">
                    <MDInput
                      id={`contactPhone${index}`}
                      type="tel"
                      name="contact_phone"
                      value={contact.phone}
                      onChange={(e) => handleContactChange(index, 'phone', e.target.value)}
                      error={errors.phoneError}
                    />
                  </MDBox>
                </div>
                <MDButton variant="text" color="error" type="button" onClick={handleRemoveContact}>
                  <Icon>delete</Icon>&nbsp;刪除
                  {/* delete */}
                </MDButton>

              </MDBox>
            ))}



            <MDButton variant="gradient" color="dark" size="small" type="button" onClick={handleAddContact}>
              {/* Add Contact */}
              增加聯繫人
            </MDButton>

            {/* ...rest of your component */}
          </div>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <MDButton variant="gradient" color="info" type="submit" onClick={submitHandler}>
              {/* Save changes */}
              儲存變更
            </MDButton>
          </div>
        </MDBox>

      </Header>

    </DashboardLayout>
  );
};

export default AddStore;
