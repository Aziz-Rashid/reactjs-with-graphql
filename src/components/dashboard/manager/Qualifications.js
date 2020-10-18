import React, { Component } from "react";
import { Switch, Text, DropDownMenu, Warning, Calender, UploadImage, TableAction } from "../../formitems/Index";
import { LeftOutlined } from "@ant-design/icons";

export default class Qualifications extends Component {
  state = {
    search: "",
    add_new_qualification: false,
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
    filedata: [
      {
        filename: "John Doe",
      },
      {
        filename: "John Doe1",
      },
      {
        filename: "John Doe2",
      },
    ],
  };

  add_new = () => {
    this.setState({
      add_new_qualification: true,
    });
  };

  closeForm = () => {
    this.setState({
      add_new_qualification: false,
    });
  };

  render() {
    return (
      <div className="animate__animated animate__fadeIn">
        {/* Qualification table */}
        <div className={"qualifications-container " + (this.state.add_new_qualification ? "hide-element" : "")}>
          <div className="category-title">Qualifications</div>
          <button className="submit-button" onClick={() => this.add_new()}>
            Add New Qualification
          </button>
          <div className="table-body-container">
            <div className="table-body-header">All Qualifications</div>
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
                  <span>Validated</span>
                  <Switch checked={true} />
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
                          <div className="title">Email</div>
                          <div className="value">{data.client}</div>
                        </div>
                        <div className="items">
                          <div className="title">Q Code</div>
                          <div className="value">{data.rank_code}</div>
                        </div>
                        <div className="items">
                          <div className="title">Name</div>
                          <div className="value">{data.rank_name}</div>
                        </div>
                        <div className="items">
                          <div className="title">Q Name</div>
                          <div className="value">{data.active}</div>
                        </div>
                        <div className="items">
                          <div className="title">Category</div>
                          <div className="value">{data.active}</div>
                        </div>
                        <div className="items">
                          <div className="title">Achieved</div>
                          <div className="value">{data.active}</div>
                        </div>
                        <div className="items">
                          <div className="title">Valid</div>
                          <div className="value">{data.active}</div>
                        </div>
                        <div className="items">
                          <div className="title">Days</div>
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
        {/* add new qualification form */}
        <div className={this.state.add_new_qualification ? "" : "hide-element"}>
          <div className="category-title">
            <span className="client-back" onClick={() => this.closeForm()}>
              {<LeftOutlined />} Qualifications
            </span>
            Add New Qualification
          </div>

          <div className="toggle-form-container">
            <DropDownMenu placeholder="Email ID" title="Entry any one of the following" />
            <Text placeholder="Please enter Email ID" />
            <Warning title="Verify details (Rank, Name, Fleet & Status) below:" />
            <Text title="Rank" />

            <Text title="Name" />
            <Text title="Fleet" />

            <DropDownMenu placeholder="Released" title="Status" />

            <DropDownMenu placeholder="Simulator" title="Category of Qualification" />
            <DropDownMenu placeholder="Select" title="Qualification" />
            <Text title="Doc Number" placeholder="S + eCode + Issue Date" />
            <Text title="Issuing Authority" />
            <Text title="Data 1" />
            <Text title="Data 2" />
            <Text title="Data 3" />
            <Calender title="Date Achieved" placeholder="DD/MMM/YYYY" />
            <Calender title="Date Valid" placeholder="DD/MMM/YYYY" />
            <Warning title="Upload the image/ pdf of the above qualification: (max 6 images)" />
            <UploadImage data={this.state.filedata} />
            <button className="submit-button">Add</button>

            <button className="cancel-button">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}
