import Head from "next/head";
import Title from "./Title";

function Page({ title, className, children }) {
  return (
    <>
      <Head>
        <title>{`${title} - Next Shop`} </title>
      </Head>
      <main className={className}>
        <Title>{title} </Title>
        {children}
      </main>
    </>
  );
}

export default Page;
