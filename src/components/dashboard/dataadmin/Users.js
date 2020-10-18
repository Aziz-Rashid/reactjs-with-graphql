import React,{useState} from 'react'
import { LeftOutlined } from "@ant-design/icons";
import { Text, DropDownMenu, UploadLogo, UploadFile, Switch, Checkbox, Calender, TableAction } from "../../formitems/Index";

const Users = () => {
  const [bulk_append, setbulk_append] = useState(false)
  const [bulk_update, setbulk_update] = useState(false)
  const [active_row, setactive_row] = useState({})
  const [active_row_index, setactive_row_index] = useState(null)
  const [manage_user_table, setmanage_user_table] = useState(false)
  const [manage_user_form, setmanage_user_form] = useState(false)
  const [search, setsearch] = useState("")
  const [row_items, setrow_items] = useState([{
    id: "1",
    client: "One Air",
    client_name: "ATPL",
    email: "Airline Transport Pilot Licence",
    e_code: "Current Rating",
    phone: "Status (PIC/ P2)",
    rank: "Restrictions",
    licence_number: "30",
    permissions: {
      crew: true,
      ground: true,
      aircraft: true,
      simulator: true,
      manager: true,
      optimizer: true,
      data_admin: true,
    },
  },])
  const openBulkAppendUpdate = (type) => {
    console.log("type", type);
    if (type === "BulkAppend") {
      setbulk_append(true)
    } else if (type === "BulkUpdate") {
      setbulk_update(true)
    }
  };

  const openManageUser = () => {
    setmanage_user_table(true)
  };

  const add_new_user = () => {
    setmanage_user_table(false)
    setmanage_user_form(true)
    console.log(active_row,setrow_items)
  };

  const closeForm = () => {
    setbulk_update(false)
    setbulk_append(false)
    setmanage_user_form(false)
    setmanage_user_table(false)
  };
  return (
    <div className="animate__animated animate__fadeIn">
        <div
          className={
            bulk_append === false &&
            bulk_update === false &&
            manage_user_table === false &&
            manage_user_form === false
              ? ""
              : "hide-element"
          }
        >
          <div className="category-title">Users</div>

          <div className="dataadmin-user-action-group">
            <div className="user-action-card">
              <img className="user-action-image" alt="" src={require("../../../assets/images/material-playlist-add.svg")} />
              <button className="user-action-buttons" onClick={() => openBulkAppendUpdate("BulkAppend")}>
                Bulk Append
              </button>
            </div>

            <div className="user-action-card">
              <img className="user-action-image" src={require("../../../assets/images/feather-refresh.svg")} alt="" />
              <button className="user-action-buttons" onClick={() => openBulkAppendUpdate("BulkUpdate")}>
                Bulk Delete/Replace
              </button>
            </div>

            <div className="user-action-card">
              <img className="user-action-image" src={require("../../../assets/images/material-playlist-add.svg")} alt="" />
              <button onClick={() => openManageUser()} className="user-action-buttons">
                Manage Users
              </button>
            </div>
          </div>
        </div>

        {/* Bulk Append and update form*/}
        <div className={bulk_append === true || bulk_update === true ? "" : "hide-element"}>
          <div className="category-title">
            <span className="client-back" onClick={() => closeForm()}>
              {<LeftOutlined />} USERS
            </span>
            Bulk Append
          </div>

          <div className="toggle-form-container">
            <DropDownMenu title="Client" />
            <div className="instruction-for-client">
              <i className="fa fa-file-excel-o fa-lg instruction-for-client-image"></i>
              Instructions for Client
            </div>

            <UploadFile title="Upload CSV/Excel"></UploadFile>
            <button className={"submit-button " + (bulk_append === true ? "" : "hide-element")}>Append Records</button>
            <button className={"submit-button " + (bulk_update === true ? "" : "hide-element")}>Update Records</button>
            <button onClick={() => closeForm()} className="cancel-button">
              Cancel
            </button>
          </div>
        </div>

        {/* Manage Users table */}

        <div className={manage_user_table === true ? "" : "hide-element"}>
          <div className="category-title">
            <span className="client-back" onClick={() => closeForm()}>
              {<LeftOutlined />} USERS
            </span>
            Manage Users
          </div>
          <button className={"submit-button"} onClick={() => add_new_user()}>
            Add New User
          </button>

          <div className="table-body-container">
            <div className="table-body-header">All Users</div>
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
                  <span>Awaiting Approval</span>
                  <Switch checked={true} />
                </div>

                <div className="active-switch">
                  <span>Active</span>
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
                          <div className="title">Client</div>
                          <div className="value">{data.client}</div>
                        </div>
                        <div className="items">
                          <div className="title">Name</div>
                          <div className="value">{data.client_name}</div>
                        </div>
                        <div className="items">
                          <div className="title">Email</div>
                          <div className="value">{data.email}</div>
                        </div>
                        <div className="items">
                          <div className="title">E. Code</div>
                          <div className="value">{data.e_code}</div>
                        </div>
                        <div className="items">
                          <div className="title">Phone</div>
                          <div className="value">{data.phone}</div>
                        </div>
                        <div className="items">
                          <div className="title">Rank</div>
                          <div className="value">{data.rank}</div>
                        </div>
                        <div className="items">
                          <div className="title">Licence No.</div>
                          <div className="value">{data.licence_number}</div>
                        </div>
                        <div className="action" onMouseEnter={() =>{
                          setactive_row(data)
                          setactive_row_index(index)
                        }}>
                          <i className="fa fa-ellipsis-h" />
                        </div>
                      </div>
                      <div className="table-row-footer-with-checkbox">
                        <Checkbox title="Crew" />
                        <Checkbox title="Ground" />
                        <Checkbox title="Aircraft" />
                        <Checkbox title="Simulator" />
                        <Checkbox title="Manager" />
                        <Checkbox title="Optimizer" />
                        <Checkbox title="Data Admin" />
                      </div>
                      <TableAction
                        style={active_row_index === index ? { display: "block" } : {}}
                        onMouseLeave={() => setactive_row_index(null)}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>

        {/* add new user form */}
        <div className={manage_user_form ? "" : "hide-element"}>
          <div className="category-title">
            <span className="client-back" onClick={() => closeForm()}>
              {<LeftOutlined />} MANAGE USERS
            </span>
            Add New User & Assign Authorisations
          </div>

          <div className="toggle-form-container">
            <DropDownMenu title="Client" />
            <Text title="Official Email ID" />
            <Text title="Full Name (as per primary document)" character_limit="true" max_character="60" />
            <Text title="Employee ID" />
            <DropDownMenu title="Rank Code" />
            <Text title="Personal Email ID" />
            <Text title="Phone 1" />
            <Text title="Phone 2" />
            <Calender title="Date Of Birth" />
            <Calender title="Date Of Joining" />
            <DropDownMenu title="Fleet code ('All' for non-crew)" />
            <DropDownMenu title="Released/ Trainee" />
            <Text title="Permanent Address" />
            <Text title="Temporary Address" />
            <DropDownMenu title="Base Code" />
            <Text title="Primary License Number" />
            <DropDownMenu title="Responsible Manager" />
            <DropDownMenu title="Active" />
            <Calender title="Leaving Date" />
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
