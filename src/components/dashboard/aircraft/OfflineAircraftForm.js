import React,{useState} from 'react'
import { Text, DropDownMenu, Calender, Warning, UploadImage } from "../../formitems/Index";


function OfflineAircraftForm() {
  const [filedata, setfiledata] = useState([{filename: "John Doe1"},{filename: "John Doe2"},{filename: "John Doe3"}])
  console.log(setfiledata)
  return (
    <div className="animate__animated animate__fadeIn">
    <div className="offline-sim-form-trainning-form">
      <div className="category-title">Upload Offline Simulator Form</div>
      <div className="toggle-form-container">
        <Warning title="Verify details (Rank, Name, Fleet & Status) below:" />
        <Text title="Rank" disabled value="Flying Officer" />

        <Text title="Name" disabled value="John Doe" />
        <Text title="Fleet" disabled value="Flying Officer" />

        <Text title="Status" disabled value="Released" />

        <Text title="Category of Qualification" disabled value="Released" />
        <DropDownMenu placeholder="Select" title="Qualification" />
        <Text title="Doc Number" disabled placeholder="S + eCode + Issue Date" />
        <Text title="Issuing Authority" disabled value="AirAsia" />
        <Text title="Data 1" />
        <Text title="Data 2" />
        <Text title="Data 3" />
        <Calender title="Date Achieved" placeholder="DD/MMM/YYYY" />
        <Calender title="Date Valid" placeholder="DD/MMM/YYYY" />
        <Warning title="Upload the image/ pdf of the above qualification: (max 6 images)" />

        <UploadImage data={filedata} />

        <button className="submit-button">Add</button>
        <button className="cancel-button">Cancel</button>
      </div>
    </div>
  </div>
  )
}

export default OfflineAircraftForm

