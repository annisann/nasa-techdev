import { ENDPOINT } from "@/lib/consts";
import axios from "axios"
import { useEffect, useState } from "react"

interface Project {
    projectId: number;
    lastUpdated: string;
};

interface ApiResponse {
    projects: Project[];
    totalCount: number;
};

interface ProjectDetail {

}

export default function Projects() {
    // FETCH DATA
    const [projectsData, setProjectsData] = useState<ApiResponse>({
        projects: [],
        totalCount: 0
    });

    const fetchProjects = async () => {
        const response = await fetch(ENDPOINT);
        const data = await response.json();
        setProjectsData(data);
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    console.log(projectsData)

    return (
        <div>
            <h1>Projects</h1>
            <p> Total Projects: {projectsData.totalCount} </p>
            <ul>
                {projectsData.projects.map(project => (
                    <li key={project.projectId}>
                        <h3>{project.projectId}</h3>
                        <p>{project.lastUpdated}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}