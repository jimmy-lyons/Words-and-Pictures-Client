import React, { useEffect, useState } from "react";
import './style.css';
import Images from './components/Images/Images';
import Description from './components/Description/Description';
import ProjectList from './components/ProjectList/ProjectList';
import * as endpoints from './endpoints'

function App() {

  const [projectsData, setProjectData] = useState([{
      id: 0,
      name: "",
      heading: "",
      client: ""
    }])

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

      <h1>ImageMusicText</h1>

      <ProjectList
        projectsData={projectsData}
      />

      <h2>{ `${projectsData[0].name} / ${projectsData[0].heading}` }</h2>

      <Description
        description={ projectsData[0].description }
      />

      <Images/>

    </div>
  );
}

export default App;
