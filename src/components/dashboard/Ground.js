import React from 'react'
import "../../assets/styles/custom/components/dashboard/Ground.scss";
import Dashboard from "./ground/Dashboard";
import GroundTrainingForms from "./ground/GroundTrainingForms";
import StudyMaterials from "./ground/StudyMaterials";
import Presentations from "./ground/Presentations";
import Attendance from "./ground/Attendance";
import IssueCertificate from "./ground/IssueCertificate";
import Institutes from "./ground/Institutes";
import ExternalCertificate from "./ground/ExternalCertificate";
const Ground = () => {
  const groundComponents = (props) => {
    const component = window.location.pathname.split("/")[3];
    if (!component) {
      return <Dashboard props={props} />;
    } else if (component == "ground-training-forms") {
      return <GroundTrainingForms props={props} />;
    } else if (component == "study-material") {
      return <StudyMaterials props={props} />;
    } else if (component == "presentations") {
      return <Presentations props={props} />;
    } else if (component == "attendance") {
      return <Attendance props={props} />;
    } else if (component == "issue-certificate") {
      return <IssueCertificate props={props} />;
    } else if (component == "institutes") {
      return <Institutes props={props} />;
    } else if (component == "external-certificate") {
      return <ExternalCertificate props={props} />;
    }
  };
  return groundComponents()
}

export default Ground

