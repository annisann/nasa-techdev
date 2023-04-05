import { API_KEY } from "./consts"

export function getEndpoint(projectId?: number) {
    const idParam: string = projectId? `/${projectId}` : ""
    return `https://api.nasa.gov/techport/api/projects${idParam}?api_key=${API_KEY}`
}