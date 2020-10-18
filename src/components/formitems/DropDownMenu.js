import React from 'react'
import { Select } from "antd";
const DropDownMenu = (props) => {
  const Option = Select.Option;
  return (
    <div className="input-box-container">
    <div className="input-box-title">
      <span>{props.title}</span>
    </div>
    <Select placeholder={props.placeholder || "Select"} onChange={(e) => props.onChange(e)}>
      <Option value="">Select</Option>
    </Select>
  </div>
  )
}

export default DropDownMenu
