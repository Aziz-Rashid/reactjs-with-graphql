import React, { Component } from "react";
import { Switch, TableAction } from "../../formitems/Index";
import { LeftOutlined } from "@ant-design/icons";
import Text from "../../formitems/Text.js";
import Date from "../../formitems/Calender.js";
import DropDownMenu from "../../formitems/DropDownMenu.js";
import TextArea from "../../formitems/TextArea.js";

export default class SimulatorForms extends Component {
  state = {
    search: "",
    active_row: {},
    active: "header",
    active_row_index: null,
    add_sim_form: false,
    row_items: [
      {
        id: "1",
        client: "Client Inc",
        rank_code: "PIC",
        rank_name: "Pilot in Command",
        active: "Yes",
      },
      {
        id: "2",
        client: "Abc Client Inc",
        rank_code: "PIC",
        rank_name: "Pilot in Command",
        active: "Yes",
      },
      {
        id: "3",
        client: " Def Client Inc",
        rank_code: "PIC",
        rank_name: "Pilot in Command",
        active: "Yes",
      },
      {
        id: "4",
        client: "Ghi Client Inc",
        rank_code: "PIC",
        rank_name: "Pilot in Command",
        active: "Yes",
      },
      {
        id: "5",
        client: "Jkl Client Inc",
        rank_code: "PIC",
        rank_name: "Pilot in Command",
        active: "Yes",
      },
      {
        id: "6",
        client: "Mnk Client Inc",
        rank_code: "PIC",
        rank_name: "Pilot in Command",
        active: "Yes",
      },
      {
        id: "7",
        client: "Opq Client Inc",
        rank_code: "PIC",
        rank_name: "Pilot in Command",
        active: "Yes",
      },
    ],
  };

  add_new = () => {
    this.setState({
      add_sim_form: true,
    });
  };

  closeForm = () => {
    this.setState({
      add_sim_form: false,
    });
  };

  getSimulatorForm = () => {
    if (this.state.active === "header") {
      return (
        <div>
          <div className="table-body-container">
            <div className="table-body-header">All Simulators</div>
            <div className="client-list-divider"></div>
            <div className="simulator-form">
              <Text
                title="Airline"
                disabled
                value="Airbus Asia Training Center"
              />
              <Date title="Date" />
              <DropDownMenu title="Fleet" />
            </div>
            <div className="simulator-form">
              <DropDownMenu title="Simulator (ATO)" />
              <Text title="Simulator Location" disabled value="" />
              <Text title="Simulator Registration" disabled value="" />
            </div>
            <div className="simulator-form">
              <DropDownMenu title="Select Your Simulator Form" />
            </div>
            <div className="simulator-form" style={{ marginTop: "-50px" }}>
              <Text title="Simulator Duration" disabled value="" />
              <Text title="Sub-Category" disabled value="" />
              <Text title="Validity" disabled value="" />
            </div>
            <div>
              <div className="simulator-form">
                <DropDownMenu title="Select Trainer" />
                <Text title="Rank" disabled value="" />
                <Text title="Licence" disabled value="" />
              </div>
              <div className="simulator-form" style={{ marginTop: "-50px" }}>
                <DropDownMenu title="Select Trainee" />
                <Text title="Licence" disabled value="" />
                <Text title="Licence" disabled value="" />
              </div>
              <div className="simulator-buttons">
                <div className="simulator-submit-btn">
                  <button className="submit-button">Submit</button>
                  <button className="preview-button">
                    <i className="fa fa-eye" />
                    Preview
                  </button>
                  <button className="pause-button">
                    <i className="fa fa-pause" />
                    Pause
                  </button>
                </div>
                <div class="discard-btn">
                  <button
                    className="discard-button"
                    onClick={() => this.closeForm()}
                  >
                    <i className="fa fa-trash" />
                    Discard
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.active === "tech-comp") {
      return (
        <div className="table-body-container">
          <div className="table-body-header">
            Section 2: Technical Competency
          </div>
          <div className="client-list-divider"></div>
          <div className="tech-comp-topbtn">
            <div className="items" onClick={this.setstate}>
              Gen
            </div>
            <div className="items">Briefing</div>
            <div className="items">Pre-Flight</div>
            <div className="items">Startup</div>
            <div className="items">Taxi</div>
            <div className="items">Takeoff</div>
            <div className="items">Climb</div>
            <div className="items">Cruise</div>
            <div className="items">Descent</div>
            <div className="items">Approach</div>
            <div className="items">Landing</div>
            <div className="items">Post Flight</div>
          </div>
          <div className="tech-comp-setting">
            <div className="index-box">
              <Text title="#" value="" />
            </div>
            <Text value="" title="Technical Competency" />
            <div className="sitting-dropdown">
              <DropDownMenu title="Sitting" />
            </div>
            <div className="number-dropdown" style={{ paddingTop: "24px" }}>
              <select>
                <option>Select</option>
              </select>
            </div>
          </div>
          <div className="second-row-box" style={{ paddingLeft: "30px" }}>
            <Text value="" />
          </div>

          <div className="tech-comp-setting">
            <div className="index-box">
              <Text title="" value="" />
            </div>
            <Text value="" />
            <div className="sitting-dropdown">
              <DropDownMenu />
            </div>
            <div className="number-dropdown">
              <select>
                <option>Select</option>
              </select>
            </div>
          </div>
          <div className="second-row-box" style={{ paddingLeft: "30px" }}>
            <Text value="" />
          </div>
          <div className="tech-comp-setting">
            <div className="index-box">
              <Text value="" />
            </div>
            <Text value="" />
            <div className="sitting-dropdown">
              <DropDownMenu />
            </div>
            <div className="number-dropdown">
              <select>
                <option>Select</option>
              </select>
            </div>
          </div>
          <div className="second-row-box" style={{ paddingLeft: "30px" }}>
            <Text value="" />
          </div>

          <div className="tech-comp-setting">
            <div className="index-box">
              <Text value="" />
            </div>
            <Text value="" />
            <div className="sitting-dropdown">
              <DropDownMenu />
            </div>
            <div className="number-dropdown">
              <select>
                <option>Select</option>
              </select>
            </div>
          </div>
          <div className="second-row-box" style={{ paddingLeft: "30px" }}>
            <Text value="" />
          </div>
          <div className="simulator-buttons">
            <div className="simulator-submit-btn">
              <button className="submit-button">Submit</button>
              <button className="preview-button">
                <i className="fa fa-eye" />
                Preview
              </button>
              <button className="pause-button">
                <i className="fa fa-pause" />
                Pause
              </button>
            </div>
            <div class="discard-btn">
              <button
                className="discard-button"
                onClick={() => this.closeForm()}
              >
                <i className="fa fa-trash" />
                Discard
              </button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.active === "non-tech-comp") {
      return (
        <div className="table-body-container">
          <div className="table-body-header">
            Section 3: Non-Technical Competency
          </div>
          <div className="client-list-divider"></div>
          <div className="non-tech-comp-text">
            <TextArea title="APP/TKN" rows="4" />
          </div>
          <div className="non-tech-comp-text">
            <TextArea title="FPA/FPM" rows="4" />
          </div>
          <div className="non-tech-comp-text">
            <TextArea title="COM, LTW, PDM, SWA, WLM" rows="4" />
          </div>
          <div className="non-tech-comp-dropdown">
            <DropDownMenu title="APP" />
            <DropDownMenu title="TKN" />
            <DropDownMenu title="FPA" />
            <DropDownMenu title="FPM" />
            <DropDownMenu title="COM" />
            <DropDownMenu title="LTW" />
            <DropDownMenu title="PDM" />
            <DropDownMenu title="SAW" />
            <DropDownMenu title="WLM" />
            <Text title="SCORE" value="" />
          </div>
          <div className="simulator-buttons">
            <div className="simulator-submit-btn">
              <button className="submit-button">Submit</button>
              <button className="preview-button">
                <i className="fa fa-eye" />
                Preview
              </button>
              <button className="pause-button">
                <i className="fa fa-pause" />
                Pause
              </button>
            </div>
            <div class="discard-btn">
              <button
                className="discard-button"
                onClick={() => this.closeForm()}
              >
                <i className="fa fa-trash" />
                Discard
              </button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.active === "remark") {
      return (
        <div className="table-body-container">
          <div className="table-body-header">Section 4: Remark</div>
          <div className="client-list-divider"></div>
          <div className="non-tech-comp-text">
            <TextArea title="Overall Remarks" rows="15" />
          </div>
          <div className="simulator-buttons">
            <div className="simulator-submit-btn">
              <button className="submit-button">Submit</button>
              <button className="preview-button">
                <i className="fa fa-eye" />
                Preview
              </button>
              <button className="pause-button">
                <i className="fa fa-pause" />
                Pause
              </button>
            </div>
            <div class="discard-btn">
              <button
                className="discard-button"
                onClick={() => this.closeForm()}
              >
                <i className="fa fa-trash" />
                Discard
              </button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.active === "result") {
      return (
        <div className="table-body-container">
          <div className="table-body-header">Section 5: Result</div>
          <div className="client-list-divider"></div>
          <div className="result-container">
            <div className="box">
              <div>
                <i className="fa fa-check-circle result-icon-style" />
                <div className="box-btn-1">Satisfactory</div>
              </div>
            </div>
            <div className="box">
              <div>
                <i className="fa fa-times-circle result-icon-style" />
                <div className="box-btn-2">Un-Satisfactory</div>
              </div>
            </div>
          </div>
          <div className="simulator-buttons">
            <div className="simulator-submit-btn">
              <button className="submit-button">Submit</button>
              <button className="preview-button">
                <i className="fa fa-eye" />
                Preview
              </button>
              <button className="pause-button">
                <i className="fa fa-pause" />
                Pause
              </button>
            </div>
            <div class="discard-btn">
              <button
                className="discard-button"
                onClick={() => this.closeForm()}
              >
                <i className="fa fa-trash" />
                Discard
              </button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.active === "signature") {
      return (
        <div className="table-body-container">
          <div className="table-body-header">Section 6: Signature</div>
          <div className="client-list-divider"></div>
          <div className="non-tech-comp-text">
            <TextArea title="Trainees Signature" rows="10" />
          </div>
          <div className="non-tech-comp-text">
            <TextArea title="Trainers Signature" rows="10" />
          </div>
          <div className="simulator-buttons">
            <div className="simulator-submit-btn">
              <button className="submit-button">Submit</button>
              <button className="preview-button">
                <i className="fa fa-eye" />
                Preview
              </button>
              <button className="pause-button">
                <i className="fa fa-pause" />
                Pause
              </button>
            </div>
            <div class="discard-btn">
              <button
                className="discard-button"
                onClick={() => this.closeForm()}
              >
                <i className="fa fa-trash" />
                Discard
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="animate__animated animate__fadeIn">
        <div
          className={
            "simulator-form-container " +
            (this.state.add_sim_form ? "hide-element" : "")
          }
        >
          <div className="category-title">Simulator Forms</div>
          <button className="submit-button" onClick={this.add_new}>
            Conduct Simulator
          </button>
          <div className="table-body-container">
            <div className="table-body-header">All Attendance</div>
            <div className="client-list-divider"></div>
            <div className="table-container">
              <div className="table-header-container">
                <div className="display-record">
                  <span>Show</span>
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <span>records</span>
                </div>
                <div className="display-record">
                  <select>
                    <option value="1">Month & Year</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="active-switch">
                  <span>Paused</span>
                  <Switch checked={true} />
                </div>
                <div className="search-bar">
                  <span>Search</span>
                  <input
                    type="text"
                    value={this.state.search}
                    onChange={(e) => this.setState({ search: e.target.value })}
                  />
                </div>
              </div>
              {this.state.row_items.map((data, index) => {
                if (
                  data.client
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase())
                ) {
                  return (
                    <div className="table-row-container" key={index}>
                      <div className="table-row-top">
                        <div className="items">
                          <div className="title">Fleet</div>
                          <div className="value">{data.client}</div>
                        </div>
                        <div className="items">
                          <div className="title">Date</div>
                          <div className="value">{data.rank_code}</div>
                        </div>
                        <div className="items">
                          <div className="title">Training Name (SIM Form)</div>
                          <div className="value">{data.rank_name}</div>
                        </div>
                        <div className="items">
                          <div className="title">SIM ATO, Location</div>
                          <div className="value">{data.active}</div>
                        </div>
                        <div className="items">
                          <div className="title">Trainee</div>
                          <div className="value">{data.active}</div>
                        </div>
                        <div className="items">
                          <div className="title">Status</div>
                          <div className="value">{data.active}</div>
                        </div>
                        <div
                          className="action"
                          onMouseEnter={() =>
                            this.setState({
                              active_row: data,
                              active_row_index: index,
                            })
                          }
                        >
                          <i className="fa fa-ellipsis-h" />
                        </div>
                      </div>
                      <TableAction
                        style={
                          this.state.active_row_index === index
                            ? { display: "block" }
                            : {}
                        }
                        onMouseLeave={() =>
                          this.setState({ active_row_index: null })
                        }
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="print-email-container">
            <button className="submit-button" style={{ marginTop: "unset" }}>
              <i className="fa fa-download" />
              Download
            </button>
            <button className="print-button">
              <i className="fa fa-print" />
              Print
            </button>
            <button className="email-button">
              <i className="fa fa-envelope" />
              Email
            </button>
          </div>
        </div>
        {/* add new form */}
        <div className={this.state.add_sim_form ? "" : "hide-element"}>
          <div className="category-title">
            <span className="client-back" onClick={() => this.closeForm()}>
              {<LeftOutlined />} Simulator Forms
            </span>
            Conduct Simulator
          </div>
          <header className="simulator-form-header">
            <div
              style={
                this.state.active === "header"
                  ? {
                      borderBottom: "4px solid",
                      borderColor: "#EE5050",
                    }
                  : {}
              }
              onClick={() => this.setState({ active: "header" })}
            >
              Header
            </div>
            <div
              style={
                this.state.active === "tech-comp"
                  ? {
                      borderBottom: "4px solid",
                      borderColor: "#EE5050",
                    }
                  : {}
              }
              onClick={() => this.setState({ active: "tech-comp" })}
            >
              Technical Competency
            </div>
            <div
              style={
                this.state.active === "non-tech-comp"
                  ? {
                      borderBottom: "4px solid",
                      borderColor: "#EE5050",
                    }
                  : {}
              }
              onClick={() => this.setState({ active: "non-tech-comp" })}
            >
              Non-Technical Competency
            </div>
            <div
              style={
                this.state.active === "remark"
                  ? {
                      borderBottom: "4px solid",
                      borderColor: "#EE5050",
                    }
                  : {}
              }
              onClick={() => this.setState({ active: "remark" })}
            >
              Remark
            </div>
            <div
              style={
                this.state.active === "result"
                  ? {
                      borderBottom: "4px solid",
                      borderColor: "#EE5050",
                    }
                  : {}
              }
              onClick={() => this.setState({ active: "result" })}
            >
              Result
            </div>
            <div
              style={
                this.state.active === "signature"
                  ? {
                      borderBottom: "4px solid",
                      borderColor: "#EE5050",
                    }
                  : {}
              }
              onClick={() => this.setState({ active: "signature" })}
            >
              Signature
            </div>
          </header>
          <div>{this.getSimulatorForm()}</div>
        </div>
      </div>
    );
  }
}
