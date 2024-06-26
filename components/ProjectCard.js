export default function ProjectCard({ project_data }) {
    return (
        <div class="card bordered shadow-lg">
            <figure>
                <img src={project_data.image} className="h-64 object-fill aspect-video" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{project_data.title}</h2>
                <p>
                    {project_data.description}
                </p>
                <div class="card-actions">
                    {
                        project_data.buttons.map((button, i) => (
                            <a href={button.link} key={i}>
                                <button class="btn btn-primary">
                                    {button.name}
                                </button>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
