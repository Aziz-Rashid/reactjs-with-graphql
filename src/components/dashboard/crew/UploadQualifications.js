import React,{useState} from 'react'
import {Text,DropDownMenu,Warning,Calender,UploadImage} from "../../formitems/Index";
const UploadQualifications = () => {
  const [fielddata, setfielddata] = useState([{
    filename: "John Doe",
  },
  {
    filename: "John Doe1",
  },
  {
    filename: "John Doe2",
  },])
  console.log(setfielddata)
  return (
    <div className="animate__animated animate__fadeIn">
        <div className="category-title">Upload Qualifications</div>
        <div className="toggle-form-container">
          <Text title="Client" disabled={true} value="Air Asia" />
          <Text title="Name" disabled={true} value="John Doe" />
          <Text title="Crew ID" disabled={true} value="Johndoe@client.com" />
          <Text title="Fleet" disabled={true} value="A320" />
          <Text title="Rank" disabled={true} value="Pilot in Command" />
          <Text title="Status" disabled={true} value="Released" />
          <Warning title="Enter details of the qualification you wish to upload." />
          <DropDownMenu title="Qualification Category" />
          <DropDownMenu title="Qualification Type" />
          <Text title="Document Number" disabled={true} />
          <Text title="Issuing Authority" />
          <Text title="TblQuList (Caption1)" />
          <Text title="TblQuList (Caption2)" />
          <Text title="TblQuList (Caption3)" />
          <Calender title="Date Achieved" />
          <Calender title="Date Valid" />
          <Warning title="Upload the image/ pdf of the above qualification: (max 6 images)" />
          <UploadImage data={fielddata} />
          <button className="submit-button">Add</button>
          <button className="cancel-button">Cancel</button>
        </div>
      </div>
  )
}

export default UploadQualifications
