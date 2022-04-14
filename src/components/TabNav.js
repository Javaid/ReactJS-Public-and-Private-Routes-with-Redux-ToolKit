import React from "react";
import { Link, useLocation } from "react-router-dom";

import tabLinks from "../data/tabs";

export default function Tabnav(props) {
  const location = useLocation();
  return (
    <div>
      <div className="tab-nav">
        {tabLinks.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.to}
              className={location.pathname === item.to ? "tab_active" : ""}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
