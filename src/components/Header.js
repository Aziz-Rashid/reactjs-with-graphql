import React from 'react'
import "../assets/styles/custom/components/Header.scss";
const Header = () => {
  if (window.location.pathname.split("/")[2] === "data-admin") {
    return (
      <div className="header-container">
        <div id="Group_75">
          <div id="Group_50">
            <div id="AmiAgi">
              <span>AmiAgi</span>
            </div>
            <div id="ATMS">
              <span>ATMS</span>
            </div>
          </div>
          <div id="Group_49">
            <svg className="Subtraction_1" viewBox="0 0 22.878 37.799">
              <path
                id="Subtraction_1"
                d="M 0 37.79875946044922 L 0 37.79625701904297 L 0 29.19780158996582 L 0 21.19496917724609 L 22.878173828125 0 L 22.878173828125 9.378974914550781 L 10.12380790710449 21.19496917724609 L 10.12380790710449 28.41978645324707 L 0.001836339943110943 37.79705810546875 L 0 37.79875946044922 Z"
              ></path>
            </svg>
            <svg className="Path_3" viewBox="781.004 955.523 22.878 37.799">
              <path
                id="Path_3"
                d="M 781.0037231445312 984.7207641601562 L 781.0037231445312 976.7186279296875 L 803.8817749023438 955.5232543945312 L 803.8817749023438 972.1268920898438 L 781.0037231445312 993.3222045898438 L 781.0037231445312 984.7207641601562 Z"
              ></path>
            </svg>
            <svg className="Subtraction_2" viewBox="0 0 22.878 37.799">
              <path
                id="Subtraction_2"
                d="M 2.883977778811442e-17 37.79875946044922 L 2.883977778811442e-17 37.79625701904297 L 2.883977778811442e-17 29.19780158996582 L 2.883977778811442e-17 21.19496917724609 L 22.878173828125 0 L 22.878173828125 9.378974914550781 L 10.12380790710449 21.19496917724609 L 10.12380790710449 28.41978645324707 L 0.001836339943110943 37.79705810546875 L 2.883977778811442e-17 37.79875946044922 Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }else {
    return (
      <div className="header-container">
        <div className="logo-container"></div>
      </div>
    );
  }
}

export default Header
