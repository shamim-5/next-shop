import ProductCard from "@/components/ProductCard";
import Title from "@/components/Title";
import { getProducts } from "@/lib/products";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  console.log("[Homepage] getStaticProps()]");
  const products = await getProducts();

  return {
    props: { products },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS), //seconds
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
        <Title>Next Shop</Title>
        <ul className="grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
