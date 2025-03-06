import ProductList from "./components/ProductList";

export default async function Home() {
  // fetch product data
  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
  const response = await fetch(`${baseUrl}/products`);
  const { products } = await response.json();

  return <ProductList products={products} />;
}
