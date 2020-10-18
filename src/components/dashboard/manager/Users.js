import React, { useState } from 'react'
import { Switch, Text, DropDownMenu, UploadLogo, TableAction, Calender, Checkbox } from "../../formitems/Index";
import { LeftOutlined } from "@ant-design/icons";
const Users = () => {
  const [search, setsearch] = useState("")
  const [add_new_crew, setadd_new_crew] = useState(false)
  const [active_row, setactive_row] = useState({})
  const [active_row_index, setactive_row_index] = useState(null)
  const [row_items, setrow_items] = useState([{
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
  }])
  const add_new = () => {
    setadd_new_crew(true)
    console.log(active_row,setrow_items)
  };

  const closeForm = () => {
    setadd_new_crew(false)
  };
  return (
    <div className="animate__animated animate__fadeIn">
      {/* User table */}
      <div className={"users-container " + (add_new_crew ? "hide-element" : "")}>
        <div className="category-title">Users</div>
        <button className="submit-button" onClick={add_new}>
          Add New Crew
      </button>
        <div className="table-body-container">
          <div className="table-body-header">All Crews</div>
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
                  <option value="1">All Users</option>
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

              <div className="active-switch">
                <span>Released</span>
                <Switch checked={true} />
              </div>

              <div className="search-bar">
                <span>Search</span>
                <input type="text" value={search} onChange={(e) => setsearch(e.target.value)} />
              </div>
            </div>
            {row_items.map((data, index) => {
              if (data.client.toLowerCase().includes(search.toLowerCase())) {
                return (
                  <div className="table-row-container" key={index}>
                    <div className="table-row-top">
                      <div className="items">
                        <div className="title">Email</div>
                        <div className="value">{data.client}</div>
                      </div>
                      <div className="items">
                        <div className="title">ID</div>
                        <div className="value">{data.rank_code}</div>
                      </div>
                      <div className="items">
                        <div className="title">Fleet</div>
                        <div className="value">{data.rank_name}</div>
                      </div>
                      <div className="items">
                        <div className="title">Rank</div>
                        <div className="value">{data.active}</div>
                      </div>
                      <div className="items">
                        <div className="title">Name</div>
                        <div className="value">{data.active}</div>
                      </div>
                      <div className="items">
                        <div className="title">Base</div>
                        <div className="value">{data.active}</div>
                      </div>
                      <div className="items">
                        <div className="title">Phone</div>
                        <div className="value">{data.active}</div>
                      </div>
                      <div className="items">
                        <div className="title">Status</div>
                        <div className="value">{data.active}</div>
                      </div>
                      <div className="items">
                        <div className="title">Approved</div>
                        <div className="value">{data.active}</div>
                      </div>
                      <div
                        className="action"
                        onMouseEnter={() => {
                          setactive_row(data)
                          setactive_row_index(index)
                        }}
                      >
                        <i className="fa fa-ellipsis-h" />
                      </div>
                    </div>
                    <TableAction
                      style={active_row_index == index ? { display: "block" } : {}}
                      onMouseLeave={() => setactive_row_index(null)}
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
      {/* add new crew form */}
      <div className={add_new_crew ? "" : "hide-element"}>
        <div className="category-title">
          <span className="client-back" onClick={() => closeForm()}>
            {<LeftOutlined />} Users
        </span>
        Add New Crew
      </div>

        <div className="toggle-form-container">
          <Text title="Client" placeholder="Air Asia" disabled={true} />
          <Text title="Official Email ID" />
          <Text title="Employee ID" />
          <DropDownMenu title="Fleet" />
          <DropDownMenu title="Rank" />
          <Text title="Name" />
          <Text title="Base" placeholder="Trainee" disabled={true} />
          <Text title="Phone 1" />
          <Text title="Phone 2" />
          <Text title="Personal Email ID" />
          <Calender title="Date Of Birth" />
          <Calender title="Date Of Joining" />
          <Calender title="Leaving Date" />
          <DropDownMenu title="Status" />
          <Text title="Primary License" />
          <DropDownMenu title="Ratings" placeholder="Select Multiple Values" />
          <Text title="Permanent Address" />
          <Text title="Temporary Address" />
          <UploadLogo title="Photograph" />
          <div className="input-box-container">
            <div className="input-box-title">
              <span>Authorisations for this user</span>
            </div>
            <div className="checkbox-group">
              <Checkbox title="Crew" />
              <Checkbox title="Ground" />
              <Checkbox title="Aircraft" />
              <Checkbox title="Simulator" />
              <Checkbox title="Manager" />
              <Checkbox title="Optimizer" />
              <Checkbox title="Data Admin" />
            </div>
          </div>
          <button className="submit-button">Add</button>
          <button onClick={() => closeForm()} className="cancel-button">
            Cancel
        </button>
        </div>
      </div>
    </div>
  )
}

export default Users