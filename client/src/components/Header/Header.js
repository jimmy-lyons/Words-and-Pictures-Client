import React from "react";
import './Header.css'
import ProjectList from "./ProjectList/ProjectList";

function Header(props) {
  return (
    <div className="header-container">
      <div className="title-container">
        ImageMusicText
      </div>
      <ProjectList
        projectsData={ props.projectsData }
      />
    </div>
  )
}

export default Header