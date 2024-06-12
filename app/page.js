import Hero from "@/components/Hero";

export const metadata = {
  title: "Harmonie Durrant",
  description: "Harmonie Durrant - Software Engineer and web developer",
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
      <Hero title={title} description={description} />
    </>
  );
}
