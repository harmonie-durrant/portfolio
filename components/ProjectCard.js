import Image from "next/image";

export default function ProjectCard({ project_data, img}) {
    if (img === undefined) {
        img = true
    }
    return (
        <div className="card bordered shadow-lg">
            {
                img &&
                <figure>
                    <Image
                        src={project_data.image}
                        width={0} height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </figure>
            }
            <div className="card-body">
                <h2 className="card-title">{project_data.title}</h2>
                <p className="text-left">
                    {project_data.description}
                </p>
                {
                    project_data.tech_stack &&
                    <div className="flex flex-wrap gap-2">
                        {
                            project_data.tech_stack.map((tech, i) => (
                                <span key={i} className="badge badge-secondary">
                                    {tech}
                                </span>
                            ))
                        }
                    </div>
                }
                <div className="card-actions">
                    {
                        project_data.buttons.map((button, i) => (
                            <a href={button.link} key={i}>
                                <button className="btn btn-primary">
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
