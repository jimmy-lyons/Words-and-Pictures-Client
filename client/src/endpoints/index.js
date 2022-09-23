import axios from "axios";

const projectsUrl = "http://localhost:8000/projects/"
export const fetchProjects = () => axios.get(projectsUrl)
