import React from "react";
import { Outlet } from "react-router-dom";
import Tabnav from "./TabNav";

export default function Tabs(props) {
  return (
    <div>
      {/* Tab Navigation */}
      <h1>Tabs</h1>
      <Tabnav />
      <Outlet />
      {/* Tab Inner content */}
    </div>
  );
}
