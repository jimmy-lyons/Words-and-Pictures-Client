import React, { useEffect, useState } from "react";
import './ProjectList.css';
import * as endpoints from '../../endpoints'
import ProjectListInstance from "./ProjectListIstance/ProjectListInstance";

function ProjectList (props) {

  const [projectsData, setProjectData] = useState([])
  
  const getProjectData = async() => {
    try {
    const { data } = await endpoints.fetchProjects()
    return data
    } catch (error) {
      console.log("Error when fetching projects: ", error)
    }
  }

  // Renders the project data once
  useEffect(() => {
    getProjectData().then((data) => {
      setProjectData(data)
      console.log(data)
    })
  }, [])

  let projects = projectsData.map((project) => {
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
        { projects }
      </div>
    </div>
  )
}

export default ProjectList;