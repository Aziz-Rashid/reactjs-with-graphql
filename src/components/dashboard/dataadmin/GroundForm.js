import React,{useState} from 'react'
import { Text, DropDownMenu, TextArea, Switch } from "../../formitems/Index";
const GroundForm = () => {
  const [AddActive, setAddActive] = useState("")
  return (
    <div className="animate__animated animate__fadeIn">
        <div className="category-title">Ground Form</div>
        <div className="toggle-form-container">
          <DropDownMenu title="Client" />
          <Text
            title="Enter unique qualification code in format (ClientNo) + (G) + (Code)"
            placeholder="(ClientNo) + (G) + (Code)"
          />
          <DropDownMenu title="Fleet" />
          <DropDownMenu title="Course Duration" />
          <Text title="Validity (days)" />
          <Text title="Category" value="Ground" disabled={true} />
          <DropDownMenu title="Sub-Category" />
          <DropDownMenu title="Kind" />
          <Text title="Name of the ground training" />
          <TextArea rows={5} title="Renewal Procedure" />
          <Switch title="Add Remarks Section?" checked={true} lable={true} />
          <Switch title="Add Result Section?" checked={true} lable={true} />
          <Switch
            title="Add Regulatory Information Section?"
            lable={true}
            onChange={(e) => {e ? setAddActive("tech-comp" ): setAddActive("")}} />
          <div
            className={
              "" + (AddActive === "tech-comp" ? "" : "hide-element")
            }
          >
            <button className="add-button">
              <i className="fa fa-plus" />
              Add
            </button>
          </div>
          <button className="submit-button">Publish Form</button>
          <button className="preview-button">
            <i className="fa fa-eye" />
            Preview
          </button>
          <button className="cancel-button">Cancel</button>
        </div>
      </div>
  )
}

export default GroundForm
