import React from "react";
import './Header.css'
import ProjectList from "./ProjectList/ProjectList";

function Header(props) {
  return (
      <div className="header-container">
        <div className="title-container">
          ImageMusicText
          <div className="subheading">
            Music packaging and design by Tony Lyons and Stuart Jones
          </div>
        </div>
        <ProjectList
          projectsData={ props.projectsData }
        />
      </div>
  )
}

export default Header