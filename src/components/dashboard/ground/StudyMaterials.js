import React, { useState } from 'react'
import { Switch, Text, DropDownMenu, UploadLogo, TableAction } from "../../formitems/Index";
import { LeftOutlined } from "@ant-design/icons";
const StudyMaterials = () => {
  const [search, setsearch] = useState("")
  const [active_row, setactive_row] = useState({})
  const [active_row_index, setactive_row_index] = useState(null)
  const [add_new_study_material, setadd_new_study_material] = useState(false)
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
    setadd_new_study_material(true)
  };

  const closeForm = () => {
    setadd_new_study_material(false)
  };
  return (
    <div className="animate__animated animate__fadeIn">
      {/* Study Material Table */}
      <div className={"study-materials-container " + (add_new_study_material ? "hide-element" : "")}>
        <div className="category-title">Study Material</div>
        <button className="submit-button" onClick={() => add_new()}>
          Add New Study Material
          </button>
        <div className="table-body-container">
          <div className="table-body-header">All Study Materials</div>
          <div className="client-list-divider"></div>
          <div className="table-container">
            <div className="table-header-container">
              <div className="display-record">
                <select>
                  <option value="1">Sort by</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className="display-record">
                <select>
                  <option value="1">Sort by</option>
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
                        <div className="title">Fleet</div>
                        <div className="value">{data.client}</div>
                      </div>
                      <div className="items">
                        <div className="title">Training Type</div>
                        <div className="value">{data.rank_code}</div>
                      </div>
                      <div className="items">
                        <div className="title">Study Material</div>
                        <div className="value">{data.rank_name}</div>
                      </div>
                      <div className="items">
                        <div className="title">Active</div>
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
      {/* Add new study material form */}
      <div className={add_new_study_material ? "" : "hide-element"}>
        <div className="category-title">
          <span className="client-back" onClick={() => closeForm()}>
            {<LeftOutlined />} Study Material
            </span>
            Add New Study Material
          </div>

        <div className="toggle-form-container">
          <DropDownMenu title="Fleet" />
          <Text title="Training Category" placeholder="Ground" disabled={true} />
          <Text title="Training/Material Name" />
          <UploadLogo title="Upload PDF" />
          <button className="submit-button">Add</button>
          <button onClick={() => closeForm()} className="cancel-button">
            Cancel
            </button>
        </div>
      </div>
    </div>
  )
}

export default StudyMaterials