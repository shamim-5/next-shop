import { getProduct, getProducts } from "@/lib/products";

const { default: Head } = require("next/head");

export async function getStaticPaths() {
  const products = await getProducts();

  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const product = await getProduct(id);

  return {
    props: { product },
   //  revalidate: 30, //seconds
  };
}

function ProductPage({ product }) {
  console.log("[ProductPage] render:", product);
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </main>
    </>
  );
}

export default ProductPage;
