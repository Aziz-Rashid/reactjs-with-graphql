import React from 'react'
import { Checkbox as TableCheckbox } from "antd";
const Checkbox = (props) => {
  return (
    <div className="checkbox-container">
    <TableCheckbox
      className="checkbox"
      // checked={this.props.checked}
      // onChange={(e) => this.props.onChange(e)}
    />
    <span className="checkbox-label">{props.title}</span>
  </div>
  )
}
export default Checkbox
