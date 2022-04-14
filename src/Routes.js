import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Dashboard,
  InnerContainer,
  Tabs,
  Settings,
  Tab1,
  Tab2,
  Tab3,
  Login,
  Protectedroutes,
  PublicRoutes,
} from "./components/index";
import routes from "./data/routes";

export default function MainRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<Protectedroutes />}>
        <Route path="/" element={<InnerContainer />}>
          <Route path="/" element={<Navigate replace to="dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tabs" element={<Tabs />}>
            {/* <Route path="/tabs" element={<Navigate replace to="tab1" />} />
            <Route path="tab1" element={<Tab1 />} />
            <Route path="tab2" element={<Tab2 />} />
            <Route path="tab3" element={<Tab3 />} />
             */}

            <Route path="/tabs" element={<Navigate replace to="tab1" />} />
            {routes.map((item, index) => {
              return <Route path={item.path} element={item.cmp} key={index} />;
            })}
          </Route>
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>

      <Route path="/login" element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}
