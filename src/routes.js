
/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav  .

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

import AddUser from "layouts/user-profile";
import UserManagement from "layouts/user-management";
import UserProfile from "layouts/user-management/user-profile";
import StoreManagement from "layouts/store-management";
import ProjectManagement from "layouts/project-management";
import TaskManagement from "layouts/task-management";
import TaskSubmission from "layouts/task-submission";
import SubmittedTasks from "layouts/submitted-tasks";
import ViewTaskSubmissionPopup from "layouts/views-task";
import ClientVIew from "layouts/client";

import StoreProfile from "layouts/store-management/store-profile";
import AddStore from "layouts/store-management/add-store";
import AddProject from "layouts/project-management/add-project";
import AddTask from "layouts/task-management/add-task";
import Login from "auth/login";
import Register from "auth/register";
import ForgotPassword from "auth/forgot-password";
import ResetPassword from "auth/reset-password";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "examples",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  // {
  //   type: "collapse",
  //   name: "Project Management",
  //   key: "tables",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/tables",
  //   component: <Tables />,
  // },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/billing",
  //   component: <Billing />,
  // },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  // {
  //   type: "collapse",
  //   name: "Profile",
  //   key: "profile",
  //   icon: <Icon fontSize="small">person</Icon>,
  //   route: "/profile",
  //   component: <Profile />,
  // },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    
    name: "Add User",
    key: "add-user",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/user-profile",
    component: <AddUser />,
   
  },
  {
    type: "examples",
    name: "User Profile",
    key: "user-profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/user-management/user-profile",
    component: <UserProfile />,
   
  },
  {
    type: "examples",
    name: "Task ",
    key: "view_task",
    icon: <Icon fontSize="small">task</Icon>,
    route: "/task-management",
    component: <TaskManagement/>,
   
  },
  {
    type: "examples",
    name: "Submitted Tasks",
    key: "submitted-task",
    icon: <Icon fontSize="small">task</Icon>,
    route: "/submitted-tasks",
    component: <SubmittedTasks />,
  },
  {
    type: "examples",
    name: "Task Submission",
    key: "task-submission",
    icon: <Icon fontSize="small">list</Icon>,
    route: "/task-submission",
    component: <TaskSubmission />,
  },
  ,
  {
    type: "examples",
    name: "User Management",
    key: "user-management",
    icon: <Icon fontSize="small">list</Icon>,
    route: "/user-management",
    component: <UserManagement />,
  },
  {
    type: "examples",
    name: "Store Management",
    key: "view_store",
    icon: <Icon fontSize="small">list</Icon>,
    route: "/store-management",
    component: <StoreManagement/>,
  },
  {
    type: "examples",
    name: "Project Management",
    key: "project-management",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/project-management",
    component: <ProjectManagement />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "auth",
    name: "Login",
    key: "login",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/auth/login",
    component: <Login />,
  },
  {
    type: "auth",
    name: "Register",
    key: "register",
    icon: <Icon fontSize="small">reigster</Icon>,
    route: "/auth/register",
    component: <Register />,
  },
  {
    type: "auth",
    name: "Forgot Password",
    key: "forgot-password",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/auth/forgot-password",
    component: <ForgotPassword />,
  },
  {
    type: "auth",
    name: "Reset Password",
    key: "reset-password",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/auth/reset-password",
    component: <ResetPassword />,
  },
  {
   
    name: "store-profile",
    key: "store-profile",
    icon: <Icon fontSize="small">Store Profile</Icon>,
    route: "/store-management/store-profile",
    component: <StoreProfile />,
  },
  {
   
    name: "add-store",
    key: "add-store",
    icon: <Icon fontSize="small">Add Store</Icon>,
    route: "/store-management/add-store",
    component: <AddStore />,
  },
  {
   
    name: "view-task-popup",
    key: "view-task-popup",
    route: "/task-mangement/view-submission",
    component: <ViewTaskSubmissionPopup/>,
  },
  {
   
    name: "client-view",
    key: "client-view",
    route: "/client-view",
    component: <ClientVIew/>,
  },
  {
   
    name: "add-project",
    key: "add-project",
    icon: <Icon fontSize="small">Add Store</Icon>,
    route: "/project-management/add-project",
    component: <AddProject />,
  },
  {
   
    name: "add-task",
    key: "add-task",
    icon: <Icon fontSize="small">Add Task</Icon>,
    route: "/task-management/add-task",
    component: <AddTask />,
  },
];

export default routes;
