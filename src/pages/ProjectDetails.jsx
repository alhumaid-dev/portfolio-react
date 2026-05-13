import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetails() {
    const { id } = useParams()
    
    const project = projects[id]

    return (
        <section>
                <h1>{project?.title}</h1>
                <p>{project?.description}</p>
                <p>Tags: {project?.tags.join(", ")}</p>       
        </section>
    )
}