import React,{useState} from 'react'
import { Text, DropDownMenu, Calender, Warning, UploadImage } from "../../formitems/Index";
const OfflineSimForm = () => {
  const [filedata, setfiledata] = useState([{
    filename: "John Doe",
  },
  {
    filename: "John Doe1",
  },
  {
    filename: "John Doe2",
  }])
  console.log(setfiledata)
  return (
    <div className="animate__animated animate__fadeIn">
        <div className="offline-sim-form-trainning-form">
          <div className="category-title">Upload Offline Simulator Form</div>
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

            <UploadImage data={filedata} />

            <button className="submit-button">Add</button>
            <button className="preview-button">
              <i className="fa fa-eye" />
              Preview
            </button>
            <button className="cancel-button">Cancel</button>
          </div>
        </div>
      </div>
  )
}

export default OfflineSimForm