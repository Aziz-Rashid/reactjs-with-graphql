import React from 'react'
import { Text, DropDownMenu, Warning } from "../../formitems/Index";

const StudyMaterials = () => {
  return (
    <div className="animate__animated animate__fadeIn">
    <div className="category-title">Study Material</div>
    <div className="toggle-form-container">
      <Warning title="Your training study materials are available here. These must be reviewed before your training." />
      <Text title="Client" disabled={true} value="Air Asia" />
      <Text title="Fleet" disabled={true} value="A320" />
      <DropDownMenu title="Training Type" />
      <DropDownMenu title="Available Study Material" />
      <button className="submit-button">View Study Material</button>
    </div>
  </div>
  )
}

export default StudyMaterials
