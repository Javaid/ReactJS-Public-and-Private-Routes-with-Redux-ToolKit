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
    <div className="container">
      <h1>Login {token}</h1>
      <p>Please loging to continue</p>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            aria-live="assertive"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={doLogin}>
          Submit
        </button>
      </form>
    </div>
  );
}
