// import React, { Component } from "react";
// import Dashboard from "./crew/Dashboard";
// import BlankTrainingForms from "./crew/BlankTrainingForms";
// import StudyMaterials from "./crew/StudyMaterials";
// import UploadQualifications from "./crew/UploadQualifications";
// import GroundClassSignIn from "./crew/GroundClassSignIn";
// import AttendMeeting from "./crew/AttendMeeting";
// import "../../assets/styles/custom/components/dashboard/Crew.scss";

// export default class Crew extends Component {
//   simulatorComponents = () => {
//     const component = window.location.pathname.split("/")[3];
//     if (!component) {
//       return <Dashboard props={this.props} />;
//     } else if (component == "blank-training-forms") {
//       return <BlankTrainingForms props={this.props} />;
//     } else if (component == "study-materials") {
//       return <StudyMaterials props={this.props} />;
//     } else if (component == "upload-qualifications") {
//       return <UploadQualifications props={this.props} />;
//     } else if (component == "ground-class-sign-in") {
//       return <GroundClassSignIn props={this.props} />;
//     } else if (component == "attend-meeting") {
//       return <AttendMeeting props={this.props} />;
//     }
//   };

//   render() {
//     return this.simulatorComponents();
//   }
// }

import React from 'react'
import Dashboard from "./crew/Dashboard";
import BlankTrainingForms from "./crew/BlankTrainingForms";
import StudyMaterials from "./crew/StudyMaterials";
import UploadQualifications from "./crew/UploadQualifications";
import GroundClassSignIn from "./crew/GroundClassSignIn";
import AttendMeeting from "./crew/AttendMeeting";
import "../../assets/styles/custom/components/dashboard/Crew.scss";
const Crew = (props) => {
  const simulatorComponents = () => {
    const component = window.location.pathname.split("/")[3];
    if (!component) {
      return <Dashboard props={props} />;
    } else if (component == "blank-training-forms") {
      return <BlankTrainingForms props={props} />;
    } else if (component == "study-materials") {
      return <StudyMaterials props={props} />;
    } else if (component == "upload-qualifications") {
      return <UploadQualifications props={props} />;
    } else if (component == "ground-class-sign-in") {
      return <GroundClassSignIn props={props} />;
    } else if (component == "attend-meeting") {
      return <AttendMeeting props={props} />;
    }
  };
  return simulatorComponents()
}

export default Crew
