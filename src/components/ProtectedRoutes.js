import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthToken } from "../features/auth/authSlice";

export default function Protectedroutes(props) {
  const token = useSelector(getAuthToken);

  const useAuth = () => {
    if (token) return true;
    else return false;
  };
  return useAuth() ? <Outlet /> : <Navigate to="/login" />;
}
