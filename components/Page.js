import Head from "next/head";
import Title from "./Title";

function Page({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} - Next Shop`} </title>
      </Head>
      <main>
        <Title>{title}</Title>
        {children}
      </main>
    </>
  );
}

export default Page;
