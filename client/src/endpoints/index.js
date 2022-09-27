import axios from "axios";

const projectsUrl = "http://localhost:8000/projects/"
export const fetchProjects = () => axios.get(projectsUrl)

const projectImagesUrl = "http://localhost:8000/projectImages/"
export const fetchProjectImages = (projectId) => axios.post(projectImagesUrl, {id: projectId})
