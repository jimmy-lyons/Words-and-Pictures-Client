import React, { useEffect, useState } from "react";
import './ProjectList.css';
import ProjectListInstance from "./ProjectListIstance/ProjectListInstance";

function ProjectList (props) {

  let projects = props.projectsData.map((project) => {
    return (
      <ProjectListInstance
        key={project.id}
        {...project}
      />
    )
  })

  return (
    <div>
      <h2>Projects</h2>
      <div className="project-list-container">
        {  projects } 
      </div>
    </div>
  )
}

export default ProjectList;