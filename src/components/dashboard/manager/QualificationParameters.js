import React, { useState } from 'react'
import { Switch, TableAction } from "../../formitems/Index";
const QualificationParameters = () => {
  const [search, setsearch] = useState("")
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

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="qualification-parameters-container">
        <div className="category-title">Qualifications</div>

        <div className="table-body-container">
          <div className="table-body-header">All Qualifications</div>
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
                        <div className="title">Q. Code </div>
                        <div className="value">{data.rank_code}</div>
                      </div>
                      <div className="items">
                        <div className="title">Qualification</div>
                        <div className="value">{data.rank_name}</div>
                      </div>
                      <div className="items">
                        <div className="title">Data 1</div>
                        <div className="value">{data.active}</div>
                      </div>
                      <div className="items">
                        <div className="title">Data 2</div>
                        <div className="value">{data.active}</div>
                      </div>
                      <div className="items">
                        <div className="title">Data 3</div>
                        <div className="value">{data.active}</div>
                      </div>
                      <div className="items">
                        <div className="title">Validity</div>
                        <div className="value">{data.active}</div>
                      </div>
                      <div className="items">
                        <div className="title">Category</div>
                        <div className="value">{data.active}</div>
                      </div>
                      <div className="items">
                        <div className="title">Sub-Category</div>
                        <div className="value">{data.active}</div>
                      </div>

                      <div className="action" onMouseEnter={() =>{
                        setactive_row(data)
                        setactive_row_index(index)
                      }}>
                        <i className="fa fa-ellipsis-h" />
                      </div>
                    </div>
                    <div className="summary-news-info">
                      <p className="summary-news-info-text">
                        Obtain documents and form from crew 75 days to expiry. Apply for renewal by 60 days to expiry and designate the staff who
                        will be responsible for the follow up for the renewal.
                    </p>
                    </div>
                    <TableAction
                      style={active_row_index === index ? { display: "block" } : {}}
                      onMouseLeave={() => this.setState({ active_row_index: null })}
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
    </div>
  )
}

export default QualificationParameters