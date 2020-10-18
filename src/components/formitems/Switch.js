import React from 'react'
import { Switch as ToggleSwitch } from "antd";
const Switch = (props) => {
  return (
    <div className="input-box-container">
    <div className="input-box-title">
      <span>{props.title}</span>
      <span
        className={
          "max-character-limit " +
          (!props.character_limit ? "hide-character-limit" : "")
        }
      > 0/40
      </span>
    </div>

    <div className="toggle-switch">
      <ToggleSwitch
        checked={props.checked}
        onChange={(e) => props.onChange(e)}
      />
      <span>
        {props.lable ? (props.checked ? "Yes" : "No") : ""}
      </span>
    </div>
  </div>
  )
}
export default Switch
