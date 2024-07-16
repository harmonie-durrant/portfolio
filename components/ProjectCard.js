import Image from "next/image";

export default function ProjectCard({ project_data, img}) {
    if (img === undefined) {
        img = true
    }
    return (
        <div class="card bordered shadow-lg">
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
            <div class="card-body">
                <h2 class="card-title">{project_data.title}</h2>
                <p class="text-left">
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
