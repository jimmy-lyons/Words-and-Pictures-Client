import React, { useEffect, useState } from "react";

import './style.css';

import Header from './components/Header/Header'
import Images from './components/Images/Images';
import Description from './components/Description/Description';
import ProjectList from './components/Header/ProjectList/ProjectList';

import * as endpoints from './endpoints'



function App() {

  const [projectsData, setProjectData] = useState([{
      id: 0,
      name: "",
      heading: "",
      client: ""
    }
  ])

  const [selectedProject, setSelectedProject] = useState({ 'id': 1 })

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

  return (
    <div className="App">

      <Header
        projectsData={projectsData}
      />

      <div className="content">
        <h2>{ `${projectsData[0].name} / ${projectsData[0].heading}` }</h2>

        <Description
          description={ projectsData[0].description }
        />

        <Images
          currentProject={ selectedProject }
        />
      </div>

    </div>
  );
}

export default App;
