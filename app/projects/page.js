import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants/projects";

export const metadata = {
  title: "Harmonie Durrant - Projects",
  description: "Harmonie Durrant is a versatile developer whose projects span across game development, backend API design, and interactive web applications. Her work often involves creating engaging experiences, whether by designing intricate gameplay mechanics or developing robust web interfaces. Each project reflects her ability to blend technical skill with creative problem-solving.",
  category: 'technology',
}

export default function ProjectsPage() {

  return (
    <>
      <Hero
        title="Projects"
        description="Scroll to see a list of all my projects, personal and professional."
        scroll_id="#projects"
      />
      <div class="flex align-middle items-center justify-center">
        <div id="projects" class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-[80VW] md:w-auto max-w-[1500px]">
          {
            projects.map((project) => (
              <ProjectCard key={project.title} project_data={project} />
            ))
          }
        </div>
      </div>
    </>
  );
}
