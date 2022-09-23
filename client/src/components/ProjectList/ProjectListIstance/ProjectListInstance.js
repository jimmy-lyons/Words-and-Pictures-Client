import React from "react";

function ProjectListInstance (props) {
  return (
    <p>
      { props.name + " / " + props.title + " / " + props.client}
    </p>
  )
}

export default ProjectListInstance