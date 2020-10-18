import React from 'react'
import { Text, DropDownMenu, Warning } from "../../formitems/Index";
function BlankTrainingForms() {
  return (
    <div className="animate__animated animate__fadeIn">
        {/* add new form */}
        <div className="category-title">Blank Training Forms</div>

        <div className="toggle-form-container">
          <Warning title="Your training forms are available here. You can use the forms to prepare for your training and also for using the forms in offline mode" />
          <Text title="Client" disabled={true} value="Air Asia" />
          <Text title="Fleet" disabled={true} value="A320" />
          <DropDownMenu title="Training Type" />
          <DropDownMenu title="Form" />
          <button className="submit-button">Continue</button>
        </div>
      </div>
  )
}

export default BlankTrainingForms
