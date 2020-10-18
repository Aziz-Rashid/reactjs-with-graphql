import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Switch, TableAction, Text, DropDownMenu, UploadLogo } from "../../formitems/Index";
import { LeftOutlined } from "@ant-design/icons";

const PRESENTATION_QUERY = gql`
 query GetPreData {
 allPresentation{
  edges{
    node{
      id
      name
      category
      active
      aircraftCode{
        id
        name
      }
    }
  }
}
}
`;

const Presentations = () => {

  const[search, setSearch] = useState("");
  const[active_row, setActive_row] = useState({});
  const[active_row_index, setActive_row_index] = useState(null);
  const[add_pre_form, setAdd_pre_form] = useState(false);
  
  const { data } = useQuery(PRESENTATION_QUERY);


  const add_new = () => {
    setAdd_pre_form(true)
    console.log(active_row)
  };

  const closeForm = () => {
    setAdd_pre_form(false)
  };

    return (
      <div className="animate__animated animate__fadeIn">
        <div className={"presentations-container " + (add_pre_form ? "hide-element" : "")}>
          <div className="category-title">Presentations</div>
          <button className="submit-button" onClick={add_new}>
            Add New Presentation
          </button>
          <div className="table-body-container">
            <div className="table-body-header">All Presentations</div>
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
                  <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
              </div>
              {data && data.allPresentation.edges.map((tableData, index) => {
                if (tableData.node.aircraftCode.name.toLowerCase().includes(search.toLowerCase())) {
                  return (
                    <div className="table-row-container" key={index}>
                      <div className="table-row-top">
                        <div className="items">
                          <div className="title">Fleet</div>
                          <div className="value">{tableData.node.aircraftCode.name}</div>
                        </div>
                        <div className="items">
                          <div className="title">Category</div>
                          <div className="value">{tableData.node.category}</div>
                        </div>
                        <div className="items">
                          <div className="title">Presentation</div>
                          <div className="value">{tableData.node.name}</div>
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
        <div className={add_pre_form ? "" : "hide-element"}>
          <div className="category-title">
            <span className="client-back" onClick={() => closeForm()}>
              {<LeftOutlined />} Presentations
            </span>
            Add New Presentations
          </div>

          <div className="toggle-form-container">
            <DropDownMenu title="Fleet" />
            <Text title="Training Type" value="Aircraft" />
            <Text title="Training / Material Name" />
            <UploadLogo title="Upload Presentation" />
            <Text title="Password" />
            <Text title="Confirm Password" />
            <button className="submit-button">Add</button>
            <button onClick={() => closeForm()} className="cancel-button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );

}

export default Presentations;
