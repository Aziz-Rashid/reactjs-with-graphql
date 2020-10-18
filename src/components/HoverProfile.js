import React from 'react'
import "../assets/styles/custom/components/HoverProfile.scss";
import { Link } from "react-router-dom";
const HoverProfile = (props) => {
  return (
    <div
    className="hover-profile-container animate__animated animate__fadeIn"
    style={{ display: props.hoverProfile ? "block" : "none" }}
    onMouseLeave={props.onMouseLeave}
  >
    <div className="top-part">
      <div className="profile-image">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
          height="100%"
          width="100%"
        />
      </div>
      <div className="right-part">
        <div className="user-name">John Doe</div>
        <div className="dashboard-type">Simulator</div>
        <div className="user-email">johndoe@gmail.com</div>
        <Link to="/main-dashboard" className="back-to-login-button">
          Back to Login Menu
        </Link>
      </div>
    </div>
    <div className="bottom-part">
      <div className="profile-items">
        <div className="title">Employee Number</div>
        <div className="text">0000000</div>
      </div>
      <div className="profile-items">
        <div className="title">Rank</div>
        <div className="text">Flying Officer</div>
      </div>
      <div className="profile-items">
        <div className="title">Department</div>
        <div className="text">Pilot</div>
      </div>
      <div className="profile-items">
        <div className="title">Fleet</div>
        <div className="text">A 320 Fleet</div>
      </div>
    </div>
  </div>
  )
}
export default HoverProfile
