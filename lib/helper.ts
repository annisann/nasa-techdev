const apiKey = process.env.API_KEY

export function getEndpoint(projectId?: number) {
    const idParam: string = projectId? `/${projectId}` : ""
    const url: string =  `https://api.nasa.gov/techport/api/projects${idParam}?api_key=${apiKey}`
    console.log(url)
    return url
}