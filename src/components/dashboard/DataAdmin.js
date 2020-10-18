import React from 'react'
import GroundForm from "./dataadmin/GroundForm";
import Dashboard from "./dataadmin/Dashboard";
import Clients from "./dataadmin/Clients";
import Users from "./dataadmin/Users";
import AircraftForm from "./dataadmin/AircraftForm";
import SimForm from "./dataadmin/SimForm";
import Fleets from "./dataadmin/Fleets";
import Ratings from "./dataadmin/Ratings";
import Ranks from "./dataadmin/Ranks";
import Qualifications from "./dataadmin/Qualifications";
import "../../assets/styles/custom/components/dashboard/DataAdmin.scss";
const DataAdmin = (props) => {
  const dataadminComponents = () => {
    const component = window.location.pathname.split("/")[3];
    if (!component) {
      return <Dashboard props={props} />;
    } else if (component == "clients") {
      return <Clients props={props} />;
    } else if (component == "users") {
      return <Users props={props} />;
    } else if (component == "fleets") {
      return <Fleets props={props} />;
    } else if (component == "ratings") {
      return <Ratings props={props} />;
    } else if (component == "ranks") {
      return <Ranks props={props} />;
    } else if (component == "qualifications") {
      return <Qualifications props={props} />;
    } else if (component == "sim-form") {
      return <SimForm props={props} />;
    } else if (component == "aircraft-form") {
      return <AircraftForm props={props} />;
    } else if (component == "ground-form") {
      return <GroundForm props={props} />;
    }
  };
  return dataadminComponents()
}

export default DataAdmin
