import React, { Component } from "react";
import Header from "../components/Header";
import "../assets/styles/custom/components/Navbar.scss";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    title: "",
  };

  componentDidMount() {
    const component = window.location.pathname.split("/")[2];
    let title;
    if (component == "simulator") {
      title = "Simulator";
    } else if (component == "ground") {
      title = "Ground";
    } else if (component == "manager") {
      title = "Manager";
    } else if (component == "data-admin") {
      title = "Data Admin";
    } else if (component == "crew") {
      title = "Crew";
    } else if (component == "aircraft") {
      title = "Aircraft";
    }
    this.setState({ title });
  }

  items = () => {
    const component = window.location.pathname.split("/")[2];
    let items = [];
    if (component == "simulator") {
      items = [
        {
          icon: "fa fa-tachometer",
          text: "Dashboard",
          key: "",
        },
        {
          icon: "fa fa-file",
          text: "Blank Training Forms",
          key: "blank-training-forms",
        },
        {
          icon: "fa fa-book",
          text: "Study Materials",
          key: "study-materials",
        },
        {
          icon: "fa fa-laptop",
          text: "Presentations",
          key: "presentations",
        },
        {
          icon: "fa fa-shield",
          text: "Simulators",
          key: "simulators",
        },
        {
          icon: "fa fa-file-text",
          text: "Simulator Forms",
          key: "simulator-forms",
        },
        {
          icon: "fa fa-download",
          text: "Offline Sim Form",
          key: "offline-sim-form",
        },
      ];
    } else if (component == "aircraft") {
      items = [
        {
          icon: "fa fa-tachometer",
          text: "Dashboard",
          key: "",
        },
        {
          icon: "fa fa-file",
          text: "Blank Training Forms",
          key: "blank-training-forms",
        },
        {
          icon: "fa fa-book",
          text: "Study Materials",
          key: "study-materials",
        },
        {
          icon: "fa fa-laptop",
          text: "Presentations",
          key: "presentations",
        },
        {
          icon: "fa fa-shield",
          text: "Aircraft",
          key: "aircraft",
        },
        {
          icon: "fa fa-file-text",
          text: "Aircraft Forms",
          key: "aircraft-forms",
        },
        {
          icon: "fa fa-download",
          text: "Offline Aircraft Forms",
          key: "offline-aircraft-forms",
        },
      ];
    } else if (component == "crew") {
      items = [
        {
          icon: "fa fa-tachometer",
          text: "Dashboard",
          key: "",
        },
        {
          icon: "fa fa-file",
          text: "Blank Training Forms",
          key: "blank-training-forms",
        },
        {
          icon: "fa fa-book",
          text: "Study Materials",
          key: "study-materials",
        },
        {
          icon: "fa fa-upload",
          text: "Upload Qualifications",
          key: "upload-qualifications",
        },
        {
          icon: "fa fa-sign-in",
          text: "Ground Class Sign In",
          key: "ground-class-sign-in",
        },
        {
          icon: "fa fa-laptop",
          text: "Attend Meeting",
          key: "attend-meeting",
        },
      ];
    } else if (component == "ground") {
      items = [
        {
          icon: "fa fa-tachometer",
          text: "Dashboard",
          key: "",
        },
        {
          icon: "fa fa-file",
          text: "Ground Training Forms",
          key: "ground-training-forms",
        },
        {
          icon: "fa fa-book",
          text: "Study Material",
          key: "study-material",
        },
        {
          icon: "fa fa-laptop",
          text: "Presentations",
          key: "presentations",
        },
        {
          icon: "fa fa-users",
          text: "Attendance",
          key: "attendance",
        },
        {
          icon: "fa fa-certificate",
          text: "Issue Certificate",
          key: "issue-certificate",
        },
        {
          icon: "fa fa-building",
          text: "Institutes",
          key: "institutes",
        },
        {
          icon: "fa fa-download",
          text: "External Certificate",
          key: "external-certificate",
        },
      ];
    } else if (component == "manager") {
      items = [
        {
          icon: "fa fa-tachometer",
          text: "Dashboard",
          key: "",
        },
        {
          icon: "fa fa-check-circle",
          text: "Qualifications",
          key: "qualifications",
        },
        {
          icon: "fa fa-book",
          text: "Study Materials",
          key: "study-materials",
        },
        {
          icon: "fa fa-list-alt",
          text: "Forms",
          key: "forms",
        },
        //

        {
          icon: "fa fa-users",
          text: "Users",
          key: "users",
        },
        {
          icon: "fa fa-plane",
          text: "Airports",
          key: "airports",
        },
        {
          icon: "fa fa-cog",
          text: "Technical Competency",
          key: "technical-competency",
        },

        {
          icon: "fa fa-certificate",
          text: "Certificates",
          key: "certificates",
        },

        {
          icon: "fa fa-check",
          text: "Qualification Parameters",
          key: "qualification-parameters",
        },
      ];
    } else if (component == "data-admin") {
      items = [
        {
          icon: "fa fa-tachometer",
          text: "Dashboard",
          key: "",
        },
        {
          icon: "fa fa-plane",
          text: "Clients",
          key: "clients",
        },
        {
          icon: "fa fa-user",
          text: "Users",
          key: "users",
        },
        {
          icon: "fa fa-flag",
          text: "Fleets",
          key: "fleets",
        },
        {
          icon: "fa fa-star",
          text: "Ratings",
          key: "ratings",
        },
        {
          icon: "fa fa-trophy",
          text: "Ranks",
          key: "ranks",
        },
        {
          icon: "fa fa-check-circle",
          text: "Qualifications",
          key: "qualifications",
        },
        {
          icon: "fa fa-edit",
          text: "Sim Form",
          key: "sim-form",
        },
        {
          icon: "fa fa-file-text",
          text: "Aircraft Form",
          key: "aircraft-form",
        },
        {
          icon: "fa fa-file",
          text: "Ground Form",
          key: "ground-form",
        },
      ];
    } else if (component == "data-admin") {
      items = [
        {
          icon: "fa fa-tachometer",
          text: "Dashboard",
          key: "",
        },
        {
          icon: "fa fa-plane",
          text: "Clients",
          key: "clients",
        },
        {
          icon: "fa fa-user",
          text: "Users",
          key: "users",
        },
        {
          icon: "fa fa-flag",
          text: "Fleets",
          key: "fleets",
        },
        {
          icon: "fa fa-star",
          text: "Ratings",
          key: "ratings",
        },
        {
          icon: "fa fa-trophy",
          text: "Ranks",
          key: "ranks",
        },
        {
          icon: "fa fa-check-circle",
          text: "Qualifications",
          key: "qualifications",
        },
        {
          icon: "fa fa-edit",
          text: "Sim Form",
          key: "sim-form",
        },
        {
          icon: "fa fa-file-text",
          text: "Aircraft Form",
          key: "aircraft-form",
        },
        {
          icon: "fa fa-file",
          text: "Ground Form",
          key: "ground-form",
        },
      ];
    }
    return items;
  };
  render() {
    const component = window.location.pathname.split("/")[2];
    const subcomponent = window.location.pathname.split("/")[3];
    return (
      <div className="navbar-container animate__animated animate__fadeIn" style={{ width: this.props.toggle ? "260px" : 0 }}>
        <Header />
        <div className="navbar-body">
          <div className="title-dropdown">
            {this.state.title}
            <div className="fa fa-caret-down"></div>
          </div>
          {this.items().map((data, index) => (
            <Link
              to={data.key ? `/dashboard/${component}/${data.key}` : `/dashboard/${component}`}
              className="render-items"
              style={{
                color: subcomponent == data.key || (!subcomponent && !data.key) ? "#ffffff" : "#ffffff99",
              }}
              key={index}
            >
              <i className={data.icon} />
              <div className="text">{data.text}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
