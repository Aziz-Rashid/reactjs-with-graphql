import React,{useState} from 'react'
import { LeftOutlined } from "@ant-design/icons";
import { Text, DropDownMenu, Switch, TableAction, NumberBox, TextArea } from "../../formitems/Index";
const Qualifications = () => {
  const [search, setsearch] = useState("")
  const [add_new_qualification, setadd_new_qualification] = useState(false)
  const [active_row, setactive_row] = useState({})
  const [active_row_index, setactive_row_index] = useState(null)
  const [row_items, setrow_items] = useState([{
    id: "1",
    client: "One Air",
    q_code: "ATPL",
    qualification: "Airline Transport Pilot Licence",
    data1: "Current Rating",
    data2: "Status (PIC/ P2)",
    data3: "Restrictions",
    validity: "30",
    category: "Licence",
    subcategory: "Routine",
    footer:
      "Obtain documents and form from crew 75 days to expiry. Apply for renewal by 60 days to expiry and designate the staff who will be responsible for the follow up for the renewal.",
  },
  {
    id: "2",
    client: "Abc Client Inc",
    q_code: "ATPL",
    qualification: "Airline Transport Pilot Licence",
    data1: "Current Rating",
    data2: "Status (PIC/ P2)",
    data3: "Restrictions",
    validity: "30",
    category: "Licence",
    subcategory: "Routine",
    footer:
      "Obtain documents and form from crew 75 days to expiry. Apply for renewal by 60 days to expiry and designate the staff who will be responsible for the follow up for the renewal.",
  },
  {
    id: "3",
    client: " Def Client Inc",
    q_code: "ATPL",
    qualification: "Airline Transport Pilot Licence",
    data1: "Current Rating",
    data2: "Status (PIC/ P2)",
    data3: "Restrictions",
    validity: "30",
    category: "Licence",
    subcategory: "Routine",
    footer:
      "Obtain documents and form from crew 75 days to expiry. Apply for renewal by 60 days to expiry and designate the staff who will be responsible for the follow up for the renewal.",
  },
  {
    id: "4",
    client: "Ghi Client Inc",
    q_code: "ATPL",
    qualification: "Airline Transport Pilot Licence",
    data1: "Current Rating",
    data2: "Status (PIC/ P2)",
    data3: "Restrictions",
    validity: "30",
    category: "Licence",
    subcategory: "Routine",
    footer:
      "Obtain documents and form from crew 75 days to expiry. Apply for renewal by 60 days to expiry and designate the staff who will be responsible for the follow up for the renewal.",
  },
  {
    id: "5",
    client: "Jkl Client Inc",
    q_code: "ATPL",
    qualification: "Airline Transport Pilot Licence",
    data1: "Current Rating",
    data2: "Status (PIC/ P2)",
    data3: "Restrictions",
    validity: "30",
    category: "Licence",
    subcategory: "Routine",
    footer:
      "Obtain documents and form from crew 75 days to expiry. Apply for renewal by 60 days to expiry and designate the staff who will be responsible for the follow up for the renewal.",
  },
  {
    id: "6",
    client: "Mnk Client Inc",
    q_code: "ATPL",
    qualification: "Airline Transport Pilot Licence",
    data1: "Current Rating",
    data2: "Status (PIC/ P2)",
    data3: "Restrictions",
    validity: "30",
    category: "Licence",
    subcategory: "Routine",
    footer:
      "Obtain documents and form from crew 75 days to expiry. Apply for renewal by 60 days to expiry and designate the staff who will be responsible for the follow up for the renewal.",
  },
  {
    id: "7",
    client: "Opq Client Inc",
    q_code: "ATPL",
    qualification: "Airline Transport Pilot Licence",
    data1: "Current Rating",
    data2: "Status (PIC/ P2)",
    data3: "Restrictions",
    validity: "30",
    category: "Licence",
    subcategory: "Routine",
    footer:
      "Obtain documents and form from crew 75 days to expiry. Apply for renewal by 60 days to expiry and designate the staff who will be responsible for the follow up for the renewal.",
  },])

  const add_new_qualifications = () => {
    setadd_new_qualification(true)
    console.log(setactive_row,setrow_items)
  };

  const closeForm = () => {
    setadd_new_qualification(false)
  };
  return (
    <div className="animate__animated animate__fadeIn">
    <div className={add_new_qualification ? "hide-element" : ""}>
      <div className="category-title">Qualifications</div>
      <button className="submit-button" onClick={() => add_new_qualifications()}>
        Add New Qualifications
      </button>
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
                      <div className="title">Q. Code</div>
                      <div className="value">{data.q_code}</div>
                    </div>
                    <div className="items">
                      <div className="title">Qualification</div>
                      <div className="value">{data.qualification}</div>
                    </div>
                    <div className="items">
                      <div className="title">Data 1</div>
                      <div className="value">{data.data1}</div>
                    </div>
                    <div className="items">
                      <div className="title">Data 2</div>
                      <div className="value">{data.data2}</div>
                    </div>
                    <div className="items">
                      <div className="title">Data 3</div>
                      <div className="value">{data.data3}</div>
                    </div>
                    <div className="items">
                      <div className="title">Validity</div>
                      <div className="value">{data.validity}</div>
                    </div>
                    <div className="items">
                      <div className="title">Category</div>
                      <div className="value">{data.category}</div>
                    </div>
                    <div className="items">
                      <div className="title">Sub-Category</div>
                      <div className="value">{data.subcategory}</div>
                    </div>
                    <div className="action" onMouseEnter={() =>{
                        active_row(data)
                        active_row_index(index)
                    }}>
                      <i className="fa fa-ellipsis-h" />
                    </div>
                  </div>
                  <div className="table-row-footer">{data.footer}</div>
                  <TableAction
                    style={active_row_index === index ? { display: "block" } : {}}
                    onMouseLeave={() => setactive_row_index(null)}/>
                </div>
              ); } })}
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
    <div className={add_new_qualification ? "" : "hide-element"}>
      <div className="category-title">
        <span className="client-back" onClick={() => closeForm()}>
          {<LeftOutlined />} QUALIFICATIONS
        </span>
        Add New Qualification
      </div>

      <div className="toggle-form-container">
        <DropDownMenu title="Client" />
        <Text title="Q. Code" />
        <Text title="Qualification Name" />
        <Text title="Data 1" />
        <Text title="Data 2" />
        <Text title="Data 3" />
        <DropDownMenu title="Manager" />
        <NumberBox title="Validity" placeholder="Add a number between 30 to 9999" min="30" max="9999" />
        <DropDownMenu title="Category" />
        <DropDownMenu title="Sub-Category" />
        <TextArea title="Renewal Procedure" character_limit="true" max_character="250" />

        <button className="submit-button">Add</button>
        <button onClick={() => closeForm()} className="cancel-button">
          Cancel
        </button>
      </div>
    </div>
  </div>
  )
}

export default Qualifications