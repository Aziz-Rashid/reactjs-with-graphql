import React, { useState } from "react";
import "../../assets/styles/custom/components/login.scss";
import logo from "../../assets/images/Group 51.svg";
import { Tooltip } from "antd";
import { useHistory } from "react-router-dom";
const Login = (props) => {
  let history = useHistory();
  const [userEmail, setEmail] = useState('')
  const [userPassword, setPassword] = useState('')
  const login = (e) => {
    e.preventDefault()
    if (userEmail === "amiagi@test.com" && userPassword === "testtesttest") {
      return history.push('/main-dashboard')
    }
    else {
      console.log("wrong passworld")
    }
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <img className="logo" src={logo} alt="" />
        <div className="login-description">
          Advanced Training Management System
        </div>
        <div className="login-title">Log In</div>
        <form >
          <input
            type="text"
            placeholder="Email"
            value={userEmail}
            onChange={(e => setEmail(e.target.value))}
            className="login-input"
          ></input>
          <div className="input-with-tooltip">
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={userPassword}
              onChange={(e => setPassword(e.target.value))}
            ></input>
            <Tooltip
              title="Contact to your training manager"
              className="input-tooltip"
            >
              <i className="fas fa-question-circle"></i>
            </Tooltip>
          </div>
          <button type="submit" className="login-submit" onClick={login}>
            Log in
          </button>
        </form>
        <div className="forgot-password">Forgot Password?</div>
        <div className="terms">
          By logging in, you agree to AmiAgi’s Terms and Conditions.
        </div>
        <div className="terms contact">Contact AmiAgi Team</div>
      </div>
    </div>
  );
};
export default Login;
