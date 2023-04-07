import dotenv from "dotenv"

dotenv.config()

export function getEndpoint(projectId?: number) {
    const idParam: string = projectId? `/${projectId}` : ""
    return `https://api.nasa.gov/techport/api/projects${idParam}?api_key=${process.env.API_KEY}`
}