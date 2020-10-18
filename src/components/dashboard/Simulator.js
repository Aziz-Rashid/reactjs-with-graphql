import React from 'react'
import Dashboard from "./simulator/Dashboard";
import BlankTrainingForms from "./simulator/BlankTrainingForms";
import StudyMaterials from "./simulator/StudyMaterials";
import Presentations from "./simulator/Presentations";
import Simulators from "./simulator/Simulators";
import SimulatorForms from "./simulator/SimulatorForms";
import OfflineSimForm from "./simulator/OfflineSimForm";
import "../../assets/styles/custom/components/dashboard/Simulator.scss";
const Simulator = () => {
  const simulatorComponents = (props) => {
    const component = window.location.pathname.split("/")[3];
    if (!component) {
      return <Dashboard props={props} />;
    } else if (component == "blank-training-forms") {
      return <BlankTrainingForms props={props} />;
    } else if (component == "study-materials") {
      return <StudyMaterials props={props} />;
    } else if (component == "presentations") {
      return <Presentations props={props} />;
    } else if (component == "simulators") {
      return <Simulators props={props} />;
    } else if (component == "simulator-forms") {
      return <SimulatorForms props={props} />;
    } else if (component == "offline-sim-form") {
      return <OfflineSimForm props={props} />;
    }
  };
  return simulatorComponents()
}

export default Simulator
