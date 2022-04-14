import React from "react";
import "./App.css";
import { Sidebar } from "./components/index";
import MainRoutes from "./Routes";
function App() {
  return (
    <div className="App">
      {/* Sidebar */}
      <Sidebar />
      {/* Inner container */}
      <MainRoutes />
    </div>
  );
}

export default App;
