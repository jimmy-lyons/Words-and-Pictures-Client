import React, { useEffect, useState } from "react";

import './style.css';

import Header from './components/Header/Header';
import Images from './components/Images/Images';
import ProjectList from "./components/ProjectList/ProjectList";

import * as endpoints from './endpoints'

function App() {

  const [projectsData, setProjectData] = useState([{
      id: 53,
      name: "",
      heading: "",
      client: ""
    }
  ])

  const [selectedProject, setSelectedProject] = useState({ id:53 })

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
      <ProjectList
          projectsData={ projectsData }
          selectedProject={ selectedProject }
          setSelectedProject={ setSelectedProject }
        />

      <Images
        selectedProject={ selectedProject }
      />

      <Header
        index={ index }
        projectsData={projectsData}
        selectedProject={ selectedProject }
        setSelectedProject={ setSelectedProject }
      />
    </div>
  );
}

export default App;
