import React from 'react'
import { Upload } from "antd";
const UploadLogo = (props) => {
  const { Dragger } = Upload;
  return (
    <div className="input-box-container">
        <div className="input-box-title">
          <span>{props.title}</span>
        </div>
        <Dragger>
          <p className="ant-upload-drag-icon">
            <img src={require("../../assets/images/Icon-upload.svg")} alt="" />
          </p>
        </Dragger>
      </div>
  )
}

export default UploadLogo
