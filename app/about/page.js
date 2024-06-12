import Hero from "@/components/Hero";

export const metadata = {
  title: "Harmonie Durrant - About",
  description: "Harmonie Durrant - Software Engineer and web developer",
}

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Me"
        description="Scroll to see more about my personal and professional life!"
        scroll_id="#about"
      />
      <div id="about" class="">
        <h2 class="text-3xl font-bold text-center mt-10 mb-4">About Me</h2>
        <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div class="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
            </div>
            <div class="timeline-start md:text-end mb-10">
              <time class="font-mono italic">2003</time>
              <div class="text-lg font-black">I Was Born</div>
              The reason I am here today, I was boon in in Ipswich, Suffolk, England.
            </div>
            <hr/>
          </li>
          <li>
            <hr />
            <div class="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
            </div>
            <div class="timeline-end mb-10">
              <time class="font-mono italic">September 2017</time>
              <div class="text-lg font-black">Moved To France</div>
              I moved to France in 2017 with my family when I had just turned 14. I have Since gotten my Bacalaureat and am now studying Computer Science at 42 school.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
            </div>
            <div class="timeline-start md:text-end mb-10">
              <time class="font-mono italic">2022</time>
              <div class="text-lg font-black">Epitech - Toulouse</div>
              In 2022, I obtained my Bacalaureat and moved to Toulouse to study at Epitech. Their curriculum is project-based and I learned a lot about programming and software development.
              <br />
              <div class="text-lg font-black">Tools used:</div>
              {/* Badges for learned programming languages in DaisyUI */}
              <div class="badge badge-primary badge-outline mr-2">Unix</div>
              <div class="badge badge-primary badge-outline mr-2">C</div>
              <div class="badge badge-primary badge-outline mr-2">Python</div>
              <div class="badge badge-primary badge-outline mr-2">Git & GitHub</div>
              <div class="badge badge-primary badge-outline mr-2">Docker</div>
              <div class="badge badge-primary badge-outline mr-2">GitHub Actions</div>
              <div class="badge badge-primary badge-outline mr-2">VirtualBox (VM)</div>
              <div class="badge badge-primary badge-outline">Unity (C#)</div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
            </div>
            <div class="timeline-end mb-10">
              <time class="font-mono italic">2023</time>
              <div class="text-lg font-black">42 Perpignan</div>
              In 2023, I moved to Perpignan to study at 42 school. I am currently in my first year of the Computer Science program.
              <div class="text-lg font-black">Tools used:</div>
              {/* Badges for learned programming languages in DaisyUI */}
              <div class="badge badge-primary badge-outline mr-2">Unix</div>
              <div class="badge badge-primary badge-outline mr-2">C</div>
              <div class="badge badge-primary badge-outline mr-2">C++</div>
              <div class="badge badge-primary badge-outline mr-2">VirtualBox (VM)</div>
              <div class="badge badge-primary badge-outline mr-2">Git & GitHub</div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
