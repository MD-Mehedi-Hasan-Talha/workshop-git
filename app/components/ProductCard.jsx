import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="group relative">
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
              <span aria-hidden="true" className="absolute inset-0"></span>
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
