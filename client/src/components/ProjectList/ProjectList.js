import React from "react";
import './ProjectList.css';
import * as endpoints from '../../endpoints'

function ProjectList (props) {
  const getProjectData = async() => {
    try {
    const { data } = await endpoints.fetchProjects()
    return data
    } catch (error) {
      console.log("Error when fetching projects: ", error)
    }
  }

  console.log(getProjectData())

  return (
    <div className="Project-list-container">
      <p>Foo / Bar / Baz</p>
      <p>Foo / Bar / Baz</p>
      <p>Foo / Bar / Baz</p>
      <p>Foo / Bar / Baz</p>
      <p>Foo / Bar / Baz</p>
      <p>Foo / Bar / Baz</p>
      <p>Foo / Bar / Baz</p>
      <p>Foo / Bar / Baz</p>
      <p>Foo / Bar / Baz</p>
    </div>
  )
}

export default ProjectList;