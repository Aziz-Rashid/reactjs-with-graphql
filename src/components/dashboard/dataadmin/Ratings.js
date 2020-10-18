import React,{useState} from 'react'
import { LeftOutlined } from "@ant-design/icons";
import { Text, DropDownMenu, Switch, TableAction } from "../../formitems/Index";

const Ratings = () => {
  const [search, setsearch] = useState("")
  const [add_new_rating, setadd_new_rating] = useState(false)
  const [active_row, setactive_row] = useState({})
  const [active_row_index, setactive_row_index] = useState(null)
  const [row_items, setrow_items] = useState([{
    id: "1",
    aircraft_code: "A320",
    aircraft_name: "AirbusA320",
    active: "Yes",
  },
  {
    id: "2",
    aircraft_code: "B320",
    aircraft_name: "AirbusA320",
    active: "Yes",
  },
  {
    id: "3",
    aircraft_code: "C320",
    aircraft_name: "AirbusA320",
    active: "Yes",
  },
  {
    id: "4",
    aircraft_code: "X320",
    aircraft_name: "AirbusA320",
    active: "Yes",
  },
  {
    id: "5",
    aircraft_code: "E320",
    aircraft_name: "AirbusA320",
    active: "Yes",
  },
  {
    id: "6",
    aircraft_code: "F320",
    aircraft_name: "AirbusA320",
    active: "Yes",
  },
  {
    id: "7",
    aircraft_code: "G320",
    aircraft_name: "AirbusA320",
    active: "Yes",
  },])
  const add_new_ratings = () => {
    setadd_new_rating(true)
    
  };
  
  const closeForm = () => {
    setadd_new_rating(false)
    console.log(active_row,setrow_items)
  };
  return (
    <div className="animate__animated animate__fadeIn">
    {/* Rating table */}
    <div className={add_new_rating ? "hide-element" : ""}>
      <div className="category-title">Ratings</div>
      <button onClick={() => add_new_ratings()} className="submit-button">
        Add New Rating
      </button>
      <div className="table-body-container">
        <div className="table-body-header">All Rating</div>
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
            if (data.aircraft_code.toLowerCase().includes(search.toLowerCase())) {
              return (
                <div className="table-row-container" key={index}>
                  <div className="table-row-top">
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
    {/* Add new rating form */}
    <div className={add_new_rating ? "" : "hide-element"}>
      <div className="category-title">
        <span className="client-back" onClick={() => closeForm()}>
          {<LeftOutlined />} RATINGS
        </span>
        Add New Rating
      </div>

      <div className="toggle-form-container">
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

export default Ratings