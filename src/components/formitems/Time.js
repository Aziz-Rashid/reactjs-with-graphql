import React from 'react'
import { TimePicker } from "antd";
const Time = (props) => {
  const format = "HH:mm";
  return (
    <div className="input-box-container">
        <div className="input-box-title">
          <span>{props.title}</span>
        </div>
        <TimePicker placeholder="hh:mm" format={format} />
      </div>
  )
}

export default Time
