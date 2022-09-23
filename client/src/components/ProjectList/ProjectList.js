import React, { useEffect, useState } from "react";
import './ProjectList.css';
import * as endpoints from '../../endpoints'

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
    })
  }, [])

  let projects = projectsData.map((project) => {
    return (
      <p>{ project.name }</p>
    )
  })

  return (
    <div>
      { projects }
    </div>
  )
}

export default ProjectList;