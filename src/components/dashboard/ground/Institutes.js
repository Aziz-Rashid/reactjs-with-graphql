import React,{useState} from 'react'
import { Switch, Text, DropDownMenu, TableAction, Calender } from "../../formitems/Index";
import { LeftOutlined } from "@ant-design/icons";
const Institutes = () => {
  const [search, setsearch] = useState("")
  const [active_row, setactive_row] = useState(null)
  const [add_new_institute, setadd_new_institute] = useState(false)
  const [active_row_index, setactive_row_index] = useState(null)
  const [row_items, setrow_items] = useState([ {
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
    setadd_new_institute(true)
  };

  const closeForm = () => {
    setadd_new_institute(false)
  };
  console.log(active_row)
  return (
    <div className="animate__animated animate__fadeIn">
        {/* Institute table */}
        <div className={"institutes-container " + (add_new_institute ? "hide-element" : "")}>
          <div className="category-title">Institutes</div>
          <button className="submit-button" onClick={() => add_new()}>
            Add New Institute
          </button>
          <div className="table-body-container">
            <div className="table-body-header">All Institutes</div>
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
                  <input type="text" value={search} onChange={(e) => setsearch(e.target.value)} />
                </div>
              </div>
              {row_items.map((data, index) => {
                if (data.client.toLowerCase().includes(search.toLowerCase())) {
                  return (
                    <div className="table-row-container" key={index}>
                      <div className="table-row-top">
                        <div className="items">
                          <div className="title">INST Code</div>
                          <div className="value">{data.client}</div>
                        </div>
                        <div className="items">
                          <div className="title">Name</div>
                          <div className="value">{data.rank_code}</div>
                        </div>
                        <div className="items">
                          <div className="title">Location</div>
                          <div className="value">{data.rank_name}</div>
                        </div>
                        <div className="items">
                          <div className="title">Approval</div>
                          <div className="value">{data.active}</div>
                        </div>

                        <div className="action" onMouseEnter={() => {
                          setactive_row(data)
                          setactive_row_index(index)
                        }}>
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
        {/* Add new institute form */}
        <div className={add_new_institute ? "" : "hide-element"}>
          <div className="category-title">
            <span className="client-back" onClick={() => closeForm()}>
              {<LeftOutlined />} Institutes
            </span>
            Add New Institute
          </div>

          <div className="toggle-form-container">
            <Text title="Institute Code" placeholder="000777" disabled={true} />
            <Text title="Client" placeholder="Air Asia" disabled={true} />
            <Text title="Name" />
            <Text title="Address" />
            <Text title="Location" />
            <Text title="Upload Approval" placeholder="https://formpage.com/" disabled={true} />
            <Calender title="Approval till" />
            <DropDownMenu title="Active" />
            <Text title="Modified by" placeholder="johndoe@user.com" disabled={true} />
            <Text title="Modified on" placeholder="12/06/2020 " disabled={true} />
            <div className="preview-of-approval">
              <span className="preview-of-approval-description">Preview of Approval</span>
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

export default Institutes
