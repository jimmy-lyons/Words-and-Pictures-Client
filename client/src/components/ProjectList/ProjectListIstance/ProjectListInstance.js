import React from "react";

function ProjectListInstance (props) {
  return (
    <p>
      { props.name + " / " + props.heading + " / " + props.client}
    </p>
  )
}

export default ProjectListInstance