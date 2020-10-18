import React from 'react'
import Dashboard from "./aircraft/Dashboard";
import BlankTrainingForms from "./aircraft/BlankTrainingForms";
import StudyMaterials from "./aircraft/StudyMaterials";
import Presentations from "./aircraft/Presentations";
import Aircrafts from "./aircraft/Aircrafts";
import AircraftForms from "./aircraft/AircraftForms";
import OfflineAircraftForm from "./aircraft/OfflineAircraftForm";
import "../../assets/styles/custom/components/dashboard/Aircraft.scss";

const Aircraft = (props) => {
  const aircraftComponents = () => {
    const component = window.location.pathname.split("/")[3];
    if (!component) {
      return <Dashboard props={props} />;
    } else if (component == "blank-training-forms") {
      return <BlankTrainingForms props={props} />;
    } else if (component == "study-materials") {
      return <StudyMaterials props={props} />;
    } else if (component == "presentations") {
      return <Presentations props={props} />;
    } else if (component == "aircraft") {
      return <Aircrafts props={props} />;
    } else if (component == "aircraft-forms") {
      return <AircraftForms props={props} />;
    } else if (component == "offline-aircraft-forms") {
      return <OfflineAircraftForm props={props} />;
    }
  };
  return (
    aircraftComponents()
  )
}

export default Aircraft
