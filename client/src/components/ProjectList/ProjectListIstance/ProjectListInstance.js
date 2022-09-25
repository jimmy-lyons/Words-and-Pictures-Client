import React from "react";
import './ProjectListInstance.css'

function ProjectListInstance (props) {
  return (
    <div className="project-list-instance-container">
      <div className="project-list-sub-instance-container">
        { props.name }
      </div>
      <div className="project-list-sub-instance-container">
        { " / " }
      </div>
      <div className="project-list-sub-instance-container">
        { props.heading }
      </div>
      {/* <div className="project-list-sub-instance-container">
        { " / " }
      </div> */}
      <div className="client-sub-instance-container">
        { props.client }
      </div>
    </div>
  )
}

export default ProjectListInstance