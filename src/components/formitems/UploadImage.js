import React, { Component } from "react";
import { Modal } from "antd";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

export default class UploadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_camera: false,
      imageSrc: "",
    };
  }

  handleOk = (e) => {
    console.log(e);
    this.openCamera(false);
  };

  handleCancel = (e) => {
    console.log(e);
    this.openCamera(false);
  };

  openCamera = (status) => {
    this.setState({
      show_camera: status,
    });
  };

  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture = () => {
    //console.log("Clicking");
    //console.log(this.webcam.getScreenshot());
    this.setState({
      imageSrc: this.webcam.getScreenshot(),
    });
  };

  retake = () => {
    this.setState({
      imageSrc: "",
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="multiple-file-upload-container">
          <div className="top-part">
            <div className="file-upload-container">
              <div className="title">Upload File</div>
              <input type="file" />
            </div>
            <div className="camera-button-container">
              <div className="title">Open Camera</div>
              <button className="button" onClick={() => this.openCamera(true)}>
                <i className="fa fa-camera" />
              </button>
            </div>
          </div>
          {/* Camera Modal */}
          <Modal title="Say Cheese!!!" visible={this.state.show_camera} onOk={this.handleOk} onCancel={this.handleCancel}>
            <div className="camera-container">
              {this.state.imageSrc === "" && this.state.show_camera ? (
                <Webcam
                  className={this.state.imageSrc !== "" ? "hide-element" : ""}
                  audio={false}
                  height={350}
                  ref={this.setRef}
                  screenshotFormat="image/jpeg"
                  width={350}
                  videoConstraints={videoConstraints}
                />
              ) : (
                <img alt="" className={"camera-preview-image " + (this.state.imageSrc !== "" ? "" : "hide-element")} src={this.state.imageSrc} />
              )}
            </div>

            <center>
              <button className={"submit-button " + (this.state.imageSrc !== "" ? "hide-element" : "")} onClick={this.capture}>
                Capture photo
              </button>
            </center>
            <center>
              <button className={"cancel-button " + (this.state.imageSrc !== "" ? "" : "hide-element")} onClick={this.retake}>
                Retake
              </button>
            </center>
          </Modal>
          {/* Camera Modal ends */}
          {this.props.data.map((data, index) => (
            <div className="bottom-part">
              <div className="pdf-file-container">
                <div className="pdf-file-image-container">
                  <i alt="" className="fa fa-picture-o" />
                </div>
                <div className="pdf-file-name">{data.filename}</div>
              </div>
              <div className="pdf-file-preview-container">
                <div className="pdf-file-delete">
                  <i className="fa fa-trash" />
                </div>
                <button className="preview-button">
                  <i className="fa fa-eye" />
                  Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
