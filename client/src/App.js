import React, { useEffect, useState } from "react";

import './style.css';

import Header from './components/Header/Header'
import Images from './components/Images/Images';
import Description from './components/Description/Description';

import * as endpoints from './endpoints'



function App() {

  const [projectsData, setProjectData] = useState([{
      id: 1,
      name: "",
      heading: "",
      client: ""
    }
  ])

  const [selectedProject, setSelectedProject] = useState({ id: 1 })

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
  }, [selectedProject])

  // Finds index of selectedProject
  var index = projectsData.map(function(e) { return e.id; }).indexOf(selectedProject.id);

  return (
    <div className="App">

      <Header
        projectsData={projectsData}
        selectedProject={ selectedProject }
        setSelectedProject={ setSelectedProject }
      />

      <div className="content">
        <div className="project-title">
          { `${projectsData[index].name} / ${projectsData[index].heading}` }
        </div>

        <Description
          description={ projectsData[index].description }
        />

        <Images
          currentProject={ selectedProject }
        />
      </div>

    </div>
  );
}

export default App;
