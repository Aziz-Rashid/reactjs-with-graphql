import React,{useState} from 'react'
import { Text, DropDownMenu, TextArea, Switch } from "../../formitems/Index";

const AircraftForm = () => {
  const [active, setactive] = useState("")
  const [AddActive, setAddActive] = useState("")
  const [add_tech_comp, setadd_tech_comp] = useState([{
    id: "Phase 1",
    name: "Briefing",
  },
  {
    id: "Phase 2",
    name: "Preflight",
  },
  {
    id: "Phase 3",
    name: "Startup",
  },
  {
    id: "Phase 4",
    name: "Taxi",
  },
  {
    id: "Phase 5",
    name: "Takeoff",
  },
  {
    id: "Phase 6",
    name: "Climb",
  },
  {
    id: "Phase 7",
    name: "Cruise",
  },
  {
    id: "Phase 8",
    name: "Descent",
  },
  {
    id: "Phase 9",
    name: "Approach",
  },
  {
    id: "Phase 10",
    name: "Landing",
  },
  {
    id: "Phase 11",
    name: "Post Flight",
  },])
  console.log(setadd_tech_comp)
  return (
    <div className="animate__animated animate__fadeIn">
    <div className="category-title">Aircraft Form</div>
    <div className="toggle-form-container">
      <DropDownMenu title="Client" />
      <DropDownMenu title="Fleet" />
      <DropDownMenu title="Select Sectors Required (PF/PM)" />
      <Text title="Validity (days)" />
      <Text title="Category" value="Aircraft" disabled={true} />
      <DropDownMenu title="Sub-Category" />
      <DropDownMenu title="Kind" />
      <Text title="Name of the line training" />
      <TextArea rows={5} title="Renewal Procedure" />
      <Switch
        title="Add Technical Competency?"
        lable={true}
        onChange={(e) => {
          e ?  setactive("tech-comp"): setactive("");
        }}
      />
      {/* add New */}
      <div
        className={
          "" + (active === "tech-comp" ? "" : "hide-element")
        }
      >
        <div className="add-tech-phase">
          {add_tech_comp.map((phase, index) => (
            <div className="add-tech-comp">
              <div key={index}>
                <h4>
                  {phase.id}: {phase.name}
                </h4>
              </div>
              <div>
                <button className="add-button">
                  <i className="fa fa-plus" />
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* add new */}

      <Switch
        title="Add Non Technical Competency?"
        checked={true}
        lable={true}
      />
      <Switch title="Add Remarks Section?" checked={false} lable={true} />
      <Switch title="Add Results Section?" checked={false} lable={true} />
      <Switch
        title="Add Regulatory Information Section?"
        lable={true}
        onChange={(e) => {
          e ? setAddActive("tech-comp") : setAddActive("")
        }}
      />
      <div
        className={
          "" + (AddActive === "tech-comp" ? "" : "hide-element")
        }
      >
        <button className="add-button">
          <i className="fa fa-plus" />
          Add
        </button>
      </div>
      <button className="submit-button">Publish Form</button>
      <button className="preview-button">
        <i className="fa fa-eye" />
        Preview
      </button>
      <button className="cancel-button">Cancel</button>
    </div>
  </div>
  )
}

export default AircraftForm
