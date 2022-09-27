import React from "react";
import './Header.css'
import ProjectList from "./ProjectList/ProjectList";
import Description from "../Description/Description";

function Header(props) {
  return (
      <div className="header-container">
        <div className="title-container">
          ImageMusicText
          <div className="subheading">
            Music packaging and design by Tony Lyons and Stuart Jones
          </div>
        </div>
        <Description
          description={ props.projectsData[props.index].description }
        />
        <ProjectList
          projectsData={ props.projectsData }
          selectedProject={ props.selectedProject }
          setSelectedProject={ props.setSelectedProject }
        />
      </div>
  )
}

export default Header