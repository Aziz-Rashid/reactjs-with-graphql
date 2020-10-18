import React from 'react'
import "../../assets/styles/custom/components/dashboard/Manager.scss";
import Dashboard from "./manager/Dashboard";
import Qualifications from "./manager/Qualifications";
import StudyMaterials from "./manager/StudyMaterials";
import Airports from "./manager/Airports";
import Certificates from "./manager/Certificates";
import Forms from "./manager/Forms";
import TechnicalCompetency from "./manager/TechnicalCompetency";
import QualificationParameters from "./manager/QualificationParameters";
import Users from "./manager/Users";
const Manager = (props) => {
  const managerComponent = () => {
    const component = window.location.pathname.split("/")[3];
    if (!component) {
      return <Dashboard props={props} />;
    } else if (component == "airports") {
      return <Airports props={props} />;
    } else if (component == "certificates") {
      return <Certificates props={props} />;
    } else if (component == "forms") {
      return <Forms props={props} />;
    } else if (component == "qualification-parameters") {
      return <QualificationParameters props={props} />;
    } else if (component == "qualifications") {
      return <Qualifications props={props} />;
    } else if (component == "study-materials") {
      return <StudyMaterials props={props} />;
    } else if (component == "technical-competency") {
      return <TechnicalCompetency props={props} />;
    } else if (component == "users") {
      return <Users props={props} />;
    }
  };
  return managerComponent()
}

export default Manager
