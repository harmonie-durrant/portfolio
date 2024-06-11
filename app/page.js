import Hero from "@/components/Hero";

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
      <Hero title={title} description={description} />
    </>
  );
}
