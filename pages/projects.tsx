import { getEndpoint } from "@/lib/helper";
import { Table } from "antd";
import { useEffect, useState } from "react"
import styles from "@/styles/projects.module.css"

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

    const columns = [
        {
            title: "Project ID",
            dataIndex: "projectId",
            key: "projectId"
        },
        // {
        //     title: "Title",
        //     dataIndex: "title",
        //     key: "title"
        // },
        {
            title: "Last Updated",
            dataIndex: "lastUpdated",
            key: "lastUpdated"
        }
    ]

    const fetchProjects = async () => {
        await fetch(getEndpoint())
            .then(async (response) => await response.json())
            .then((data: ApiResponse) => {
                // console.log('data', data)
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
        <div className={styles.container}>
            <h1 className={styles.title}>Projects</h1>
            <p> Total Projects: {projectsData.totalCount} </p>
            <Table
                className={styles.table}
                loading={isLoading}
                showHeader
                columns={columns}
                dataSource={projectsData.projects}
                pagination={{
                    defaultCurrent: 1,
                    // current
                    total: projectsData.totalCount,
                    pageSize: 50,
                    showQuickJumper: true,
                    showTotal: (total: number) => `${total} items`
                }}
                bordered
                size="small"
                scroll={{y: 300 }}
            />
        </div>
    )
}