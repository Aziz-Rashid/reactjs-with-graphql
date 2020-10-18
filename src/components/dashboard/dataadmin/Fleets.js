import React,{useState} from 'react'
import { LeftOutlined } from "@ant-design/icons";
import { Text, DropDownMenu, Switch, TableAction } from "../../formitems/Index";

const Fleets = () => {
  const [add_new_fleet, setadd_new_fleet] = useState(false)
  const [active_row, setactive_row] = useState({})
  const [active_row_index, setactive_row_index] = useState(null)
  const [search, setsearch] = useState("")
  const [row_items, setrow_items] = useState([ {
    id: "1",
    client: "Client Inc",
    aircraft_code: "A320",
    aircraft_name: "AirbusA320",
    active: "Yes",
  },
  {
    id: "2",
    client: "Abc Client Inc",
    aircraft_code: "A320",
    aircraft_name: "AirbusA320",
    active: "Yes",
  },
  {
    id: "3",
    client: " Def Client Inc",
    aircraft_code: "A320",
    aircraft_name: "AirbusA320",
    active: "Yes",
  },
  {
    id: "4",
    client: "Ghi Client Inc",
    aircraft_code: "A320",
    aircraft_name: "AirbusA320",
    active: "Yes",
  },
  {
    id: "5",
    client: "Jkl Client Inc",
    aircraft_code: "A320",
    aircraft_name: "AirbusA320",
    active: "Yes",
  },
  {
    id: "6",
    client: "Mnk Client Inc",
    aircraft_code: "A320",
    aircraft_name: "AirbusA320",
    active: "Yes",
  },
  {
    id: "7",
    client: "Opq Client Inc",
    aircraft_code: "A320",
    aircraft_name: "AirbusA320",
    active: "Yes",
  },])

  const add_new_fleets = () => {
    setadd_new_fleet(true)
  };

  const closeForm = () => {
    setadd_new_fleet(false)
    console.log(active_row,setrow_items)
  };
  return (
    <div className="animate__animated animate__fadeIn">
        {/* Fleet Table */}
        <div className={add_new_fleet ? "hide-element" : ""}>
          <div className="category-title">Fleets</div>
          <button className="submit-button" onClick={() => add_new_fleets()}>
            Add New Fleet
          </button>
          <div className="table-body-container">
            <div className="table-body-header">All Fleets</div>
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
                          <div className="title">Client</div>
                          <div className="value">{data.client}</div>
                        </div>
                        <div className="items">
                          <div className="title">Aircraft code</div>
                          <div className="value">{data.aircraft_code}</div>
                        </div>
                        <div className="items">
                          <div className="title">Aircraft Name</div>
                          <div className="value">{data.aircraft_name}</div>
                        </div>
                        <div className="items">
                          <div className="title">Active</div>
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
                        style={active_row_index === index ? { display: "block" } : {}}
                        onMouseLeave={() => setactive_row_index(null)}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="print-email-container">
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
        {/* Add new fleet form */}
        <div className={add_new_fleet ? "" : "hide-element"}>
          <div className="category-title">
            <span className="client-back" onClick={() => closeForm()}>
              {<LeftOutlined />} FLEETS
            </span>
            Add New Fleet
          </div>
          <div className="toggle-form-container">
            <DropDownMenu title="Client" />
            <Text title="Aircraft Code" />
            <Text title="Aircraft Name" />
            <DropDownMenu title="Active" />
            <button className="submit-button">Add</button>
            <button onClick={() => closeForm()} className="cancel-button">
              Cancel
            </button>
          </div>
        </div>
      </div>
  )
}

export default Fleets

