import React from 'react'

const Password = (props) => {
  return (
    <div className="input-box-container">
    <div className="input-box-title">
      <span>{props.title}</span>
    </div>
    <input
      //   onChange={(e) => this.props.onChange(e)}
      value={props.value}
      disabled={props.disabled}
      placeholder={props.placeholder}
      className="input-box"
      type="password"
    />
  </div>
  )
}

export default Password
