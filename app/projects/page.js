import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants/projects";
import Head from 'next/head'

export default function ProjectsPage() {

  return (
    <>
      <Head>
        <title>Harmonie Durrant - Projects</title>
        <meta name="description" content="Harmonie Durrant - Software Engineer and web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title="Projects"
        description="Scroll to see a list of all my projects, personal and professional."
        scroll_id="#projects"
      />
      <div id="projects" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-[1500px]">
        {
          projects.map((project) => (
            <ProjectCard key={project.title} project_data={project} />
          ))
        }
      </div>
    </>
  );
}
