import React from 'react'
const Text = (props) => {
  return (
    <div className="input-box-container">
        <div className="input-box-title">
          <span>{props.title}</span>
          <span className={"max-character-limit " + (!props.character_limit ? "hide-character-limit" : "")}>0/{props.max_character}</span>
        </div>
        <input
          onChange={(e) => props.onChange(e)}
          value={props.value}
          disabled={props.disabled}
          placeholder={props.placeholder}
          className="input-box"
          type="text"
        />
      </div>
  )
}

export default Text
