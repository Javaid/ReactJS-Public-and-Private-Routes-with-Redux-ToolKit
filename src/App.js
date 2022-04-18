import React from "react";
import { useSelector } from "react-redux";
import { getAuthToken } from "./features/auth/authSlice";

import "./App.css";
import { Sidebar } from "./components/index";
import MainRoutes from "./Routes";
function App() {
  const token = useSelector(getAuthToken);
  return (
    <div className="App">
      {/* Sidebar */}
      {token && <Sidebar />}
      {/* Inner container */}
      <MainRoutes />
    </div>
  );
}

export default App;
