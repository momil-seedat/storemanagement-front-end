


import { createContext, useContext, useReducer, useMemo, useState, useEffect } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

// Material Dashboard 2 React main context
const MaterialUI = createContext();

// authentication context
export const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  register: () => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;

    setIsAuthenticated(true);
    navigate(location.pathname);
  }, []);

  useEffect(() => {
    if (!token) {
      navigate("/authentication/sign-in");
      return;
    }

    setIsAuthenticated(isAuthenticated);
    navigate(location.pathname);
  }, [isAuthenticated]);

  const login = (token) => {
   
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("user_group");
    localStorage.removeItem("permissions");
    setIsAuthenticated(false);
    navigate("/authentication/sign-in");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Setting custom name for the context which is visible on react dev tools
MaterialUI.displayName = "MaterialUIContext";

function reducer(state, action) {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: action.value };
    }
    case "TRANSPARENT_SIDENAV": {
      return { ...state, transparentSidenav: action.value };
    }
    case "WHITE_SIDENAV": {
      return { ...state, whiteSidenav: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    case "DIRECTION": {
      return { ...state, direction: action.value };
    }
    case "LAYOUT": {
      return { ...state, layout: action.value };
    }
    case "ConditionalSearch": {
      return { ...state, ConditionalSearch: action.value };
    }
    case "DARKMODE": {
      return { ...state, darkMode: action.value };
    }
    case "TASKSUBMISSION": {
      return { ...state, TaskSubmission: action.value };
    }
    case "HandleImageUploadPopup": {
      return { ...state, HandleImageUploadPopup: action.value };
    }
    case "TaskMultipleSubmissionData": {
      return { ...state, TaskMultipleSubmissionData: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Material Dashboard 2 React context provider
function MaterialUIControllerProvider({ children }) {
  const initialState = {
    miniSidenav: false,
    transparentSidenav: false,
    whiteSidenav: false,
    sidenavColor: "info",
    transparentNavbar: true,
    fixedNavbar: true,
    openConfigurator: false,
    direction: "ltr",
    layout: "dashboard",
    darkMode: false,
    TaskSubmission:false,
    ConditionalSearch:false,
    HandleImageUploadPopup:false,
    TaskMultipleSubmissionData:([
      { photos: [], comments: Array(8).fill('') },
      { photos: [], comments: Array(8).fill('') },
      { photos: [], comments: Array(8).fill('') },
      { photos: [], comments: Array(8).fill('') }
    ]),
    
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <MaterialUI.Provider value={value}>{children}</MaterialUI.Provider>;
}

// Material Dashboard 2 React custom hook for using context
function useMaterialUIController() {
  const context = useContext(MaterialUI);

  if (!context) {
    throw new Error(
      "useMaterialUIController should be used inside the MaterialUIControllerProvider."
    );
  }

  return context;
}

// Typechecking props for the MaterialUIControllerProvider
MaterialUIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Context module functions
const setMiniSidenav = (dispatch, value) => dispatch({ type: "MINI_SIDENAV", value });
const setTransparentSidenav = (dispatch, value) => dispatch({ type: "TRANSPARENT_SIDENAV", value });
const setWhiteSidenav = (dispatch, value) => dispatch({ type: "WHITE_SIDENAV", value });
const setSidenavColor = (dispatch, value) => dispatch({ type: "SIDENAV_COLOR", value });
const setTransparentNavbar = (dispatch, value) => dispatch({ type: "TRANSPARENT_NAVBAR", value });
const setFixedNavbar = (dispatch, value) => dispatch({ type: "FIXED_NAVBAR", value });
const setOpenConfigurator = (dispatch, value) => dispatch({ type: "OPEN_CONFIGURATOR", value });
const setDirection = (dispatch, value) => dispatch({ type: "DIRECTION", value });
const setLayout = (dispatch, value) => dispatch({ type: "LAYOUT", value });
const setDarkMode = (dispatch, value) => dispatch({ type: "DARKMODE", value });
const setTaskSubmission = (dispatch, value) => dispatch({ type: "TASKSUBMISSION", value });
const setConditionalSearch = (dispatch, value) => dispatch({ type: "ConditionalSearch", value });
const SetHandleImageUploadPopup = (dispatch, value) => dispatch({ type: "HandleImageUploadPopup", value });
const SetTaskMultipleSubmissionData = (dispatch, value) => dispatch({ type: "TaskMultipleSubmissionData", value });





export {
  AuthContextProvider,
  MaterialUIControllerProvider,
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
  setSidenavColor,
  setTransparentNavbar,
  setFixedNavbar,
  setOpenConfigurator,
  setDirection,
  setLayout,
  setDarkMode,
  setTaskSubmission,
  setConditionalSearch,
  SetHandleImageUploadPopup,
  SetTaskMultipleSubmissionData,
};