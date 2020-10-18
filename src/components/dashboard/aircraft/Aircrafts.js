import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Switch, TableAction, DropDownMenu, Text } from "../../formitems/Index";
import { LeftOutlined } from "@ant-design/icons";


const AIRCRAFT_QUERY = gql`
  query GetData {
    allAircraft{
      edges{
        node{
          id
          clientCode{
            id
            name
          }
          registration
          fleetCode{
            id
            name
          }
          active
        }
      }
    }
  }
`;


const Aircrafts = () => {

  const [search, setSearch] = useState("");
  const [active_row, setActive_row] = useState({});
  const [active_row_index, setActive_row_index] = useState(null);
  const [add_sim_form, setAdd_sim_form] = useState(false);
  
  const { data } = useQuery(AIRCRAFT_QUERY);

  const add_new = () => {
    setAdd_sim_form(true)
  };

 const closeForm = () => {
    setAdd_sim_form(false)
    console.log(active_row)
 };

    return (
      <div className="animate__animated animate__fadeIn">
        <div className={"simulators-container " + (add_sim_form ? "hide-element" : "")}>
          <div className="category-title">Aircrafts</div>
          <button className="submit-button" onClick={add_new}>
            Add New Aircrafts
          </button>
          <div className="table-body-container">
            <div className="table-body-header">All Aircrafts</div>
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
                    <option value="1">Fleet</option>
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
                  <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
              </div>
              {data && data.allAircraft.edges.map((tableData, index) => {
                if (tableData.node.clientCode.name.toLowerCase().includes(search.toLowerCase())) {
                  return (
                    <div className="table-row-container" key={index}>
                      <div className="table-row-top">
                        <div className="items">
                          <div className="title">Client</div>
                          <div className="value">{tableData.node.clientCode.name}</div>
                        </div>
                        <div className="items">
                          <div className="title">Registration</div>
                          <div className="value">{tableData.node.registration}</div>
                        </div>
                        <div className="items">
                          <div className="title">Fleet</div>
                          <div className="value">{tableData.node.fleetCode.name}</div>
                        </div>
                        <div className="items">
                          <div className="title">Active</div>
                          <div className="value">{tableData.node.active.toString()}</div>
                        </div>
                        <div className="action" onMouseEnter={() => { 
                          setActive_row(data);
                          setActive_row_index(index);
                        }}>
                          <i className="fa fa-ellipsis-h" />
                        </div>
                      </div>
                      <TableAction
                        style={active_row_index === index ? { display: "block" } : {}}
                        onMouseLeave={() => setActive_row_index(null)}
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
        <div className={add_sim_form ? "" : "hide-element"}>

          <div className="category-title">
            <span className="client-back" onClick={() => closeForm()}>
              {<LeftOutlined />} Aircrafts
            </span>
            Add New Aircrafts
          </div>

          <div className="toggle-form-container">
            <Text title="Client" disabled={true} value="Air Asia" />
            <DropDownMenu title="Fleet" />
            <Text title="Aircraft Registration" />
            <Text title="Active" disabled value="Yes" />

            <button className="submit-button">Add</button>
            <button onClick={() => closeForm()} className="cancel-button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
}

export default Aircrafts;