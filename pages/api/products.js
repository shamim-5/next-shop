const { getProducts } = require("@/lib/products");

async function handler(req, res) {
  console.log("[/api/products] handler");
  const products = await getProducts();
  res.status(200).json(products);
}

export default handler;
