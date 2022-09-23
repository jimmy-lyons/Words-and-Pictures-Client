import React, { useEffect, useState } from "react";
import './ProjectList.css';
import * as endpoints from '../../endpoints'

function ProjectList (props) {

  const [projectsData, setProjectData] = useState([])
  let projects = []
  
  const getProjectData = async() => {
    try {
    const { data } = await endpoints.fetchProjects()
    return data
    } catch (error) {
      console.log("Error when fetching projects: ", error)
    }
  }

  // React is looping infinitely without this
  // Even though projectsData only changes once, React is doing an infinite loop
  let stop = false

  useEffect(() => {
    getProjectData().then((data) => {
      setProjectData(data)
      stop = true
      console.log(projectsData)
    })
  }, [stop])

  projects = projectsData.map((project) => {
    return (
      <p>{ project.name }</p>
    )
  })

  return (
    <>
      { projects }
    </>
  )
}

export default ProjectList;