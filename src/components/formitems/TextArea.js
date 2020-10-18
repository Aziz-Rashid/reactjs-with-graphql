import React from 'react'

const TextArea = (props) => {
  return (
    <div className={`input-box-container ${props.className}`}>
    <div className="input-box-title">
      <span>{props.title}</span>
      <span className={"max-character-limit " + (!props.character_limit ? "hide-character-limit" : "")}>0/{props.max_character}</span>
    </div>
    <textarea
      onChange={(e) => props.onChange(e)}
      value={props.value}
      disabled={props.disabled}
      placeholder={props.placeholder}
      className={`input-box  textarea-box ${props.className}`}
      type="text"
      rows={props.rows}
      style={props.style}
    ></textarea>
  </div>
  )
}

export default TextArea
