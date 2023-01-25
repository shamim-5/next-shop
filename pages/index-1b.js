// Option 1b: fetch products on the server side (in getStaticProps)
// but with Incremental Static Regeneration (in getStaticProps)
import { getProducts } from "@/lib/products";
import Head from "next/head";

export async function getStaticProps() {
  console.log("[Homepage] getStaticProps()]");
  const products = await getProducts();

  return {
    props: {
      products,
    },
    revalidate: 30, //seconds
  };
}

function HomePage({ products }) {
  console.log("[HomePage] render:", products);

  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <h1>Next Shop</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
