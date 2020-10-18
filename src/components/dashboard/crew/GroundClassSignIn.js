import React,{useState} from 'react'
import "../../../assets/styles/custom/components/dashboard/Simulator.scss";
import {Switch,Text,DropDownMenu,TableAction,TextArea,Warning} from "../../formitems/Index";
import { LeftOutlined } from "@ant-design/icons";
function GroundClassSignIn() {
  const [search, setsearch] = useState("")
  const [request_new_form, setrequest_new_form] = useState(false)
  const [active_row, setactive_row] = useState({})
  const [active_row_index, setactive_row_index] = useState(null)
  const [action_type, setaction_type] = useState("")
  const [row_items, setrow_items] = useState([{
    id: "1",
    fleet: "A320",
    date: "19 May 2020",
    time: "09:00",
    training_name: "Technical Refresher",
    venue: "VTC",
    location: "Gurgaon",
  },
  {
    id: "2",
    fleet: "A320",
    date: "19 May 2020",
    time: "09:00",
    training_name: "Technical Refresher",
    venue: "VTC",
    location: "Gurgaon",
  },
  {
    id: "3",
    fleet: "A320",
    date: "19 May 2020",
    time: "09:00",
    training_name: "Technical Refresher",
    venue: "VTC",
    location: "Gurgaon",
  },])

  // const request_new_form = () => {
  //   setrequest_new_form(true)
  // };

  const closeForm = () => {
    setaction_type("")
    console.log(request_new_form,setrequest_new_form,active_row,setrow_items)
  };

  const action_click = (type) => {
    setaction_type(type)
  };

  return (
    <div className="animate__animated animate__fadeIn">
        {/* Ground Sign In table */}
        <div
          className={
            "fround-training-forms-contaoner " +
            (action_type !== "" ? "hide-element" : "")
          }
        >
          <div className="category-title">Ground Class Sign In</div>
          <Warning title="The following is the list of ground class that you have been scheduled for. Select a class to sign in." />
          <div className="table-body-container">
            <div className="table-body-header">All Ground Training Forms</div>
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
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                  />
                </div>
              </div>
              {row_items.map((data, index) => {
                if (
                  data.fleet
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return (
                    <div className="table-row-container" key={index}>
                      <div className="table-row-top">
                        <div className="items">
                          <div className="title">Fleet</div>
                          <div className="value">{data.fleet}</div>
                        </div>
                        <div className="items">
                          <div className="title">Date</div>
                          <div className="value">{data.date}</div>
                        </div>
                        <div className="items">
                          <div className="title">Time</div>
                          <div className="value">{data.time}</div>
                        </div>
                        <div className="items">
                          <div className="title">Training Name</div>
                          <div className="value">{data.training_name}</div>
                        </div>
                        <div className="items">
                          <div className="title">Venue</div>
                          <div className="value">{data.venue}</div>
                        </div>
                        <div className="items">
                          <div className="title">Location</div>
                          <div className="value">{data.location}</div>
                        </div>

                        <div
                          className="action"
                          onMouseEnter={() =>{
                            setactive_row(data)
                            setactive_row_index(index) }}
                        >
                          <i className="fa fa-ellipsis-h" />
                        </div>
                      </div>
                      <TableAction
                        action_click={action_click}
                        view={true}
                        sign_in={true}
                        style={
                          active_row_index === index
                            ? { display: "block" }
                            : {}
                        }
                        onMouseLeave={() =>
                          setactive_row_index(null)
                        }
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
        {/* Ground class sign in form */}
        <div className={action_type !== "" ? "" : "hide-element"}>
          <div className="category-title">
            <span className="client-back" onClick={() => closeForm()}>
              {<LeftOutlined />} GROUND CLASS SIGN IN
            </span>
            View Ground Training
          </div>

          <div className="toggle-form-container">
            {/* input box with prefix */}
            <Text title="Fleet" placeholder="A320" disabled={true} />
            <Text
              title="Ground Training"
              placeholder="Technical Researcher"
              disabled={true}
            />
            <DropDownMenu title="Fleet" />
            <Text title="Date Of Training" placeholder="" disabled={true} />
            <Text title="Start Time" placeholder="10:00" disabled={true} />
            <Text
              title="Venue"
              placeholder="XYZ Training Center, New Delhi"
              disabled={true}
            />
            <TextArea
              title="Message to Trainees"
              rows={6}
              className="textarea-box"
              placeholder="Reporting time is 9:30. Please carry your previous training record."
              disabled={true}
            />
          </div>

          <div
            className={
              "toggle-form-container " +
              (action_type === "sign_in" ? "" : "hide-element")
            }
          >
            {/* input box with prefix */}
            <div className="category-title">Sign in this box</div>
            <TextArea title="" rows={6} className="textarea-box" />
            <Warning title="Note: Your location and IP Address will be recorded."></Warning>
            <button className="submit-button">Sign In</button>
          </div>
        </div>
      </div>
  )
}

export default GroundClassSignIn