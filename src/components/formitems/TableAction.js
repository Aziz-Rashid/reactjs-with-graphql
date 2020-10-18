import React from 'react'
const TableAction = (props) => {

 const  render_view = () => {
    if (props.view === true || props.view !== undefined) {
      return (
        <div
          className="table-action-items"
          onClick={() => props.action_click("view")}
        >
          <div className="action-logo" style={{ background: "#EBAC261A" }}>
            <i className="fa fa-search" style={{ color: "#EBAC26" }} />
          </div>
          <div className="action-text">View</div>
        </div>
      );
    }
  };
  const render_edit = () => {
    if (props.edit === true || props.edit != undefined) {
      return (
        <div
          className="table-action-items"
          onClick={() => props.action_click("edit")}
        >
          <div className="action-logo" style={{ background: "#0075FF1A" }}>
            <i className="fa fa-edit" style={{ color: "#0075FF" }} />
          </div>
          <div className="action-text">Edit</div>
        </div>
      );
    }
  };
  const render_delete = () => {
    if (props.delete === true || props.delete !== undefined) {
      return (
        <div
          className="table-action-items"
          onClick={() => props.action_click("delete")}
        >
          <div className="action-logo" style={{ background: "#f6eaeb" }}>
            <i className="fa fa-trash" style={{ color: "#DC3645" }} />
          </div>
          <div className="action-text">Delete</div>
        </div>
      );
    }
  };
  const render_sign_in = () => {
    if (props.sign_in === true || props.sign_in !== undefined) {
      return (
        <div
          className="table-action-items"
          onClick={() => props.action_click("sign_in")}
        >
          <div className="action-logo" style={{ background: "#E6F6F1" }}>
            <i className="fa fa-sign-in" style={{ color: "#05A677" }} />
          </div>
          <div className="action-text">Sign-In</div>
        </div>
      );
    }
  } 
  return (
      <div
        className="table-action-container animate__animated animate__fadeIn"
        style={props.style}
        onMouseLeave={props.onMouseLeave}
      >
        {render_view}
        {render_edit}
        {render_delete}
        {render_sign_in}
      </div>
  )
}

export default TableAction
