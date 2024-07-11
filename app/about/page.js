import Hero from "@/components/Hero";
import { timeine_data } from "@/constants/timeine_data";

export const metadata = {
  title: "Harmonie Durrant - About",
  description: "Harmonie Durrant is a talented young software developer with a focus on web development and game development. Born in Ipswich, England, she moved to France at the age of 13, which is where she developed a strong interest in technology and programming. Currently, she is studying at 42, a well-known computer science school in France, and has been involved in numerous projects both in and out of her academic pursuits.",
  category: 'technology',
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
          {timeine_data.map((event, i) => {
            if (i%2 == 0)
            {
              return (
                <li key={i}>
                  {i == 0 ? <></> : <hr/>}
                  <div class="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                  </div>
                  <div class="timeline-start md:text-end mb-10">
                    <time class="font-mono italic">{event.date}</time>
                    <div class="text-lg font-black">{event.title}</div>
                    {event.description}
                  {
                    (event.skills) ? (
                        <>
                          <div class="text-lg font-black">Tools used:</div>
                          {
                            event.skills.map((skill, i) => (
                                <div key={(i+1)*2500} class="badge badge-primary badge-outline mr-2">{skill}</div>
                            ))
                          }
                        </>
                      ) : (<></>)
                  }
                  </div>
                  {i == timeine_data.length - 1 ? <></> : <hr/>}
                </li>
              )
            }
            return (
              <li key={i}>
                <hr/>
                <div class="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                </div>
                <div class="timeline-end mb-10">
                  <time class="font-mono italic">{event.date}</time>
                  <div class="text-lg font-black">{event.title}</div>
                  {event.description}
                  {
                    (event.skills) ? (
                        <>
                          <div class="text-lg font-black">Tools used:</div>
                          {
                            event.skills.map((skill, i) => (
                                <div key={(i+1)*2500} class="badge badge-primary badge-outline mr-2">{skill}</div>
                            ))
                          }
                        </>
                      ) : (<></>)
                  }
                </div>
                {i == timeine_data.length - 1 ? <></> : <hr/>}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
}
