import Hero from "@/components/Hero";
import ProjectSlider from "@/components/ProjectSlider";
import { projects } from "@/constants/projects";

export const metadata = {
  title: "Harmonie Durrant",
  description: "Harmonie Durrant is a talented young software developer with a focus on web development and game development. Born in Ipswich, England, she moved to France at the age of 13, which is where she developed a strong interest in technology and programming. Currently, she is studying at 42, a well-known computer science school in France, and has been involved in numerous projects both in and out of her academic pursuits.",
  category: 'technology',
}

export default function Home() {

  const title = "Harmonie Durrant";

  const description = (
      <>
        A student at 42Perpignan
        <br />
        Software Engineer and web developer
      </>
    );

  return (
    <>
      <Hero
        title={title}
        description={description}
        scroll_id="#page"
      />
      <div id="page" class="flex flex-col justify-center items-center text-center">
        <h2 class="text-3xl font-bold text-center mt-10 mb-4">Highlighted Projects</h2>
        <ProjectSlider project_data={projects} number={3} />
      </div>
    </>
  );
}
