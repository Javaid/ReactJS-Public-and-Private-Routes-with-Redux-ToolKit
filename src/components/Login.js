import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAuthToken, getAuthToken } from "../features/auth/authSlice";

export default function Login(props) {
  const token = useSelector(getAuthToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const doLogin = () => {
    const token = true;
    dispatch(setAuthToken(token));

    localStorage.setItem("user", token);
    navigate("/dashboard");
  };

  return (
    <div className="login_container">
      <h1>Login {token}</h1>
      <p>Please loging to continue</p>

      <button onClick={doLogin}>Login</button>
    </div>
  );
}
