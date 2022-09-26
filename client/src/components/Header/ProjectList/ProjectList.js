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
    <div className="project-list-container">
      <div className="dropdown">
        <button className="dropbtn">Projects</button>
        <div className="dropdown-content">
          {  projects } 
        </div>
      </div>
    </div>
  )
}

export default ProjectList;
