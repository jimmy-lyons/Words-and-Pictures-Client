import React from "react";
import './Header.css'
import Description from "../Description/Description";

function Header(props) {
  return (
      <div className="header-container">
        <div className="left-container">
          <div className="title-container">
            ImageMusicText
          </div>
          <div className="subheading">
            Music packaging and design by Tony Lyons and Stuart Jones
          </div>
        </div>
        <div className="right-contianer">

          <div className="project-title">
            { `${props.projectsData[props.index].name} / ${props.projectsData[props.index].heading}` }
          </div>

          <Description
            description={ props.projectsData[props.index].description }
          />
        </div>
      </div>
  )
}

export default Header