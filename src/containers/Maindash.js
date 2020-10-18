import React, { Component } from "react";
import "../assets/styles/custom/Maindash.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Maindash = () => {
  let history = useHistory();
  const logout = () => {
    history.push('/')
  }
  return (
    <React.Fragment>
      <Header />
      <div className="main-dash-container animate__animated animate__fadeIn">
        <div className="main-dash-top">
          <div className="right-container">
            <div className="company-message-line" />
            <div className="company-message">
              Message from company will show here. Consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam eimpor aliq uyam eim por aliqu invidunt ut
              labore sed diam nonumy invidunt ut labore sed diam nonumy
              eirmod.
              </div>
          </div>
        </div>
        <div className="profile-card-container">
          <div className="top-container">
            <div className="profile-container">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
                height="100%"
                width="100%"
              />
            </div>
            <div className="user-name">John Doe</div>
            <div className="logout-container" onClick={logout}>
              <div className="fa fa-power-off" />
                Logout
              </div>
          </div>
          <div className="bottom-container">
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
        <div className="main-dash-bottom">
          <div className="right-container">
            <div className="main-title">Select your role to login</div>
            <div className="roles-item-container">
              <Link to="/dashboard/crew" className="roles-items">
                <div className="crew"></div>
                <div className="title">Crew</div>
              </Link>
              <Link to="/dashboard/aircraft" className="roles-items">
                <div className="aircraft"></div>
                <div className="title">Aircraft</div>
              </Link>
              <Link to="/dashboard/simulator" className="roles-items">
                <div className="simulator"></div>
                <div className="title">Simulator</div>
              </Link>
              <Link to="/dashboard/ground" className="roles-items">
                <div className="ground"></div>
                <div className="title">Ground</div>
              </Link>
              <Link to="/dashboard/manager" className="roles-items">
                <div className="manager"></div>
                <div className="title">Manager</div>
              </Link>
              <div className="roles-items">
                <div className="optimiser"></div>
                <div className="title">Optimiser</div>
              </div>
              <Link to="/dashboard/data-admin" className="roles-items">
                <div className="data-admin"></div>
                <div className="title">Data Admin</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}


export default Maindash