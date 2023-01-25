import Title from "@/components/Title";
import { ApiError } from "@/lib/api";
import { getProduct, getProducts } from "@/lib/products";

const { default: Head } = require("next/head");

export async function getStaticPaths() {
  const products = await getProducts();

  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { id } }) {
  try {
    const product = await getProduct(id);
    return {
      props: { product },
      revalidate: parseInt(process.env.REVALIDATE_SECONDS), //seconds
    };
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) {
      return { notFound: true };
    }
    throw err;
  }
}

function ProductPage({ product }) {
  console.log("[ProductPage] render:", product);
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>{product.title}</Title>
        <p>{product.description}</p>
      </main>
    </>
  );
}

export default ProductPage;
