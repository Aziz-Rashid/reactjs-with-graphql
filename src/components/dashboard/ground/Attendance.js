import React,{useState} from 'react'
import { DropDownMenu, TextArea, Calender, TableAction, Time } from "../../formitems/Index";
import { LeftOutlined } from "@ant-design/icons";
const Attendance = () => {
  const [search, setsearch] = useState("")
  const [active_row, setactive_row] = useState({})
  const [add_new_attendance, setadd_new_attendance] = useState(false)
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
    setadd_new_attendance(true)
  };
  
  const closeForm = () => {
    setadd_new_attendance(false)
  };
  return (
    <div className="animate__animated animate__fadeIn">
        {/* Attendance Table */}
        <div className={"attendance-container " + (add_new_attendance ? "hide-element" : "")}>
          <div className="category-title">Attendance</div>
          <button className="submit-button" onClick={() => add_new()}>
            Add New Attendance
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
                  <span>Show</span>
                  <select>
                    <option value="1">Select Fleet</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <span>records</span>
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
                          <div className="title">Fleet</div>
                          <div className="value">{data.client}</div>
                        </div>
                        <div className="items">
                          <div className="title">Date</div>
                          <div className="value">{data.rank_code}</div>
                        </div>
                        <div className="items">
                          <div className="title">Time</div>
                          <div className="value">{data.rank_name}</div>
                        </div>
                        <div className="items">
                          <div className="title">Training Name</div>
                          <div className="value">{data.rank_code}</div>
                        </div>
                        <div className="items">
                          <div className="title">Vanue</div>
                          <div className="value">{data.rank_name}</div>
                        </div>
                        <div className="items">
                          <div className="title">Location</div>
                          <div className="value">{data.active}</div>
                        </div>
                        <div className="action" onMouseEnter={() =>{
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
        {/* Add new Attendance form */}
        <div className={add_new_attendance ? "" : "hide-element"}>
          <div className="category-title">
            <span className="client-back" onClick={() => closeForm()}>
              {<LeftOutlined />} Attendance
            </span>
            Add New Attendance
          </div>

          <div className="toggle-form-container">
            <DropDownMenu title="Select Attendance Sheet" />
            <DropDownMenu title="Fleet" />
            <DropDownMenu title="Ground Training" />
            <Calender title="Date of Training" />
            <Time title="Start Time" />
            <DropDownMenu title="Venue" />
            <TextArea title="Message to trainees" rows={6} />
          </div>
        </div>

        {/* Attendance Sheet Trainers*/}

        <div className={add_new_attendance ? "" : "hide-element"}>
          <div className="category-title">Attendance Sheet</div>

          <div className="toggle-form-container">
            <div className="attendance-sheet-title">Trainers</div>
            <div className="input-icon-container">
              <DropDownMenu title="Trainer 1" />
              <button className="trash-button trash-button-extra-properties">
                <i className="fa fa-trash" />
              </button>
            </div>
            <button className="add-button">
              <i className="fa fa-plus" /> Add More
            </button>
          </div>
        </div>

        {/* Attendance Sheet Trainees*/}

        <div className={add_new_attendance ? "" : "hide-element"}>
          <div className="toggle-form-container">
            <div className="attendance-sheet-title">Trainees</div>
            <div className="input-icon-container">
              <DropDownMenu title="Trainee 1" />
              <button className="trash-button trash-button-extra-properties">
                <i className="fa fa-trash" />
              </button>
            </div>
            <input className="attendance-input-field" type="email" placeholder="Email:"></input>
            <input className="attendance-input-field" type="text" placeholder="Phone:"></input>

            <button className="add-button">
              <i className="fa fa-plus" /> Add More
            </button>
          </div>
        </div>

        {/* Form button*/}

        <div className={add_new_attendance ? "" : "hide-element"}>
          <div className="toggle-form-container">
            <button className="submit-button">Save</button>
            <button onClick={() => closeForm()} className="cancel-button">
              Cancel
            </button>
          </div>
        </div>
      </div>
  )
}

export default Attendance