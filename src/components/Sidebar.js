import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthToken, setAuthToken } from "../features/auth/authSlice";
const Sidebar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector(getAuthToken);
  const dispatch = useDispatch();

  const doLogout = () => {
    //localStorage.removeItem("persist:root");
    dispatch(setAuthToken(false));
    navigate("/login");
  };

  // const useAuth = () => {
  //   if (token) return true;
  //   else return false;
  // };

  // const user = useAuth();

  return (
    <div className="sidebar">
      <div className="sidebar_items">
        {token && (
          <>
            <Link to="dashboard">Dashboard</Link>
            <Link to="tabs">Tabs</Link>
            <Link to="settings">Settings</Link>
          </>
        )}
        {!token && <Link to="login">Login</Link>}

        {location.pathname !== "/login" && (
          <button onClick={doLogout}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
