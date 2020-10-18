import React,{useState} from 'react'
import { Text, DropDownMenu, UploadLogo } from "../../formitems/Index";
import { LeftOutlined } from "@ant-design/icons";
import airasialogo from "../../../assets/images/client-airasia.png";

const Clients = () => {
  const [openForm, setopenForm] = useState(false)
  const [is_edit, setis_edit] = useState(false)
  const [form_data, setform_data] = useState({
    client_name: "",
    client_department: "",
    header_rh1: "",
    header_rh2: "",
    header_rh3: "",
    form_footer: "",
    date_formate: "",
    contact_person_name: "",
    contact_email: "",
    client_logos: ""})

    const openForms = () => {
      setopenForm(!openForm)
    };
    console.log(setform_data)
  
    const closeForm = () => {
      setopenForm(false)
    };
  
  return (
    <div className="animate__animated animate__fadeIn">
        <div
          className={
            "category-title " + (openForm ? "hide-element" : "")
          }
        >
          Clients
        </div>
        {/* Client listing code */}
        <div
          className={
            "clients-container " + (openForm ? "hide-element" : "")
          }
        >
          <button
            onClick={() => openForms()}
            className="add-new-client-button"
          >
            Add New Client
          </button>
          <div className="clients-list">
            <div className="clients-list-header">Manage Existing Clients</div>
            <ul>
              <li
                className="client-list-item"
                onClick={() =>{
                  setopenForm(!openForm)
                  setis_edit(!is_edit)
                }
                }
              >
                <img className="client-logo" src={airasialogo} alt=""></img>
                <div className="client-name">Air Asia</div>
              </li>
              <div className="client-list-divider"></div>
              <li
                className="client-list-item"
                onClick={() =>{
                  setopenForm(!openForm)
                  setis_edit(!is_edit)
                }
                }
              >
                <img
                  className="client-logo" 
                   src={require("../../../assets/images/Image 2.png")}
                  alt=""/>
                <div className="client-name">One Air</div>
              </li>
              <div className="client-list-divider"></div>
              <li
                className="client-list-item"
                onClick={() =>{
                  setopenForm(!openForm)
                  setis_edit(!is_edit)
                }
                }
              >
                <img
                  className="client-logo" alt=""
                  src={require("../../../assets/images/Image 4.png")}
                ></img>
                <div className="client-name">Indigo</div>
              </li>
              <div className="client-list-divider"></div>
              <li
                className="client-list-item"
                onClick={() =>{
                  setopenForm(!openForm)
                  setis_edit(!is_edit)
                }
                }
              >
                <img
                  className="client-logo" alt=""
                  src={require("../../../assets/images/Image 5.png")}
                ></img>
                <div className="client-name">Vistara</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Add client form */}

        <div
          className={
            "category-title " + (openForm ? "" : "hide-element")
          }
        >
          <span className="client-back" onClick={() => closeForm()}>
            {<LeftOutlined />} CLIENT
          </span>
          {is_edit ? "Manage Existing Clients" : "Add New Client"}
        </div>

        <div
          className={
            "toggle-form-container " +
            (openForm ? "" : "hide-element")
          }
        >
          <Text
            title="Client Name"
            character_limit={true}
            max_character="40"
            value={form_data.client_name}
          />
          <Text title="Client department" value={form_data.client_department} />
          <Text title="Header RH1" value={form_data.header_rh1} />
          <Text title="Header RH2" value={form_data.header_rh2} />
          <Text title="Header RH3" value={form_data.header_rh3} />
          <Text title="Form Footer" value={form_data.form_footer} />
          <DropDownMenu title="Date Format" value={form_data.date_formate} />
          <Text
            title="Contact Person Name"
            value={form_data.contact_person_name}
          />
          <Text title="Contact Email" value={form_data.contact_email} />
          <UploadLogo
            title="Upload high resolution client logo"
            value={form_data.client_logos}
          />

          <button className="submit-button">
            {is_edit ? "Update" : "Add"}
          </button>
          <button onClick={() => closeForm()} className="cancel-button">
            Cancel
          </button>
        </div>
      </div>
  )
}

export default Clients
