import { getEndpoint } from "@/lib/helper";
import { Table } from "antd";
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
    projectId: number;
    title: string;
    description: string;
    benefits: string;
    statusDescription: number;
    // "startYear": 2014,
    // "startMonth": 4,
    // "endYear": 2017,
    // "endMonth": 6,
    // program: object;
    // leadOrganization: object;
    // supportingOrganizations: object;
    lastUpdated: string;
    startDateString: string;
    endDateString: string;
}

export default function Projects() {
    const [isLoading, setIsLoading] = useState(true)

    // FETCH DATA
    const [projectsData, setProjectsData] = useState<ApiResponse>({
        projects: [],
        totalCount: 0
    });

    const fetchProjects = async () => {
        await fetch(getEndpoint())
            .then(async (response) => await response.json())
            .then((data: ApiResponse) => {
                console.log('data', data)
                setProjectsData(data);
                // data.projects?.forEach(
                //     async (project) => {
                //         await fetch(getEndpoint(project.projectId))
                //         .then(async (response) => response.json())
                //         .then((detail: ProjectDetail) => {
                //             projectsData.projects.push(detail)
                //             // setProjectsData({
                //             //     ...projectsData,
                //             //     projects: detail
                //             // })
                //         })
                //     }
                // )
                setIsLoading(false)
            });
    }

    useEffect(() => {
        setIsLoading(true)
        fetchProjects()
    }, [])

    console.log(projectsData)

    return (
        <div>
            <p>Projects</p>
            <p> Total Projects: {projectsData.totalCount} </p>
            <ul>
                {isLoading ? <li> Loading... </li> : projectsData.projects?.map(project => (
                    <li key={project.projectId}>
                        <p> Project ID: {project.projectId}</p>
                        <p> Last Updated: {project.lastUpdated}</p>
                    </li>
                ))}
            </ul>
            <Table
                // columns={columns}
                dataSource={projectsData.projects}
                bordered
                size="middle"
                scroll={{ x: 'calc(700px + 50%)', y: 240 }}
            />
        </div>
    )
}