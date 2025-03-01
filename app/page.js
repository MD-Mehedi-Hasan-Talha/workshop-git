import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export default async function Home() {
  // fetch product data
  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
  const response = await fetch(`${baseUrl}/products`);
  const { products } = await response.json();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Product List
          </h2>
          <div className="flex gap-6 items-center justify-center">
            <div>
              <input
                type="text"
                placeholder="Search product"
                className="outline-teal-500 border-none px-3 py-2 text-base text-black ring-1 rounded-sm"
              />
            </div>
            <div className="relative">
              <span className="text-black text-base cursor-pointer">
                Filter
                <IoIosArrowDown className="inline-block ml-2 font-semibold text-base text-black" />
              </span>
              <div className="absolute top-10 z-10 right-0 bg-red-500 rounded-md w-[200px] p-5">
                <ul>
                  <li>Mobile</li>
                  <li>Mobile</li>
                  <li>Mobile</li>
                  <li>Mobile</li>
                  <li>Mobile</li>
                  <li>Mobile</li>
                  <li>Mobile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          id="product-container"
          className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          {products &&
            products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-auto lg:h-80">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="object-cover object-center"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-900">
                      <Link href={`/products/${product.id}`}>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.description}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
