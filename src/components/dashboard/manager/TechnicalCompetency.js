import React,{useState} from 'react'
import { Switch, Text, DropDownMenu, TableAction, TextArea } from "../../formitems/Index";
import { LeftOutlined } from "@ant-design/icons";
const TechnicalCompetency = () => {
 const [search, setsearch] = useState("")
 const [add_new_technical_comp, setadd_new_technical_comp] = useState(false)
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
  setadd_new_technical_comp(true)
};

const closeForm = () => {
  setadd_new_technical_comp(false)
};
  return (
    <div className="animate__animated animate__fadeIn">
        {/* Technical Competency Table */}
        <div className={"technical-competency-container " + (add_new_technical_comp ? "hide-element" : "")}>
          <div className="category-title">Technical Competency</div>
          <button className="submit-button" onClick={add_new}>
            Add New Technical Competency
          </button>
          <div className="table-body-container">
            <div className="table-body-header">Add New Technical Competency</div>

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
                    <option value="1">All Phases</option>
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
                  <input type="text" value={search} onChange={(e) => setsearch(e.target.value)} />
                </div>
              </div>
              {row_items.map((data, index) => {
                if (data.client.toLowerCase().includes(search.toLowerCase())) {
                  return (
                    <div className="table-row-container" key={index}>
                      <div className="table-row-top">
                        <div className="items">
                          <div className="title">Phase</div>
                          <div className="value">{data.client}</div>
                        </div>
                        <div className="items">
                          <div className="title">Technical Competency Description</div>

                          <div className="value">{data.rank_code}</div>
                        </div>
                        <div className="items">
                          <div className="title">Active</div>
                          <div className="value">{data.rank_name}</div>
                        </div>

                        <div
                          className="action"
                          onMouseEnter={() =>{
                            setactive_row(data)
                            setactive_row_index(index)
                          }}
                        >
                          <i className="fa fa-ellipsis-h" />
                        </div>
                      </div>
                      <TableAction
                        style={active_row_index == index ? { display: "block" } : {}}
                        onMouseLeave={() => setactive_row_index(index)}
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
        {/* add new competency form */}
        <div className={add_new_technical_comp ? "" : "hide-element"}>
          <div className="category-title">
            <span className="client-back" onClick={() => closeForm()}>
              {<LeftOutlined />} Technical Competency
            </span>
            Add New Technical Competency
          </div>

          <div className="toggle-form-container">
            <Text title="Technical Competency Code" disabled={true} placeholder="00776654" />
            <DropDownMenu title="Phase" />
            <TextArea title="Description" rows="6" />
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

export default TechnicalCompetency