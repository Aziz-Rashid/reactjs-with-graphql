import React,{useState} from 'react'
import { Text, DropDownMenu, TextArea, Calender } from "../../formitems/Index";
const IssueCertificate = () => {
  const [TrainingResult, setTrainingResult] = useState([{
    TraineeName: "john doe",
  },
  {
    TraineeName: "john doe",
  },
  {
    TraineeName: "john doe",
  },
  {
    TraineeName: "john doe",
  }])
  return (
    <div className="animate__animated animate__fadeIn">
        <div className="issue-certificate-container">
          <div className="category-title">Issue Certificate</div>
          <div className="toggle-form-container">
            <DropDownMenu placeholder="Email ID" title="Select Attendance Sheet" />
            <Text placeholder="Select" />
            <Text title="Trainer signing the certificate" />
            <Text title="Fleet" placeholder="A320" />

            <Text title="Ground Training" placeholder="Technical Refresher" />
            <Calender title="Date of Training" placeholder="" />
            <Calender title="Start Time" />
            <Text title="Venue" placeholder="Setler Aerospace center, Singapore" />
          </div>
        </div>
        <div className="issue-certificate-result-container">
          <div className="category-title">Complete Training and Declare Result</div>
          <div className="toggle-form-container">
            <div className="training-and-declare-result-component">
              <div>
                <div className="training-header-title">Trainers</div>
                <Text placeholder="Jane Doe" />
                <Text placeholder="Jane Doe" />
              </div>
              <div className="trainees-and-result-component">
                <div className="training-header-title">Trainees</div>
                {TrainingResult.map((data, index) => (
                  <div className="trainees-container">
                    <div className="component-text-container">
                      <div className="category-text-container">
                        <Text placeholder="" title="Trainee" />
                        <button className="warning-btn-empty">Absent</button>
                        <button className="fail-btn-empty">Fail</button>
                        <button className="pass-btn-empty">Pass</button>
                        <button className="button-and-icon">
                          Last Training
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                        </button>
                        <button className="button-and-icon">
                          Valid Till
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                    <div style={{ width: "100%" }} className="category-textarea-container">
                      <TextArea className="custom-input-textbox" placeholder="" title="Remarks" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <button className="submit-button">Save</button>
      </div>
  )
}

export default IssueCertificate