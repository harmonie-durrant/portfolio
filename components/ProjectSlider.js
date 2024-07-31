import ProjectCard from "./ProjectCard";

export default function ProjectSlider({ project_data, number }) {
    if (number == -1)
        number = project_data.length;
    return (
        <div className="carousel carousel-center bg- rounded-box max-w-[1500px] w-[95%] space-x-4 p-4">
            {
                project_data.slice(0, number).map((project, k) => (
                    <div key={k} className="carousel-item max-w-md rounded-box bg-base-100">
                        <ProjectCard project_data={project} img={false} />
                    </div>
                ))
            }
            
            <div className="carousel-item max-w-md rounded-box bg-base-100">
                <ProjectCard project_data={{
                    title: "More Projects",
                    description: "Check out more of my projects!",
                    buttons: [
                        {
                            name: "More Projects",
                            link: "/projects"
                        }
                    ]
                }} img={false} />
            </div>
        </div>
    )
}