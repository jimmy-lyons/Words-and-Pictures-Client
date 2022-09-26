import React from "react";
import './ProjectListInstance.css'

function ProjectListInstance (props) {

  const handleClick = (e) => {
    props.setSelectedProject({id: props.id})
  }

  return (
    <div className="project-list-instance-container" id={props.id} onClick={ handleClick }>
      <div className="project-title-sub-instance-container">
        { props.name }
      </div>
      <div className="project-list-sub-instance-container">
        { " / " }
      </div>
      <div className="project-list-sub-instance-container">
        { props.heading }
      </div>
      <div className="client-sub-instance-container">
        { props.client }
      </div>
    </div>
  )
}

export default ProjectListInstance