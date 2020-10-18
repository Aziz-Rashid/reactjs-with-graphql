import React from 'react'

const UploadFile = (props) => {
  return (
    <div className="input-box-container">
      <div className="input-box-title">
        <span>{props.title}</span>
      </div>
      <div className="upload-file-box-button">
        <button className="browse-button">Browse</button>
      </div>
    </div>
  )
}

export default UploadFile
