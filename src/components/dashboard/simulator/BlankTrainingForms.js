import React, { Component } from "react";
import { Switch, TableAction, Text, DropDownMenu, Calender } from "../../formitems/Index";
import { LeftOutlined } from "@ant-design/icons";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";

const editor_options = {
  options: ["inline", "textAlign", "list"],
};

export default class BlankTrainingForms extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    search: "",
    add_bank_form: false,
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

  add_new = () => {
    this.setState({
      add_bank_form: true,
    });
  };

  closeForm = () => {
    this.setState({
      add_bank_form: false,
    });
  };

  render() {
    return (
      <div className="animate__animated animate__fadeIn">
        <div className={"black-trainning-form " + (this.state.add_bank_form ? "hide-element" : "")}>
          <div className="category-title">Blank Training Form</div>
          <button className="submit-button" onClick={this.add_new}>
            Request New Sim Form
          </button>
          <div className="table-body-container">
            <div className="table-body-header">All Blank Training Forms</div>
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
                    <option value="Fleet">Fleet</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
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
                          <div className="title">Name of simulator training</div>
                          <div className="value">{data.rank_code}</div>
                        </div>
                        <div className="items">
                          <div className="title">Sub- Category</div>
                          <div className="value">{data.rank_name}</div>
                        </div>
                        <div className="items">
                          <div className="title">Kind</div>
                          <div className="value">{data.active}</div>
                        </div>
                        <div className="items">
                          <div className="title">Duration</div>
                          <div className="value">{data.active}</div>
                        </div>
                        <div className="items">
                          <div className="title">Validity</div>
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
        {/* add new form */}
        <div className={this.state.add_bank_form ? "" : "hide-element"}>
          <div className="category-title">
            <span className="client-back" onClick={() => this.closeForm()}>
              {<LeftOutlined />} Blank Training Form
            </span>
            Request New Sim Form
          </div>

          <div className="toggle-form-container">
            <Text title="Client" disabled={true} value="Air Asia" />
            <DropDownMenu title="Fleet" />
            <p className="input-box-title">Duration</p>
            <div className="toggle-form-two-field">
              <DropDownMenu className="input-placeholder" placeholder="Hours" />
              <span style={{ marginRight: 10 }} />
              <DropDownMenu className="input-placeholder" placeholder="Minutes" />
            </div>
            <Text title="Validity" />
            <DropDownMenu title="Sub-Category" />
            <DropDownMenu title="Kind" />
            <DropDownMenu title="Name of the sim training" />
            <DropDownMenu title="TC Required" />
            <DropDownMenu title="NTC Required" />
            <DropDownMenu title="Remark Required" />
            <DropDownMenu title="Result Required" />
            <div className="editor-container">
              <div className="input-box-title">
                <span>Regulatory info</span>
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
            <DropDownMenu title="Your Name" />
            <Text title="Designation" />
            <Calender title="From required by Date" />
            <button className="submit-button">Submit</button>
            <button onClick={() => this.closeForm()} className="cancel-button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
