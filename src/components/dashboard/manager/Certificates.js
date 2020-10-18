import React from 'react'
import { Text, DropDownMenu, Warning } from "../../formitems/Index";
const Certificates = () => {
  return (
    <div className="animate__animated animate__fadeIn">
    <div className="manager-airport-container">
      <div className="category-title">Generate Certificate</div>
      <div className="generate-certificate">
        <div>
          <DropDownMenu placeholder="Email ID" title="Entry any one of the following" />
          <Text placeholder="Please enter Email ID" />
        </div>
        <Warning title="Verify details (Rank, Name, Fleet & Status) below:" />
        <div className="form-input-container">
          <Text classname="form-input" title="Rank" placeholder="" />
          <Text classname="form-input" title="Fleet" placeholder="" />
        </div>
        <div className="form-input-container">
          <Text classname="form-input" title="Name" placeholder="" />
          <Text classname="form-input" title="Status" placeholder="" />
        </div>
      </div>
    </div>
    <div className="qualifications-certificate-container">
      <img src={require("../../../assets/images/certificate.png")} alt="" />
    </div>
    <div className="print-email-container">
      <button className="submit-button" style={{ marginTop: "unset" }}>
        <i className="fa fa-download" />
        Download
      </button>
      <button className="print-button">
        <i className="fa fa-print" />
        Print
      </button>
      <button className="email-button">
        <i className="fa fa-envelope" />
        Email
      </button>
    </div>
  </div>
  )
}

export default Certificates
