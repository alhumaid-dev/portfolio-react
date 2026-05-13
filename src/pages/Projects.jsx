import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <section>

            <h1>My Projects</h1>

            <div>
                <h2>HTML Learning</h2>
                <Link to="/projects/html-learning">View Details</Link>
            </div>

        </section>
    )
}