import React,{useState} from 'react'
import "../../../assets/styles/custom/components/dashboard/Simulator.scss";
import {Switch,Text,TableAction,TextArea,Warning,} from "../../formitems/Index";
import { LeftOutlined } from "@ant-design/icons";

const AttendMeeting = () => {
  const [search, setsearch] = useState('')
  const [request_new_form, setrequest_new_form] = useState(false)
  const [active_row, setactive_row] = useState({})
  const [active_row_index, setactive_row_index] = useState(null)
  const [action_type, setaction_type] = useState("")
  const [row_items, setrow_items] = useState([{
    id: "1",
    date: "19 May 2020",
    venue: "VTC",
    attendees: "Chief Pilot-Training, Capt. Jane Doe",
    subject: "Counseling -un-sat PPC",
  },
  {
    id: "2",
    date: "19 May 2020",
    venue: "VTC",
    attendees: "Chief Pilot-Training, Capt. Jane Doe",
    subject: "Counseling -un-sat PPC",
  },
  {
    id: "3",
    date: "19 May 2020",
    venue: "VTC",
    attendees: "Chief Pilot-Training, Capt. Jane Doe",
    subject: "Counseling -un-sat PPC",
  },])

//  const request_new_form = () => {
//     setrequest_new_form(true)
//   };

  const closeForm = () => {
    setaction_type("")
    console.log(request_new_form,setrequest_new_form,active_row,setrow_items,)
  };

 const action_click = (type) => {
    console.log("action clicked", type);
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
          <div className="category-title">Attend Meeting</div>
          <Warning title="The following is the list of meetings that you have been scheduled for. Select a meeting to sign in." />
          <div className="table-body-container">
            <div className="table-body-header">All Ground Classes</div>
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
                  data.venue
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return (
                    <div className="table-row-container" key={index}>
                      <div className="table-row-top">
                        <div className="items">
                          <div className="title">Date</div>
                          <div className="value">{data.date}</div>
                        </div>
                        <div className="items">
                          <div className="title">Venue</div>
                          <div className="value">{data.venue}</div>
                        </div>
                        <div className="items">
                          <div className="title">Attendees</div>
                          <div className="value">{data.attendees}</div>
                        </div>
                        <div className="items">
                          <div className="title">subject</div>
                          <div className="value">{data.subject}</div>
                        </div>
                        <div
                          className="action"
                          onMouseEnter={() =>{
                            setactive_row(data)
                            setactive_row_index(index)
                          }
                          }
                        >
                          <i className="fa fa-ellipsis-h" />
                        </div>
                      </div>
                      <TableAction
                        action_click={action_click}
                        sign_in={true}
                        style={
                          active_row_index === index
                            ? { display: "block" }
                            : {}
                        }
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
        {/* Ground class sign in form */}
        <div className={action_type !== "" ? "" : "hide-element"}>
          <div className="category-title">
            <span className="client-back" onClick={() => closeForm()}>
              {<LeftOutlined />} Attend Meeting
            </span>
            Sign-In to Meeting
          </div>

          <div className="toggle-form-container">
            {/* input box with prefix */}
            <Text title="Date" placeholder="01 Jun 2020" disabled={true} />
            <Text title="Venue" placeholder="Online" />
            <TextArea
              title="Attendees"
              rows={2}
              className="textarea-box"
              placeholder="Chief Pilot-Training Capt. Jane Doe"
            />
            <TextArea
              title="Subject"
              rows={6}
              className="textarea-box"
              placeholder="Counselling due to unsatisfactory performance in PPC conducted on 25 May 2020. Trainer- Capt. Jane Doe."
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

export default AttendMeeting
