import React, { Component } from "react";
import "../../../assets/styles/custom/components/dashboard/Simulator.scss";
import { Switch, Text, DropDownMenu, TableAction, NumberBox, TextArea, Warning, Calender } from "../../formitems/Index";
import { LeftOutlined } from "@ant-design/icons";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";

const editor_options = {
  options: ["inline", "textAlign", "list"],
};

export default class GroundTrainingForms extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    search: "",
    request_new_form: false,
    active_row: {},
    active_row_index: null,
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

  request_new_form = () => {
    this.setState({
      request_new_form: true,
    });
  };

  closeForm = () => {
    this.setState({
      request_new_form: false,
    });
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    return (
      <div className="animate__animated animate__fadeIn">
        {/* Ground training table */}
        <div className={"fround-training-forms-contaoner " + (this.state.request_new_form ? "hide-element" : "")}>
          <div className="category-title">Ground Training Forms</div>
          <button className="submit-button" onClick={() => this.request_new_form()}>
            Request New Form
          </button>
          <div className="table-body-container">
            <div className="table-body-header">All Ground Training Forms</div>
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
                <div className="active-switch">
                  <span>Active</span>
                  <Switch checked={true} />
                </div>
                <div className="search-bar">
                  <span>Search</span>
                  <input type="text" value={this.state.search} onChange={(e) => this.setState({ search: e.target.value })} />
                </div>
              </div>
              {this.state.row_items.map((data, index) => {
                if (data.client.toLowerCase().includes(this.state.search.toLowerCase())) {
                  return (
                    <div className="table-row-container" key={index}>
                      <div className="table-row-top">
                        <div className="items">
                          <div className="title">Fleet</div>
                          <div className="value">{data.client}</div>
                        </div>
                        <div className="items">
                          <div className="title">Q Code</div>
                          <div className="value">{data.rank_code}</div>
                        </div>
                        <div className="items">
                          <div className="title">Training Type</div>
                          <div className="value">{data.rank_name}</div>
                        </div>
                        <div className="items">
                          <div className="title">Form Name</div>
                          <div className="value">{data.active}</div>
                        </div>
                        <div className="items">
                          <div className="title">Active</div>
                          <div className="value">{data.active}</div>
                        </div>

                        <div className="action" onMouseEnter={() => this.setState({ active_row: data, active_row_index: index })}>
                          <i className="fa fa-ellipsis-h" />
                        </div>
                      </div>
                      <TableAction
                        style={this.state.active_row_index == index ? { display: "block" } : {}}
                        onMouseLeave={() => this.setState({ active_row_index: null })}
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
        {/* New request form */}
        <div className={this.state.request_new_form ? "" : "hide-element"}>
          <div className="category-title">
            <span className="client-back" onClick={() => this.closeForm()}>
              {<LeftOutlined />} GROUND TRAINING FORM
            </span>
            Create Your Online Ground Form
          </div>

          <div className="toggle-form-container">
            {/* input box with prefix */}
            <div className="input-box-container">
              <div className="input-box-title">
                <span> Enter a unique ground qualification code</span>
              </div>
              <div className="input-with-prefix">
                <div className="input-prefix">02G</div>
                <input
                  onChange={(e) => this.props.onChange(e)}
                  value={this.props.value}
                  disabled={this.props.disabled}
                  placeholder={this.props.placeholder}
                  className="input-box"
                  type="text"
                ></input>
              </div>
            </div>

            <DropDownMenu title="Fleet" />

            <p className="input-box-title">Duration</p>
            <div className="toggle-form-two-field">
              <DropDownMenu className="input-placeholder" placeholder="Hours" />
              <span style={{ marginRight: 10 }} />
              <DropDownMenu className="input-placeholder" placeholder="Minutes" />
            </div>

            <NumberBox title="Validity in Days (enter 9999 for one-time )" />
            <Text title="Category" placeholder="Ground" disabled={true} />
            <DropDownMenu title="Sub-Category" />
            <DropDownMenu title="Kind of Qualification" />

            <Text title="Name of the training/form" />

            <DropDownMenu title="Does this form have a remark section" />
            <DropDownMenu title="Does this form have a result section" />

            <div className="editor-container">
              <div className="input-box-title">
                <span>Enter the regulatory info displayed behind the form</span>
                <span className={"max-character-limit"}>0/3000</span>
              </div>
              <Editor
                editorState={this.state.editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChange}
                toolbar={editor_options}
              />
            </div>

            <TextArea title="Renewal Procedure" rows={6} className="textarea-box" />

            <Warning title="Note: Forms are created in the standard format and the layout and design can not be altered." />

            <div className="signature-container">
              <div className="signature-left-panel">
                <Text title="Your Name" />
                <Text title="Designation" />
                <Calender title="Date of submission of form creation request" />
                <Calender title="Date by which the online for is required" />
              </div>
              <div className="signature-right-panel">Your Signature</div>
            </div>
            <button className="submit-button">Add</button>
            <button onClick={() => this.closeForm()} className="cancel-button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
