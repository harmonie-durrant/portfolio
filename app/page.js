import Hero from "@/components/Hero";
import Head from 'next/head'

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
      <Head>
        <title>Harmonie Durrant</title>
        <meta name="description" content="Harmonie Durrant - Software Engineer and web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title={title} description={description} />
    </>
  );
}
