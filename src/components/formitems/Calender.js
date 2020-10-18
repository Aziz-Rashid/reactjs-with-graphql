import React from 'react'
import { DatePicker } from "antd";
const Calender = (props) => {
  return (
    <div className="input-box-container">
        <div className="input-box-title">
          <span>{props.title}</span>
        </div>
        <DatePicker
          className="date-picker"
          format="DD/MM/YYYY"
          placeholder={props.placeholder}
        />
      </div>
  )
}

export default Calender
