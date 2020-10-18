import React,{useState} from 'react'
import Navbar from "../components/Navbar";
import Crew from "../components/dashboard/Crew";
import Aircraft from "../components/dashboard/Aircraft";
import Simulator from "../components/dashboard/Simulator";
import Ground from "../components/dashboard/Ground";
import Manager from "../components/dashboard/Manager";
import DataAdmin from "../components/dashboard/DataAdmin";
import Footer from "../components/Footer";
import HoverProfile from "../components/HoverProfile";
import "../assets/styles/custom/components/Dashboard.scss";

const Dashboard = (props) => {
  const [toggle, settoggle] = useState(true)
  const [hoverProfile, sethoverProfile] = useState(false)

 const dashboardComponents = () => {
    const component = window.location.pathname.split("/")[2];
    if (component == "simulator") {
      return <Simulator props={props} />;
    } else if (component == "ground") {
      return <Ground props={props} />;
    } else if (component == "manager") {
      return <Manager props={props} />;
    } else if (component == "data-admin") {
      return <DataAdmin props={props} />;
    } else if (component == "crew") {
      return <Crew props={props} />;
    } else if (component == "aircraft") {
      return <Aircraft props={props} />;
    }
  };
  return (
   <>
        <div className="dashboard-container">
          <Navbar toggle={toggle} />
          <div className="dashboard-right-part">
            <div className="dashboard-right-header">
              <div
                className="fa fa-bars"
                onClick={() => settoggle(!toggle)}
              />
              <div
                className="dashboard-right-header-profile"
                onClick={() => sethoverProfile(!hoverProfile) }
                onMouseEnter={() => sethoverProfile(!hoverProfile)  }
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="dashboard-right-body">
              {dashboardComponents()}
            </div>
            <Footer />
          </div>
        </div>
        <HoverProfile
          hoverProfile={hoverProfile}
          onMouseLeave={() => sethoverProfile(!hoverProfile)}
        />
      </>
  )
}

export default Dashboard