import Page from "@/components/Page";
import ProductCard from "@/components/ProductCard";
import Title from "@/components/Title";
import { getProducts } from "@/lib/products";
import Head from "next/head";

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
    <Page title="Indoor Plants">
      <ul className="grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </Page>
  );
}

export default HomePage;
