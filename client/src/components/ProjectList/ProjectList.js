import React, { useEffect, useState } from "react";
import './ProjectList.css';
import ProjectListInstance from "./ProjectListIstance/ProjectListInstance";

function ProjectList (props) {

  const [menuIsShown, setMenuIsShown] = useState(false);

  let projects = props.projectsData.map((project) => {
    return (
      <ProjectListInstance
        key={ project.id }
        selectedProject={ props.selectedProject }
        setSelectedProject={ props.setSelectedProject }
        { ...project }
      />
    )
  })

  return (
    <div className="project-list-container">
      <div className="dropdown">
        <button className="dropbtn"
          onMouseEnter={() => setMenuIsShown(true)}
          onMouseLeave={() => setMenuIsShown(false)}
        >
          <div className="burger-lines"></div>
          <div className="burger-lines"></div>
          <div className="burger-lines"></div>
        </button>

        {menuIsShown && (
          <div className="dropdown-content"
            onMouseEnter={() => setMenuIsShown(true)}
            onMouseLeave={() => setMenuIsShown(false)}
          >
            <div className="project-heading">Projects</div>
            {  projects } 
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectList;
