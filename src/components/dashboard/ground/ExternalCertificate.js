import React,{useState} from 'react'
import { Text, DropDownMenu, Warning, Calender, UploadImage } from "../../formitems/Index";
const ExternalCertificate = () => {
  const [search, setsearch] = useState("")
  const [row_items, setrow_items] = useState([ {
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
  },])
  const [fielddata, setfielddata] = useState([{
    filename: "John Doe",
  },
  {
    filename: "John Doe1",
  },
  {
    filename: "John Doe2",
  },])
  return (
    <div className="animate__animated animate__fadeIn">
        <div className="offline-sim-form-trainning-form">
          <div className="category-title">Upload External Certificate</div>
          <div className="toggle-form-container">
            <DropDownMenu placeholder="Email ID" title="Entry any one of the following" />
            <Text placeholder="Please enter Email ID" />
            <Warning title="Verify details (Rank, Name, Fleet & Status) below:" />
            <Text title="Rank" />
            <Text title="Name" />
            <Text title="Fleet" />
            <DropDownMenu placeholder="Released" title="Status" />
            <DropDownMenu placeholder="Simulator" title="Category of Qualification" />
            <DropDownMenu placeholder="Select" title="Qualification" />
            <Text title="Doc Number" placeholder="S + eCode + Issue Date" />
            <Text title="Issuing Authority" />
            <Text title="Data 1" />
            <Text title="Data 2" />
            <Text title="Data 3" />
            <Calender title="Date Achieved" placeholder="DD/MMM/YYYY" />
            <Calender title="Date Valid" placeholder="DD/MMM/YYYY" />
            <Warning title="Upload the image/ pdf of the above qualification: (max 6 images)" />
            <UploadImage data={fielddata} />
            <button className="submit-button">Publish Form</button>

            <button className="cancel-button">Cancel</button>
          </div>
        </div>
      </div>
  )
}

export default ExternalCertificate